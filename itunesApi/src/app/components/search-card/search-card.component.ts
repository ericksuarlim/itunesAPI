import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.css']
})
export class SearchCardComponent implements OnInit {

  @Input() itemInput: any;

  constructor() { }

  ngOnInit(): void {
  }

}
