import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primary-navbar',
  templateUrl: './primary-navbar.component.html',
  styleUrls: [
    '../navbar.scss',
    './primary-navbar.component.scss',
  ]
})
export class PrimaryNavbarComponent implements OnInit {
  currentDate: Date = new Date();
  navLinksInternal: Array<{ name: string, to: string }> = [{
    name: 'Blog',
    to: '/'
  }, {
    name: 'Latest',
    to: '/latest'
  }, {
    name: 'Life',
    to: '/life'
  }, {
    name: 'Travel',
    to: '/travel'
  }, {
    name: 'Fashion',
    to: '/fashion'
  }];
  navLinksExternal: Array<{ icon: string, to: string }> = [{
    icon: 'facebook',
    to: 'fb.com'
  }, {
    icon: 'pinterest',
    to: 'pinterest.com'
  }, {
    icon: 'twitter',
    to: 'twitter.com'
  }, {
    icon: 'youtube',
    to: 'youtube.com'
  }];
  constructor() { }

  ngOnInit(): void {
  }

}
