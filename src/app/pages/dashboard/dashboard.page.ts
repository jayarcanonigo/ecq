import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoLocation(){
    this.router.navigate(['home/google-map']);
  }

  gotoEmployees(){
    this.router.navigate(['home/employees']); 
  }
}
