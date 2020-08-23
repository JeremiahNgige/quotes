"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.VotesComponent = void 0;
var core_1 = require("@angular/core");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var VotesComponent = /** @class */ (function () {
    function VotesComponent() {
        this.like = free_solid_svg_icons_1.faThumbsUp;
        this.dislike = free_solid_svg_icons_1.faThumbsDown;
        this.upVote = 0;
        this.downVote = 0;
    }
    VotesComponent.prototype.upVotes = function () {
        this.upVote = this.upVote + 1;
    };
    VotesComponent.prototype.downVotes = function () {
        this.downVote = this.downVote + 1;
    };
    VotesComponent.prototype.ngOnInit = function () {
    };
    VotesComponent = __decorate([
        core_1.Component({
            selector: 'app-votes',
            templateUrl: './votes.component.html',
            styleUrls: ['./votes.component.css']
        })
    ], VotesComponent);
    return VotesComponent;
}());
exports.VotesComponent = VotesComponent;
