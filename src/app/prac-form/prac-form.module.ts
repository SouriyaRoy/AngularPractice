import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxLoadingModule } from 'ngx-loading'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {NgxSpinnerModule} from 'ngx-spinner'
import { PracFormRoutingModule } from './prac-form-routing.module';
import { BootFormComponent } from './boot-form/boot-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';


@NgModule({
  declarations: [BootFormComponent, ReactiveFormComponent],
  imports: [
    CommonModule,
    PracFormRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    NgxLoadingModule
  ]
})
export class PracFormModule { }
