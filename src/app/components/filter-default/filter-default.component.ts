import { Component, ElementRef, OnInit } from '@angular/core';
import { GlobalEventsService } from '../../services/global-events.service';

@Component({
  moduleId: module.id,
  selector: 'as-filter-default',
  templateUrl: 'filter-default.component.html',
  styleUrls: ['filter-default.component.css']
})
export class FilterDefaultComponent implements OnInit {
  public stuck = false;
  constructor(private globalEventsService: GlobalEventsService, public element: ElementRef) {

  }

  ngOnInit() {
    let el = this.element.nativeElement;

    let filterOffset = el.firstChild.offsetTop;
    let navHeight = document.getElementById('navbar').offsetHeight;

    let stickyPoint = filterOffset - navHeight;

    console.log(stickyPoint);

    this.globalEventsService.scroll$.subscribe(data => {
      let yPos = data.path[1].pageYOffset;
      this.stuck = yPos >= stickyPoint;
      console.log(this.stuck);
    });

  }

}
