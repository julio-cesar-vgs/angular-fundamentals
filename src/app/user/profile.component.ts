import {Component, OnInit} from '@angular/core';
import {Form, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';

@Component({
  templateUrl: './profile.component.html',
  styles: [`
    em {
      float: right;
      color: #E05C65;
      padding-left: 10px
    }

    .error input {
      background-color: #E3C3C5
    }

    .error ::-webkit-input-placeholder {
      color: #999
    }
 
    .error ::-moz-placeholder {
      color: #999
    }

    .error :-ms-input-placeholder {
      color: #999
    }

    .error :-moz-placeholder {
      color: #999
    }
  `]
})


export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  private lastName: FormControl;
  private firstName: FormControl;

  constructor(private auth: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    console.log(this.auth.currentUser.firstName);
    this.firstName = new FormControl(
      this.auth.currentUser.firstName, [Validators.required, Validators.pattern('[a-azA-Z].*')]);
    this.lastName = new FormControl(
      this.auth.currentUser.lastname, [
            Validators.required, Validators.minLength(4), Validators.maxLength(15)]);
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,

    });
  }

  cancel(): void {
    this.router.navigate(['events']);
  }

  saveProfile(formValues): void {

    if (this.profileForm.valid) {
      this.auth.updateCurrentUser(formValues.firstName, formValues.lastName);
      this.router.navigate(['events']);
    }
  }

  validateLastName(): boolean {
    return this.lastName.valid ||
      this.lastName.untouched;
  }

  validateFirstName(): boolean {
    return this.firstName.valid ||
      this.firstName.untouched;
  }
}
