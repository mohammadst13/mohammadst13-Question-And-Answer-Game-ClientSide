import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatButtonModule , MatCardModule , MatInputModule, MatListModule} from '@angular/material';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {QuestionComponent} from './question.component';
import { ApiService } from './api.service';
import {HttpClientModule} from '@angular/common/http';
import { QuestionsComponent } from './questions.component';

@NgModule({
  declarations: [
    AppComponent, QuestionComponent, QuestionsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
