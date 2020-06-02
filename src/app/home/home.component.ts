import { Component, OnInit, Input } from '@angular/core';
import { User } from '../_models/User';
import { Role } from '../_models/Role';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  viewSignIn: any;
  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
