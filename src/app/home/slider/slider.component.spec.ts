import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderComponent } from './slider.component';
import { HomeModule } from '../home.module';

describe('SliderComponent', () => {
  let component: SliderComponent;
  let fixture: ComponentFixture<SliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HomeModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
