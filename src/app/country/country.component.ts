import { Component, OnInit } from '@angular/core';
import { Config } from 'app/configuration/config';
import { ApiTalkService } from 'app/services/apiTalk/api-talk.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
  countries: any;
  players: any;
  selectedCountry: any;

  constructor(private apiTalk: ApiTalkService) { }

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries() {
    return this.apiTalk
    .getData(
      Config.API_URL + "country")
    .then((r) => {
      this.countries = r["json"];
      console.log(this.countries);
    });
  }

  showPlayers(country){
    this.selectedCountry= country;
    return this.apiTalk
    .getData(
      Config.API_URL + "players/country/" + country.id)
    .then((r) => {
      this.players = r["json"];
      console.log(this.players);
    });
  }
}
