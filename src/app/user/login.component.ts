import {Component} from '@angular/core';

@Component({
  templateUrl: './login.component.html'

})
export class LoginComponent {
  userName;
  password;

  // tslint:disable-next-line:typedef
  login(formValues) {
    console.log(formValues);
  }
}
