import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  users = [];

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.GetUsers();
  }

  GetUsers() {
    this.usersService.GetAllUsers().subscribe(data => {
      this.users = data.result;
    });
  }
}