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

 * - adventures IE Flaxen Intruder
 * - Sarpadian Empires, Vol. VII
 *  - Rite of Belzenlok,Rite of Belzenlok,
 * - X/X creatures, X/N creatures and N/X creatures
 * - Tomb of Urami shows as a vanilla demon
 * - several cards create enchantment zombies that should not (see Nevinrayyl)
 * _________________________________________________________
 * OKAY TO NOT WORK"
token.component.ts:227 Adrix and Nev, Twincasters
token.component.ts:227 Anointed Procession
token.component.ts:227 Crafty Cutpurse
token.component.ts:227 Doubling Season

_______________________________________________

DONT EXSIST YET
 * - cards that make tokens that do not exsist 
 *    * Abian, Luvion Usurper
      token.component.ts:227 Balduvian Dead
      token.component.ts:227 Baru, Fist of Krosa
      token.component.ts:227 Basalt Golem
      token.component.ts:227 Blessed Sanctuary
token.component.ts:227 Bone Rattler
token.component.ts:227 Boris Devilboon
token.component.ts:227 Bottle of Suleiman
token.component.ts:227 Broken Visage
token.component.ts:227 Caribou Range
token.component.ts:227 Carrion
token.component.ts:227 Diamond Kaleidoscope
token.component.ts:227 Drizzt Do'Urden

