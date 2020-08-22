"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.QuoteDetailsComponent = void 0;
var core_1 = require("@angular/core");
var QuoteDetailsComponent = /** @class */ (function () {
    function QuoteDetailsComponent() {
        this.isUploaded = new core_1.EventEmitter();
    }
    QuoteDetailsComponent.prototype.quoteDelete = function (uploaded) {
        this.isUploaded.emit(uploaded);
    };
    QuoteDetailsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input()
    ], QuoteDetailsComponent.prototype, "quote");
    __decorate([
        core_1.Output()
    ], QuoteDetailsComponent.prototype, "isUploaded");
    QuoteDetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-quote-details',
            templateUrl: './quote-details.component.html',
            styleUrls: ['./quote-details.component.css']
        })
    ], QuoteDetailsComponent);
    return QuoteDetailsComponent;
}());
exports.QuoteDetailsComponent = QuoteDetailsComponent;
