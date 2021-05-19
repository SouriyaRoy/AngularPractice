import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { UsersdataService } from '../users/usersdata.service';

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.css']
})
export class ViewsComponent implements OnInit {

  result
  identity : number
  // view_post(){
    
  // }

  constructor(private route : ActivatedRoute,
              private router : Router,
              private user : UsersdataService) {
    console.warn("localhost:51353" + this.router.url)
   }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.warn(params.id)
      this.identity = params.id
      console.warn("This is params of class " + this.identity)
    })
    let p = document.getElementById('table')
    p.removeAttribute('hidden')
    this.user.getData().subscribe(data => {
      this.result = data
    })
  }

}
