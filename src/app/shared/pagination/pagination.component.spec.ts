import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Ng2PaginationModule } from 'ng2-pagination';

import { PaginationComponent } from './pagination.component';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ Ng2PaginationModule ],
      declarations: [ PaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should bubble', done => {
    component.pageChange.subscribe(x => {
      expect(x).toBe('event');
      done();
    });
    component.bubble('event');
  });

  it('should show all pages', () => {
    expect(component.showAll).toBe(false);
    component.showAllPages();
    expect(component.showAll).toBe(true);
  });
});
