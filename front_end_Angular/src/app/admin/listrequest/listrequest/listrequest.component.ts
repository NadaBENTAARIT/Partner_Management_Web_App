import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HttpHeaders} from '@angular/common/http';

import { Router } from '@angular/router';

import {formatDate, LowerCasePipe} from '@angular/common';


import { Demande } from 'src/models/demande.model';
import { GestiondemandeService } from 'src/app/services/gestiondemande.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-listrequest',
  templateUrl: './listrequest.component.html',
  styleUrls: ['./listrequest.component.scss']
})
export class ListrequestComponent implements OnInit {
  


  demandes=[];
  etat=[]
  headers=["first_name","last_name","email","tel","description","etat","dateenvoie"];
  constructor(private router: Router,private gestiondemandeService:GestiondemandeService) { }

 erreur:boolean=true;

  ngOnInit(): void {
  

    this.gestiondemandeService.getRequestlist()
       .subscribe(
         (res) => {
           console.log("res",res);
           console.log('Appel reussi !');
           this.demandes=res;
           console.log("varrr:",this.demandes);
           for (let i = 0; i < res.length; i++) {
             if(res[i].etat=="accepted")
            this.etat.push(true)
            else
            this.etat.push(false)
            
          }
          console.log("étattttttttt",this.etat)
          
            
        },
          

         
         (error) => {
           console.log('Erreur:Connexion non etablie au serveur! : ' + error);
           
                    }
                   );
   }



   refusedemande(demande){
     if(demande['etat']=='en-attente'){
      this.gestiondemandeService.refuse(demande)
      .subscribe(
        (res) => {
         
          console.log('refuse with success !');
    
          this.ngOnInit();
    
         
    
          },
        (error) => {
          console.log('Erreur:Connexion non etablie au serveur! : ' + error);
          
        }
      );

     }
     else console.log("already accepted")
       
  }
                                   
                        


                        
  accept(demande){
    if(demande['etat']=='en-attente'){
    
    let input={"mailadmin":"tt1921294@gmail.com","demande":{       
      "first_name" :demande["first_name"],
      "last_name" :demande["last_name"],
     "birthdate"  :"",
    "email":demande["email"],
      "tel" :demande["tel"],
    "description":demande["description"],
    "etat":demande["etat"],
    "dateenvoie":demande["dateenvoie"]},
   "partner":{"login": demande["email"],      
      "first_name" :demande["first_name"],
      "last_name" :demande["last_name"],
      "email":demande["email"], 
      "tel" :demande["tel"],
      "password": "",
      "birthdate"  :demande["birthdate"] }
              }
    console.log(input)
    this.gestiondemandeService.sendMail(input) 
    .subscribe(
      (res) => {
        console.log("res",res);
        console.log('Appel reussi !');
        this.erreur=false;
        this.ngOnInit();
        
                 },

      
      (error) => {
        console.log('Erreur:Connexion non etablie au serveur! : ' + error);
        
                 }
                );
  }
}

}