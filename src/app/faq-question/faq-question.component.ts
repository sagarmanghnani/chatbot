import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-faq-question',
  templateUrl: './faq-question.component.html',
  styleUrls: ['./faq-question.component.scss']
})
export class FaqQuestionComponent implements OnInit {

  @Input()title:string 

  constructor() { }

  ngOnInit(): void {
  }

}
