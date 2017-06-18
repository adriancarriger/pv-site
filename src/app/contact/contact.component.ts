/**
 * @module ContactModule
 */ /** */
import { Component } from '@angular/core';
/**
 * @whatItDoes Returns the {@link ContactComponent} view.
 * @consumers {@link ContactModule}, {@link ContactRoutingModule}
 */
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  onSubmit(event) {
    event.preventDefault();
    console.log('form submitted!', event);
  }
}
