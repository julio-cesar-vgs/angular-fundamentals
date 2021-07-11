import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ISession, restrictedWords} from '../../shared/index';

@Component({
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})

export class CreateSessionComponent implements OnInit {
  public name: FormControl;
  public duration: FormControl;
  public presenter: FormControl;
  public level: FormControl;
  public abstract: FormControl;
  public newSessionForm: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.name = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.level = new FormControl('', Validators.required);
    this.abstract = new FormControl('', [Validators.required,
      Validators.maxLength(400), restrictedWords(['foo', 'bar'])]);

    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract
    });
  }
  saveSession(formValues): void {
    const session: ISession = {
      id: undefined,
      name: formValues.name,
      duration: +formValues.duration,
      level: formValues.level,
      presenter: formValues.presenter,
      abstract: formValues.abstract,
      voters: []
    };
    console.log(session);
  }
}
