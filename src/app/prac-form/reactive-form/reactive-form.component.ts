import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { } from 'src/app/users/usersdata.service'

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  loginForm = new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email]),
    password : new FormControl('', [Validators.required, Validators.minLength(2)])
  })

  //obj = JSON.stringify(this.loginForm.value)
  key = "dosiiowjhiojijjwejfwjejpwfjwpf"
  user_email = this.loginForm.value.email
  json : any
  api_call : any
//   api_call = {
//     "api" : {
//       "version" : "1.0",
//       "auth" : "7BtnG96eHgTe0W5ssKMXJ7PhKldUIcf6oGQ1v3EI8pOYJVACN5Om94AX3ncaY41r"
//     },
//     "data" : {
//       "action" : "signup",
//       "data" : {
//         "data" : {
//           "user_f_name" : "Souriya",
//           "user_m_name" : null,
//           "user_l_name" : "Roy",
//           "user_email" : "souriyaroy1998@gmail.com",
//           "user_password" : "lulx",
//           "user_security_question" : null,
//           "user_security_answer" : null
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
   console.warn(this.json)
  // }
  }
}