import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import {Messages} from '../Messages'
import { UtilsService } from '../utils.service';
@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.scss']
})
export class ChatboxComponent implements OnInit {

  @Input() message:Messages
  constructor(
    public utilService:UtilsService
  ) { }

  ngOnInit(): void {
  }

  
  



}
