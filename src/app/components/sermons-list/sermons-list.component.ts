import { Component, Input, ElementRef, OnChanges, OnInit } from '@angular/core';
import { SearchSermons } from '../../pipes/search-sermons.pipe';
import { Array } from '../../pipes/array.pipe';
import { FromUnixPipe, DateFormatPipe } from 'angular2-moment';
import { PaginationComponent } from '../pagination/index';
import { PaginatePipe, IPaginationInstance, PaginationService } from 'ng2-pagination';
import { AudioService } from '../../services/audio.service';
import { OrderBy } from '../../pipes/order-by.pipe';
import { GlobalEventsService } from '../../services/global-events.service';

@Component({
  moduleId: module.id,
  selector: 'as-sermons-list',
  templateUrl: 'sermons-list.component.html',
  styleUrls: ['sermons-list.component.css'],
  pipes: [SearchSermons, FromUnixPipe, DateFormatPipe, PaginatePipe, Array, OrderBy],
  directives: [PaginationComponent],
  providers: [PaginationService]
})
export class SermonsListComponent implements OnChanges, OnInit {
  @Input() sermons;
  @Input() filterValues;
  @Input() lastChange;
  public filteredItems = 0;
  public page;
  public current;
  public domHeight;
  public domScroll;
  public config: IPaginationInstance = {
      id: 'custom',
      itemsPerPage: 25,
      currentPage: 1
  };
  constructor(public audioService: AudioService, public element: ElementRef, public globalEventsService: GlobalEventsService) {
    this.audioService.currentAudio$.subscribe(data => {
      this.current = data;
    });
  }
  ngOnInit() {
    this.globalEventsService.scroll$.subscribe(data => {
      let yPos = data.path[1].pageYOffset;
      this.domScroll = yPos;
    });
  }
  ngOnChanges(changes) {
      console.log('Change detected');
      this.checkHeight();
      
  }

  pageChange() {
    console.log('Page change');
    //this.lastChange = new Date().getTime();
    //*
    this.checkHeight();
    setTimeout( () => {
      console.log('Page change 2');
      this.checkHeight();
    }, 50);
    //*/
  }

  checkHeight() {
    //console.log('checking height');
    //console.log(this.element);
      let newHeight = this.element.nativeElement.firstChild.offsetHeight;
      console.log(newHeight, this.domHeight);

      let navs = 54 + 50;
      let offsetTop = this.element.nativeElement.offsetTop;
      let offset = (offsetTop - navs);
      let diff = (offset -  this.domScroll) * -1;

      //console.log('Offset: ' + offset + ', Scroll: ' + this.domScroll + ', Diff: ' + diff);


      if (newHeight < this.domHeight) {
        
        console.log('Changing height');
        
        //this.domHeight;

        //this.domScroll;

        

        let heightChange = this.domHeight - newHeight;
        let change;
        if (diff > heightChange) {
          change = heightChange;
        }
        else {
          change = diff;
        }

        //console.log('ScrollChange: ' + change + ', BoxChanged: ' + heightChange);
        let newScroll = this.domScroll - change;
        //console.log('New Scroll Position: ' + newScroll);
        window.scrollTo(0, newScroll);
        
        //console.log('Change: ' + heightChange);



        let changeScroll;
        if (heightChange > offset) {
          changeScroll = offset;
        }
        else {
          changeScroll = heightChange;
        }

        //console.log('ChangeScroll: ' + changeScroll);





      }
      
      this.domHeight = newHeight;
  }




}
