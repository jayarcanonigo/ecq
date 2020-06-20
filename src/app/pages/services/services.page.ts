import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Job, Schedule } from '../../model/model';
import { JobsService } from '../../services/jobs.service';
import { ToastService } from '../../services/toast.service';
import { ScheduleService } from '../../services/schedule.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { docJoin } from '../../shared/docJoin';
import { shareReplay } from 'rxjs/operators';
import { observable, Observable } from 'rxjs';
import { leftJoin } from '../../shared/collectionJoin';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})
export class ServicesPage implements OnInit {
  services: Observable<any>;

  serviceId;
  name;
  joined;
  job: Job = {
    name: "",
    price: 0,
    minimumPrice: 0,
    quantity: 1,
    categoryId: "",
    createdDate: ""
  }

  data = {
    jobId: "",
    categoryId: ""
  }
  constructor(private route: ActivatedRoute, private jobService: JobsService, private router: Router,
    private toastService: ToastService, private scheduleService: ScheduleService,
    public afs: AngularFirestore
  ) {




    // console.log( this.schedules.Partner);





    // console.log(this.schedules);




  }

  ionViewWillEnter() {
    this.serviceId = this.route.snapshot.paramMap.get('id');
    this.name = this.route.snapshot.paramMap.get('name');
    this.services = this.afs
      .collection('serviceProvider', ref =>
        ref.where('servicesId', '==', this.serviceId))
      .valueChanges()
      .pipe(
        leftJoin(this.afs, 'userId', 'Partner', 100),
        shareReplay(1)
      );

    this.services.subscribe(data => {
      console.log(JSON.stringify(data));
    })

  }

  ngOnInit() {

  }

  addJob() {
    this.jobService.addJob(this.job);
    this.toastService.presentToast('New Service Added.');
    this.router.navigate(['home/servicelist/' + this.job.categoryId]);
  }

  deleteJob() {
    this.jobService.deleteJob(this.job);
    this.toastService.presentToast('New Service Deleted.');
    this.router.navigate(['home/servicelist/' + this.job.categoryId]);
  }

  updateJob() {
    this.jobService.updateJob(this.job);
    this.toastService.presentToast('New Service Updated.');
    this.router.navigate(['home/servicelist/' + this.job.categoryId]);
  }

  pickEmployee(data) {
    console.log(data);


  }
}
