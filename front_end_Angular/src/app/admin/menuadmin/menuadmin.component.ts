import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menuadmin',
  templateUrl: './menuadmin.component.html',
  styleUrls: ['./menuadmin.component.scss']
})
export class MenuadminComponent implements OnInit {
  first_name:string; 
  last_name :string;
  



  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log("Menu is reloaded")
    this.first_name=JSON.parse(localStorage.getItem("admin")).first_name;
    this.last_name=JSON.parse(localStorage.getItem("admin")).last_name;
    console.log("ppppp",this.first_name);
   

                   }
  deconnexion()
{
  console.log("je suis clique");
   localStorage.removeItem("partner");
   this.router.navigate(['acceuil']);
}

}
