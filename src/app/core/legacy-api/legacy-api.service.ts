import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LegacyApiService {

  constructor(private httpClient: HttpClient) { }

  submitContactMessage(input) {
    console.log(input);
    const postData = {
      'full-name': input.name,
      'contact-email': input.email,
      'contact-message': input.message
    };
    this.httpClient.post('https://api.pvbiblechurch.com/ajax-contact-form/', postData).subscribe(output => {
      console.log('Done!', output);
    });
  }

}
