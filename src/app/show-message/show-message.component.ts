import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Messages } from '../Messages';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-show-message',
  templateUrl: './show-message.component.html',
  styleUrls: ['./show-message.component.scss']
})
export class ShowMessageComponent implements OnInit {

  @Input() message:Messages;
  @Output() passSelectedMessage:EventEmitter<Messages> = new EventEmitter();
  constructor(
    public utilService:UtilsService
  ) { }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes && changes['message'].currentValue && changes['message'].currentValue.id){
      this.message = changes['message'].currentValue;
    }
  }

  processQuestion(){
    this.passSelectedMessage.emit(this.message);
  }


}
