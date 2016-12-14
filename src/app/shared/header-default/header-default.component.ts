import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-default',
  templateUrl: './header-default.component.html',
  styleUrls: ['./header-default.component.scss']
})
export class HeaderDefaultComponent {
  @Input() info;
}
