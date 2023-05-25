import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Admin } from 'src/models/admin.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})



export class ConnexionadminService {
  isAuth:boolean=false;

  constructor(private httpClient: HttpClient) { }

  authentificationURl="http://127.0.0.1:8888/admin/connect";
  config = new HttpHeaders().set('Content-Type', 'application/json')
                                .set('Accept', 'application/json')
  
  connect(admin: Admin): Observable<Admin[]> {
    this.isAuth=true;

    return this.httpClient.post<Admin[]>(this.authentificationURl,admin,{ headers: this.config });
  
                                            }

                                  }


