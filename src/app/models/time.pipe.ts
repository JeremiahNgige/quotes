import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: any): number {

    let today: Date = new Date();
    let timeofTime: any = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
    );
    
    var dayDiff = Math.abs(value - timeofTime)
    const secInDay = 86400
    var dayDiffSec = dayDiff * 0.001;
    var timePast = dayDiffSec / secInDay;

    if (timePast >= 1 && value < timeofTime) {
      return timePast
    }
    else {
      return value
    }
  }

}
