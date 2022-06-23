import { Component, OnInit } from '@angular/core';
import { Config } from 'app/configuration/config';
import { ApiTalkService } from 'app/services/apiTalk/api-talk.service';

@Component({
  selector: 'app-point-table',
  templateUrl: './point-table.component.html',
  styleUrls: ['./point-table.component.scss']
})
export class PointTableComponent implements OnInit {
  table: any;

  constructor(public apiTalk: ApiTalkService) { }

  ngOnInit(): void {
    this.getPointTable();
  }

  getPointTable() {
    return this.apiTalk
    .getData(
      Config.API_URL + "points-table")
    .then((r) => {
      this.table = r["json"];
    });
  }
}
