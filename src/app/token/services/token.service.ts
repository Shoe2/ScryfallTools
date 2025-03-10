import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Token } from '../types/token';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private $http: HttpClient) { }

  dedupeTokens(tokens: Token[]) {
    const uniqueTokens: Token[] = [];

    tokens.forEach( ( token ) => {
      let isDupe = false;
      if ( token.Text.includes( "This token can be used to represent a token that's a copy of a permanent." ) ) {
        isDupe = true;
      }

      if(token.TypeLine === "Card"){
        isDupe = true;
      }

      if ( token.Text ) {
        token.Text = token.Text.replace( /\s?\(.*\)/g, '' );
      }

      for ( var i = 0; i < uniqueTokens.length; i++ ) {
        if ( token.Name === uniqueTokens[ i ].Name &&
          token.Power === uniqueTokens[ i ].Power &&
          token.Toughness === uniqueTokens[ i ].Toughness &&
          token.Colors &&
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

   return uniqueTokens;
  }

  getCardByUri( url: string ) {
    return this.$http.get( url );
  }

}
