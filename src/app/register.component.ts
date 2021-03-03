import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { FormBuilder , Validators } from '@angular/forms';

@Component({
  templateUrl: './register.component.html',
})
export class RegisterComponent {

  form;

constructor(private api: ApiService , private fb: FormBuilder){
this.form = fb.group({
email : ['', Validators.required],
password: ['', Validators.required]
});
}

register()
{
  console.log(this.form);
}
}

