import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menupartner',
  templateUrl: './menupartner.component.html',
  styleUrls: ['./menupartner.component.scss']
})
export class MenupartnerComponent implements OnInit {
  first_name:string; 
  last_name :string;
  



  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log("Menu is reloaded")
    this.first_name=JSON.parse(localStorage.getItem("partner")).first_name;
    this.last_name=JSON.parse(localStorage.getItem("partner")).last_name;
   

                   }
  deconnexion()
{
  console.log("je suis clique");
   localStorage.removeItem("partner");
   this.router.navigate(['acceuil']);
}

}
