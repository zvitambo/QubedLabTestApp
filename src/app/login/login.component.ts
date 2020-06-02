import { Component, OnInit, Output } from '@angular/core';
import { User } from '../_models/User';
import { Role } from '../_models/Role';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;
  viewSignIn: any = true;
  model: any = {};
  roles: Array<Role> = [];
  constructor(public auth: AuthService) { }

  ngOnInit() {
    this.user = {
      id: 0,
      name: '',
      surname: '',
      password: '',
      emailAddress: '',
      role: ''

    };

    this.roles = this.auth.GetRoles();
  }

  login() {
    this.auth.LoggedInUser(this.user);
    this.auth.viewSignIn = false;
  }

}
