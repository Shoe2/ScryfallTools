import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TokenComponent } from './token/token.component';
import { TribalComponent } from './tribal/tribal.component';
import { HomeComponent } from './home/home.component';
import { DatePipe } from '@angular/common';
import { DeckMuseComponent } from './deck-muse/deck-muse.component';
import { JanklordCommanderGeneratorComponent } from './janklord-commander-generator/janklord-commander-generator.component';
import { ArchidektDeckStatsComponent } from './archidekt-deck-stats/archidekt-deck-stats.component';
import { RandomGeneratorsComponent } from './random-generators/random-generators.component';

@NgModule({ declarations: [
        AppComponent,
        TokenComponent,
        TribalComponent,
        HomeComponent,
        DeckMuseComponent,
        RandomGeneratorsComponent,
        JanklordCommanderGeneratorComponent,
        ArchidektDeckStatsComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule], providers: [DatePipe, provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
