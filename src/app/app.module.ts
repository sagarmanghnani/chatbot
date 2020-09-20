import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackgroundCardComponent } from './background-card/background-card.component';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FaqQuestionComponent } from './faq-question/faq-question.component';
import { ChatboxComponent } from './chatbox/chatbox.component';
import { ShowMessageComponent } from './show-message/show-message.component';
import {UtilsService} from './utils.service';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    BackgroundCardComponent,
    FaqQuestionComponent,
    ChatboxComponent,
    ShowMessageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
    UtilsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
