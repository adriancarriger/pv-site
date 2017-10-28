/**
 * @module ContactModule
 */ /** */
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


import { LegacyApiService } from '../core/legacy-api/legacy-api.service';
/**
 * @whatItDoes Returns the {@link ContactComponent} view.
 * @consumers {@link ContactModule}, {@link ContactRoutingModule}
 */
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  showForm = true;
  loginForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    message: ['', Validators.required]
  });
  constructor(
    public fb: FormBuilder,
    private legacyApiService: LegacyApiService,
    private cd: ChangeDetectorRef) { }
  onSubmit(event) {
    event.preventDefault();
    if (this.loginForm.valid) {
      this.showForm = false;
      setTimeout(() => {
        this.showForm = true;
        this.cd.markForCheck();
      }, 10000);
      this.legacyApiService.submitContactMessage(this.loginForm.value);
    }
  }
}
