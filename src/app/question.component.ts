import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'question',
  templateUrl: './question.component.html',
})
export class QuestionComponent {

constructor(private api: ApiService , private route: ActivatedRoute){}

question = {};
quizid;

ngOnInit()
{
  //this.quizid = this.route.snapshot.paramMap.get('quizid');
  this.route.paramMap.subscribe((params : ParamMap)=> {  
    this.quizid = +params.get('quizid');
    //console.log("Id is :", this.id);        
}); 
  this.api.questionSekected.subscribe(question => this.question = question);
}

  post(question) {
    console.log(question);
    question.quizid = this.quizid;
    this.api.postQuestion(question);
  }
}
