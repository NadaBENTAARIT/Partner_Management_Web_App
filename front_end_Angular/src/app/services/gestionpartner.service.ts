
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Partner } from 'src/models/partner.model';

import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class GestionpartnerService {

  constructor(private httpClient: HttpClient) { }
  
  listpartnerURL="http://127.0.0.1:8888/partner/list";
  deletepartnerURL="http://127.0.0.1:8888/partner/delete";
  updateprofileURl="http://127.0.0.1:8888/partner/updateprofile";
  updatepasswordURl="http://127.0.0.1:8888/partner/updatepassword";

  config = new HttpHeaders().set('Content-Type', 'application/json')
                                .set('Accept', 'application/json')
  
  getPartnerlist(): Observable <Partner[]>
                                           {
    return this.httpClient.get<Partner[]>(this.listpartnerURL);

                                           }


  delete(login): Observable <Partner> 
                                          {
                                            console.log(login);
    return this.httpClient.post<Partner>(this.deletepartnerURL+'/'+login,login);

                                          }




 updateprofile(x:any): Observable<Partner[]> {
 return this.httpClient.post<Partner[]>(this.updateprofileURl,x,{ headers: this.config });
                                                                                      
                                                                                      }
                                        
                                        
  updatepassword(x:any): Observable<Partner[]> {
   return this.httpClient.post<Partner[]>(this.updatepasswordURl,x,{ headers: this.config });
                                                                                                                               
                                        
                                                                      }







                                        }