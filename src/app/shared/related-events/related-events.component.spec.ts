import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {ActivatedRoute, Route } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { RelatedEventsComponent } from './related-events.component';
import { SharedModule } from '../shared.module';
import { ApiService } from '../../core/api/api.service';
import { MockApiService } from '../../core/media/media.service.spec';

describe('RelatedEventsComponent', () => {
  // let component: RelatedEventsComponent;
  // let fixture: ComponentFixture<RelatedEventsComponent>;
  // let mockApiService: MockApiService;
  // const config: Route[] = [
  //   { path: '', component: RelatedEventsComponent }
  // ];

  // beforeEach(async(() => {
  //   mockApiService = new MockApiService();
  //   TestBed.configureTestingModule({
  //     imports: [
  //       SharedModule,
  //       RouterTestingModule.withRoutes(config),
  //     ],
  //     providers: [
  //       { provide: ApiService, useValue: mockApiService }
  //     ]
  //   })
  //   .compileComponents();
  // }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(RelatedEventsComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
