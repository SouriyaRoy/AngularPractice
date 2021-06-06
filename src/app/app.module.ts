import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
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
import { Test2Component } from './modular-routing/test2/test2.component';
import { Lazy1Component } from './lazy1/lazy1.component';
import { Lazy2Component } from './lazy2/lazy2.component';
import { PracFormModule } from './prac-form/prac-form.module';
import { FeedComponent } from './feed/feed.component';
import { ViewsComponent } from './views/views.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxLoadingModule } from 'ngx-loading'
//import { ModularRoutingModule } from './modular-routing/modular-routing.module'
//import { ModularRouting2Module } from './modular-routing-2/modular-routing-2.module'

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
    Lazy1Component,
    Lazy2Component,
    FeedComponent,
    ViewsComponent,
    YoutubeComponent,
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
    FormsModule,
    PracFormModule,
    YouTubePlayerModule,
    NgxSpinnerModule,
    NgxLoadingModule.forRoot({})
    //ModularRoutingModule,
    //ModularRouting2Module,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
