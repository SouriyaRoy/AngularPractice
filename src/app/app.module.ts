import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {UsersModule} from './users/users.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BootstrapTutorialComponent } from './bootstrap-tutorial/bootstrap-tutorial.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatButtonModule} from '@angular/material/button';
import { MaterialComponent } from './material/material.component'

@NgModule({
  declarations: [
    AppComponent,
    BootstrapTutorialComponent,
    MaterialComponent,
  ],
  imports: [
    BrowserModule,
    UsersModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
