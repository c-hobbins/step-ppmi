import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { AppComponent } from './app.component';
import { PiFormReactiveComponent } from './pi-form-reactive/pi-form-reactive.component';
import { MatStepperModule,
  MatIconModule,
  MatInputModule,
  MatButtonModule,
  MatRadioModule,
  MatFormFieldModule } from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PiformStepperComponent } from './piform-stepper/piform-stepper.component';

@NgModule({
  declarations: [
    AppComponent,
    PiformStepperComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatRadioModule,
    MatIconModule,
    MatInputModule, MatButtonModule, MatFormFieldModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

