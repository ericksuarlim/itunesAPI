import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ItunesService {

  baseUrl: string ="https://itunes.apple.com/search?"

  constructor(private http:HttpClient) {

  }

  getSearch(term: string , typeMedia: string ):Observable<any[]>{
    console.log(term + typeMedia);
    return this.http.jsonp<any>(this.baseUrl + "term=" + term + typeMedia , 'callback');
  }


}