----------------------------------------------
token.component.ts:227 Death Mutation
token.component.ts:227 Devastating Summons
token.component.ts:227 Dune-Brood Nephilim
token.component.ts:227 Dungeon Master
token.component.ts:227 Elenda, the Dusk Rose
token.component.ts:227 Elephant Resurgence
token.component.ts:227 Errand of Duty
token.component.ts:227 Esix, Fractal Bloom
token.component.ts:227 Experimental Overload
token.component.ts:227 Eyes of the Wisent
2token.component.ts:227 Fable of Wolf and Owl
token.component.ts:227 Fathom Fleet Captain
token.component.ts:227 Flesh Carver
token.component.ts:227 Garth One-Eye
token.component.ts:227 Gelatinous Genesis
token.component.ts:227 Generated Horizons
token.component.ts:227 Gloomwidow's Feast
token.component.ts:227 Gorilla Tactics
token.component.ts:227 Grakmaw, Skyclave Ravager
token.component.ts:227 Gunk Slug
token.component.ts:227 Handy Dandy Clone Machine
token.component.ts:227 Haunted Angel
token.component.ts:227 Hazezon Tamar
token.component.ts:227 Hedron Fields of Agadeem
token.component.ts:227 Homarid Spawning Bed
token.component.ts:227 Huatli, Warrior Poet
token.component.ts:227 Hunted Horror
token.component.ts:227 Hydra Broodmaster
token.component.ts:227 Imaginary Friends
token.component.ts:227 Inscription of Insight
token.component.ts:227 It of the Horrid Swarm
token.component.ts:227 Jund
token.component.ts:227 Jungle Patrol
token.component.ts:227 Keeper of the Beasts
token.component.ts:227 Kjeldoran Home Guard
token.component.ts:227 Kresh the Bloodbraided Avatar
token.component.ts:227 Lolth, Spider Queen
token.component.ts:227 Lucille
token.component.ts:227 Marath, Will of the Wild
token.component.ts:227 Martyr of Dusk
2token.component.ts:227 Mascot Exhibition
token.component.ts:227 Maskwood Nexus
token.component.ts:227 Master of the Hunt
token.component.ts:227 Master of Waves
token.component.ts:227 Mavren Fein, Dusk Apostle
token.component.ts:227 Metallurgic Summonings
token.component.ts:227 Miming Slime
token.component.ts:227 Mirrored Lotus
token.component.ts:227 Mongrel Pack
token.component.ts:227 Monkey Cage
token.component.ts:227 Murgish Cemetery
token.component.ts:227 Mystic Genesis
token.component.ts:227 Nacatl War-Pride
token.component.ts:227 Nuisance Engine
token.component.ts:227 Ooze Flux
token.component.ts:227 Ooze Garden
token.component.ts:227 Ophiomancer
token.component.ts:227 Ovinomancer
token.component.ts:227 Oyobi, Who Split the Heavens
token.component.ts:227 Paladin of the Bloodstained
token.component.ts:227 Parallel Lives
token.component.ts:227 Penumbra Bobcat
token.component.ts:227 Penumbra Kavu
token.component.ts:227 Phantasmal Sphere
token.component.ts:227 Phelddagrif
token.component.ts:227 Phyrexian Rebirth
token.component.ts:227 Pick Your Poison
token.component.ts:227 Planewide Celebration
token.component.ts:227 Primal Vigor
token.component.ts:227 Profane Transfusion
token.component.ts:227 Promise of Power
token.component.ts:227 Pure Reflection
token.component.ts:227 Purphoros's Intervention
token.component.ts:227 Pursued Whale
token.component.ts:227 Queen's Commission
token.component.ts:227 Questing Phelddagrif
token.component.ts:227 Rally the Horde
token.component.ts:227 Rapid Prototyper
token.component.ts:227 Raptor Hatchling
token.component.ts:227 Regisaur Alpha
token.component.ts:227 Reign of the Pit
token.component.ts:227 Riftmarked Knight
token.component.ts:227 Rin and Seri, Inseparable
token.component.ts:227 Riptide Replicator
token.component.ts:227 Rukh Egg
token.component.ts:227 Saproling Burst
token.component.ts:227 Sarpadian Empires, Vol. VII
token.component.ts:227 Seed Guardian
token.component.ts:227 Sek'Kuar, Deathkeeper
token.component.ts:227 Selesnya Loft Gardens
token.component.ts:227 Serpent Generator
token.component.ts:227 Serra the Benevolent
token.component.ts:227 Skyclave Apparition
token.component.ts:227 Slime Molding
token.component.ts:227 Snake Pit
token.component.ts:227 Sound the Call
token.component.ts:227 Spawning Pit
token.component.ts:227 Spike Breeder
token.component.ts:227 Spiny Starfish
token.component.ts:227 Spirit Mirror
token.component.ts:227 Splintering Wind
token.component.ts:227 Spoils of Blood
token.component.ts:227 Squire's Devotion
token.component.ts:227 Stitcher Geralf
token.component.ts:227 Summoning Station
token.component.ts:227 Sword of Body and Mind
token.component.ts:227 Symbol Status
token.component.ts:227 Tatsumasa, the Dragon's Fang
token.component.ts:227 Tetravus
token.component.ts:227 The Bears of Littjara
token.component.ts:227 The Iron Guardian Stirs
token.component.ts:227 The Legend of Arena
token.component.ts:227 Thundering Spineback
token.component.ts:227 Time Sidewalk
token.component.ts:227 Tivash, Gloom Summoner
2token.component.ts:227 Trostani's Summoner
token.component.ts:227 Uktabi Kong
token.component.ts:227 Ulasht, the Hate Seed
token.component.ts:227 Underworld Hermit
token.component.ts:227 Volrath's Laboratory
token.component.ts:227 Wall of Kelp
token.component.ts:227 Wand of the Elements
token.component.ts:227 Waste Land
token.component.ts:227 Waylay
token.component.ts:227 Wirefly Hive
token.component.ts:227 Wurmcalling
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
      if ( card.oracle_text ) {
        this.tokensThisCardMakes( card );

        if ( index === this.cardsThatMakeTokens.length - 1 ) {
          this.isLoading = false;
        }
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
    if ( card.oracle_text.includes( 'Food' ) ) {
      createsNothing = false;
      this.tokens.find( token => token.Name === 'Food' ).CreatedBy.push( card );
    }
    if ( card.oracle_text.includes( 'Treasure' ) ) {
      createsNothing = false;
      this.tokens.find( token => token.Name === 'Treasure' ).CreatedBy.push( card );
    }
    if ( card.oracle_text.includes( 'Clue' ) || card.oracle_text.includes( 'Investigate' ) ) {
      createsNothing = false;
      this.tokens.find( token => token.Name === 'Clue' ).CreatedBy.push( card );
    }
    if ( card.oracle_text.toLocaleLowerCase().includes( 'that\'s a copy' ) || card.oracle_text.toLocaleLowerCase().includes( 'that are copies' ) ) {
      createsNothing = false;
      this.tokens.find( token => token.Name === 'Copy' ).CreatedBy.push( card );
    }



    let tempToken = this.tokens.filter( token =>
      card.oracle_text.includes( token.Name )
      && this.processTokenText( card.oracle_text, token.Text.replace( /\s?\(.*\)/g, '' ) )
      && this.processPowerAndToughness( card.oracle_text, token )
      && this.processTypeLine( token.TypeLine, card.oracle_text )
      && this.compareColors( card.oracle_text, token.Colors )
    );


    // if(card.name === "Baffling End"){
    //   console.log(tempToken)
    // }

    if ( tempToken && tempToken.length ) {
      createsNothing = false;
      for ( let token of tempToken ) {
        token.CreatedBy.push( card );
      }
    }

    else {
      if ( createsNothing )
        // CREATE TOKEN or IGNORE ME
        console.log( card.name );
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

    if ( cardOracleText.includes( token.Power + "\/" + token.Toughness ) ) {
      return true;
    } else if ( token.Power === '*' || token.Toughness === '*' ) {
      //NOT WORKING COMPLETELY
      let powerMatches = false;
      let toughnessMatches = false;
      powerMatches = (cardOracleText.includes( token.Power + "\/" ))
      || (token.Power === '*' && !cardOracleText.toLocaleLowerCase().includes( 'X\/' ))
      || (token.Power === '*' && ( cardOracleText.toLocaleLowerCase().includes( 'equal' ) && token.Power === '*' && cardOracleText.toLocaleLowerCase().includes( 'power' ) ));

      toughnessMatches = (cardOracleText.includes( token.Toughness + "\/" ))
      || (token.Toughness === '*' && !cardOracleText.toLocaleLowerCase().includes( 'X\/' ))
      || (token.Toughness === '*' && ( cardOracleText.toLocaleLowerCase().includes( 'equal' ) && token.Toughness === '*' && cardOracleText.toLocaleLowerCase().includes( 'toughness' )));

      return powerMatches && toughnessMatches;

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
    if ( tokenColors.length === 5 && cardText.toLocaleLowerCase().includes( "all colors" ) ) {
      return true;
    }
    else if ( tokenColors.length === 0 && cardText.toLocaleLowerCase().includes( "colorless" ) ) {
      return true;
    } else {
      if (
        ( tokenColors.includes( ScryfallColor.W ) && !cardText.toLocaleLowerCase().includes( "white" ) )
        || ( !tokenColors.includes( ScryfallColor.W ) && cardText.toLocaleLowerCase().includes( "white" ) )
      ) {
        return false;
      }
      if (
        ( tokenColors.includes( ScryfallColor.U ) && !cardText.toLocaleLowerCase().includes( "blue" ) )
        || ( !tokenColors.includes( ScryfallColor.U ) && cardText.toLocaleLowerCase().includes( "blue" ) )
      ) {
        return false;
      }
      if (
        tokenColors.includes( ScryfallColor.B ) && !cardText.toLocaleLowerCase().includes( "black" )
        || ( !tokenColors.includes( ScryfallColor.B ) && cardText.toLocaleLowerCase().includes( "black" ) )
      ) {
        return false;
      }
      if (
        tokenColors.includes( ScryfallColor.R ) && !cardText.toLocaleLowerCase().includes( " red" )
        || ( !tokenColors.includes( ScryfallColor.R ) && cardText.toLocaleLowerCase().includes( " red" ) )
      ) {
        return false;
      }
      if (
        tokenColors.includes( ScryfallColor.G ) && !cardText.toLocaleLowerCase().includes( "green" )
        || ( !tokenColors.includes( ScryfallColor.G ) && cardText.toLocaleLowerCase().includes( "green" ) )
      ) {
        return false;
      }

      return true;
    }

  }

}
