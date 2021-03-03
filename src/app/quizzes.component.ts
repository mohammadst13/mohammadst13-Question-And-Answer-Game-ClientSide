import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'quizzes',
  templateUrl: './quizzes.component.html',
})
export class QuizzesComponent {

constructor(private api: ApiService){}

quiz = {} ;
quizzes ;

ngOnInit()
{
this.api.getQuizzes().subscribe(res => {
  this.quizzes = res;
})
}


}
