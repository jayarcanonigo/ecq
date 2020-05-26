import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

import { Observable } from 'rxjs';
import { Category, Job } from '../../model/model';
import { JobsService } from '../../services/jobs.service';
import { Router, ActivatedRoute } from '@angular/router';
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
  categoryId: string;
  categories: Observable<Category[]>;
  jobs: Observable<Job[]>;
  data: {
    id: ""
  }
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
    private route: ActivatedRoute,
    private dataService: DataService,
    private router: Router

  ) {

    this.categoryId = this.route.snapshot.paramMap.get('id');
    if (this.categoryId) {
      this.jobs = this.jobService.getJobs(this.categoryId);
    }

  }

  ngOnInit() {


  }

  addService() {
    let data = {
      categoryId: this.categoryId,
      jobId: ""
    }
    this.dataService.setData(2, data);
    this.router.navigateByUrl('/home/services/2');
  }


  updateService(id) {
    let data = {
      categoryId: this.categoryId,
      jobId: id
    }
    this.dataService.setData(2, data);
    this.router.navigateByUrl('/home/services/2');
  }


  onchange($event) {
    this.jobs = this.jobService.getJobs($event.detail.value)
    this.jobs.subscribe(data => {
      console.log(data);

    })
  }







}
