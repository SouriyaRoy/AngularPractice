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

  api_call = {
    "api" : {
        "version" : "1.0",
        "auth" : "7BtnG96eHgTe0W5ssKMXJ7PhKldUIcf6oGQ1v3EI8pOYJVACN5Om94AX3ncaY41r"
    },
    "data" : {
        "action" : "signup",
        "data" : {
            "data" : {
                "user_f_name" : "Sfsfsfstd",
                "user_m_name" : null,
                "user_l_name" : "opopopop",
                "user_email" : "fksssajsashu@gmail.com",
                "user_password" : "guasaspta",
                "user_security_question" : null,
                "user_security_answer" : null
            }
        }
    }
}

//   api_call = {
//     "api" : {
//       "version" : "1.0",
//       "auth" : "7BtnG96eHgTe0W5ssKMXJ7PhKldUIcf6oGQ1v3EI8pOYJVACN5Om94AX3ncaY41r"
//     },
//     "data" : {
//       "action" : "signup",
//       "data" : {
//         "hash" : "b'\xa1\x9a]\xc9\xa3$\xce\xf7\xa8\xc8[\x1b\xbe\x8b\x82\x07\xa5\xb2X\xd12\x18\x08w\xb9\x8b\x90Je\xe5\tG'",
//         "data" : {
//           "user_f_name" : "Souriya",
//           "user_m_name" : null ,
//           "user_l_name" : "Roy",
//           "user_email" : "souriyaroy1998@gmail.com",
//           "user_password" : "anything_inserted_here69",
//           "user_security_question" : "Home town?",
//           "user_security_answer" : "Kolkata."
//       }
//     }
//   }
// }

//   api_call = {
//     "api" : {
//         "version" : "1.0",
//         "auth" : "Z562uqJET7ZKykuxiPiD2D18k6CUG5Z8eZafooAB33Fkus33FCObv75Idf6pup4C"
//     },
//     "data" : {
//         "action" : "read",
//         "data" : {
//             "hash": "lt4yg3rhPcvS19OrhqfprSoIK1vPIVfpuoDkb4CrxXJS3Y4qiUgzkrCPJ41wq7Qr"
//             //"user_id" : ["a",1,2,3,4,5,12,13]
//         }
//     }
// }

  constructor(private user : UsersdataService) {
    // this.user.getData().subscribe(data => {
    //   this.data = data
    // })
    //console.warn("Api Component Loaded via Lazy Loading")
  }
  
  SubmitAPI(){
    this.user.postData(this.api_call).subscribe(data => {
         console.warn(typeof(data));
         console.warn(data['data']['hash']);
         //this.json = JSON.stringify(this.data)
         //console.warn(this.json)
         //this.json2 = JSON.parse(this.data)
         //console.warn(this.json2)
    // this.user.postData(this.api_call).subscribe(data => {
    //   this.data = data
    })
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