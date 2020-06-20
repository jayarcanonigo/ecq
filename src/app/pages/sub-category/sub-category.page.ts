import { Component, OnInit } from '@angular/core';
import { JobsService } from '../../services/jobs.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.page.html',
  styleUrls: ['./sub-category.page.scss'],
})
export class SubCategoryPage implements OnInit {

  jobs = [];
  title : string;
  constructor(private jobsService: JobsService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.title = this.route.snapshot.paramMap.get('name');
    this.jobsService.getJobs(id).subscribe(jobs =>{
      this.jobs = jobs;
    });
  }

}
