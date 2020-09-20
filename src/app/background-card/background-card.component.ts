import { Component, OnInit, ViewChild } from '@angular/core';
import * as questionsArr from '../chats'
import { Messages } from '../Messages';
import { ChatboxComponent } from '../chatbox/chatbox.component';
import { UtilsService } from '../utils.service';


@Component({
  selector: 'app-background-card',
  templateUrl: './background-card.component.html',
  styleUrls: ['./background-card.component.scss']
})
export class BackgroundCardComponent implements OnInit {

  constructor() { }
  @ViewChild('chatbox')chatbox:ChatboxComponent
  questionArr = [];
  message:Messages = new Messages();
  showChatBox:boolean = false;
  ngOnInit(): void {
  //   this.questionArr = [
  //     "Can I redeem my FB before original term?",
  //     "How do I pay my Credit card bill?", 
  //     "How can I get my Account Statement?",
  //     "What is the tenure of Fixed Deposit?"
  // ]
  // this.questionArr[0] = questionsArr.default[0];
  let i = 0;
  let offset = 0;
  
    let timeout = setInterval(() => {
      if(i == questionsArr.default.length - 1){
        clearInterval(timeout);
      }
      this.questionArr.push(questionsArr.default[i]);
      offset += 1000;
      i++;

    }, offset + 1000);
  
  }

  selectQuestions(question){
    this.showChatBoxOnScreen();
    let answerMessage:Messages = new Messages();
    answerMessage.msg = question.answer;
    UtilsService.globalMessageCounter++;
    answerMessage.id = UtilsService.globalMessageCounter;
    answerMessage.isQuestion = false;
    answerMessage.myMessage = false;
    answerMessage.timestamp = `${new Date().getTime()}`;
    this.chatbox.showAllMessages.push(answerMessage);

    if(question.questionsId && question.questionsId.length){
        let questionIdMap = UtilsService.questionIdMap(questionsArr.default);
        for(let questionId of question.questionsId){
          let questionFromId = questionIdMap.get(questionId);
          let newQuestionFromAnswer = new Messages();
          newQuestionFromAnswer.msg = questionFromId.title;
          newQuestionFromAnswer.id = questionFromId.id;
          newQuestionFromAnswer.isQuestion = true;
          newQuestionFromAnswer.timestamp = `${new Date().getTime()}`;
          newQuestionFromAnswer.myMessage = false;
          this.chatbox.showAllMessages.push(newQuestionFromAnswer);
        }
    }


  }

  showChatBoxOnScreen(){
    this.showChatBox = true;
  }

  hideChatBox(){
    this.showChatBox = false;
    this.chatbox.showAllMessages = [];
  }

}
