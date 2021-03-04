import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject} from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {


  constructor(private http: HttpClient , private router: Router){}

  register(credentials)
  {
    this.http.post(`http://localhost:8238/api/Account`, credentials ,{responseType: 'text'}).subscribe(res => {
      this.authenticate(res);
    });
  }

  login(credentials)
  {
    this.http.post(`http://localhost:8238/api/Account/login`, credentials ,{responseType: 'text'}).subscribe(res => {
      this.authenticate(res);
    });
  }

  authenticate(res)
  {
    localStorage.setItem('token', res);
this.router.navigate(['/']);
  }

  logout()
  {
    localStorage.removeItem('token');
  }

get isAuthenticated()
{
  return !!localStorage.getItem('token');
}
}
