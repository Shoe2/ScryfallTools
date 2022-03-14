import { DatePipe } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ScryfallCard } from 'node_modules/scryfall-ts/build/ScryfallCard';
import { BehaviorSubject } from 'rxjs';
import { ScryfallCardFace } from 'scryfall-ts/build/ScryfallCardFace';
import { ScryfallColor } from 'scryfall-ts/build/ScryfallColor';
import { environment } from '../../environments/environment';
import { ScryfallAPIResponse } from '../scryfall-apiresponse';
import { TokenService } from './services/token.service';
import { Token } from './types/token';
import { problemCards } from './types/problem-cards';

@Component( {
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: [ './token.component.css' ]
} )
export class TokenComponent implements OnInit {

  subscriptions = [];
  tokens: Token[] = [];
  cardsThatMakeTokens: ScryfallCard[] = [];
  orphanedCards: ScryfallCard[] = [];
  loadingSource = new BehaviorSubject<number>( 0 );
  loading = this.loadingSource.asObservable();
  isLoading = true;

  problemCards = problemCards;

  constructor( private $http: HttpClient, private datePipe: DatePipe, private tokenService: TokenService ) { }

  ngOnInit(): void {
    this.getNextPageOfCards( environment.prefix + "/search?q=t%3Atoken+-set%3Atbth+-set%3Atdag+-set%3Atfth+-%28set%3Atust+is%3Adfc%29&unique=cards", true, "token" );
    this.getNextPageOfCards(
      environment.prefix +
      `/search?q=fo%3Acreate+include%3Aextras+-t%3Aemblem+-t%3Atoken+-border%3Agold+date<%3D${ this.makeDateStringForTomorrow() }+&unique=cards`
      , true, "card" );
    this.loading.subscribe( () => {
      if ( this.loadingSource.value > 0 && this.subscriptions.length === this.loadingSource.value ) {
        console.log( 'data loaded' );
        this.subscriptions.forEach( subscription => subscription.unsubscribe() );
        this.dedupeTokens();
        this.associateCardsWithTokens();
      }
    } )
  }

  ngOnDestrory() {
    this.subscriptions.forEach( subscription => subscription.unsubscribe() );
  }

