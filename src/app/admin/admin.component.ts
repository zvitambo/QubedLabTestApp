
import { Component, OnInit, Input } from '@angular/core';
import { User } from '../_models/User';
import { Role } from '../_models/Role';
import { AuthService } from '../_services/auth.service';
import { SafeUrl } from '@angular/platform-browser';




@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  roles: Array<Role> = [];
  createNewUser: any = false;
  user: User;
  users: Array<User> = [];

  constructor(public auth: AuthService) { }

  ngOnInit() {
    this.roles = this.auth.GetRoles();
    this.user = {
      id: 0,
      name: '',
      surname: '',
      password: '',
      emailAddress: '',
      role: ''
    };
   this.auth.GetJsonFileUsers().subscribe((data: any) => {
      this.users = data;
       });

  }

  CreateNewUser() {
    this.createNewUser = true;
    const span = document.getElementById('span');
    span.textContent = '';
  }

  RemoveUser(user) {
    const index = this.users.indexOf(user.Id , 0);
    this.users.splice(index, 1);
  }

  EditUser(user) {
    this.createNewUser = true;
    this.user = user;
  }

  SaveUser() {
    this.createNewUser = false;
    this.users.push(this.user);
  }

  Cancel() {
    this.createNewUser = false;
  }


  ExportJsonFile() {


    const jsonData = JSON.stringify(this.users);
    const uri = 'data:application/json;charset=UTF-8,' + encodeURIComponent(jsonData);

    // const a = document.getElementById('exportJson');
    //  a.setAttribute('href', uri);

    const span = document.getElementById('span');
    const a = document.createElement('a');
     a.href = uri;
     a.innerHTML = 'Right-click and choose "save as..."';
     span.textContent = '';
     span.appendChild(a);
   // document.body.appendChild(a);
  }

}
