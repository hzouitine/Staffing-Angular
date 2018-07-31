import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './module/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StaffingModule } from './staffing/staffing.module';
import * as moment from 'moment';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
moment.locale('fr');
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
     ReactiveFormsModule,
    HeaderModule,
    StaffingModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
