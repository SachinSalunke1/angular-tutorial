import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  getNiftyData(){
    //let URL ='/url/api/option-chain-indices?symbol=NIFTY';
    return this.http.get('/url/api/option-chain-indices?symbol=NIFTY');
  }
}
