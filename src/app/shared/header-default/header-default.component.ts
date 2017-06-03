import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-default',
  templateUrl: './header-default.component.html',
  styleUrls: ['./header-default.component.scss']
})
export class HeaderDefaultComponent {
  @Input() info;
  @Input() slug;

  scrollTo(slug, index, linkTo) {
    const element = document.querySelector(`#${slug}-${linkTo ? linkTo - 1 : index}`);
    if (element) { element.scrollIntoView(element); }
  }
}
