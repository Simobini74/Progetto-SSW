import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({providedIn: 'root'})

export class PostserviceService {
  baseURL: string;
  constructor (private http: HttpClient) {this.  baseURL=
    'https://eu-central-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/kvaas-giwjg/service/kvaas/incoming_webhook'; }
 
    requestKey = () =>{
      return fetch(this.baseURL + '/new', { method: 'POST' }) 
      .then(response => response.json(), error => alert(error))
    }
    getData =(key:string)=>{
      fetch(this.baseURL + '/get?key=' + key)      
      .then(response => response.json(), error => alert(error))
      
    } 
      
      
      
    
    
 


}