import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { RelatedSermonsComponent } from './related-sermons.component';
import { SharedModule } from '../shared.module';
import { ApiService } from '../../core/api/api.service';
import { MockApiService } from '../../core/media/media.service.spec';

// describe('RelatedSermonsComponent', () => {
//   let component: RelatedSermonsComponent;
//   let fixture: ComponentFixture<RelatedSermonsComponent>;
//   let mockApiService: MockApiService;

//   beforeEach(async(() => {
//     mockApiService =  new MockApiService();
//     TestBed.configureTestingModule({
//       imports: [
//         RouterTestingModule,
//         SharedModule,
//         { provide: ApiService, useValue: mockApiService }
//       ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(RelatedSermonsComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
