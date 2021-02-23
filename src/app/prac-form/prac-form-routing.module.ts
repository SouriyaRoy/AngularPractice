import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BootFormComponent } from './boot-form/boot-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component'

const routes: Routes = [
  {
    path:'boot_form',
    component:BootFormComponent
  },
  {
    path:'reactive_form',
    component:ReactiveFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PracFormRoutingModule { }
