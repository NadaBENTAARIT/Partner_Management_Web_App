import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Demande } from 'src/models/demande.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  constructor(private httpClient: HttpClient) { }

  authentificationURl="http://127.0.0.1:8888/demande/create";
  config = new HttpHeaders().set('Content-Type', 'application/json')
                                .set('Accept', 'application/json')
  
  connect(demande: Demande): Observable<Demande[]> {
    return this.httpClient.post<Demande[]>(this.authentificationURl,demande,{ headers: this.config });
}}
