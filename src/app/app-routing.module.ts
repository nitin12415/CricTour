import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryComponent } from './country/country.component';
import { MatchesComponent } from './matches/matches.component';
import { PointTableComponent } from './point-table/point-table.component';
import { VenueComponent } from './venue/venue.component';

const routes: Routes = [
  { path: 'country', component: CountryComponent},
  { path: 'match', component: MatchesComponent},
  { path: 'venue', component: VenueComponent},
  { path: 'point-table', component: PointTableComponent},
  { path: '', component: MatchesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
