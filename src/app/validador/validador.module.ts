import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ValidadorComponent } from './validador.component';

@NgModule({
  declarations: [ValidadorComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ValidadorComponent]
})
export class ValidadorModule { }
