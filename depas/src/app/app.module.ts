import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PaymentsModule } from './payments/payments.module';
import { DepartamentsModule } from './departaments/departaments.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './material-modules';
import { NgEventBus } from 'ng-event-bus';
@NgModule({
  declarations: [
    AppComponent, PageNotFoundComponent
  ],
  imports: [
    AppMaterialModule,
    BrowserModule,
    
    AppRoutingModule,
    BrowserAnimationsModule,

    //modules app

    DepartamentsModule,
    PaymentsModule,

    //componets globals
  ],
  providers: [NgEventBus],
  bootstrap: [AppComponent]
})
export class AppModule { }
