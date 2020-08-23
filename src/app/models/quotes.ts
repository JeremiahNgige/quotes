export class Quotes {
    showQuoteDetails:boolean;
    constructor(public name:string, public author:string, public quote:string, public time:Date){
        this.showQuoteDetails= false;
    }
}
