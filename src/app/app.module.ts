import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Necessary to import CommonModule in order to utilize *ngFor within app.component.html
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Necessary to import HttpClientModule in order to use a REST API call within app.component.ts
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


@NgModule({
  declarations: [
    AppComponent
  ],
  // Need to import HttpClientModule and CommonModule here as well to make the exported declarations of other modules available in the current module
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
