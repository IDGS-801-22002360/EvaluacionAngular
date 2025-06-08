import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ValidadorModule } from './validador/validador.module';
import { App } from './app';

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ValidadorModule
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }
