import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit {

  constructor(private http : HttpClient) {
    // let channel_id = "UCIPnPp27nvOVQmbmuz1ioyg"
    // //console.log(key,max,search)
    // // let y_link = "https://www.googleapis.com/youtube/v3/search?key=" + key +
    // // "&type=video&part=snippet&max=" + max + "&q=" + search
    // let y_link = "https://www.googleapis.com/youtube/v3/search?key="+api_key+
    //              "&channelId="+channel_id+
    //              "&part=snippet,id&order=date&maxResults=20"
    // let video_results = this.http.get(JSON.stringify(y_link))
    // console.warn(video_results)
    // //return this.http.get(y_link)
   }

  search_youtube(key,search,max){
  }

  ngOnInit(): void {
  }

}
