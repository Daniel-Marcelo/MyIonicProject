import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { RequestOptionsArgs } from '@angular/http/src/interfaces';
import { Headers } from '@angular/http';

@Injectable()
export class CardService {

    headerDict = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
      }
      
      requestOptions: RequestOptionsArgs = {                                                                                                                                                                                 
        headers: new Headers(this.headerDict), 
      }

  constructor (
    private http: Http
  ) {}

  getDarkMag() {
    return this.http.get(`https://www.cardmarket.com/en/YuGiOh/MainPage/showSearchResult?searchFor=dark+magician`, this.requestOptions)
    .map((res:Response) => {
        console.log(res);
        return res;
    });
  }

}