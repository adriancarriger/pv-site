import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MomentModule } from 'angular2-moment';
import { Ng2PaginationModule } from 'ng2-pagination';

import { SermonsListComponent } from './sermons-list.component';
import { PaginationComponent } from '../pagination/pagination.component';

describe('SermonsListComponent', () => {
  let component: SermonsListComponent;
  let fixture: ComponentFixture<SermonsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MomentModule,
        Ng2PaginationModule
      ],
      declarations: [
        PaginationComponent,
        SermonsListComponent
      ]
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

  it('should return an art class', () => {
    expect(component.artClass(0)).toBe(component.artClasses[0]);
    expect(component.artClass(4)).toBe(component.artClasses[1]);
    expect(component.artClass(5)).toBe(component.artClasses[2]);
    expect(component.artClass(6)).toBe(component.artClasses[0]);
    expect(component.artClass(234)).toBe(component.artClasses[0]);
    expect(component.artClass(621)).toBe(component.artClasses[0]);
  });
});
