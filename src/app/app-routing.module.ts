import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BootstrapTutorialComponent } from './bootstrap-tutorial/bootstrap-tutorial.component'
import { MaterialComponent } from './material/material.component'
import { LoginComponent } from './users/login/login.component'
import { SignupComponent } from './users/signup/signup.component'

const routes: Routes = [
  {
    path : 'bootstarp-tutorial',
    component:BootstrapTutorialComponent
  },
  {
    path : 'material',
    component:MaterialComponent
  },
  {
    path : 'login',
    component:LoginComponent
  },
  {
    path : 'signup',
    component:SignupComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
