import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-link',
  templateUrl: './nav-link.component.html',
  styleUrls: ['./nav-link.component.scss']
})
export class NavLinkComponent {
  @Input() innerOutline: boolean;
  @Input() link: string;
  @Input() src: string;
  @Input() srcset: string;
  @Input() tabindex: string;
  @Input() title: string;
}
