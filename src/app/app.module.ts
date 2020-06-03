import { MldModule } from 'manulife-design';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [AppComponent, LandingComponent, FormComponent],
  imports: [BrowserModule, AppRoutingModule, MldModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
