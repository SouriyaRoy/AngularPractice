import { Component, OnInit } from '@angular/core';

//console.warn("Lazy 2 Component loaded via Lazy Loading")

@Component({
  selector: 'app-lazy2',
  templateUrl: './lazy2.component.html',
  styleUrls: ['./lazy2.component.css']
})
export class Lazy2Component implements OnInit {

  constructor() {  }

  ngOnInit(): void {
  }

}
