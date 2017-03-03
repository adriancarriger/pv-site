/**
 * @module SharedModule
 */ /** */
import { Component, Input } from '@angular/core';
/**
 * @whatItDoes Wraps conntent in a `button` element with minimal styling.
 */
@Component({
  selector: 'app-button-clear',
  templateUrl: './button-clear.component.html',
  styleUrls: ['./button-clear.component.scss']
})
export class ButtonClearComponent {
  /**
   * Attached to the `aria-label` property of the `button` element.
   */
  @Input() label: string;
  /**
   * Allows setting the `button` element's padding style.
   */
  @Input() padding: string;
}
