import { Component, OnInit } from '@angular/core';

console.warn("Lazy 1 Component loaded via Lazy Loading")

@Component({
  selector: 'app-lazy1',
  templateUrl: './lazy1.component.html',
  styleUrls: ['./lazy1.component.css']
})
export class Lazy1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
