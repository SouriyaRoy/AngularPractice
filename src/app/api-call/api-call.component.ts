import { Component, OnInit } from '@angular/core';
import { UsersdataService } from 'src/app/users/usersdata.service'

@Component({
  selector: 'app-api-call',
  templateUrl: './api-call.component.html',
  styleUrls: ['./api-call.component.css']
})
export class APICallComponent implements OnInit {

  public data; 

  constructor(private user : UsersdataService) {
    this.user.getData().subscribe(data => {
      this.data = data
    })
  }

  ngOnInit(): void {
  }

}

// this.user.getData().subscribe(data => {
//   console.warn(data);
//   this.api = data;
// })