import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quotes } from 'src/app/models/quotes';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quote:Quotes;
  @Output() isUploaded = new EventEmitter <boolean>()

  quoteDelete(uploaded:boolean){
    this.isUploaded.emit(uploaded);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
