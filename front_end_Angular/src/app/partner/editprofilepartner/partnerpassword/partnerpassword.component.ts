import { Component, OnInit,Input } from '@angular/core';
import { GestionpartnerService } from 'src/app/services/gestionpartner.service';

import { HttpClient } from '@angular/common/http';
import { HttpHeaders} from '@angular/common/http';

import { Router } from '@angular/router';
import { DatePipe } from '@angular/common'

import { Partner } from 'src/models/partner.model';
@Component({
  selector: 'app-partnerpassword',
  templateUrl: './partnerpassword.component.html',
  styleUrls: ['./partnerpassword.component.scss']
})
export class PartnerpasswordComponent implements OnInit {
  passwordtest:string;
  passwordnew:string;

  logintest:string;
  first_name:string;
  last_name:string;
  password :string;
  email :string;
  login :string;
  birthdate :string;
  tel :Number;
  
partner:Partner;

  
erreur:boolean=false;

  constructor(private router: Router, private partnerService:GestionpartnerService ,public datepipe: DatePipe) { }

  ngOnInit(): void {
  

  this.logintest =JSON.parse(localStorage.getItem('partner')).login;
  
  this.login =JSON.parse(localStorage.getItem('partner')).login;
  this.first_name =JSON.parse(localStorage.getItem('partner')).first_name;
  this.last_name =JSON.parse(localStorage.getItem('partner')).last_name;
  this.password =JSON.parse(localStorage.getItem('partner')).password;
  this.email =JSON.parse(localStorage.getItem('partner')).email;
  this.birthdate =JSON.parse(localStorage.getItem('partner')).birthdate;
  this.tel =JSON.parse(localStorage.getItem('partner')).tel;
  this.partner = new Partner(this.login,this.first_name,this.last_name,this.email,this.tel,this.password,this.birthdate);
  

  }



 onSubmit(f){
  console.log('firstname',this.first_name)
    
  //preparer l'input du service
   let input;
   
  //let  x=JSON.stringify(this.admin)
  //x=x.substring(1, x.length - 1);

let x={"login":this.partner.login,
"first_name":this.partner.first_name,
"last_name":this.partner.last_name,
"email":this.partner.email,
"tel":this.partner.tel,"password":this.partner.password,"birthdate":this.partner.birthdate}


input={ "logintest":this.logintest,"passwordtest":this.passwordtest,"passwordnew":this.passwordnew,
   "partner":x
     }
   //input=JSON.stringify(this.admin,this.passwordtest);
   console.log("input",input);
   
   //appeler le back
  this.partnerService.updatepassword(input)
     .subscribe(
       (res) => {
         console.log("res",res);
         console.log('Appel reussi !');

      
         
         if(res["modification"]=="true"){
          console.log("success");
          console.log("ayaayaaya"+JSON.stringify(res));

        
        //------------------------------------------------
        console.log("session before",localStorage.getItem('partner'))
        localStorage.setItem('partner', JSON.stringify(res));
        console.log("session after",localStorage.getItem('partner'))

console.log("hhhhhhhhaaaaaaaaa");
this.passwordtest="";
  this.passwordnew="";

this.ngOnInit();


         }
         else{  
           console.log('Erreur in update password!!!' );
           this.erreur=true;

           this.passwordtest="";
           this.passwordnew="";


           

         }
       },
       (error) => {
         console.log('Erreur:Connexion non etablie au serveur! : ' + error);
         
       }
     );
 }

  
}

