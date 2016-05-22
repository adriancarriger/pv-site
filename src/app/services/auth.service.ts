import { Injectable } from '@angular/core';
import {AuthHttp, tokenNotExpired} from 'angular2-jwt';
import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';
import {Http} from '@angular/http';
import {FirebaseService} from './firebase.service';

// Avoid name not found warnings
declare let Auth0Lock: any;
declare let Auth0: any;

@Injectable()
export class AuthService {

  lock = new Auth0Lock('ZoikOBvoT8pxABEwEh90HrAuTeBwSpdh', 'adriancarriger.auth0.com');

  auth0 = new Auth0({
    domain: 'adriancarriger.auth0.com',
    clientID: 'ZoikOBvoT8pxABEwEh90HrAuTeBwSpdh'
  });

  constructor(public http: Http, public fb: FirebaseService) {}

  login() {
    let options = {'rememberLastLogin': false, 'socialBigButtons': true, 'gravatar': false};
    this.lock.show(options, (err, profile, token, accessToken, state, refreshToken) => {
      if (err) {
        alert(err);
      }
      localStorage.setItem('profile', JSON.stringify(profile));
      localStorage.setItem('id_token', token);
      // Get Firebase delegation token
      let delOptions = {
        id_token: token,
        api: 'firebase',
        'scope': 'openid profile'
      };
      this.auth0.getDelegationToken(delOptions, (err, delegationResult) => {
          localStorage.setItem('fbToken', delegationResult.id_token);
          // Call Firebase custom authentication
          this.fb.auth(delegationResult.id_token);
      });
    });
  }

  logout() {
    localStorage.removeItem('profile');
    localStorage.removeItem('id_token');
    
  }

  loggedIn() {
    return tokenNotExpired();
  }

}
