import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcomepartner',
  templateUrl: './welcomepartner.component.html',
  styleUrls: ['./welcomepartner.component.scss']
})
export class WelcomepartnerComponent implements OnInit {
  user =JSON.parse(localStorage.getItem('partner')).login;
  
  constructor() {
    console.log("oooooooooooo",this.user);
   }


  ngOnInit(): void {
    
  }

}
