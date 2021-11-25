import { DatePipe } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ScryfallCard } from 'node_modules/scryfall-ts/build/ScryfallCard';
import { BehaviorSubject } from 'rxjs';
import { ScryfallCardFace } from 'scryfall-ts/build/ScryfallCardFace';
import { ScryfallColor } from 'scryfall-ts/build/ScryfallColor';
import { environment } from '../../environments/environment';
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
  orphanedCards: ScryfallCard[] = [];
  loadingSource = new BehaviorSubject<number>( 0 );
  loading = this.loadingSource.asObservable();
  isLoading = true;

  // IGNORE FOR NOW, MAKE OLD CARDS WORK LATER
  ignore = [
    "Winchester Draft // Winchester Draft (cont'd)",
    "Totally Lost in Translation // Totally Lost in Translation (cont'd)"
  ];

  // TODO: Fix These
  problemCards = [
    // A HUGE PROBLEM ALL IT'S OWN
    "Sarpadian Empires, Vol. VII",

    // These create one exsisting token and one not-exsisting token
    "Evil Comes to Fruition",
    "One Dozen Eyes",

    //OLD and make no exsisting token
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
    "Helm of Kaldra",
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
    "Tomb of Urami",
    "Uktabi Kong",
    "Volrath's Laboratory",
    "Wall of Kelp",
    "Wand of the Elements",
    "Waste Land",
    "Waylay",
    "Wirefly Hive",
    "Wurmcalling"
  ];

  constructor( private $http: HttpClient, private datePipe: DatePipe ) { }

  ngOnInit(): void {
    this.getNextPageOfCards( environment.prefix + "/search?q=t%3Atoken+-set%3Atbth+-set%3Atdag+-set%3Atfth+-%28set%3Atust+is%3Adfc%29&unique=cards", true, "token" );
    // +-is%3Apromo no longer removing promos? is this ok?
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
                  if ( face.name != "Horror" && !( face.name === 'Mowu' && !face.colors.length ) ) {
                    //Hack to remove BU horror token and Mowu face that are falsly colorless in scryfall data
                    const tokenData = new Token(
                      face.power,
                      face.toughness,
                      face.colors,
                      face.name,
                      face.type_line.includes( 'Hound' ) ? face.type_line.replace( 'Hound', 'Dog' ) : face.type_line,
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
      this.tokensThisCardMakes( card );
      if ( index === this.cardsThatMakeTokens.length - 1 ) {
        this.isLoading = false;
      }
    } );

  }

  tokensThisCardMakes( card: ScryfallCard ) {
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
          else if ( relatedCard.type_line.includes( 'Token' ) ) {
            this.getCardById( relatedCard.uri ).subscribe( ( token: ScryfallCard ) => {
              let tempTokens = this.tokens.filter(
                tokenData => tokenData.Name === token.name
                  && tokenData.TypeLine === token.type_line
                  && tokenData.Text === token.oracle_text
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

  getCardById( url: string ) {
    return this.$http.get( url );
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

    else if ( createsNothing ) {
      // CREATE TOKEN or IGNORE ME
      const cardTextLowerCase = allFacesText.toLocaleLowerCase();
      if (
        !cardTextLowerCase.includes( 'would create' )
        && !( cardTextLowerCase.includes( 'would be created' ) )
        && !this.ignore.includes( card.name )

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

    if ( !typeLine.includes( "Legendary" ) && cardOracleText.toLocaleLowerCase().includes( ", a legendary" ) ) {
      return false;
    }

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

      return powerMatches && toughnessMatches;

    } else if ( token.Power !== '*' && token.Toughness !== '*' && cardOracleText.includes( token.Power + "\/" + token.Toughness ) ) {
      return true;
    }
  }

  processTokenText( cardText: string, tokenText: string, cardname: string ) {

    //REMOVE REMINDER TEXT
    tokenText = tokenText.replace( /\s?\(.*\)/g, '' );
    cardText = cardText.replace( /\s?\(.*\)/g, '' );

    if ( tokenText === "creature is all colors." && cardText.includes( "all colors" ) ) {
      return true;
    }

    if ( tokenText && tokenText.length > 0 ) {
      cardText = cardText.toLocaleLowerCase();
      const regexForTokenTextInCardText = /with [\w|\s|\d|/|"|'|,|\{|\}|\:]*\./g;      
      const regexForItAndTheyGain = /" [\w|\s|\d|/|"|'|,|\{|\}|\:]*\./g;

      let cardTextTokenKeywordsSubstring =
        cardText.match( regexForTokenTextInCardText ) ? 
        cardText.match( regexForTokenTextInCardText ) : 
          (cardText.match( regexForItAndTheyGain ) ? cardText.match( regexForItAndTheyGain ) : []);


      // if ( this.problemCards.includes( cardname ) ) {
      //   console.log( cardText )
      //   cardTextTokenKeywordsSubstring.length > 0 ? console.log( cardTextTokenKeywordsSubstring ) : []
      // }

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
    const isCardImFuckingWith = cardText.toLocaleLowerCase().includes( 'hoose four.' );
    //const choppedOnCreateText = cardText.toLocaleLowerCase().split( 'create' );
    let choppedOnCreateText = cardText.match( /(c|C)reate(s?) [\w|\s|\d|/|’|,]*token/g );
    // /(c|C)reate(s?) [\w|\s|\d|/|’|,]*[(with)|\.]/g
    !choppedOnCreateText ? choppedOnCreateText = [ cardText ] : [];
    //isCardImFuckingWith ? console.log( choppedOnCreateText.length ) : []
    //const tokenCreationText = choppedOnCreateText.length > 2 ? choppedOnCreateText.slice( 1 ).join( ' ' ) : choppedOnCreateText[ choppedOnCreateText.length - 1 ];
    cardText.includes( "hoose four." ) ? console.log( choppedOnCreateText ) : [];
    //TODO: Broken for cards that say create twice
    // cardText.includes("all colors") ? console.log(cardText)
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
}
