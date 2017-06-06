import { Component, HostBinding, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-header-default',
  templateUrl: './header-default.component.html',
  styleUrls: ['./header-default.component.scss']
})
export class HeaderDefaultComponent implements OnChanges {
  @Input() info;
  @Input() slug;
  @HostBinding('class.has-links') hasLinks = false;

  ngOnChanges() {
    this.hasLinks = this.info && this.info.links;
  }

  scrollTo(slug, index, linkTo) {
    const element = document.querySelector(`#${slug}-${linkTo ? linkTo : index}`);
    if (element) { element.scrollIntoView(element); }
  }
}
