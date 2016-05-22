import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
//import {StarterNavbarComponent} from '../starter-navbar';
import {AuthService} from '../services/auth.service';
import {FirebaseService} from '../services/firebase.service';

@Component({
  selector: 'as-starter-home',
  templateUrl: 'starter-home.component.html',
  styleUrls: ['starter-home.component.css'],
  providers: [FirebaseService],
  directives: [
    ROUTER_DIRECTIVES,
  //  StarterNavbarComponent
  ]
})
export class HomeComponent implements OnInit {
  
  constructor(private auth: AuthService, private fb: FirebaseService) {}
  
  ngOnInit() {
    // Example of getting Firebase data
    //this.fb.getMyTest();
  }

}
