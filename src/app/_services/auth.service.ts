import { Injectable } from '@angular/core';
import { Role } from '../_models/Role';
import { User } from '../_models/User';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
roles: Array<Role> = [];
users: Array<User> = [];
user: User;
viewSignIn: any = true;
isAdmin: any = false;

constructor(private http: HttpClient) { }

GetRoles() {
  return this.roles = [{ Id: 1, Name: 'Admin'}, {Id: 2, Name: 'General User'}];
}


GetJsonFileUsers() {
  return this.http.get('./assets/jsonFileUsers.json');
}

SaveJsonFileUsers() {
  return this.http.get('./assets/jsonFileUsers.json');
}


GetUsers() {
  return this.users = [{ id: 1, name: 'Grace',  surname: 'Jones',  password: 'grace',  emailAddress: 'grace@gmail.com',
    role: 'General User'},
  { id: 2, name: 'Ann',  surname: 'Lees',  password: 'ann',  emailAddress: 'ann@gmail.com',  role: 'General User'},
  {id: 3, name: 'Lee',  surname: 'Anne',  password: 'lee',  emailAddress: 'lee@gmail.com',  role: 'General User'},
  { id: 4, name: 'Mike', surname: 'Hands',  password: 'mike',  emailAddress: 'mike@gmail.com',  role: 'General User'},
  { id: 5, name: 'Martin',  surname: 'Liessuer',  password: 'martin',  emailAddress: 'martin@gmail.com',  role: 'General User'}];
}

LoggedInUser(user) {
  if (user.role === 'Admin') {
    this.isAdmin = true;
  }
  this.user = user;
  this.viewSignIn = false;
}

IsAdmin() {

  return this.isAdmin;
//   if (this.user.Role === 'Admin') {
//     return true;
//   } else {
//   return false;
//  }
}

}
