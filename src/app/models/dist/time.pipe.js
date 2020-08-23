"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TimePipe = void 0;
var core_1 = require("@angular/core");
var TimePipe = /** @class */ (function () {
    function TimePipe() {
    }
    TimePipe.prototype.transform = function (value) {
        var today = new Date();
        var timeofTime = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        var dayDiff = Math.abs(value - timeofTime);
        var secInDay = 86400;
        var dayDiffSec = dayDiff * 0.001;
        var timePast = dayDiffSec / secInDay;
        if (timePast >= 1 && value < timeofTime) {
            return timePast;
        }
        else {
            return value;
        }
    };
    TimePipe = __decorate([
        core_1.Pipe({
            name: 'time'
        })
    ], TimePipe);
    return TimePipe;
}());
exports.TimePipe = TimePipe;
