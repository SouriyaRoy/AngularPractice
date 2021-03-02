import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersdataService {

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
    let get_url = "https://jsonplaceholder.typicode.com/todos"
    return this.http.get(get_url);
  }
  
  postData(api_data){
    let post_url = 'http://e8f6ffc08340.ngrok.io/api/user/user/'
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