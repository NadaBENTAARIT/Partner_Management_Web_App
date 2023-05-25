import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ConnexionadminService } from './connexionadmin.service';
import { Injectable } from '@angular/core';

import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router,private connexionadminService:ConnexionadminService) { }

  canActivate(
    
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
   if(this.connexionadminService.isAuth) {
     console.log("value is ",this.connexionadminService.isAuth)
    return true;
  } else {
    console.log("value is ",this.connexionadminService.isAuth)
    this.router.navigate(['adminconnexion']);
  }
}
}