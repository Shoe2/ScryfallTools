import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ScryfallCard } from 'scryfall-ts/build/ScryfallCard';
import { ScryfallAPIResponse } from '../scryfall-apiresponse';

@Component( {
  selector: 'app-janklord-commander-generator',
  templateUrl: './janklord-commander-generator.component.html',
  styleUrls: [ './janklord-commander-generator.component.css' ]
} )
export class JanklordCommanderGeneratorComponent implements OnInit {
  selectedCommander?: ScryfallCard;
  partner?: ScryfallCard;
  constructor( private readonly $http: HttpClient ) { }

  ngOnInit(): void {
  }

  newCommander() {
    const url = 'https://api.scryfall.com/cards/random?q=%20is%3Acommander+usd%3C%3D0.79+format%3Acommander';
    this.$http.get( url ).subscribe( ( response: ScryfallCard ) => {
      this.selectedCommander = response;

      if ( this.selectedCommander.keywords && this.selectedCommander.keywords.length && this.selectedCommander.keywords.includes( 'Partner' ) ) {
        const url = 'https://api.scryfall.com/cards/random?q=%20is%3Acommander+usd%3C%3D0.79+format%3Acommander+keyword%3Apartner+-o%3A"partner+with"';
        this.$http.get( url ).subscribe( ( response: ScryfallCard ) => {
          this.partner = response;

        } );
      }

      // if ( this.selectedCommander.keywords.includes( 'Friends Forever' ) ) {
      //   const url = 'https://api.scryfall.com/cards/random?q=%20is%3Acommander+usd%3C%3D0.79+format%3Acommander+keyword%3A';
      //   this.$http.get( url ).subscribe( ( response: ScryfallAPIResponse ) => {
      //     this.partner = response.data as ScryfallCard;

      //   } );
      // }

    } )
  }

}
