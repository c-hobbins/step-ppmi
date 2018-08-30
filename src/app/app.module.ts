import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { AppComponent } from './app.component';
import { PiFormReactiveComponent } from './pi-form-reactive/pi-form-reactive.component';
import { MatStepperModule,
  MatSelectModule,
  MatIconModule,
  MatInputModule,
  MatButtonModule,
  MatRadioModule,
  MatFormFieldModule } from '@angular/material';
// components
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PiformStepperComponent } from './piform-stepper/piform-stepper.component';
// modules
// import { PdfViewerModule } from 'ng2-pdf-viewer';
// services
import { LovService } from './services/lov.service';

@NgModule({
  declarations: [
    AppComponent,
    PiformStepperComponent,
    PiFormReactiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatStepperModule,
    MatRadioModule,
    MatIconModule,
    MatInputModule, MatButtonModule, MatFormFieldModule,
    BrowserAnimationsModule
  ],
  providers: [
    LovService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

