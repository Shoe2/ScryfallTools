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
 --- cards that make tokens that almost match keywords (flying angel warrior and flying plus vigilance angel warrior...etc)
 *      Divine Visitation 
 *      Mitotic Slime
 *      Tomb of Urami
 *      Starnheim Unleashed
 *      Tempt with Vengeance
--- Sarpadian Empires, Vol. VII       
--- Pursued Whale
--- Rukh Egg
---Serra the Benevolent
--- Garruk Relentless // Garruk, the Veil-Cursed
--- several cards create enchantment zombies that should not (see Nevinrayyl)
--- Makes one token that exsists and one that does not
        Evil Comes to Fruition, 
        Finale of Glory, 
        One Dozen Eyes
-- makes 2 tokens of different colors or mentions a color in a wierd place
        Hold the Perimeter, 
        Mascot Exhibition 
        Riftmarked Knight
        Rin and Seri, Inseparable
        Underworld Hermit
        Trostani's summoner
 -----All colors is broke
        Planewide Celebration
        _________________________________________________________
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
  orphanedCards: ScryfallCard[] = [];
  loadingSource = new BehaviorSubject<number>( 0 );
  loading = this.loadingSource.asObservable();
  isLoading = true;

  oldCardsThatDontMakeTokensNames = [
    "Abian, Luvion Usurper",
    "Balduvian Dead",
    "Baru, Fist of Krosa",
    "Basalt Golem",
    "Blessed Sanctuary",
    "Bone Rattler",
    "Boris Devilboon",
    "Bottle of Suleiman",
    "Broken Visage",
    "Caribou Range",
    "Carrion",
    "Diamond Kaleidoscope",
    "Dune-Brood Nephilim",
    "Dungeon Master",
    "Elephant Resurgence",
    "Errand of Duty",
    "Generated Horizons",
    "Gorilla Tactics",
    "Gunk Slug",
    "Handy Dandy Clone Machine",
    "Haunted Angel",
    "Hazezon Tamar",
    "Homarid Spawning Bed",
    "Hunted Horror",
    "Imaginary Friends",
    "Infernal Genesis",
    "Jungle Patrol",
    "Keeper of the Beasts",
    "Kjeldoran Home Guard",
    "Master of the Hunt",
    "Mirrored Lotus",
    "Mongrel Pack",
    "Monkey Cage",
    "Nuisance Engine",
    "Ophiomancer",
    "Ovinomancer",
    "Oyobi, Who Split the Heavens",
    "Penumbra Bobcat",
    "Penumbra Kavu",
    "Phantasmal Sphere",
    "Phelddagrif",
    "Pick Your Poison",
    "Pure Reflection",
    "Questing Phelddagrif",
    "Rally the Horde",
    "Riptide Replicator",
    "Saproling Burst",
    "Sek'Kuar, Deathkeeper",
    "Serpent Generator",
    "Skirk Ridge Exhumer",
    "Sound the Call",
    "Spawning Pit",
    "Spike Breeder",
    "Spiny Starfish",
    "Spirit Mirror",
    "Splintering Wind",
    "Summoning Station",
    "Symbol Status",
    "Tatsumasa, the Dragon's Fang",
    "Tetravus",
    "The Iron Guardian Stirs",
    "The Legend of Arena",
    "Time Sidewalk",
    "Uktabi Kong",
    "Volrath's Laboratory",
    "Wall of Kelp",
    "Wand of the Elements",
    "Waste Land",
    "Waylay",
    "Wirefly Hive",
    "Wurmcalling"
  ]

  constructor( private $http: HttpClient ) { }

  ngOnInit(): void {
    this.getNextPageOfCards( environment.prefix + "q=t%3Atoken+-set%3Atbth+-set%3Atdag+-set%3Atfth+-is%3Apromo+-%28set%3Atust+is%3Adfc%29&unique=cards", true, "token" );
    this.getNextPageOfCards( environment.prefix + "q=fo%3Acreate+include%3Aextras+-t%3Aemblem+-t%3Atoken+-border%3Agold+&unique=cards", true, "card" );
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
                      face.oracle_text ? face.oracle_text.replace( /\s?\(.*\)/g, '' ) : '',
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
    const uniqueTokens: Token[] = [];

    this.tokens.forEach( ( token ) => {
      let isDupe = false;
      if ( token.Text.includes( "This token can be used to represent a token that's a copy of a permanent." ) ) {
        isDupe = true;
      }

      if ( token.Text ) {
        token.Text = token.Text.replace( /\s?\(.*\)/g, '' );
      }

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

    this.tokens = uniqueTokens;
  }

  associateCardsWithTokens() {
    this.isLoading = true;
    this.cardsThatMakeTokens.forEach( ( card: ScryfallCard, index: number ) => {
      card.name === "Flaxen Intruder" ? console.log( card ) : [];

      this.tokensThisCardMakes( card );

      if ( index === this.cardsThatMakeTokens.length - 1 ) {
        this.isLoading = false;
      }
    } );

  }

  tokensThisCardMakes( card: ScryfallCard ) {
    if ( card.all_parts && card.all_parts ) {
      card.all_parts.forEach( ( relatedCard: ScryfallCardFace ) => {
        if ( relatedCard.type_line.includes( 'Token' ) ) {
          let tempTokens = this.tokens.filter(
            tokenData => tokenData.Name === relatedCard.name
              && tokenData.TypeLine === tokenData.TypeLine
          );
          if ( tempTokens.length === 1 ) {
            if ( !tempTokens[ 0 ].CreatedBy.includes( card ) )
              tempTokens[ 0 ].CreatedBy.push( card );
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



    let tempToken = this.tokens.filter( token =>
      allFacesText.includes( token.Name )
      && this.processTokenText( allFacesText, token.Text.replace( /\s?\(.*\)/g, '' ) )
      && this.processPowerAndToughness( allFacesText, token )
      && this.processTypeLine( token.TypeLine, allFacesText )
      && this.compareColors( allFacesText, token.Colors )
    );

    card.name === "Flaxen Intruder" ? console.log( card ) : [];

    if ( card.name === "Planewide Celebration" ) {
      console.log( tempToken )
      console.log( this.compareColors( allFacesText, [ ScryfallColor.W, ScryfallColor.U, ScryfallColor.B, ScryfallColor.R, ScryfallColor.G ] ) )
    }

    if ( tempToken && tempToken.length ) {
      createsNothing = false;
      for ( let token of tempToken ) {
        if ( !token.CreatedBy.includes( card ) )
          token.CreatedBy.push( card );
      }
    }

    else if ( createsNothing ) {
      // CREATE TOKEN or IGNORE ME
      const cardTextLowerCase = allFacesText.toLocaleLowerCase();
      if (
        !cardTextLowerCase.includes( 'would create' )
        && !( cardTextLowerCase.includes( 'would be created' ) )
        && !this.oldCardsThatDontMakeTokensNames.includes( card.name )

      )
        this.orphanedCards.push( card );
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

      powerMatches = ( token.Power === '*' && cardOracleText.includes( 'X\/' ) )
        || ( token.Power === '*' && ( cardOracleText.toLocaleLowerCase().includes( 'equal' ) && token.Power === '*' && cardOracleText.toLocaleLowerCase().includes( 'power' ) ) );

      toughnessMatches = ( token.Toughness === '*' && cardOracleText.includes( '\/X' ) )
        || ( token.Toughness === '*' && ( cardOracleText.toLocaleLowerCase().includes( 'equal' ) && token.Toughness === '*' && cardOracleText.toLocaleLowerCase().includes( 'toughness' ) ) );

      if ( token.Power != '*' )
        powerMatches = cardOracleText.includes( token.Power + "\/X" );

      if ( token.Toughness != '*' ) {
        toughnessMatches = cardOracleText.includes( "X\/" + token.Toughness );
      }

      //       if(cardOracleText.includes('X/1')){
      // //console.log(powerMatches)
      //         console.log(toughnessMatches)
      //       }

      return powerMatches && toughnessMatches;

    } else if ( token.Power !== '*' && token.Toughness !== '*' && cardOracleText.includes( token.Power + "\/" + token.Toughness ) ) {
      return true;
    }
  }

  processTokenText( cardText: string, tokenText: string ) {
    tokenText = tokenText.replace( /\s?\(.*\)/g, '' );
    if ( tokenText.length > 0 ) {
      let linesOfText = tokenText.split( '\n' );

      for ( let line of linesOfText ) {
        let lineSegments = line.split( ',' );
        for ( let segment of lineSegments ) {
          if ( !cardText.toLocaleLowerCase().includes( segment.toLocaleLowerCase() ) ) {
            return false;
          }
        }
      }

      return true;

    }
    else {
      return true;
    }
  }

  compareColors( cardText: string, tokenColors: ScryfallColor[] ) {
    const isCardImFuckingWith = cardText.toLocaleLowerCase().includes( 'transform' );
    //const choppedOnCreateText = cardText.toLocaleLowerCase().split( 'create' );
    let choppedOnCreateText = cardText.match( /(c|C)reate(s?) [\w|\s|\d|/|’|,]*\./g );
    !choppedOnCreateText ? choppedOnCreateText = [cardText] : [];
    //isCardImFuckingWith ? console.log( choppedOnCreateText.length ) : []
    //const tokenCreationText = choppedOnCreateText.length > 2 ? choppedOnCreateText.slice( 1 ).join( ' ' ) : choppedOnCreateText[ choppedOnCreateText.length - 1 ];
    cardText.includes("8/8") ? console.log( choppedOnCreateText ): [];
    //TODO: Broken for cards that say create twice
    for ( const tokenCreationText of choppedOnCreateText ) {
      if ( tokenColors.length === 5 && tokenCreationText.toLocaleLowerCase().includes( "all colors" ) ) {
        return true;
      }
      else if ( tokenColors.length === 0 && tokenCreationText.toLocaleLowerCase().includes( "colorless" ) ) {
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

}
