import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MomentModule } from 'angular2-moment';

import { SermonsListComponent } from './sermons-list.component';

describe('SermonsListComponent', () => {
  let component: SermonsListComponent;
  let fixture: ComponentFixture<SermonsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MomentModule ],
      declarations: [ SermonsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SermonsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
