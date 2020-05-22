import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

import { Observable } from 'rxjs';
import { Category, Job } from '../../model/model';
import { JobsService } from '../../services/jobs.service';
import { Router } from '@angular/router';
import { CategoriesService } from '../../services/categories.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-servicelist',
  templateUrl: './servicelist.page.html',
  styleUrls: ['./servicelist.page.scss'],
})
export class ServicelistPage implements OnInit {
  public myIndex: string = '';
  public dropdown1: string = '2';
  test: Category[];
  categorySelected: string;
  categories: Observable<Category[]>;
  jobs: Observable<Job[]>;
  fruits = [
    { id: 1, name: 'apple' },
    { id: 2, name: 'banana' },
    { id: 3, name: 'cherry' },
  ];
  selfruits = [this.fruits[1]];

  constructor(
    private platForm: Platform,
    private dataCategory: CategoriesService,
    private jobService: JobsService,
    private router: Router,
    private dataService: DataService
  ) {

    this.categories = this.dataCategory.getCategories();
  }

  ngOnInit() {
    

  }

  onchange($event) {
    this.jobs = this.jobService.getJobs($event.detail.value)
    this.jobs.subscribe(data => {
      console.log(data);
      
    })
  }

  addService() {
    let data = {
      categoryId: this.categorySelected,
      jobId: ""
    }  
    this.dataService.setData(2, data);
    this.router.navigateByUrl('/home/services/2');
  }

  updateService(id){
    let data = {
      categoryId: this.categorySelected,
      jobId: id
    }
    this.dataService.setData(2, data);
    this.router.navigateByUrl('/home/services/2');
  }



}
