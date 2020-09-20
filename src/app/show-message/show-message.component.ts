import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Messages } from '../Messages';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-show-message',
  templateUrl: './show-message.component.html',
  styleUrls: ['./show-message.component.scss']
})
export class ShowMessageComponent implements OnInit {

  @Input() message:Messages

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

}
