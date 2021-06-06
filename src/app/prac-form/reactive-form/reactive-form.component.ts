import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import {UsersdataService } from 'src/app/users/usersdata.service'
import { NgxSpinnerService } from 'ngx-spinner'

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  constructor(private spinner : NgxSpinnerService){}

  loginForm = new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email]),
    password : new FormControl('', [Validators.required, Validators.minLength(2)])
  })

  key = "dosiiowjhiojijjwejfwjejpwfjwpf"
  user_email = this.loginForm.value.email
  json : any
  api_call : any
  public loading = false

  onSubmit(data) {
    this.loading = true
    
    this.api_call = {
      "api" : {
        "version" : "1.0",
        "auth" : this.key
      },
      "data" : {
        "action" : "reactive_signup",
        "data" : {
          "data" : {
            "user_email" : data.email
        }
      }
    }
  }
   this.json = JSON.stringify(this.api_call)
   console.warn(this.json)
   this.loading = false
  }

  Load(){
    // this.spinner.show();
    // setTimeout(() => {
    //   this.spinner.hide();
    // }, 5000);
  }
}