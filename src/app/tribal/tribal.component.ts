import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ScryfallAPIResponse } from '../scryfall-apiresponse';
import {Observable} from 'rxjs';
import { TribalData } from './types/tribal-data';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-tribal',
  templateUrl: './tribal.component.html',
  styleUrls: ['./tribal.component.css']
})
export class TribalComponent implements OnInit {

  creatureTypeData: TribalData[] = [];
  constructor(private $http: HttpClient) { }

  ngOnInit(): void {
    this.$http.get("https://api.scryfall.com/catalog/creature-types")
    .subscribe( (response: ScryfallAPIResponse) =>{
    this.creatureTypeData = [];  
    (response.data as string[]).forEach((tribe: string, i: number)=>{
      this.creatureTypeData.push(new TribalData(tribe));
      if(i === (response.data as string[]).length -1){
        this.computeTribalStats();
      }
      });
    })
  }

  computeTribalStats(){
    this.creatureTypeData.forEach((tribe: TribalData)=>{
      const observables: Observable<ScryfallAPIResponse>[] = [];
      //cards
      observables.push(this.$http.get<ScryfallAPIResponse>(environment.prefix + "/search?q=t%3A" + tribe.creatureType))
      //commanders
      observables.push(this.$http.get<ScryfallAPIResponse>(environment.prefix + "/search?q=t%3A" + tribe.creatureType + "+is%3Acommander"))
      //token makers
      observables.push(this.$http.get<ScryfallAPIResponse>(environment.prefix + "/search?q=o%3A%2Fcreate%28s%29%3F+.*" + tribe.creatureType + "+.*creature+token%2F" + "-is%3Afunny"))
      //becomes
      observables.push(this.$http.get<ScryfallAPIResponse>(environment.prefix + "/search?q=o%3A%2Fbecome%28s%29%3F+.*" + tribe.creatureType + ".%2F" + "-is%3Afunny" ))
      //hozes
      observables.push(this.$http.get<ScryfallAPIResponse>(environment.prefix + "/search?q=t%3A" + tribe.creatureType))
      //lords
      observables.push(this.$http.get<ScryfallAPIResponse>(environment.prefix + "/search?q=t%3A" + tribe.creatureType))
      //funny lords
      observables.push(this.$http.get<ScryfallAPIResponse>(environment.prefix + "/search?q=t%3A" + tribe.creatureType))
      //funny
      observables.push(this.$http.get<ScryfallAPIResponse>(environment.prefix + "/search?q=t%3A" + tribe.creatureType +  "+is%3Afunny"))
      //funny commanders
      observables.push(this.$http.get<ScryfallAPIResponse>(environment.prefix + "/search?q=t%3A" + tribe.creatureType + "+is%3Afunny+is%3Acommander"))
      //      (o:/\belf\b/ or o:/\belves\b/) o:create

    });
  }

}
