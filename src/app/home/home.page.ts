import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { AuthConstants } from '../config/auth-constants';

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
    ,
    {
      title: 'Your Location',
      url: '/home/google-map',
      icon: 'location'
    },
    {
      title: 'Service',
      url: '/home/todo-list',
      icon: 'cog'
    }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(private storageService: StorageService, private router: Router) { }

  ngOnInit() {
  }

  logout(){
    this.router.navigate(['']);
    this.storageService.clear();    
  }
}
