import { Component, OnInit } from '@angular/core';
import { ItunesService } from './services/itunes.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';



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


  onSubmit(form:NgForm){
    this.form.mediaType = this.form.mediaType==="" || this.form.mediaType === null ? this.form.mediaType = "&limit=25" : "&entity=" + this.form.mediaType;  
    this.itunesService.getSearch(this.form.term , this.form.mediaType).subscribe(result =>{
      this.items = result; 
      this.items=this.items.results; 
      this.showResults();
      form.resetForm();
    });

    
  }

  showResults(){
    this.isOpen =true;
  }


}

