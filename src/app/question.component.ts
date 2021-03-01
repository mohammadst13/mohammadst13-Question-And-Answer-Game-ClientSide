import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'question',
  templateUrl: './question.component.html',
})
export class QuestionComponent {

constructor(private api: ApiService){}

question = {};

  post(question) {
    console.log(question);

this.api.postQuestion(question);
  }
}
