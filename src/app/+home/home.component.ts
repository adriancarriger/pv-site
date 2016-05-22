import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
// import {StarterNavbarComponent} from '../starter-navbar';
import {AuthService} from '../services/auth.service';
import {FirebaseService} from '../services/firebase.service';

@Component({
  selector: 'as-home',
  templateUrl: 'app/+home/home.component.html',
  styleUrls: ['app/+home/home.component.css'],
  providers: [FirebaseService],
  directives: [
    ROUTER_DIRECTIVES,
  //  StarterNavbarComponent
  ]
})
export class HomeComponent implements OnInit {

  constructor(private auth: AuthService, private fb: FirebaseService) {}

  ngOnInit() {
    console.log('meow');
    // Example of getting Firebase data
    this.fb.getMyTest();
  }

}
