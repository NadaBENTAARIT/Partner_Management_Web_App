import { Component, OnInit,Input } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';

import { Admin } from 'src/models/admin.model';
import { ConnexionadminService } from 'src/app/services/connexionadmin.service';
import { empty } from 'rxjs';



@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {
  
  admin = new Admin("","","","",0,"","");

  erreur:boolean=false;

  constructor(private router: Router, private adminService:ConnexionadminService) { }

  ngOnInit(): void {}
  onSubmit(f){
      
    //preparer l'input du service
     let input;
     

     input=JSON.stringify({ "login": this.admin.login, "password":this.admin.password });
     console.log("input",input);
     
     //appeler le back
    this.adminService.connect(this.admin)
       .subscribe(
         (res) => {
           console.log("res",res);
           console.log('Appel reussi !');

        
           
           if(res.length!=0){

            console.log("success");
            this.erreur=false;
            let myObj = res;
            //console.log("fffffffffffffffffffffffffffff",res["birthdate"]);
            let key="admin";
            let x=myObj[0];
            console.log("json of admin", x)
            localStorage.setItem(key,JSON.stringify(x));
            console.log("in connexion comp",JSON.parse(localStorage.getItem(key)).id)
            console.log("************************************")
            
          //------------------------------------------------
          

            this.router.navigate(['adminacceuil']);

 
           }
           else{  
             console.log('Erreur authentification !!!' );
             this.erreur=true;
              this.admin.login="";
              this.admin.password="";
 
           }
         },
         (error) => {
           console.log('Erreur:Connexion non etablie au serveur! : ' + error);
           
         }
       );
   }
                                                  }
