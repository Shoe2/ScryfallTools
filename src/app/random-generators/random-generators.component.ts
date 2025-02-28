import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { forkJoin, Subscription } from 'rxjs';
import { environment } from '../../environments/environment';
import { ScryfallAPIResponse } from '../scryfall-apiresponse';

@Component( {
  selector: 'app-random-generators',
  templateUrl: './random-generators.component.html',
  styleUrls: [ './random-generators.component.css' ]
} )
export class RandomGeneratorsComponent {
    color = ['W', 'U', 'B', 'R', 'G'];
    colorsForIdea = [];
selectedKeyword?: string;
selectedCreatureType?:string;
selectedKeywordAction?: string;
selectedAbilityWord?:string;
selectedColorCombination?: string;


  constructor( private readonly $http: HttpClient ) { }


  randomCreatureType( ){
    this.$http.get( 'https://api.scryfall.com/catalog/creature-types' ).subscribe((results: ScryfallAPIResponse)=>{
      const randomChoice1 = Math.floor(Math.random() * (results.data as string[]).length);
      this.selectedCreatureType = results.data[randomChoice1] as string;
    })
  }

  randomKeyword( ){
    this.$http.get( 'https://api.scryfall.com/catalog/keyword-abilities' ).subscribe((results: ScryfallAPIResponse)=>{
      const randomChoice1 = Math.floor(Math.random() * (results.data as string[]).length);
      this.selectedKeyword = results.data[randomChoice1] as string;
    })
  }


  generateRandomColorIdentity( ){

    this.colorsForIdea = [];
    this.color.forEach((color,index) => {
      const isColor = Math.floor(Math.random() * 2);
      if(isColor === 1){
        this.colorsForIdea.push(color);
      }
      if(index===4 && this.colorsForIdea.length < 1) {
        this.colorsForIdea.push('colorless')
      }
    });
  }

}
