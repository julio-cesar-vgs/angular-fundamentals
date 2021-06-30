import {Inject, Injectable} from '@angular/core';
import {IUser} from './user.model';

@Injectable()
export class AuthService {
  currentUser: IUser;


  loginUser(userName: string, password: string): void {
    this.currentUser = {
      id: 1,
      userName,
      firstName: 'Julio',
      lastname: 'Souza',
    };
  }

  isAuthenticated(): boolean {
    console.log(this.currentUser)
    return !!this.currentUser;
  }
  updateCurrentUser(firstName, lastName: string): void {
    this.currentUser.lastname = lastName;
    this.currentUser.firstName = firstName;
  }
}
