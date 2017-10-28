/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { ContactComponent } from './contact.component';
import { ContactModule } from './contact.module';
import { SharedModule } from '../shared/shared.module';
import { LegacyApiService } from '../core/legacy-api/legacy-api.service';

// describe('ContactComponent', () => {
//   let component: ContactComponent;
//   let fixture: ComponentFixture<ContactComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       imports: [ RouterTestingModule, SharedModule, ContactModule ],
//       providers: [LegacyApiService]
//       // declarations: [ ContactComponent ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(ContactComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
