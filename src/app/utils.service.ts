import { Injectable } from '@angular/core';
import questionsArr from './chats';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  public static globalMessageCounter = 5;
  public convertTimeStampToCurrentTime(timestamp:string){
    if(timestamp){
      let date = new Date(+timestamp);
      let hour = date.getHours();
      let minute = date.getMinutes();
      return this.prettyPrintDateTime(hour, minute);
    }
  }

  prettyPrintDateTime(hour, minutes){
    let isAM:boolean = true;

    if(hour >= 12){
      isAM = false;
    }
    let ampm = (isAM ? ' AM':' PM');

    if(hour > 12){
      hour = hour - 12;
    }

    if(minutes < 10){
      minutes = `0${minutes}`;
    }

    return `${hour}:${minutes}${ampm}`;
  }

  public static questionIdMap(questions:any[]){
    let questionMap: Map<number, any> = new Map();
    if(questions && questions.length){
      questions.forEach(question => {
        questionMap.set(question.id, question);
      })
    }
    return questionMap;
  }

  public static searchQuestion(questionId:number){
    if(questionsArr && questionsArr.length){
      for(let question of questionsArr){
        if(question.id == questionId){
          return question;
        }
      }
    }
  }

}
