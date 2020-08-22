"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.QuoteComponent = void 0;
var core_1 = require("@angular/core");
var QuoteComponent = /** @class */ (function () {
    function QuoteComponent() {
        this.quotes = [];
    }
    QuoteComponent.prototype.addNewQuote = function (quote) {
        this.quotes.push(quote);
    };
    QuoteComponent.prototype.toggleDetails = function (index) {
        this.quotes[index].showQuoteDetails = !this.quotes[index].showQuoteDetails;
    };
    QuoteComponent.prototype.deleteQuote = function (isUploaded, index) {
        if (isUploaded) {
            var toDelete = confirm("Are you sure you want to delete " + this.quotes[index].name + "?");
            if (toDelete) {
                this.quotes.splice(index, 1);
            }
        }
    };
    QuoteComponent.prototype.ngOnInit = function () {
    };
    QuoteComponent = __decorate([
        core_1.Component({
            selector: 'app-quote',
            templateUrl: './quote.component.html',
            styleUrls: ['./quote.component.css']
        })
    ], QuoteComponent);
    return QuoteComponent;
}());
exports.QuoteComponent = QuoteComponent;
