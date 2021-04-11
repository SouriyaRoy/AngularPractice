import { Component, OnInit } from '@angular/core';
import { UsersdataService } from 'src/app/users/usersdata.service'

@Component({
  selector: 'app-api-call',
  templateUrl: './api-call.component.html',
  styleUrls: ['./api-call.component.css']
})
export class APICallComponent implements OnInit {

  public data
  public json; json2 

  constructor(private user : UsersdataService) {
    this.user.getData().subscribe(data => {
      this.data = data
    })
    // this.user.getData().subscribe(data => {
    //   this.data = data
    // })
    //console.warn("Api Component Loaded via Lazy Loading")
  }
  
  SubmitAPI(){
    
    // this.user.postData(this.api_call).subscribe(data => {
    //      console.warn(data);
    //      console.warn(data['data']['hash']); 

         //string hash = data[data][hash]
         //cookie.set('init',hash,12/8/21)

         //this.json = JSON.stringify(this.data)
         //console.warn(this.json)
         //this.json2 = JSON.parse(this.data)
         //console.warn(this.json2)
    // this.user.postData(this.api_call).subscribe(data => {
    //   this.data = data
    // })
  }

  // reqAPI(){
  //   this.user.reqData(this.api_call)
  // }
  
  ngOnInit(): void {
  }

}

// this.user.getData().subscribe(data => {
//   console.warn(data);
//   this.api = data;
// })