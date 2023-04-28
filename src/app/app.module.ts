import { Component, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { ToureCardComponent } from './component/toure-card/toure-card.component';
import * as coral_api from '../api';

@NgModule({
  declarations: [
    AppComponent,
    ToureCardComponent
  ],
  imports: [
    BrowserModule,
  ],
  entryComponents: [
    AppComponent,
  ],
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule implements OnInit {
  
  ngOnInit(){
    console.log(coral_api.GetCities())
  }
}
