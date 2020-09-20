import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  public convertTimeStampToCurrentTime(timestamp:string){
    if(timestamp){
      let date = new Date(timestamp);
      let hour = date.getHours();
      let minute = date.getMinutes();
      return this.prettyPrintDateTime(hour, minute);
    }
  }

  prettyPrintDateTime(hour, minutes){
    let isAM:boolean = true;
    if(hour > 12){
      hour = hour - 12;
      isAM = false;
    }
    let ampm = (isAM ? 'Am':'Pm');
    return `${hour}:${minutes}${ampm}`;
  }
}
