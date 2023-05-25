import { Injectable } from '@angular/core';
import { Partner } from 'src/models/partner.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ConnexionpartnerService {

  constructor(private httpClient: HttpClient) { }
  authentificationURl="http://127.0.0.1:8888/partner/connect";
  config = new HttpHeaders().set('Content-Type', 'application/json')
                                .set('Accept', 'application/json')
  
  connect(partner: Partner): Observable<Partner[]> {
    return this.httpClient.post<Partner[]>(this.authentificationURl,partner,{ headers: this.config });
}}

