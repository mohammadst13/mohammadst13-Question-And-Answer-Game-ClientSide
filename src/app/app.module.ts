import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatButtonModule , MatCardModule , MatInputModule, MatListModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {QuestionComponent} from './question.component';
import { ApiService } from './api.service';
import {HttpClientModule} from '@angular/common/http';
import { QuestionsComponent } from './questions.component';
import { HomeComponent } from './home.component';

const routes = [
  {path: '' , component: HomeComponent},
  {path: 'question' , component: QuestionComponent},
  {path: 'questions' , component: QuestionsComponent},
];

@NgModule({
  declarations: [
    AppComponent, QuestionComponent, QuestionsComponent , HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
