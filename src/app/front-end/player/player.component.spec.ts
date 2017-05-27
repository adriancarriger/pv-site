import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NouisliderModule } from 'ng2-nouislider';

import { PlayerComponent } from './player.component';
import { SliderComponent } from '../slider/slider.component';
import { UiModule } from '../../packages/ui/ui.module';

describe('PlayerComponent', () => {
  let component: PlayerComponent;
  let fixture: ComponentFixture<PlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        UiModule,
        NouisliderModule
      ],
      declarations: [
        PlayerComponent,
        SliderComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
