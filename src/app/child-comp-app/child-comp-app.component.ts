import { Component, OnInit, Input } from '@angular/core'; //Input for taking the data from the parent class

@Component({
  selector: 'app-child-comp-app',
  templateUrl: './child-comp-app.component.html',
  styleUrls: ['./child-comp-app.component.css']
})
export class ChildCompAppComponent implements OnInit {

  @Input() one_user
  constructor() { }

  ngOnInit(): void {
  }

}
