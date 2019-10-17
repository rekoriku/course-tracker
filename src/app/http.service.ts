import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  public get(url): Observable<any> {
    //console.log(url);
    //console.log(this.http.get(url));
    return this.http.get(url);
  }

  public post(url, vals): Observable<any> {
    return this.http.post(url, vals);
  }

  public update(url, vals): Observable<any> {
    return this.http.delete(url, vals);
  }

  public delete(url): Observable<any> {
    return this.http.delete(url);
  }

}
