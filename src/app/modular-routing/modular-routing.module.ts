import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModularRoutingRoutingModule } from './modular-routing-routing.module';

console.warn("Modular Routing 1 is loaded via Lazy Loading")

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModularRoutingRoutingModule
  ]
})
export class ModularRoutingModule { }
