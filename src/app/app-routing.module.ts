import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BootstrapTutorialComponent } from './bootstrap-tutorial/bootstrap-tutorial.component'
import { MaterialComponent } from './material/material.component'
import { LoginComponent } from './users/login/login.component'
import { SignupComponent } from './users/signup/signup.component'
import { ErrorComponent } from './error/error.component'
import { APICallComponent } from './api-call/api-call.component';

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
  },
  {
    path : 'apicall',
    component:APICallComponent
  },
  {
    path : 'module2', loadChildren:() => import ('./modular-routing-2/modular-routing-2.module')
    .then(mod => mod.ModularRouting2Module)   
    //lazy loading, when required this module will be loaded or else not
  },
  {
    path : 'module1', loadChildren:() => import ('./modular-routing/modular-routing.module')
    .then(mod => mod.ModularRoutingModule)  
    //lazy loading, when required this module will be loaded or else not
  },
  {
    path:'pracform', loadChildren:() => import ('./prac-form/prac-form.module')
    .then(mod => mod.PracFormModule)
    //lazy loading, when required this module will be loaded or else not
  },

  // {
  //   path : '**', //wildcard, when a route is not found this page opens by default
  //   component:ErrorComponent
  // }
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
