import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModularRouting2RoutingModule } from './modular-routing-2-routing.module';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';

console.warn("Modular Routing 2 is loaded via Lazy Loading")


@NgModule({
  declarations: [Test1Component, Test2Component],
  imports: [
    CommonModule,
    ModularRouting2RoutingModule
  ]
})
export class ModularRouting2Module { }
