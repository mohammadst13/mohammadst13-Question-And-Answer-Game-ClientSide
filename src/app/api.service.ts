import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {


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


}
