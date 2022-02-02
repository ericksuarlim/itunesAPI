import { Component, OnInit } from '@angular/core';
import { ItunesService } from './services/itunes.service';
import { map } from 'rxjs/operators';



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
   items: [] | any;
   

  


  constructor(private itunesService:ItunesService){

  }



  onSubmit(){
    this.form.mediaType = this.form.mediaType==="all" ? this.form.mediaType = "&limit=25" : "&entity=" + this.form.mediaType;
    this.itunesService.getSearch(this.form.term , this.form.mediaType).subscribe(resp=>{console.log(resp)});
  }

  //helper function to get select values
  updateFilter(){
    this.itunesService.getSearch(this.form.term , " ").subscribe( items => { this.items = items});

  }

  


}

