import { Component, OnInit } from '@angular/core';
import { getAllJSDocTags } from 'typescript';
import { UsersdataService } from '../users/usersdata.service'
@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent {

  constructor(private user : UsersdataService) {
    this.user.getData().subscribe(data => {
      console.warn(data)
    })
   }


}
