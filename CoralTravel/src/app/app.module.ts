import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { ToureCardComponent } from './component/toure-card/toure-card.component';


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
export class AppModule { }
