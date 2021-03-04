import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatButtonModule , MatCardModule , MatInputModule, MatListModule , MatToolbarModule} from '@angular/material';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {QuestionComponent} from './question.component';
import { ApiService } from './api.service';
import { QuestionsComponent } from './questions.component';
import { HomeComponent } from './home.component';
import { NavComponent } from './nav.component';
import { QuizComponent } from './quiz.component';
import { QuizzesComponent } from './quizzes.component';
import { RegisterComponent } from './register.component';
import { AuthService } from './auth.service';
import { AuthInterceptor } from './auth.intercetor';
import { LoginComponent } from './login.component';


const routes = [
  {path: '' , component: HomeComponent},
  {path: 'question' , component: QuestionComponent},
  {path: 'question/:quizid' , component: QuestionComponent},
  {path: 'questions' , component: QuestionsComponent},
  {path: 'register' , component: RegisterComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'quiz' , component: QuizComponent}
];

@NgModule({
  declarations: [
    AppComponent, QuestionComponent, QuestionsComponent , HomeComponent, NavComponent , QuizComponent , RegisterComponent , LoginComponent , QuizzesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule
  ],
  providers: [ApiService , AuthService , {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi:true
  }] ,
  bootstrap: [AppComponent]
})
export class AppModule { }