  makeDateStringForTomorrow() {
    const today = new Date()
    const tomorrow = new Date( today )
    tomorrow.setDate( tomorrow.getDate() + 1 )
    return this.datePipe.transform( tomorrow, 'YYYY-MM-dd' );
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

                  if (
                    face.name != "Horror"
                    && !( face.name === "Elemental" && face.illustration_id === "37071500-1a8d-4298-9202-1931cd2bb073" )
                    && !( face.name === 'Mowu' && !face.colors.length )
                    && !( face.name === "Zombie" && !face.colors.length )
                    && !( face.name === "Wolf" && face.colors.includes( ScryfallColor.W ) )
                  ) {
                    //Hack to remove BU horror token and Mowu face that are falsly colorless in scryfall data
                    const tokenData = new Token(
                      face.power,
                      face.toughness,
                      face.name === 'Treasure' ? [] : face.colors,
                      face.name,
                      face.type_line,
                      face.oracle_text ? face.oracle_text.replace( /\s?\(.*\)/g, '' ) : '',
                      face.image_uris
                    )

                    this.tokens.push( tokenData );
                  }
                } );

              }
              else {
                if ( token.name.includes( "Vizier of Many Faces" ) ) {
                  const cardUri = token.all_parts.filter( part => part.component === "combo_piece" )[ 0 ].uri;
                  this.tokenService.getCardByUri( cardUri ).subscribe( ( card: ScryfallCard ) => {

                    this.tokens.filter( tokenInstance => tokenInstance.Name === "Vizier of Many Faces" )[ 0 ].CreatedBy.push( card );
                  } );
                }
                this.tokens.push(
                  new Token(
                    token.power,
                    token.toughness,
                    token.colors,
                    token.name,
                    token.type_line,
                    token.oracle_text,
                    token.image_uris
                  ) );
              }


              if ( index === (response.data as ScryfallCard[]).length - 1 ) {
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
    this.tokens = this.tokenService.dedupeTokens( this.tokens )
  }

  associateCardsWithTokens() {
    this.isLoading = true;
    this.cardsThatMakeTokens.forEach( ( card: ScryfallCard, index: number ) => {
      this.tokensThisCardMakes( card );
      if ( index === this.cardsThatMakeTokens.length - 1 ) {
        const germToken = this.tokens.find( token => token.Name === "Germ" );
        const phyrexianGermToken = this.tokens.find( token => token.Name === "Phyrexian Germ" )
        phyrexianGermToken.CreatedBy = phyrexianGermToken.CreatedBy.concat( germToken.CreatedBy );
        this.tokens = this.tokens.filter( token => token.Name !== "Germ" );

        this.isLoading = false;
      }
    } );
  }

  tokensThisCardMakes( card: ScryfallCard ) {
    if ( this.problemCards.includes( card.name ) ) {
      return;
    }
    if ( card.all_parts && card.all_parts ) {
      card.all_parts.forEach( ( relatedCard ) => {
        if ( relatedCard.component === "token" ) {
          let tempTokens = this.tokens.filter(
            tokenData => tokenData.Name === relatedCard.name
              && tokenData.TypeLine === tokenData.TypeLine
          );
          if ( tempTokens.length === 1 ) {
            if ( !tempTokens[ 0 ].CreatedBy.includes( card ) )
              tempTokens[ 0 ].CreatedBy.push( card );
          }
          else if ( relatedCard.type_line.includes( 'Token' ) && card.name != 'Valkyrie Harbinger' && card.name != 'Rampage of the Valkyries' ) {
            this.tokenService.getCardByUri( relatedCard.uri ).subscribe( ( token: ScryfallCard ) => {
              let tempTokens = this.tokens.filter(
                tokenData => tokenData.Name === token.name
                  && tokenData.TypeLine === token.type_line
                  && tokenData.Text === token.oracle_text.split( ' (' )[ 0 ]
                  && tokenData.Power === token.power
                  && tokenData.Toughness === token.toughness
                  && this.compareColorsByArray( token.colors, tokenData.Colors )
              );

              tempTokens.length === 1 ? tempTokens[ 0 ].CreatedBy.push( card ) : [];
            } );
          }
          else {
            this.findTokensMadeByCardOracleText( card );
          }
        }
      } );
    } else {
      this.findTokensMadeByCardOracleText( card );
    }
  }

  findTokensMadeByCardOracleText( card: ScryfallCard ) {
    let createsNothing = true;
    let allFacesText = '';

    if ( card.card_faces && card.card_faces.length > 1 ) {
      for ( const faces of card.card_faces ) {
        allFacesText += faces.oracle_text;
      }
    } else {
      allFacesText = card.oracle_text;
    }

    if ( allFacesText.includes( 'Blood' ) ) {
      createsNothing = false;
      const bloodToken = this.tokens.find( token => token.Name === 'Blood' )
      if ( !bloodToken.CreatedBy.includes( card ) )
        bloodToken.CreatedBy.push( card );
    }
    if ( allFacesText.includes( 'Food' ) ) {
      createsNothing = false;
      const foodToken = this.tokens.find( token => token.Name === 'Food' )
      if ( !foodToken.CreatedBy.includes( card ) )
        foodToken.CreatedBy.push( card );
    }
    if ( allFacesText.includes( 'Treasure' ) ) {
      createsNothing = false;
      const treasureToken = this.tokens.find( token => token.Name === 'Treasure' );
      if ( !treasureToken.CreatedBy.includes( card ) )
        treasureToken.CreatedBy.push( card );
    }
    if ( allFacesText.includes( 'Gold token' ) ) {
      createsNothing = false;
      const goldToken = this.tokens.find( token => token.Name === 'Gold' );
      if ( !goldToken.CreatedBy.includes( card ) )
        goldToken.CreatedBy.push( card );
    }
    if ( allFacesText.includes( 'Walker token' ) ) {
      createsNothing = false;
      const walkerToken = this.tokens.find( token => token.Name === 'Walker' );
      if ( !walkerToken.CreatedBy.includes( card ) )
        walkerToken.CreatedBy.push( card );
    }
    if ( allFacesText.includes( 'Clue' ) || allFacesText.includes( 'Investigate' ) ) {
      createsNothing = false;
      const clueToken = this.tokens.find( token => token.Name === 'Clue' )
      if ( !clueToken.CreatedBy.includes( card ) )
        clueToken.CreatedBy.push( card );
    }
    if ( allFacesText.toLocaleLowerCase().includes( 'that\'s a copy' )
      || allFacesText.toLocaleLowerCase().includes( 'that are copies' )
      || allFacesText.toLocaleLowerCase().includes( 'create a copy' )
      || allFacesText.toLocaleLowerCase().includes( 'tokens that are copies' )
    ) {
      createsNothing = false;
      const copyToken = this.tokens.find( token => token.Name === 'Copy' );
      if ( !copyToken.CreatedBy.includes( card ) )
        copyToken.CreatedBy.push( card );
    }

    if ( this.problemCards.includes( card.name ) ) {
      this.tokens.filter( token => this.processTokenText( allFacesText, token.Text.replace( /\s?\(.*\)/g, '' ), card.name ) );

    }

    let tempToken = this.tokens.filter( token =>
      allFacesText.includes( token.Name )
      && this.processTokenText( allFacesText, token.Text.replace( /\s?\(.*\)/g, '' ), token.Name )
      && this.processPowerAndToughness( allFacesText, token )
      && this.processTypeLine( token.TypeLine, allFacesText )
      && this.compareColors( allFacesText, token.Colors )
    );

    if ( tempToken && tempToken.length ) {
      createsNothing = false;
      for ( let token of tempToken ) {
        if ( !token.CreatedBy.includes( card ) )
          token.CreatedBy.push( card );
      }
    }

    else if ( createsNothing && !card.type_line.includes( "Card" ) ) {
      // CREATE TOKEN or IGNORE ME
      const cardTextLowerCase = allFacesText.toLocaleLowerCase();
      if (
        !cardTextLowerCase.includes( 'would create' )
        && !( cardTextLowerCase.includes( 'would be created' ) )
      )
        this.orphanedCards.push( card );
    }

    tempToken = null;
  }

  processTypeLine( typeLine: string, cardOracleText: string ): boolean {

    let cardDoesMakeTokenWithTypes = true;
    let types = typeLine.split( ' ' );
    types = types.filter( text => text != '—' && text != 'Token' );

    if ( !typeLine.includes( "Legendary" ) && cardOracleText.toLocaleLowerCase().includes( ", a legendary" ) ) {
      return false;
    }

    let typeReverseSearchString = "";

    let subtypeReverseSearchString = "";

    for ( let type of types ) {
      if ( type === "Legendary" ) {
        //do nothing
      }

      else if ( type === "Snow" ) {
        typeReverseSearchString += " snow";
      }

      else if ( type === "Enchantment" ) {
        typeReverseSearchString += " enchantment";
      }

      else if ( type === "Artifact" ) {
        typeReverseSearchString += " artifact";
      }

      else if ( type === "Creature" ) {
        typeReverseSearchString += " creature";
      }
      else {
        subtypeReverseSearchString += ( " " + type.toLocaleLowerCase() );
      }
    };
    typeReverseSearchString += " token"

    if ( !cardOracleText.toLocaleLowerCase().includes( subtypeReverseSearchString + typeReverseSearchString ) ) {
      cardDoesMakeTokenWithTypes = false;
    }

    return cardDoesMakeTokenWithTypes;
  }

  processPowerAndToughness( cardOracleText: string, token: Token ) {
    if ( !token.Power && !cardOracleText.includes( "reature token" ) ) {
      return true;
    }

    if ( !token.Power && cardOracleText.includes( "reature token" ) ) {
      return false;
    }

    if ( token.Power === '*' || token.Toughness === '*' ) {
      let powerMatches = false;
      let toughnessMatches = false;

      powerMatches = ( token.Power === '*' && cardOracleText.includes( 'X\/' ) )
        || ( token.Power === '*' && ( cardOracleText.toLocaleLowerCase().includes( 'equal' ) && token.Power === '*' && cardOracleText.toLocaleLowerCase().includes( 'power' ) ) );

      toughnessMatches = ( token.Toughness === '*' && cardOracleText.includes( '\/X' ) )
        || ( token.Toughness === '*' && ( cardOracleText.toLocaleLowerCase().includes( 'equal' ) && token.Toughness === '*' && cardOracleText.toLocaleLowerCase().includes( 'toughness' ) ) );

      if ( token.Power != '*' )
        powerMatches = cardOracleText.includes( token.Power + "\/X" );

      if ( token.Toughness != '*' ) {
        toughnessMatches = cardOracleText.includes( "X\/" + token.Toughness );
      }

      return powerMatches && toughnessMatches;

    } else if ( token.Power !== '*' && token.Toughness !== '*' && cardOracleText.includes( token.Power + "\/" + token.Toughness ) ) {
      return true;
    }
  }

  processTokenText( cardText: string, tokenText: string, cardname: string ) {
    if ( cardText.includes( "It has" ) ) {
      const cardGives = cardText.split( '"' )[ 1 ];
      if ( tokenText === cardGives ) {
        return true;
      }
      else {
        return false;
      }
    }

    //REMOVE REMINDER TEXT
    tokenText = tokenText.replace( /\s?\(.*\)/g, '' );
    cardText = cardText.replace( /\s?\(.*\)/g, '' );

    if ( tokenText === "creature is all colors." && cardText.includes( "all colors" ) ) {
      return true;
    }

    if ( cardText.match( /tokens? with/g ) && !cardText.includes( 'with haste' ) && !tokenText ) {
      return false;
    }

    if ( tokenText && tokenText.length > 0 ) {
      cardText = cardText.toLocaleLowerCase();
      const regexForTokenTextInCardText = /with [\w|\s|\d|/|"|'|,|\{|\}|\:]*\./g;
      const regexForItAndTheyGain = /" [\w|\s|\d|/|"|'|,|\{|\}|\:]*\./g;

      let cardTextTokenKeywordsSubstring =
        cardText.match( regexForTokenTextInCardText ) ?
          cardText.match( regexForTokenTextInCardText ) :
          ( cardText.match( regexForItAndTheyGain ) ? cardText.match( regexForItAndTheyGain ) : [] );

      const cardTokenTextGranter = cardText.match( /\".*\"/g ) ? cardText.match( /\".*\"/g ) : [];
      const cardTextRelevantBits = cardTokenTextGranter.concat( cardTextTokenKeywordsSubstring );

      tokenText = tokenText.toLocaleLowerCase();
      let linesOfTextToken = tokenText.split( '\n' );
      let keywordsOnToken = linesOfTextToken[ 0 ].split( ',' );
      linesOfTextToken.shift()
      const lineSegmentsOnToken = keywordsOnToken.concat( linesOfTextToken );


      // Check to see if token text is on card
      for ( let segmentOnToken of lineSegmentsOnToken ) {
        let includesLineSegment = false;
        for ( let cardTextBit of cardTextRelevantBits ) {
          if ( cardTextBit.includes( segmentOnToken.toLocaleLowerCase() ) ) {
            includesLineSegment = true;
          }
        }

        if ( !includesLineSegment ) {
          return false;
        }
      }

      return true;

    }
    else {
      return true;
    }
  }

  compareColors( cardText: string, tokenColors: ScryfallColor[] ) {
    if ( tokenColors.length === 5 && cardText.toLocaleLowerCase().includes( "all colors" ) ) {
      return true;
    }
    let choppedOnCreateText = cardText.match( /(c|C)reate(s?) [\w|\s|\d|/|’|,]*token/g );
    !choppedOnCreateText ? choppedOnCreateText = [ cardText ] : [];
    cardText.includes( "hoose four." ) ? console.log( choppedOnCreateText ) : [];
    for ( const tokenCreationText of choppedOnCreateText ) {
      if ( tokenColors.length === 0 && tokenCreationText.toLocaleLowerCase().includes( "colorless" ) ) {
        return true;
      } else {
        if (
          ( tokenColors.includes( ScryfallColor.W ) && !tokenCreationText.toLocaleLowerCase().includes( " white" ) )
          || ( !tokenColors.includes( ScryfallColor.W ) && tokenCreationText.toLocaleLowerCase().includes( " white" ) )
        ) {
          return false;
        }
        if (
          ( tokenColors.includes( ScryfallColor.U ) && !tokenCreationText.toLocaleLowerCase().includes( " blue" ) )
          || ( !tokenColors.includes( ScryfallColor.U ) && tokenCreationText.toLocaleLowerCase().includes( " blue" ) )
        ) {
          return false;
        }
        if (
          tokenColors.includes( ScryfallColor.B ) && !tokenCreationText.toLocaleLowerCase().includes( " black" )
          || ( !tokenColors.includes( ScryfallColor.B ) && tokenCreationText.toLocaleLowerCase().includes( " black" ) )
        ) {
          return false;
        }
        if (
          tokenColors.includes( ScryfallColor.R ) && !tokenCreationText.toLocaleLowerCase().includes( " red" )
          || ( !tokenColors.includes( ScryfallColor.R ) && tokenCreationText.toLocaleLowerCase().includes( " red" ) )
        ) {
          return false;
        }
        if (
          tokenColors.includes( ScryfallColor.G ) && !tokenCreationText.toLocaleLowerCase().includes( " green" )
          || ( !tokenColors.includes( ScryfallColor.G ) && tokenCreationText.toLocaleLowerCase().includes( " green" ) )
        ) {
          return false;
        }

        return true;
      }
    }


  }

  compareColorsByArray( card1Colors: ScryfallColor[], card2Colors: ScryfallColor[] ) {
    if (
      ( ( card1Colors.includes( ScryfallColor.B ) && card2Colors.includes( ScryfallColor.B ) ) || ( !card1Colors.includes( ScryfallColor.B ) && !card2Colors.includes( ScryfallColor.B ) ) )
      && ( ( card1Colors.includes( ScryfallColor.W ) && card2Colors.includes( ScryfallColor.W ) ) || ( !card1Colors.includes( ScryfallColor.W ) && !card2Colors.includes( ScryfallColor.W ) ) )
      && ( ( card1Colors.includes( ScryfallColor.U ) && card2Colors.includes( ScryfallColor.U ) ) || ( !card1Colors.includes( ScryfallColor.U ) && !card2Colors.includes( ScryfallColor.U ) ) )
      && ( ( card1Colors.includes( ScryfallColor.R ) && card2Colors.includes( ScryfallColor.R ) ) || ( !card1Colors.includes( ScryfallColor.R ) && !card2Colors.includes( ScryfallColor.R ) ) )
      && ( ( card1Colors.includes( ScryfallColor.G ) && card2Colors.includes( ScryfallColor.G ) ) || ( !card1Colors.includes( ScryfallColor.G ) && !card2Colors.includes( ScryfallColor.G ) ) )
    )
      return true;

    return false;
  }

  isGoldDragon( token: Token ): boolean {
    let cardsNamedSODND: ScryfallCard[];
    if ( token.CreatedBy ) {
      cardsNamedSODND = token.CreatedBy.filter( createdBy => createdBy.name === 'Sword of Dungeons & Dragons' );
    }
    return cardsNamedSODND.length > 0;
  }
}
