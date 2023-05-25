import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accadmin',
  templateUrl: './accadmin.component.html',
  styleUrls: ['./accadmin.component.scss']
})
export class AccadminComponent implements OnInit {
  
  
  constructor() { }

  ngOnInit(): void {
   
    console.log("in acc admin comp",JSON.parse(localStorage.getItem("admin")).id)
  }
  
 
  

}
