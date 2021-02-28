import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css']
})
export class TokenComponent implements OnInit {

  tokens: any = [];
  constructor(private $http: HttpClient) { }

  ngOnInit(): void {
    this.$http.get("https://api.scryfall.com/cards?q=t%3Atoken+-set%3Atbth+-set%3Atdag+-set%3Atfth+-is%3Apromo").subscribe(
      (tokens)=>{
        this.tokens = tokens;
        console.log(tokens);
      }, (error: HttpErrorResponse)=>{
        console.log(error);
      })
  }

}
