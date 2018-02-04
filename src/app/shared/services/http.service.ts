import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpService {

  constructor(private http: Http) {}

  setRequestHeader(headers: Headers) {
    headers.append('responseType', 'json');
  }

  public getJSON(): Observable<any> {
    
    let jsonResult = this.http.get("data/test.json")
                    .map((res:any) => res.json());
    return jsonResult;

  }
}
