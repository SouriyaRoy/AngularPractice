import { Component, OnInit } from '@angular/core';
import { UsersdataService } from 'src/app/users/usersdata.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  currentVal = ""
  prop = "BRUCE"
  disabledBox = true;
  color = "orange"
  public data

  getName(name : any) { //this function will work only when it's performed in the same component
    console.log(name);
    this.currentVal = name;
  }
  enableBox() {
    this.disabledBox = false
  }

  constructor(private user : UsersdataService) {
    this.data = this.user.getData();
   }

  ngOnInit(): void {
  }

}