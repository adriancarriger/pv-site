/**
 * @module HomeModule
 */ /** */
import { Component } from '@angular/core';
/**
 * @whatItDoes Returns the {@link HomeComponent} view.
 * @consumers {@link HomeModule}, {@link HomeRoutingModule}
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  tempImage = 'https://pvbiblechurch.com/wp-content/uploads/mp/image-cache/site/0/childrens-church-23s.cf4d585d0a4c5ea87c649e01164cf12c.jpeg';
}
