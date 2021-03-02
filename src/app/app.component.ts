import { Component } from '@angular/core';
import { QuestionComponent } from './question.component';

@Component({
  selector: 'app-root',
  template : '<router-outlet></router-outlet>'
})
export class AppComponent {
  title = 'My App';
}
