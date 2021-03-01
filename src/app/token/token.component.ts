import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ScryfallCard } from 'node_modules/scryfall/build/ScryfallCard';
import { BehaviorSubject } from 'rxjs';
import { ScryfallAPIResponse } from '../scryfall-apiresponse';
import { Token } from '../token';

@Component( {
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: [ './token.component.css' ]
} )
export class TokenComponent implements OnInit {

  subscriptions = [];
  tokens: Token[] = [];
  cardsThatMakeTokens: ScryfallCard[] = [];
  loadingSource = new BehaviorSubject<number>( 0 );
  loading = this.loadingSource.asObservable();
  constructor( private $http: HttpClient ) { }

  ngOnInit(): void {
    this.getNextPageOfCards( "https://api.scryfall.com/cards/search?q=t%3Atoken+-set%3Atbth+-set%3Atdag+-set%3Atfth+-is%3Apromo+-%28set%3Atust+is%3Adfc%29&unique=cards", true, "token" );
    this.getNextPageOfCards( "https://api.scryfall.com/cards/search?q=o%3Acreate+include%3Aextras+-t%3Aemblem+-border%3Agold+&unique=cards", true, "card" );
    this.loading.subscribe( () => {
      if ( this.loadingSource.value > 0 && this.subscriptions.length === this.loadingSource.value ) {
        this.subscriptions.forEach( subscription => subscription.unsubscribe() );
        this.dedupeTokens();
        this.processData();
      }
    } )
  }
  ngOnDestrory() {
    this.subscriptions.forEach( subscription => subscription.unsubscribe() );
  }

  getNextPageOfCards( url: string, clearOldData = false, tokenOrCard: string ) {
    this.subscriptions.push( this.$http.get( url )
      .subscribe(
        ( response: ScryfallAPIResponse ) => {
          if ( response.has_more ) {
            this.getNextPageOfCards( response.next_page, false, tokenOrCard );
          }
          if ( tokenOrCard === "token" ) {
            if ( clearOldData ) {
              this.tokens = [];
            }

            response.data.forEach( ( token: ScryfallCard, index: number ) => {
              if ( token.card_faces && token.card_faces.length > 1 ) {
                token.card_faces.forEach( ( face ) => {
                  if ( face.name != "Horror" ) { //Hack to remove BU horror token face tht is falsly colorless in scryfall data
                    const tokenData = new Token(
                      face.power,
                      face.toughness,
                      face.colors,
                      face.name,
                      face.type_line,
                      face.oracle_text,
                      face.image_uris
                    )

                      this.tokens.push( tokenData );
                  }
                } );

              }
              else {
                this.tokens.push( new Token( token.power, token.toughness, token.colors, token.name, token.type_line, token.oracle_text, token.image_uris ) );
              }


              if ( index === response.data.length - 1 ) {
                this.loadingSource.next( this.loadingSource.value + 1 );
                this.tokens.sort( ( a, b ) => {
                  if ( a.Name < b.Name ) {
                    return -1;
                  }
                  if ( a.Name > b.Name ) {
                    return 1;
                  }
                  return 0;
                } );
              }
            } );

          }
          else if ( tokenOrCard === "card" ) {
            if ( clearOldData ) {
              this.cardsThatMakeTokens = [];
            }
            this.cardsThatMakeTokens.concat( response.data );
            this.loadingSource.next( this.loadingSource.value + 1 );

          }
        }, ( error: HttpErrorResponse ) => {
          console.log( error );
        } ) );
  }

  dedupeTokens(){
    console.log(this.tokens)


    //const uniqueTokens =  token.Name === o.Name &&
    //   token.Power === o.Power &&
    //   token.Toughness === o.Toughness &&
    //   token.Colors === o.Colors &&
    //   token.Text === o.Text &&
    //   token.TypeLine === o.TypeLine

      

//console.log(uniqueTokens)
  }

  processData() {
    this.tokens.forEach( ( token: Token ) => {
      const tokenSearchText = this.createTokenSearchString( token );

      //token.CreatedBy = this.cardsThatMakeTokens.find(card => {card.oracle_text.includes(tokenSearchText)});
      //token.Editions = 

    } );
  }

  createTokenSearchString( token: Token ): string {
    let tokenSearchText = token.Power + "/" + token.Toughness + " ";
    if ( token.Colors ) {
      tokenSearchText += "colorless"
    }
    else {
      token.Colors.forEach( color => {
        console.log( color.toString() );
      } );
    }

    return tokenSearchText;

  }

}
