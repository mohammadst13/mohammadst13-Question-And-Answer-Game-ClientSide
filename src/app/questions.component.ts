import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'questions',
  templateUrl : './questions.component.html'
})

export class QuestionsComponent{

  constructor ( private api : ApiService ){};

  questions ;

  ngOnInit()
  {
    this.api.getQuestions().subscribe(res => {
      this.questions = res;
    });
  }


}
