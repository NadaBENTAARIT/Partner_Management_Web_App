import { Component, OnInit,Input } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HttpHeaders} from '@angular/common/http';

import { Router } from '@angular/router';

import { Partner } from 'src/models/partner.model';
import { ConnexionpartnerService } from 'src/app/services/connexionpartner.service';
@Component({
  selector: 'app-partnerconnexion',
  templateUrl: './partnerconnexion.component.html',
  styleUrls: ['./partnerconnexion.component.scss']
})
export class PartnerconnexionComponent implements OnInit {

  partner = new Partner("","","","",0,"","");

  erreur:boolean=false;
  constructor(private router: Router, private partnerService:ConnexionpartnerService) { }

  ngOnInit(): void {
  }


  onSubmit(f){
      
    //preparer l'input du service
     let input;
     

     input=JSON.stringify({ "login": this.partner.login, "password":this.partner.password });
     console.log("input",input);
     
     //appeler le back
    this.partnerService.connect(this.partner)
       .subscribe(
         (res) => {
           console.log("res",res);
           console.log('Appel reussi !');

        

           if(res.length!=0){
            console.log("success");
            let myObj = res[0];
            let key="partner";

            localStorage.setItem(key,JSON.stringify(myObj));
            console.log("zzzzzzzzzzzzzzzzzzz",JSON.parse(localStorage.getItem(key)).login);


            this.router.navigate(['accpartner']);


 
                      }
           else{  
             console.log('Erreur authentification  pas de resultat !!!' );
             this.erreur=true;
             this.partner.login="";
             this.partner.password="";

 
           }
         },
         (error) => {
           console.log('Erreur:Connexion non etablie au serveur! : ' + error);
           
         }
       );
        }
}

