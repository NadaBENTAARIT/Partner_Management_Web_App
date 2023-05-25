
import { Component, OnInit,Input, ViewChild } from '@angular/core';
import { GestionpartnerService } from 'src/app/services/gestionpartner.service';

import { HttpClient } from '@angular/common/http';
import { HttpHeaders} from '@angular/common/http';

import { DatePipe } from '@angular/common'

import { Partner } from 'src/models/partner.model';

@Component({
  selector: 'app-editprofilepartner',
  templateUrl: './editprofilepartner.component.html',
  styleUrls: ['./editprofilepartner.component.scss']
})


export class EditprofilepartnerComponentt implements OnInit {
  
  
  logintest:string;
  first_name:string;
  last_name:string;
  password :string;
  email :string;
  login :string;
  birthdate :String;
  tel :Number;
  
partner:Partner;

  
 erreur:boolean;
  constructor( private partnerService:GestionpartnerService,public datepipe: DatePipe
    ) { }





  ngOnInit(): void {
     
    console.log("**********************************************")
    
    console.log("**********************************************")
    this.logintest =JSON.parse(localStorage.getItem('partner')).login;
    this.first_name =JSON.parse(localStorage.getItem('partner')).first_name;
    this.last_name =JSON.parse(localStorage.getItem('partner')).last_name;
    this.password =JSON.parse(localStorage.getItem('partner')).password;
    this.email =JSON.parse(localStorage.getItem('partner')).email;
    this.login =JSON.parse(localStorage.getItem('partner')).login;
    this.birthdate =JSON.parse(localStorage.getItem('partner')).birthdate;
    this.tel =JSON.parse(localStorage.getItem('partner')).tel;
    
    console.log("session is",localStorage.getItem('partner'));
   

      
let d=new Date();
let now =this.datepipe.transform(d, 'yyyy-MM-dd');
this.birthdate=now;


    
  }


  onSubmit(f){

    if(this.first_name =="" || this.last_name=="" || this.birthdate=="" || this.email=="" || this.tel==0 || this.login=="")
    {
      
      this.erreur=true;
this.ngOnInit();

    }
    else{
      this.partner = new Partner(this.login,this.first_name,this.last_name,this.email,this.tel,this.password,this.birthdate);
      console.log("loginnn",this.logintest)
    console.log('firstname',this.first_name)
     let input;
     
    let x={"login":this.partner.login,
"first_name":this.partner.first_name,
"last_name":this.partner.last_name,
"email":this.partner.email,
"tel":this.partner.tel,"password":this.partner.password,"birthdate":this.partner.birthdate}


input={ "logintest":this.logintest,
     "partner":x
       }
    this.partnerService.updateprofile(input)
       .subscribe(
         (res) => {
           console.log("res",res);
           console.log('Appel reussi !');
           if(res.length!=0){
            console.log("success");
            console.log("ayaayaaya"+JSON.stringify(res));

            this.erreur=false;
          
          //------------------------------------------------
          console.log("session before",localStorage.getItem('partner'))
          localStorage.setItem('admin', JSON.stringify(res));
          console.log("session after",localStorage.getItem('partner'))

             console.log("hhhhhhhhaaaaaaaaa");
              localStorage.setItem('partner',JSON.stringify(this.partner))


this.ngOnInit();

 
           }
           else{  
             console.log('Erreur in update !!!' );
             this.erreur=true;
             
 
           }
         },
         (error) => {
           console.log('Erreur:Connexion non etablie au serveur! : ' + error);
           
         }
       );
   }
  
  
  }
}
