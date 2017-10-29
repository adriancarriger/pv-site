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
  submitAttempted = false;
  formInstance = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    message: ['', Validators.required]
  });
  constructor(
    public fb: FormBuilder,
    private legacyApiService: LegacyApiService,
    private cd: ChangeDetectorRef) { }
  onSubmit() {
    event.preventDefault();
    this.submitAttempted = true;
    if (this.formInstance.valid) {
      this.showForm = false;
      setTimeout(() => {
        this.submitAttempted = false;
        this.showForm = true;
        this.cd.markForCheck();
      }, 60000);
      this.legacyApiService.submitContactMessage(this.formInstance.value)
        .then(data => {
          this.formInstance.reset();
        });
    }
  }
}
