import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './view-modules/login/login.component';
import { SanctionScreeningComponent } from './view-modules/sanction-screening/sanction-screening.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SanctionScreeningComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
