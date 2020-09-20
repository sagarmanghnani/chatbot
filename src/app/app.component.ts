import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  showChatBtn:boolean = true;
  @ViewChild('chatbtncontainer') chatBtn:ElementRef;

  openChatBtn(){
    this.showChatBtn = !this.showChatBtn;
  }
}
