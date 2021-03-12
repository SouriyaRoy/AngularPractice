import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersdataService {
  api_call
  getUserData() {
    return [
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
    }]
  }

  constructor(private http : HttpClient) {   }
  getData() {
    // let get_url = "https://jsonplaceholder.typicode.com/todos"
    // return this.http.get(get_url);
    this.api_call = {
      "api" : {
          "version" : "1.0",
          "auth" : "HHdK2z8XHjkjq7A1AzQFr7LHAVosx4uwkb6eBNzG5prwfxYEBd1dqI2oW0QN6SAg"
      },
      "data" : {
          "action" : "read",
          "data" : {
              "hash": "LJjXmCkp12fNgXbhwCT8uWbyOaPpDR7jHzgAmPoSwo4FmOovIXLIxblKNX1phpbQ",
              "post_id" : [0]
          }
      }
  }
    let get_url = "http://5b554f3fbd67.ngrok.io/api/content/post/"
    let json = JSON.stringify(this.api_call)
    return this.http.post(get_url, json)
  }
  
  postData(api_data){
    let post_url = 'http://67b268ec5488.ngrok.io/api/user/user/'
    let json = JSON.stringify(api_data)
    return this.http.post(post_url, json)
  }

  // reqData(api_data){
  //   let req_url = 'http://65.0.180.78/api/user/user/'
  //   let json = JSON.stringify(api_data)
  //   this.http.request(json, req_url).subscribe((result)=>{
  //     console.warn("result",result)
  //     });
  // }
}


// (req_url, json).subscribe((result)=>{
//   console.warn("result",result)
//   });

// .subscribe((result)=>{
//   console.warn("result",result)
//   });