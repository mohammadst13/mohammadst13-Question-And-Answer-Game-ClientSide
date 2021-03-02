import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable()
export class ApiService {

  private selectedQuestion = new Subject<any>();
  questionSekected = this.selectedQuestion.asObservable();

  constructor(private http: HttpClient){}

  postQuestion (question)
  {
    this.http.post('http://localhost:8238/api/Questions', question).subscribe(res => {
      console.log(res);

    });
  }

  getQuestions()
  {
    return this.http.get('http://localhost:8238/api/Questions');
  }

  selectQuestion(question)
  {
    this.selectedQuestion.next(question);
  }

}
