import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Dashboard',
      url: '/home/',
      icon: 'apps'
    },
    {
      title: 'Profile',
      url: '/home/profile',
      icon: 'person'
    },
    {
      title: 'Order',
      url: '/home/order',
      icon: 'cart'
    }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() { }

  ngOnInit() {
  }

}
