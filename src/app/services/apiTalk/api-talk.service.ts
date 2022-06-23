import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiTalkService {

  constructor(private http: HttpClient) { }

  async getData(passed_url: any) {
    return this.http
      .get(passed_url, {
        headers: {'Content-Type': 'application/json' },
      })
      .toPromise()
      .then(
        (result) => {          
          let res: any = {};
          res['json'] = result;
          res['status'] = 200;
          return res;
        },
        (err) => {
          return err.error;
        }
      )
      .catch((Error) => {
        Error['json'] = JSON.parse(Error['_body']);
        return Error;
      });
  }
}
