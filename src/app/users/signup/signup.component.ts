import { Component, OnInit } from '@angular/core';
import { UsersdataService } from 'src/app/users/usersdata.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public name; 
  data2;
  public condition1 = false;
  public options = "green";
  public data = [
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

  myEvent(evt : any){
    console.warn(evt);
  }

  constructor(private user : UsersdataService) {    
    console.warn(this.user.getUserData())
    this.data2 = this.user.getUserData()
   }
  //  private user : UsersdataService
  //   this.user.getData().subscribe(data3 => {
  //     console.warn(data3)
  //   }

  ngOnInit(): void {
  }

}
