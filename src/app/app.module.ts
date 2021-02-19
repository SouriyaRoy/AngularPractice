import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BootstrapTutorialComponent } from './bootstrap-tutorial/bootstrap-tutorial.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatButtonModule } from '@angular/material/button';
import { MaterialComponent } from './material/material.component'
import { MatSliderModule } from '@angular/material/slider';
import { ChildCompAppComponent } from './child-comp-app/child-comp-app.component';
import { ChildCompEventEmitterComponent } from './child-comp-event-emitter/child-comp-event-emitter.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorComponent } from './error/error.component'
import { HttpClientModule } from '@angular/common/http';
import { APICallComponent } from './api-call/api-call.component';
import { Test1Component } from './modular-routing/test1/test1.component';
import { Test2Component } from './modular-routing/test2/test2.component'
import { ModularRoutingModule } from './modular-routing/modular-routing.module'
import { ModularRouting2Module } from './modular-routing-2/modular-routing-2.module'

@NgModule({
  declarations: [
    AppComponent,
    BootstrapTutorialComponent,
    MaterialComponent,
    ChildCompAppComponent,
    ChildCompEventEmitterComponent,
    ErrorComponent,
    APICallComponent,
    Test1Component,
    Test2Component,
  ],
  imports: [
    BrowserModule,
    UsersModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSliderModule,
    AppRoutingModule,
    HttpClientModule,
    ModularRoutingModule,
    ModularRouting2Module,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
