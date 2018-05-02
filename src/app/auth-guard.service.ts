import { Injectable } from '@angular/core';
import { Router } from '@angular/router'
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor( private auth: AuthService, private router: Router ) { }

  canActivate() {
    return this.auth.userObsrv.map(user => {
      if(user) return true;

      this.router.navigate(['/login']);
      return false;
    })
  }
}
