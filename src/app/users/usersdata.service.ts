import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { getAllJSDocTags } from 'typescript';

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
    let url = "https://jsonplaceholder.typicode.com/todos"
    return this.http.get(url);
  }
}
