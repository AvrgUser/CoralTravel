import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { ToureCardComponent } from './component/toure-card/toure-card.component';
import { ResetPaswordComponent } from './component/reset-pasword/reset-pasword.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { FooterComponent } from './component/footer/footer.component';
import { PopularTourComponent } from './component/popular-tour/popular-tour.component';
import { AccountComponent } from './page/account/account.component';


@NgModule({
  declarations: [
    AppComponent,
    ToureCardComponent,
    ResetPaswordComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    PopularTourComponent,
    AccountComponent
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
