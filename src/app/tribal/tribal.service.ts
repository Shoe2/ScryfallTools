import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, forkJoin, Observable, of, } from 'rxjs';
import {map, catchError} from 'rxjs/operators';

import { environment } from '../../environments/environment';

import { ScryfallAPIResponse } from '../scryfall-apiresponse';
import { TribalData } from './types/tribal-data';

@Injectable({
  providedIn: 'root'
})
export class TribalService {
    tribesListSource = new BehaviorSubject<string[]>([]);
    tribesList = this.tribesListSource.asObservable();

    tribeDataSource = new BehaviorSubject<TribalData[]>([]);
    tribeData = this.tribeDataSource.asObservable();

    noCards: ScryfallAPIResponse= {total_cards: 0, data: null, has_more: false, next_page: 'no', object: ''}

  constructor(private $http: HttpClient) { }

  getTribeData(){
    this.$http.get<ScryfallAPIResponse>("https://api.scryfall.com/catalog/creature-types")
    .subscribe(response => {
            this.tribesListSource.next(response.data as string [])
        })
  }

  computeTribalStats() {
      for(let tribe of this.tribesListSource.getValue()){
    
      const observables: Observable<ScryfallAPIResponse>[] = [];
      //cards
      observables.push(
        this.$http.get<ScryfallAPIResponse>(environment.prefix + "/search?q=t%3A" + tribe + "+game%3Apaper+-is%3Afunny")
        .pipe(
            catchError(() => of(this.noCards))
        )
      )
      //commanders
       observables.push(
        this.$http.get<ScryfallAPIResponse>(environment.prefix + "/search?q=t%3A" + tribe + "+is%3Acommander+game%3Apaper+-is%3Afunny")
        .pipe(
            catchError(() => of(this.noCards))
        )
        )
      //token makers
    //   observables.push(this.$http.get<ScryfallAPIResponse>(environment.prefix + "/search?q=o%3A%2Fcreate%28s%29%3F+.*" + tribe.creatureType + "+.*creature+token%2F" + "-is%3Afunny"))
      //becomes
    //   observables.push(this.$http.get<ScryfallAPIResponse>(environment.prefix + "/search?q=o%3A%2Fbecome%28s%29%3F+.*" + tribe.creatureType + ".%2F" + "-is%3Afunny" ))
      //hozes
    //   observables.push(this.$http.get<ScryfallAPIResponse>(environment.prefix + "/search?q=t%3A" + tribe.creatureType))
      //lords
    //   observables.push(this.$http.get<ScryfallAPIResponse>(environment.prefix + "/search?q=t%3A" + tribe.creatureType))
      //funny lords
    //   observables.push(this.$http.get<ScryfallAPIResponse>(environment.prefix + "/search?q=t%3A" + tribe.creatureType))
      //funny
    //   observables.push(this.$http.get<ScryfallAPIResponse>(environment.prefix + "/search?q=t%3A" + tribe.creatureType +  "+is%3Afunny"))
      //funny commanders
    //   observables.push(this.$http.get<ScryfallAPIResponse>(environment.prefix + "/search?q=t%3A" + tribe.creatureType + "+is%3Afunny+is%3Acommander"))
      //      (o:/\belf\b/ or o:/\belves\b/) o:create
      
      forkJoin(observables).subscribe(
        (tribeDataResponses) => this.assignTribeData(tribe, tribeDataResponses), 
      (tribeDataResponses) => this.assignTribeData(tribe, tribeDataResponses)
      );
    }
  }

  assignTribeData(tribe: string, tribeDataResponses: ScryfallAPIResponse[]){
    console.log(tribeDataResponses)
    const tribeData = {} as TribalData;
    tribeData.creatureType = tribe;
    tribeData.cardsWithType = tribeDataResponses[0].total_cards;
    tribeData.commandersWithType = tribeDataResponses[1].total_cards;
        // tribe.turnsIntoCreatureOfType = tribeDataResponses[2].total_cards;
        // tribe.hozesType = tribeDataResponses[3].total_cards;
        // tribe.lordsOfType = tribeDataResponses[4].total_cards;
        // tribe.silverBorderedLords = tribeDataResponses[5].total_cards;
        // tribe.silverBorderedCardsWithType = tribeDataResponses[6].total_cards;
        // tribe.silverBorderedCommanders = tribeDataResponses[7].total_cards;
    this.tribeDataSource.value.push(tribeData);
    this.tribeDataSource.value.sort((a, b) => {
        var textA = a.creatureType.toUpperCase();
        var textB = b.creatureType.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
  }

}
