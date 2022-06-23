import { Component, OnInit } from '@angular/core';
import { Config } from 'app/configuration/config';
import { ApiTalkService } from 'app/services/apiTalk/api-talk.service';

@Component({
  selector: 'app-venue',
  templateUrl: './venue.component.html',
  styleUrls: ['./venue.component.scss']
})
export class VenueComponent implements OnInit {
  venues=[];
  venueLength=0;

  constructor(private apiTalk: ApiTalkService) { }

  ngOnInit(): void {
    this.getVenues();
  }

  getVenues() {
    return this.apiTalk
    .getData(
      Config.API_URL + "venue")
    .then((r) => {
      this.venues = r["json"];
      this.venueLength = this.venues.length;
      console.log(this.venues);
    });
  }

}
