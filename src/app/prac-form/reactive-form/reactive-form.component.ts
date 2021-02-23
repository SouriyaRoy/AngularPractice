import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  loginForm = new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email]),
    password : new FormControl('', [Validators.required, Validators.minLength(2)])
  })

  //obj = JSON.stringify(this.loginForm.value)
  key = "dosiiowjhiojijjwejfwjejpwfjwpf"
  user_email = this.loginForm.value.email
  api_call : any
  json : any

//   api_call = {
//     "api" : {
//       "version" : "1.0",
//       "auth" : this.key
//     },
//     "data" : {
//       "action" : "reactive_signup",
//       "data" : {
//         "data" : {
//           "user_email" : this.user_email
//       }
//     }
//   }
// }

  // get email() {
  //   return this.loginForm.get('email')
  // }
  // get password() {
  //   return this.loginForm.get('password')
  // }

  onSubmit(data) {
    //console.warn(typeof(this.loginForm.value.email))
    //console.warn(JSON.stringify(this.loginForm.value))
    //console.warn(this.api_call)
    //console.warn(this.obj)
    //console.warn(JSON.stringify(this.api_call))
    //console.warn(typeof(this.user_email))
    //console.warn(typeof(this.key))
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
  console.warn(this.api_call)
  }


  constructor() { }

  ngOnInit(): void {
  }

}