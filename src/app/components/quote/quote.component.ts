import { Component, OnInit } from '@angular/core';
import { Quotes } from '../../models/quotes'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quotes [] = [];

  addNewQuote(quote){
    this.quotes.push(quote)
  }

  toggleDetails(index){
    this.quotes[index].showQuoteDetails = !this.quotes[index].showQuoteDetails;
  }
  
  deleteQuote(isUploaded, index){
    if (isUploaded) {
      let toDelete = confirm(`Are you sure you want to delete this quote?`)
      
      if (toDelete){
        this.quotes.splice(index,1)
      }

    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
