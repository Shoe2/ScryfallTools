import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeckMuseComponent } from './deck-muse/deck-muse.component';
import { HomeComponent } from './home/home.component';
import { JanklordCommanderGeneratorComponent } from './janklord-commander-generator/janklord-commander-generator.component';
import { TokenComponent } from './token/token.component';
import { TribalComponent } from './tribal/tribal.component';

const routes: Routes = [
  { path: 'token', component: TokenComponent },
  { path: 'tribal', component: TribalComponent },
  { path: 'deckmuse', component: DeckMuseComponent },
  { path: 'janklord', component: JanklordCommanderGeneratorComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
