import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ScryfallCard } from 'node_modules/scryfall/build/ScryfallCard';
import { BehaviorSubject } from 'rxjs';
import { ScryfallColor } from 'scryfall/build/ScryfallColor';
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
            this.cardsThatMakeTokens = this.cardsThatMakeTokens.concat( response.data );
            this.loadingSource.next( this.loadingSource.value + 1 );

          }
        }, ( error: HttpErrorResponse ) => {
          console.log( error );
        } ) );
  }

  dedupeTokens() {
    const uniqueTokens = [];

    this.tokens.forEach( ( token ) => {
      let isDupe = false;
      for ( var i = 0; i < uniqueTokens.length; i++ ) {
        if ( token.Name === uniqueTokens[ i ].Name &&
          token.Power === uniqueTokens[ i ].Power &&
          token.Toughness === uniqueTokens[ i ].Toughness &&
          token.Colors.toString() === uniqueTokens[ i ].Colors.toString() &&
          token.Text === uniqueTokens[ i ].Text &&
          token.TypeLine === uniqueTokens[ i ].TypeLine
        ) {
          isDupe = true;
          break;
        }
      }
      if ( !isDupe )
        uniqueTokens.push( token );

    } )

    this.tokens = uniqueTokens
  }

  processData() {

    this.tokens.forEach( ( token: Token ) => {
      let tokenSearchTextArray: string[] = [];
      switch ( token.Name ) {
        case "Food":
          tokenSearchTextArray.push["food token"];
          break;
        case "Treasure":
          tokenSearchTextArray.push("treasure token");
          break;
        default:
          tokenSearchTextArray = this.createTokenSearchString( token );
          break;
      }
      this.cardsThatMakeTokens.forEach((card: ScryfallCard)=>{
        card.oracle_text = card.oracle_text ? card.oracle_text.toLowerCase() : card.oracle_text;
        let hasAllSearchTerms: boolean = true;
        for ( var i = 0; i < tokenSearchTextArray.length; i++ ) {
          if ( card.oracle_text && !card.oracle_text.includes(tokenSearchTextArray[i].toLowerCase()) ) {
            hasAllSearchTerms = false;
            break;
          }
        }
        if(hasAllSearchTerms){
          console.log(tokenSearchTextArray)
          console.log(card.name)
          token.CreatedBy.push(card);
        }
        
      });


console.log(token.CreatedBy)
    } );
  }

  createTokenSearchString( token: Token ): string[] {
    let tokenSearchTextArray = ["create"];
    if ( token.Power && token.Toughness && token.Power != "*" && token.Toughness != "*" ) {
      tokenSearchTextArray.push(token.Power + "/" + token.Toughness + " ");
    }
    else{
      //Stuff with varialble power needs to be checked
    }

    if ( !token.Colors ) {
      tokenSearchTextArray.push("colorless");
    }
    else if(token.Colors.length === 5 ){
      tokenSearchTextArray.push("all colors");
    }
    else {
      token.Colors.forEach( ( color: ScryfallColor, i: number ) => {
        switch ( color ) {
          case ScryfallColor.W:
            tokenSearchTextArray.push("white");
            break;
          case ScryfallColor.U:
            tokenSearchTextArray.push("blue");
            break;
          case ScryfallColor.B:
            tokenSearchTextArray.push("black");
            break;
          case ScryfallColor.R:
            tokenSearchTextArray.push("red");
            break;
          case ScryfallColor.G:
            tokenSearchTextArray.push("green");
            break;
        }
      } );
    }

//TYPES: Dragon artifact creature enchantemnt token
const typeLineHalves: string[] = token.TypeLine.split("\—");

const types: string[] = typeLineHalves[0].split(" ");
const subtypes: string = typeLineHalves[1]?.trim();

tokenSearchTextArray.push(subtypes);

types.forEach(type => {
  if(type !== "Token"){
    tokenSearchTextArray.push(type);
  }
  
});

//named?
if(token.Name != subtypes){
  tokenSearchTextArray.push("named " + token.Name)
}
    
//with text

    return tokenSearchTextArray;

  }

}
