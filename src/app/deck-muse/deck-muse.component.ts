import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { forkJoin, Subscription } from 'rxjs';
import { environment } from '../../environments/environment';
import { ScryfallAPIResponse } from '../scryfall-apiresponse';

@Component( {
  selector: 'app-deck-muse',
  templateUrl: './deck-muse.component.html',
  styleUrls: [ './deck-muse.component.css' ]
} )
export class DeckMuseComponent implements OnInit {
  ideas: string[] = [];
  colorsForIdea: string[] = [];
  subscriptions: Subscription[] = [];
  sets = [ 
    'keyword-abilities', 
    'creature-types', 
    'planeswalker-types', 
    'land-types',
    'artifact-types',
    'enchantment-types',
    'spell-types',
    'keyword-actions',
    'ability-words'];

    color = ['W', 'U', 'B', 'R', 'G', 'C'];

    themes: ScryfallAPIResponse[] = [];

  constructor( private readonly $http: HttpClient ) { }

  ngOnInit(): void {
    const observables = [];
    for ( let set of this.sets ) {
      observables.push( this.$http.get( 'https://api.scryfall.com/catalog/' + set ) )
    }

    this.subscriptions.push(
      forkJoin( observables ).subscribe((results: ScryfallAPIResponse[])=>{
        this.themes = results;
      })

    )
  }

  generateDeckIdea(){

    this.colorsForIdea = [];
    this.ideas = [];

    this.color.forEach((color) => {
      const isColor = Math.floor(Math.random() * 2);
      if(isColor === 1){
        this.colorsForIdea.push(color);
      }
    });

    const ideaCategory1 = Math.floor(Math.random() * 9);
    const ideaCategory2 = Math.floor(Math.random() * 9);

    const numberOfChoices1 = (this.themes[ideaCategory1].data as string[]).length
    const numberOfChoices2 = (this.themes[ideaCategory2].data as string[]).length

    const randomChoice1 = Math.floor(Math.random() * numberOfChoices1);
    const randomChoice2 = Math.floor(Math.random() * numberOfChoices2);
    

    this.ideas.push(this.themes[ideaCategory1].data[randomChoice1] as string)
    this.ideas.push(this.themes[ideaCategory2].data[randomChoice2] as string)

  }

}
