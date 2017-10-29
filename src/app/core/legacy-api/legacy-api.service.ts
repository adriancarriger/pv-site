import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LegacyApiService {

  constructor(private httpClient: HttpClient) { }

  submitContactMessage(input) {
    const url = 'https://api.pvbiblechurch.com/ajax-contact-form/';
    const postData = new FormData();
    postData.append('full-name', input.name);
    postData.append('contact-email', input.email);
    postData.append('contact-message', input.message);
    this.httpClient.post(url, postData).subscribe(output => {
      console.log('Done!', output);
    });
  }
}
