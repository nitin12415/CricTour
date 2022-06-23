import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule,} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatchesComponent } from './matches/matches.component';
import { VenueComponent } from './venue/venue.component';
import { PointTableComponent } from './point-table/point-table.component';
import { CountryComponent } from './country/country.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiTalkService } from './services/apiTalk/api-talk.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MatchesComponent,
    VenueComponent,
    PointTableComponent,
    CountryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatSidenavModule,
    MatTabsModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [ApiTalkService],
  bootstrap: [AppComponent]
})
export class AppModule { }
