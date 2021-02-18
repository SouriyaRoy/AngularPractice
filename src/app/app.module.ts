import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {UsersModule} from './users/users.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BootstrapTutorialComponent } from './bootstrap-tutorial/bootstrap-tutorial.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatButtonModule} from '@angular/material/button';
import { MaterialComponent } from './material/material.component'
import {MatSliderModule} from '@angular/material/slider';
import { ChildCompAppComponent } from './child-comp-app/child-comp-app.component';
import { ChildCompEventEmitterComponent } from './child-comp-event-emitter/child-comp-event-emitter.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorComponent } from './error/error.component'
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    BootstrapTutorialComponent,
    MaterialComponent,
    ChildCompAppComponent,
    ChildCompEventEmitterComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    UsersModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSliderModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
