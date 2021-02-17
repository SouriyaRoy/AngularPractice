import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TestProj';
  data = [
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

}
