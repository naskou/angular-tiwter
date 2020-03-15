import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as M from 'materialize-css';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import * as moment from 'moment';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit, AfterViewInit {
  tabElement: any;
  postsTab: boolean;
  followingTab: boolean;
  followersTab: boolean;
  posts = [];
  following = [];
  followers = [];
  user: any;
  name: any;

  constructor(private route: ActivatedRoute, private usersService: UsersService) {}

  ngOnInit() {
    this.postsTab = true;
    const tabs = document.querySelector('.tabs');
    M.Tabs.init(tabs, {});
    this.tabElement = document.querySelector('.nav-content');

    this.route.params.subscribe(params => {
      this.name = params.name;
      this.GetUserData(this.name);
    })
  }

  ngAfterViewInit() {
    this.tabElement.style.display = 'none';
  }

  GetUserData(name) {
    this.usersService.GetUserByName(name).subscribe(
      data => {
        this.user = data.result;
        this.posts = data.result.posts;
        this.followers = data.result.followers;
        this.following = data.result.following;
      },
      err => console.log()
    );
  }

  ChangeTab(value) {
    if (value === 'posts') {
      this.postsTab = true;
      this.followersTab = false;
      this.followingTab = false;
    }
    if (value === 'following') {
      this.postsTab = false;
      this.followersTab = false;
      this.followingTab = true;
    }
    if (value === 'followers') {
      this.postsTab = false;
      this.followersTab = true;
      this.followingTab = false;
    }
  }

  TimeFromNow(time) {
    return moment(time).fromNow();
  }
}
