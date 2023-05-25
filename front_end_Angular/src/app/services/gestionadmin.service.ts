import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Admin } from 'src/models/admin.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GestionadminService {

  constructor(private httpClient: HttpClient) { }
  
  updateprofileURl="http://127.0.0.1:8888/admin/updateprofile";
  updatepasswordURl="http://127.0.0.1:8888/admin/updatepassword";

  config = new HttpHeaders().set('Content-Type', 'application/json')
                                .set('Accept', 'application/json')
  
    updateprofile(x:any): Observable<Admin[]> {
    return this.httpClient.post<Admin[]>(this.updateprofileURl,x,{ headers: this.config });
                                              
                                              }


    updatepassword(x:any): Observable<Admin[]> {
       return this.httpClient.post<Admin[]>(this.updatepasswordURl,x,{ headers: this.config });
                                                                                       

                              }
                            }