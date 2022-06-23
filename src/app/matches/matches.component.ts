import { Component, OnInit } from '@angular/core';
import { Config } from '../configuration/config';
import { ApiTalkService } from '../services/apiTalk/api-talk.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {
  public cric1 = "../../assets/icon/1.jp2g"
  public cric2 = "../../assets/icon/2.jpg"
  public cric3 = "../../assets/icon/3.jpg"
  public cric4 = "../../assets/icon/4.jpg"
  matches: any;
  countries: any;
  matchDescription: any;
  playersInfo: any;
  country1_batsman: any[];
  country1_team: any[];
  country2_team: any[];
  country1_bowler: any[];
  country2_batsman: any[];
  country2_bowler: any[];
  country1_extras: any;
  country2_extras: any;
  country1_toss_win: any;
  country2_toss_win: any;

  constructor(private apiTalk: ApiTalkService) { }

  async ngOnInit() {
    await this.getCountries();
    await this.getMatches();
  }

  getMatches(){
    return this.apiTalk
    .getData(
      Config.API_URL + "match")
    .then((r) => {
      this.matches = r["json"];
      for(let i =0; i< this.matches.length; i++){
        for(let j=0; j< this.countries.length; j++){
          if(this.matches[i].country1_id == this.countries[j].id){
            this.matches[i].country1_name= this.countries[j].country_name;
          }
          if(this.matches[i].country2_id == this.countries[j].id){
            this.matches[i].country2_name= this.countries[j].country_name;
          }
          if(this.matches[i].toss_winner_team_id == this.countries[j].id){
            this.matches[i].toss_winner= this.countries[j].country_name;
          }
          if(this.matches[i].winner_team_id == this.countries[j].id){
            this.matches[i].match_winner= this.countries[j].country_name;
          }
        }
      }
      console.log(this.matches);
    });
  }

  getCountries() {
    return this.apiTalk
    .getData(
      Config.API_URL + "country")
    .then((r) => {
      this.countries = r["json"];
    });
  }

  showMatchResult(match){
    this.country1_team= [];
    this.country1_batsman= [];
    this.country1_bowler= [];
    this.country2_team= [];
    this.country2_batsman= [];
    this.country2_bowler= [];
    this.country1_extras= 0;
    this.country2_extras= 0;
    let country1_player_runs=0;
    let country2_player_runs=0;
    this.country1_toss_win= false
    this.country2_toss_win= false

    if(match.toss_winner_team_id == match.country1_id){
      this.country1_toss_win= true;
    }else{
      this.country2_toss_win=true;
    }
    return this.apiTalk
    .getData(
      Config.API_URL + "players/match/" + match.id)
      .then((r) => {
        this.playersInfo = r["json"];
        for(let i=0; i<this.playersInfo.length; i++){
          if(this.playersInfo[i].country_id == match.country1_id){
            this.country1_team.push(this.playersInfo[i])
          }
          else{
            this.country2_team.push(this.playersInfo[i])
          }
        }
        if(this.country1_team){
          for(let i=0; i<this.country1_team.length; i++){
            if(this.country1_team[i].balls_played){
              country1_player_runs += this.country1_team[i].run_scored; 
              this.country1_batsman.push(this.country1_team[i])
            }
            if(this.country1_team[i].overs){
              this.country1_bowler.push(this.country1_team[i])
            }
          }
        }
        if(this.country2_team){
          for(let i=0; i<this.country2_team.length; i++){
            if(this.country2_team[i].balls_played){
              country2_player_runs += this.country2_team[i].run_scored; 
              this.country2_batsman.push(this.country2_team[i])
            }
            if(this.country2_team[i].overs){
              this.country2_bowler.push(this.country2_team[i])
            }
          }
        }
        this.country1_extras= match.country1_runs - country1_player_runs;
        this.country2_extras= match.country2_runs - country2_player_runs;
        console.log(this.country1_team);        
        this.matchDescription= match;
    });
  }
}
