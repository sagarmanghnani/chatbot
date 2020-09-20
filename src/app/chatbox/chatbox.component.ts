import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import {Messages} from '../Messages'
import { UtilsService } from '../utils.service';
import * as questionsArr from '../chats'
@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.scss']
})
export class ChatboxComponent implements OnInit {

  newmessage:string;
  constructor(
    public utilService:UtilsService
  ) { }
  
  systemMessages:Messages[] = [];
  userMessages:Messages[] = [];
  showAllMessages:Messages[] = [];
  ngOnInit(): void {
  }

  sendMessage(){
    let newMessage = new Messages();
    newMessage.msg = this.newmessage;
    newMessage.myMessage = true;
    newMessage.timestamp = '' + new Date().getTime();
    newMessage.isQuestion = false;
    UtilsService.globalMessageCounter++;
    newMessage.id = UtilsService.globalMessageCounter;
    this.userMessages.push(newMessage);
    this.showAllMessages.push(newMessage);
    this.clearInput();
  }

  clearInput(){
    this.newmessage = null;
  }

  processSelectedMessage(message:Messages){
    if(!message.isQuestion){
      return;
    }
    let selectedQuestionFromMessage = UtilsService.searchQuestion(message.id);
    let answerMessage:Messages = new Messages();
    answerMessage.msg = selectedQuestionFromMessage.answer;
    UtilsService.globalMessageCounter++;
    answerMessage.id = UtilsService.globalMessageCounter;
    answerMessage.isQuestion = false;
    answerMessage.myMessage = false;
    answerMessage.timestamp = `${new Date().getTime()}`;
    this.showAllMessages.push(answerMessage);

    if(selectedQuestionFromMessage.questionsId && selectedQuestionFromMessage.questionsId.length){
        let questionIdMap = UtilsService.questionIdMap(questionsArr.default);
        for(let questionId of selectedQuestionFromMessage.questionsId){
          let questionFromId = questionIdMap.get(questionId);
          let newQuestionFromAnswer = new Messages();
          newQuestionFromAnswer.msg = questionFromId.title;
          newQuestionFromAnswer.id = questionFromId.id;
          newQuestionFromAnswer.isQuestion = true;
          newQuestionFromAnswer.timestamp = `${new Date().getTime()}`;
          newQuestionFromAnswer.myMessage = false;
          this.showAllMessages.push(newQuestionFromAnswer);
        }
    }
  }

  
  



}
