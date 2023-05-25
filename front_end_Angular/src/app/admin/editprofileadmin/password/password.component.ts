import { Component, OnInit,Input } from '@angular/core';
import { GestionadminService } from 'src/app/services/gestionadmin.service';

import { HttpClient } from '@angular/common/http';
import { HttpHeaders} from '@angular/common/http';

import { Router } from '@angular/router';
import { DatePipe } from '@angular/common'

import { Admin } from 'src/models/admin.model';
@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {
   
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
  
admin:Admin;

  
 erreur:boolean=true;

 err:boolean=true;


  
  constructor(private router: Router, private adminService:GestionadminService ,public datepipe: DatePipe) { }


  ngOnInit(): void { 



    this.logintest =JSON.parse(localStorage.getItem('admin')).login;
  
    this.login =JSON.parse(localStorage.getItem('admin')).login;
    this.first_name =JSON.parse(localStorage.getItem('admin')).first_name;
    this.last_name =JSON.parse(localStorage.getItem('admin')).last_name;
    this.password =JSON.parse(localStorage.getItem('admin')).password;
    this.email =JSON.parse(localStorage.getItem('admin')).email;
    this.birthdate =JSON.parse(localStorage.getItem('admin')).birthdate;
    this.tel =JSON.parse(localStorage.getItem('admin')).tel;
    this.admin = new Admin(this.login,this.first_name,this.last_name,this.email,this.tel,this.password,this.birthdate);
    
  
    }
  
  
  
   onSubmit(f){
    console.log('firstname',this.first_name)
      
    //preparer l'input du service
     let input;
     
    //let  x=JSON.stringify(this.admin)
    //x=x.substring(1, x.length - 1);
  
  let x={"login":this.admin.login,
  "first_name":this.admin.first_name,
  "last_name":this.admin.last_name,
  "email":this.admin.email,
  "tel":this.admin.tel,"password":this.admin.password,"birthdate":this.admin.birthdate}
  
  
  input={ "logintest":this.logintest,"passwordtest":this.passwordtest,"passwordnew":this.passwordnew,
     "admin":x
       }
     //input=JSON.stringify(this.admin,this.passwordtest);
     console.log("input",input);
     
     //appeler le back
    this.adminService.updatepassword(input)
       .subscribe(
         (res) => {
           console.log("res",res);
           console.log('Appel reussi !');
  
        
           
           if(res["modification"]=="true"){
            console.log("success");
            console.log("ayaayaaya"+JSON.stringify(res));
  
            this.erreur=false;
          
          //------------------------------------------------
          console.log("session before",localStorage.getItem('admin'))
          localStorage.setItem('admin', JSON.stringify(res));
          console.log("session after",localStorage.getItem('admin'))
  
  console.log("hhhhhhhhaaaaaaaaa");
  this.passwordtest="";
    this.passwordnew="";
  
  this.ngOnInit();
  
  
           }
           else{  
             console.log('Erreur in update password!!!' );
             this.erreur=true;
             this.err=false;
  
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