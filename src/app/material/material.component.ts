import { Component, OnInit } from '@angular/core';
import { UsersdataService } from 'src/app/users/usersdata.service'

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {

  public data

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }
  constructor(private user : UsersdataService) {
    this.data = this.user.getUserData();
   }

  ngOnInit(): void {
  }

}
