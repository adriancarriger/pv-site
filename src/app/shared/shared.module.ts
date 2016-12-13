import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonClearComponent } from './button-clear/button-clear.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ButtonClearComponent
  ],
  exports: [
    ButtonClearComponent
  ]
})
export class SharedModule { }
