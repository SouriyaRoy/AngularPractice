import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boot-form',
  templateUrl: './boot-form.component.html',
  styleUrls: ['./boot-form.component.css']
})
export class BootFormComponent implements OnInit {

  onSubmit(data) {
    console.warn(data)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
