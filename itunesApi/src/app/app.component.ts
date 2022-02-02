import { Component, OnInit } from '@angular/core';
import { ItunesService } from './services/itunes.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';



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

  isOpen: boolean = false;

  items: [] | any;
   

  


  constructor(private itunesService:ItunesService){

  }




  onSubmit(){
    console.log("Entroo");
    this.form.mediaType = this.form.mediaType==="all" ? this.form.mediaType = "&limit=25" : "&entity=" + this.form.mediaType;
    this.itunesService.getSearch(this.form.term , this.form.mediaType).subscribe(result =>{
      this.items = result; 
      this.items=this.items.results; 
      console.log("Veree",this.items);
      this.showResults();
    });

    
  }

  showResults(){
    this.isOpen =true;
    console.log("Salioo");
  }


}

