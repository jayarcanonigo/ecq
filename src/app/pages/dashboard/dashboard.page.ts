import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from '../../services/categories.service';
import { Observable } from 'rxjs';
import { Category } from '../../model/model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  public cagtegories: Observable<Category[]>;

  constructor(private router: Router, private categoriesService: CategoriesService) { 

    this.cagtegories = this.categoriesService.getCategories();
  }

  ngOnInit() {
  }

  gotoLocation(){
    this.router.navigate(['home/google-map']);
  }

  gotoEmployees(){
    this.router.navigate(['home/employees']); 
  }
}
