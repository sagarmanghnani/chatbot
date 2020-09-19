import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-background-card',
  templateUrl: './background-card.component.html',
  styleUrls: ['./background-card.component.scss']
})
export class BackgroundCardComponent implements OnInit {

  constructor() { }

  questionArr = [];
  ngOnInit(): void {
    this.questionArr = [
      "Can I redeem my FB before original term?",
      "How do I pay my Credit card bill?", 
      "How can I get my Account Statement?",
      "What is the tenure of Fixed Deposit?"
  ]
  }

}
