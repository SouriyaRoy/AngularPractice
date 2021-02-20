import { Component, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'TestProj';
  public data;
  users = [
    {
      name:'Souriya',
      age:22,
      place:'Kolkata'
    },
    {
      name:'Akash',
      age:21,
      place:'Belgharia'
    },
    {
      name:'Joyjit',
      age:21,
      place:'Siliguri'
    },
    {
      name:'Sanyam',
      age:19,
      place:'Sinthi More'
    }
  ]

  parentComponent(data) {
    console.warn(data)
    this.data = data.name
  }

  constructor(private viewContainer : ViewContainerRef,
    private cfr : ComponentFactoryResolver) {

  }

  async loadLazy1() {
    this.viewContainer.clear();
    const { Lazy1Component } = await import ('./lazy1/lazy1.component');
    this.viewContainer.createComponent(
      this.cfr.resolveComponentFactory(Lazy1Component)
    )
  }
  async loadLazy2() {
    this.viewContainer.clear();
    const { Lazy2Component } = await import ('./lazy2/lazy2.component');
    this.viewContainer.createComponent(
      this.cfr.resolveComponentFactory(Lazy2Component)
    )
  }
}
