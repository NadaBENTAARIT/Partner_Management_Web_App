import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import {formatDate} from '@angular/common';
import { Demande } from 'src/models/demande.model';
import { InscriptionService } from 'src/app/services/inscription.service';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {
  demande = new Demande("","","","",0,"","en-attente","");

  erreurformulaire:boolean=false;

  erreur:boolean=true;
  constructor(private router: Router, private inscriptionService:InscriptionService,public datepipe: DatePipe) { }

  ngOnInit(): void { }


  
  onSubmit(f){
      
    
    if(this.demande.first_name=="" || this.demande.last_name=="" || this.demande.birthdate=="" || this.demande.email=="" || this.demande.tel==0 || this.demande.description=="")
          {
            this.erreurformulaire=true;
this.ngOnInit();

          }
          else{

    //preparer l'input du service
     let input;


     
     let d=new Date();
     let now =this.datepipe.transform(d, 'yyyy-MM-dd');
     this.demande.dateenvoie=now;
     input=JSON.stringify({ "first_name": this.demande.first_name, "last_name": this.demande.last_name,"birthdate": this.demande.birthdate,"email": this.demande.email,"tel": this.demande.tel,"description": this.demande.description,"etat": this.demande.etat,"dateenvoie:": this.demande.dateenvoie});
     console.log("input",input);
     
     //appeler le back
    this.inscriptionService.connect(this.demande)
       .subscribe(
         (res) => {
           console.log("res",res);
           console.log('Appel reussi !');
this.erreur=false;
        this.demande.first_name="";
        this.demande.last_name="";
        this.demande.email="";
        this.demande.tel=0;
        this.demande.birthdate="";
        this.demande.description="";


this.ngOnInit();

 
           },
          
 
          
        
         (error) => {
           console.log('Erreur:Connexion non etablie au serveur! : ' + error);
           
         }
       );
   }
  }
}
