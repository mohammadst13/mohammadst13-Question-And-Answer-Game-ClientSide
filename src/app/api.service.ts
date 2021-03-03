import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable()
export class ApiService {

  private selectedQuestion = new Subject<any>();
  questionSekected = this.selectedQuestion.asObservable();

  private selectedQuiz = new Subject<any>();
  quizSelected = this.selectedQuiz.asObservable();

  constructor(private http: HttpClient){}

  postQuestion (question)
  {
    this.http.post('http://localhost:8238/api/Questions', question).subscribe(res => {
      console.log(res);

    });
  }

  postQuiz(quiz)
  {
    console.log(quiz);

    this.http.post('http://localhost:8238/api/Quizs', quiz).subscribe(res => {
      console.log(res);

    });
  }

  getQuestions()
  {
    return this.http.get('http://localhost:8238/api/Questions');
  }

  putQuestion(question)
  {
    this.http.put('http://localhost:8238/api/Questions/'+question.id, question)
    .subscribe(res=> {
      console.log(res);

    });
  }

  selectQuestion(question)
  {
    this.selectedQuestion.next(question);
  }

    //Quizzes

    getQuizzes()
    {
      return this.http.get('http://localhost:8238/api/Quizs');
    }
    
    postQuiz(quiz)
    {
      console.log(quiz);
  
      this.http.post('http://localhost:8238/api/Quizs', quiz).subscribe(res => {
        console.log(res);
  
      });
    }
  
    putQuiz(quiz)
    {
      this.http.put('http://localhost:8238/api/Quizs/' + quiz.id, quiz)
      .subscribe(res => {
        console.log(res);
    });
    }
  
    selectQuiz(quiz)
    {
      this.selectedQuiz.next(quiz);
    }

}
