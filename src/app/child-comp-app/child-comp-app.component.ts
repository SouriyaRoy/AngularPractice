import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-comp-app',
  templateUrl: './child-comp-app.component.html',
  styleUrls: ['./child-comp-app.component.css']
})
export class ChildCompAppComponent implements OnInit {

  @Input() data
  constructor() { }

  ngOnInit(): void {
  }

}
