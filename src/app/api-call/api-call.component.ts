import { Component, OnInit } from '@angular/core';
import { UsersdataService } from 'src/app/users/usersdata.service'
import { NgxSpinnerService } from 'ngx-spinner'

@Component({
  selector: 'app-api-call',
  templateUrl: './api-call.component.html',
  styleUrls: ['./api-call.component.css']
})
export class APICallComponent implements OnInit {

  public data
  public json; json2 
  public loading = false

  constructor(private user : UsersdataService, private spinner : NgxSpinnerService) {
    this.loading = true
    this.user.getData().subscribe(data => {
      this.loading = false
      this.data = data
    }, (error) => {
      console.error(error)
      this.loading = false
    })
    // this.user.getData().subscribe(data => {
    //   this.data = data
    // })
    //console.warn("Api Component Loaded via Lazy Loading")
  }
  
  SubmitAPI(){
  }

  // reqAPI(){
  //   this.user.reqData(this.api_call)
  // }
  
  ngOnInit(): void {
    // this.spinner.show();
    // setTimeout(() => {
    //   this.spinner.hide();
    // }, 5000);
  }

}