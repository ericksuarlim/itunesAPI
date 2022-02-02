import { Component, OnInit } from '@angular/core';
import { ItunesService } from './services/itunes.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{

  form: any = {
    term: "",
    mediaType: "",
  };
  

  


  constructor(private itunesService:ItunesService){

  }



  onSubmit(){
    this.itunesService.getSearch(this.form.term , this.form.mediaType).subscribe(resp=>{console.log(resp)})
  }
  


}

