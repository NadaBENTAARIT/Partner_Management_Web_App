
import { Component, OnInit,Input } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HttpHeaders} from '@angular/common/http';

import { Router } from '@angular/router';



import { Partner } from 'src/models/partner.model';
import { GestionpartnerService } from 'src/app/services/gestionpartner.service';
import { GestiondemandeService } from 'src/app/services/gestiondemande.service';

@Component({
  selector: 'app-listpartneracceuil',
  templateUrl: './listpartneracceuil.component.html',
  styleUrls: ['./listpartneracceuil.component.scss']
})
export class ListpartneracceuilComponent implements OnInit {  
  partner = new Partner("","","","",0,"","");
  partenaires=[];
  headers=["first_name","last_name","email","tel"];

  constructor(private router: Router,private GestionpartnerService:GestionpartnerService,private GestiondemandeService:GestiondemandeService) { }

  ngOnInit(): void {
  

    this.GestionpartnerService.getPartnerlist()
       .subscribe(
         (res) => {
           console.log("res",res);
           console.log('Appel reussi !');
           this.partenaires=res;
           console.log("varrr:",this.partenaires);

                    },

         
         (error) => {
           console.log('Erreur:Connexion non etablie au serveur! : ' + error);
           
                    }
                   );
   }

   //********************************************************************* */

deletepartner(email){
   
  this.GestionpartnerService.delete(email)
     .subscribe(
       (res) => {
        
         console.log('delete with success !');
         //this.router.navigate(['adminpartnerlistacceuil']);
         

        

                 },
       (error) => {
         console.log('Erreur:Connexion non etablie au serveur! : ' + error);
         
                   }
     );

     let input={"mailpartner":email};
         
    this.GestiondemandeService.delete(input)
  .subscribe(
    (res) => {
     
       console.log('delete partner');
      //this.router.navigate(['adminpartnerlistacceuil']);
      this.ngOnInit();

     

              },
    (error) => {
      console.log('Erreur:Connexion non etablie au serveur! : ' + error);
      
                }
  );
  this.ngOnInit();
                                         
}
//*************************************************************************** */
}