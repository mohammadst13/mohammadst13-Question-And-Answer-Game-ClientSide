import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {


  constructor(private http: HttpClient){}

  register(credentials)
  {
    this.http.post<any>(`http://localhost:8238/api/Account`,credentials).subscribe(res => {
      localStorage.setItem('token', res);
    });
  }


}
