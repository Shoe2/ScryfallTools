import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ScryfallAPIResponse } from '../scryfall-apiresponse';
import {forkJoin, Observable} from 'rxjs';
import { TribalData } from './types/tribal-data';
import { environment } from '../../environments/environment';
import { TribalService } from './tribal.service';

@Component({
  selector: 'app-tribal',
  templateUrl: './tribal.component.html',
  styleUrls: ['./tribal.component.css']
})
export class TribalComponent implements OnInit {

  creatureTypeData: TribalData[] = [];
  constructor(private readonly tribalService: TribalService) { }

  ngOnInit(): void {
    this.tribalService.getTribeData()
    this.tribalService.tribesList.subscribe(() => this.tribalService.computeTribalStats());
    this.tribalService.tribeData.subscribe(data => this.creatureTypeData = data);
  }

}
