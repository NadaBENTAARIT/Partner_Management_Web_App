
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Demande } from 'src/models/demande.model';

import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class GestiondemandeService {

  constructor(private http: HttpClient) { }
  
  listdemandeURL="http://127.0.0.1:8888/demande/findAll";
  refusedemandeURL="http://127.0.0.1:8888/demande/refuse";
  sendmailURL="http://127.0.0.1:8888/admin/sendMail";
  deletedemandeURL="http://127.0.0.1:8888/demande/deleted";


  config = new HttpHeaders().set('Content-Type', 'application/json')
                                .set('Accept', 'application/json')
  
   getRequestlist(): Observable <Demande[]>{
    return this.http.get<Demande[]>(this.listdemandeURL);
 }

 refuse(input): Observable<any>  {
  console.log("input",input);
   
   return this.http.post<any[]>(this.refusedemandeURL,input,{ headers: this.config });
                                             
                                             
}
delete(mail): Observable<any>  {
  console.log("input",mail);
   
   return this.http.post<any[]>(this.deletedemandeURL,mail);
                                             
                                             
}                
     


//sendMail(x:any): Observable<Demande> {
//return this.http.post<Demande>(this.sendmailURL,x,{ headers: this.config });
 sendMail(input): Observable<any>  {
   console.log("input",input);
    
    return this.http.post<any[]>(this.sendmailURL,input,{ headers: this.config });
                                              
                                              
 }                                                                                   
}