import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeckMuseComponent } from './deck-muse/deck-muse.component';
import { HomeComponent } from './home/home.component';
import { JanklordCommanderGeneratorComponent } from './janklord-commander-generator/janklord-commander-generator.component';
import { TokenComponent } from './token/token.component';
import { TribalComponent } from './tribal/tribal.component';
import { ArchidektDeckStatsComponent } from './archidekt-deck-stats/archidekt-deck-stats.component';
import { RandomGeneratorsComponent } from './random-generators/random-generators.component';

const routes: Routes = [
  { path: 'token', component: TokenComponent },
  { path: 'tribal', component: TribalComponent },
  { path: 'deckmuse', component: DeckMuseComponent },
  { path: 'janklord', component: JanklordCommanderGeneratorComponent },
  { path: 'deckstats', component: ArchidektDeckStatsComponent },
  { path: 'randomGenerators', component: RandomGeneratorsComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
