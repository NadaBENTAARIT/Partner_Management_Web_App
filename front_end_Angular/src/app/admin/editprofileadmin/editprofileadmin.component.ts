import { Component, OnInit,Input, ViewChild } from '@angular/core';
import { GestionadminService } from 'src/app/services/gestionadmin.service';

import { HttpClient } from '@angular/common/http';
import { HttpHeaders} from '@angular/common/http';

import { DatePipe } from '@angular/common'

import { Admin } from 'src/models/admin.model';
import { MenuadminComponent } from '../menuadmin/menuadmin.component';

@Component({
  selector: 'app-editprofileadmin',
  templateUrl: './editprofileadmin.component.html',
  styleUrls: ['./editprofileadmin.component.scss']
})


export class EditprofileadminComponent implements OnInit {
 
  logintest:string;
  first_name:string;
  last_name:string;
  password :string;
  email :string;
  login :string;
  birthdate :String;
  tel :Number;
  
admin:Admin;

  
 erreur:boolean;
  constructor( private adminService:GestionadminService,public datepipe: DatePipe
    ) { }





  ngOnInit(): void {
     
   
    
    console.log("session is",localStorage.getItem('admin'));
   

      
let d=new Date();
let now =this.datepipe.transform(d, 'yyyy-MM-dd');
this.birthdate=now;


    this.logintest =JSON.parse(localStorage.getItem('admin')).login;
    this.first_name =JSON.parse(localStorage.getItem('admin')).first_name;
    this.last_name =JSON.parse(localStorage.getItem('admin')).last_name;
    this.password =JSON.parse(localStorage.getItem('admin')).password;
    this.email =JSON.parse(localStorage.getItem('admin')).email;
    this.login =JSON.parse(localStorage.getItem('admin')).login;
    this.birthdate =JSON.parse(localStorage.getItem('admin')).birthdate;
    this.tel =JSON.parse(localStorage.getItem('admin')).tel;
  

   
    


  }


  onSubmit(f){

    if(this.first_name =="" || this.last_name=="" || this.birthdate=="" || this.email=="" || this.tel==0 || this.login=="")
    {
      
      this.erreur=true;
this.ngOnInit();

    }
    else{
      this.admin = new Admin(this.login,this.first_name,this.last_name,this.email,this.tel,this.password,this.birthdate);
      console.log("loginnn",this.logintest)
      
    //preparer l'input du service
     let input;
     
    //let  x=JSON.stringify(this.admin)
    //x=x.substring(1, x.length - 1);

let x={"login":this.admin.login,
"first_name":this.admin.first_name,
"last_name":this.admin.last_name,
"email":this.admin.email,
"tel":this.admin.tel,"password":this.admin.password,"birthdate":this.admin.birthdate}


input={ "logintest":this.logintest,
     "admin":x
       }
     //input=JSON.stringify(this.admin,this.passwordtest);
     console.log("input",input);
     
     //appeler le back
    this.adminService.updateprofile(input)
       .subscribe(
         (res) => {
           console.log("res",res);
           console.log('Appel reussi !');

        
           
           if(res.length!=0){
            console.log("success");
            console.log("ayaayaaya"+JSON.stringify(res));

          
          //------------------------------------------------
          console.log("session before",localStorage.getItem('admin'))
          localStorage.setItem('admin', JSON.stringify(res));
          console.log("session after",localStorage.getItem('admin'))
        

console.log("hhhhhhhhaaaaaaaaa");


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