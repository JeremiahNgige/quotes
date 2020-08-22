export class Quotes {
    showQuoteDetails:boolean;
    constructor(public name:string, public author:string, public quote:string){
        this.showQuoteDetails= false;
    }
}
