/**
 * @module FrontEndModule
 */ /** */
import { Component } from '@angular/core';
/**
 * @whatItDoes Returns the {@link FrontEndComponent} view.
 * @consumers {@link FrontEndModule}, {@link FrontEndRoutingModule}
 */
@Component({
  selector: 'app-front-end',
  templateUrl: './front-end.component.html',
  styleUrls: ['./front-end.component.scss']
})
export class FrontEndComponent { }
