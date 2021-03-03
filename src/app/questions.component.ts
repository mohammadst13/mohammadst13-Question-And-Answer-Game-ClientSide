import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'questions',
  templateUrl : './questions.component.html'
})

export class QuestionsComponent{

  constructor ( private api : ApiService , private route: ActivatedRoute ){};

  questions ;

  ngOnInit()
  {
    var quizId = this.route.snapshot.paramMap.get('quizid');
    this.api.getQuestions(quizId).subscribe(res => {
      this.questions = res;
    });
  }


}
