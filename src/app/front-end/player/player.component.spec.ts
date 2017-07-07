import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NouisliderModule } from 'ng2-nouislider';

import { PlayerComponent } from './player.component';
import { SliderComponent } from '../slider/slider.component';
import { UiModule } from '../../packages/ui/ui.module';
import { MediaService } from '../../core/media/media.service';
import { MockApiService } from '../../core/media/media.service.spec';
import { ApiService } from '../../core/api/api.service';
import { SharedModule } from '../../shared/shared.module';


describe('PlayerComponent', () => {
  let component: PlayerComponent;
  let fixture: ComponentFixture<PlayerComponent>;
  let mockApiService: MockApiService;
  beforeEach(async(() => {
    mockApiService = new MockApiService();
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        NouisliderModule
      ],
      declarations: [
        PlayerComponent,
        SliderComponent
      ],
      providers: [
        MediaService,
        { provide: ApiService, useValue: mockApiService }
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
