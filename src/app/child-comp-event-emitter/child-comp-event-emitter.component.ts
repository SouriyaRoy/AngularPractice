import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-comp-event-emitter',
  templateUrl: './child-comp-event-emitter.component.html',
  styleUrls: ['./child-comp-event-emitter.component.css']
})
export class ChildCompEventEmitterComponent implements OnInit {

  @Output() parentComponent:EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
    // this.parentComponent.emit(
    //   {
    //     name:'Souriya',
    //     age:22,
    //     place:'Kolkata'
    //   }
    // )
  }

  sendData() {
    let data =  {
      name:'Souriya',
      age:22,
      place:'Kolkata'
    }
    this.parentComponent.emit(data)
  }

}
