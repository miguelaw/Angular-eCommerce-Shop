import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './../auth.service';

@Component({
  selector: 'mw-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {

  constructor( public auth: AuthService ) {}

  logout() {
    this.auth.logout();
  }

}
