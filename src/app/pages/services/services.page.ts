import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Job } from '../../model/model';
import { JobsService } from '../../services/jobs.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})
export class ServicesPage implements OnInit {

  job: Job = {
    name: "",
    price: 0,
    minimunPrice: 0,
    quantity: 1,
    categoryId: "",
    createdDate: ""
  }

  data = {
    jobId: "",
    categoryId: ""
  }
  constructor(private route: ActivatedRoute, private jobService: JobsService, private router: Router,
              private toastService: ToastService
    ) {
    


  }

  ionViewWillEnter() {     
      this.job = {
        name: "",
        price: 0,
        minimunPrice: 0,
        quantity: 1,
        categoryId: "",
        createdDate: ""
      }
      
    if (this.route.snapshot.data['data']) {
      this.data = this.route.snapshot.data['data'];

      if (this.data.jobId) {
        this.job.id = this.data.jobId;
        this.jobService.getJob(this.job.id).subscribe(data => {
          this.job = data;
        });
      }
      this.job.categoryId = this.data.categoryId;

    }
  }

  ngOnInit() {

  }

  addJob() {
    this.jobService.addJob(this.job);
    this.toastService.presentToast('New Service Added.');
    this.router.navigate(['home/servicelist/'+this.job.categoryId]);
  }

  deleteJob() {
    this.jobService.deleteJob(this.job);  
    this.toastService.presentToast('New Service Deleted.');
    this.router.navigate(['home/servicelist/'+this.job.categoryId]);
  }

  updateJob() {
    this.jobService.updateJob(this.job);
    this.toastService.presentToast('New Service Updated.');
    this.router.navigate(['home/servicelist/'+this.job.categoryId]);
  }
}
