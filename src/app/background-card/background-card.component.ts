import { Component, OnInit } from '@angular/core';
import * as questionsArr from '../chats'
import { Messages } from '../Messages';

@Component({
  selector: 'app-background-card',
  templateUrl: './background-card.component.html',
  styleUrls: ['./background-card.component.scss']
})
export class BackgroundCardComponent implements OnInit {

  constructor() { }

  questionArr = [];
  message:Messages = new Messages();
  ngOnInit(): void {
  //   this.questionArr = [
  //     "Can I redeem my FB before original term?",
  //     "How do I pay my Credit card bill?", 
  //     "How can I get my Account Statement?",
  //     "What is the tenure of Fixed Deposit?"
  // ]

  this.questionArr = questionsArr.default
  this.message.id = 1;
  this.message.msg = "Hello world";
  this.message.timestamp = '' + new Date().getTime();
  this.message.myMessage = false;
  }

}
