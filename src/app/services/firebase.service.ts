import { Injectable } from '@angular/core';
import { FIREBASE_ROOT } from '../config';

const FIREBASE_TESTS = `${FIREBASE_ROOT}/tests`;

declare let Firebase: any;

@Injectable()
export class FirebaseService {
  public rootRef;
  public testsRef;
  
  constructor() {
      this.rootRef = new Firebase(FIREBASE_ROOT);
      this.testsRef = new Firebase(FIREBASE_TESTS);
  }
  
  // Firebase Custom Authentication - https://www.firebase.com/docs/web/guide/login/custom.html
  auth(token) {
    this.rootRef.authWithCustomToken(token, (error, authData) => {
      if (error) {
        console.log('Login Failed!', error);
      } else {
        localStorage.setItem('uid', authData.uid);
      }
    });
  }
  
  // Test Examples
  getMyTest() {
      let meow = this.testsRef.child( localStorage.getItem('uid') );
      meow.on('value', function(snapshot) {
        console.log(snapshot.val());
      }, function (errorObject) {
        console.log('The read failed: ' + errorObject.code);
      });
  }
  setMyWriteTest() {
    let meow = this.testsRef.child( localStorage.getItem('uid') );
    meow.set('meow-set!');
  }

}
