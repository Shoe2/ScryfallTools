import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ScryfallCard } from 'node_modules/scryfall/build/ScryfallCard';
import { BehaviorSubject } from 'rxjs';
import { ScryfallCardFace } from 'scryfall/build/ScryfallCardFace';
import { ScryfallColor } from 'scryfall/build/ScryfallColor';
import { environment } from '../../environments/environment';
import { ScryfallAPIResponse } from '../scryfall-apiresponse';
import { Token } from '../token';

/**
 * ISUES *
 * - double faced cards that make a token on the back (Nissa, Vastwood Seer)
 * - cards that make tokens that almost match keywords (flying angel warrior and flying plus vigilance angel warrior...etc)
 * - cards that make tokens that do not exsist
 */

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
  isLoading = true;
  constructor( private $http: HttpClient ) { }

  ngOnInit(): void {
    this.getNextPageOfCards( environment.prefix + "q=t%3Atoken+-set%3Atbth+-set%3Atdag+-set%3Atfth+-is%3Apromo+-%28set%3Atust+is%3Adfc%29&unique=cards", true, "token" );
    this.getNextPageOfCards( environment.prefix + "q=fo%3Acreate+include%3Aextras+-t%3Aemblem+-border%3Agold+&unique=cards", true, "card" );
    this.loading.subscribe( () => {
      if ( this.loadingSource.value > 0 && this.subscriptions.length === this.loadingSource.value ) {
        console.log('data loaded');
        this.subscriptions.forEach( subscription => subscription.unsubscribe() );
        this.dedupeTokens();
        this.associateCardsWithTokens();
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

            ( <ScryfallCard[]>response.data ).forEach( ( token: ScryfallCard, index: number ) => {
              if ( token.card_faces && token.card_faces.length > 1 ) {
                token.card_faces.forEach( ( face: ScryfallCardFace ) => {
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
            this.cardsThatMakeTokens = this.cardsThatMakeTokens.concat( <ScryfallCard[]>response.data );
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

  associateCardsWithTokens() {
    this.isLoading = true;
    this.cardsThatMakeTokens.forEach( ( card: ScryfallCard, index: number ) => {
      if ( card.oracle_text ) {
        this.tokensThisCardMakes(card);

        if ( index === this.cardsThatMakeTokens.length - 1 ) {
          this.isLoading = false;
        }
      }
    } );

  }

  tokensThisCardMakes( card: ScryfallCard ) {
    if(card.all_parts && card.all_parts){
      card.all_parts.forEach((relatedCard: ScryfallCardFace) => {
        if(relatedCard.type_line.includes('Token')){
          let tempTokens = this.tokens.filter(tokenData => tokenData.Name === relatedCard.name && tokenData.TypeLine === tokenData.TypeLine);
          if(tempTokens.length === 1){
            tempTokens[0].CreatedBy.push(card);
          }
          else{
            this.findTokensMadeByCardOracleText(card);
          }
        }
      });
    } else {
      this.findTokensMadeByCardOracleText(card);
    }
  }

  findTokensMadeByCardOracleText(card: ScryfallCard){
    let createsNothing = true;
    if(card.oracle_text.includes('Food')){
      createsNothing = false;
      this.tokens.find(token => token.Name === 'Food').CreatedBy.push(card);
    }
    if(card.oracle_text.includes('Treasure')){
      createsNothing = false;
      this.tokens.find(token => token.Name === 'Treasure').CreatedBy.push(card);
    }
    if(card.oracle_text.includes('Clue')){
      createsNothing = false;
      this.tokens.find(token => token.Name === 'Clue').CreatedBy.push(card);
    }



    let tempToken = this.tokens.filter(token => 
      card.oracle_text.includes(token.Name)
      && this.processTokenText( card.oracle_text, token.Text )
      && this.processPowerAndToughness( card.oracle_text, token )
      && this.processTypeLine(token.TypeLine, card.oracle_text)
      && this.compareColors(card.oracle_text, token.Colors)
      );    
      
      if(card.name === "Angelic Favor"){
        console.log(tempToken)
      }

      if(card.name === "Angelic Ascension"){
        console.log(tempToken)
      }

    if(tempToken && tempToken.length){
      createsNothing = false;
      for (let token of tempToken){
        token.CreatedBy.push(card);
      }
    }

    else{
      if(createsNothing)
      // CREATE TOKEN or IGNORE ME
      console.log(card);
    }    
    
    tempToken = null;

  }

  processTypeLine( typeLine: string, cardOracleText: string ): boolean {
    //WORKING?
    let cardDoesMakeTokenWithTypes = true;
    let types = typeLine.split( ' ' );
    types = types.filter( text => text != '—' && text != 'Token' );

    for ( let type of types ) {
      if ( !cardOracleText.toLocaleLowerCase().includes( type.toLocaleLowerCase() ) ) {
        cardDoesMakeTokenWithTypes = false;
        return cardDoesMakeTokenWithTypes;
      }
    };
    return cardDoesMakeTokenWithTypes;
  }

  processPowerAndToughness( cardOracleText: string, token: Token ) {
    if ( token.Power === '*' || token.Toughness === '*' ) {
      //NOT WORKING COMPLETELY
      let powerMatches = false;
      let toughnessMatches = false;
      if (
        ( token.Power === '*' && !cardOracleText.toLocaleLowerCase().includes( 'x\/' ) )
        || ( cardOracleText.toLocaleLowerCase().includes( 'equal' ) && token.Power === '*' && cardOracleText.toLocaleLowerCase().includes( 'power' ) )
        || cardOracleText.includes( token.Power + '\/' )
      ) {
        toughnessMatches = true;
      }
      if (
        ( token.Toughness === '*' && !cardOracleText.toLocaleLowerCase().includes( '\/x' ) )
        || ( cardOracleText.toLocaleLowerCase().includes( 'equal' ) && token.Toughness === '*' && cardOracleText.toLocaleLowerCase().includes( 'toughness' ) )
        || cardOracleText.includes( '\/' + token.Toughness )
      ) {
        powerMatches = true;
      }

      return powerMatches && toughnessMatches;
    } else {
      //WORKS
      return cardOracleText.includes( token.Power + "\/" + token.Toughness );
    }
  }

  processTokenText( cardText: string, tokenText: string ) {
    if( tokenText.length > 0) {
      let linesOfText = tokenText.split('\n');

      for (let line of linesOfText){
        let lineSegments = line.split(',');
        for (let segment of lineSegments){
          if (!cardText.toLocaleLowerCase().includes(segment.toLocaleLowerCase())){
            return false;
          }
        }
      }

      return true;

    }
    else{
      return true;
    }
  }

  compareColors(cardText: string, tokenColors: ScryfallColor[]){
    if(tokenColors.length === 5 && cardText.toLocaleLowerCase().includes("all colors")){
      return true;
    }
    else if( tokenColors.length === 0 && cardText.toLocaleLowerCase().includes("colorless")){
      return true;
    } else {
      if(
        (tokenColors.includes(ScryfallColor.W) && !cardText.toLocaleLowerCase().includes("white"))
        || (!tokenColors.includes(ScryfallColor.W) && cardText.toLocaleLowerCase().includes("white"))
      ){
        return false;
      }
      if(
        (tokenColors.includes(ScryfallColor.U) && !cardText.toLocaleLowerCase().includes("blue"))
        || (!tokenColors.includes(ScryfallColor.U) && cardText.toLocaleLowerCase().includes("blue"))
        ){
        return false;
      }
      if(
        tokenColors.includes(ScryfallColor.B) && !cardText.toLocaleLowerCase().includes("black")
        || (!tokenColors.includes(ScryfallColor.B) && cardText.toLocaleLowerCase().includes("black"))
        ){
        return false;
      }
      if(
        tokenColors.includes(ScryfallColor.R) && !cardText.toLocaleLowerCase().includes(" red")
        || (!tokenColors.includes(ScryfallColor.R) && cardText.toLocaleLowerCase().includes(" red"))
        ){
        return false;
      }
      if(
        tokenColors.includes(ScryfallColor.G) && !cardText.toLocaleLowerCase().includes("green")
        || (!tokenColors.includes(ScryfallColor.G) && cardText.toLocaleLowerCase().includes("green"))
        ){
        return false;
      }

      return true;
    }

  }

}
