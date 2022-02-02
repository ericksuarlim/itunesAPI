import { Component } from '@angular/core';
import { ItunesService } from './services/itunes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'itunesApi';
  constructor(private itunesService:ItunesService){
    this.itunesService.getSearch("jack+johnson").subscribe(resp=>{console.log(resp)})
  }

}

