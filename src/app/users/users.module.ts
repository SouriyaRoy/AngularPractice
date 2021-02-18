import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsComponent } from './forms/forms.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [LoginComponent, SignupComponent, FormsComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    LoginComponent,
    SignupComponent,
    FormsComponent
  ]
})
export class UsersModule { }
