import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})

export class ConnectionService {
 
  constructor(private http: HttpClient ) {} 
  
  public get (url:string){
   return this.http.get(url);
  }
  stadisticRequest(){
    return this.http.get("http://localhost:4000/")
  }
  newRequest(form:any){
    return this.http.post("http://localhost:4000/form",form)
  }
  
}
