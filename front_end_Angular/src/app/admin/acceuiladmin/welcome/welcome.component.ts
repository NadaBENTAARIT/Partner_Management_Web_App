import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  user =JSON.parse(localStorage.getItem('admin')).login;
  url =localStorage.getItem('url');
  
  constructor() {
    console.log(this.user)
   }


  ngOnInit(): void {
    
  }

}
