import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { leftJoin } from '../../shared/collectionJoin';
import { shareReplay } from 'rxjs/operators';
import { ScheduleService } from '../../services/schedule.service';
import { ModalController } from '@ionic/angular';
import { GoogleMapPage } from '../google-map/google-map.page';
import { LocationService } from '../../services/location.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from '../../services/request.service';
import { ToastService } from '../../services/toast.service';
import { RequestProvider } from '../../model/model';

@Component({
  selector: 'app-request',
  templateUrl: './request.page.html',
  styleUrls: ['./request.page.scss'],
})
export class RequestPage implements OnInit {
  customPickerOptions: any;
  schedule: any;
  address: any;
  serviceCharge = 400;
  timeSchedule: any;
  serviceCount = 1;
  name: string;
  dataRequest : RequestProvider;
  serviceId: string;
  partnerId: string;
  startDate: string;
  maxDate: any = new Date(new Date().setFullYear(new Date().getFullYear() + 2)).toISOString();
  minDate: any = new Date(new Date().setFullYear(new Date().getFullYear())).toISOString();
  constructor(public afs: AngularFirestore, private scheduleService: ScheduleService,
    private modalCtrl: ModalController, private locationService: LocationService, private router: Router,
    private route: ActivatedRoute, private requestService: RequestService, private toastService: ToastService
  ) { }

  ngOnInit() {
    this.serviceId = this.route.snapshot.paramMap.get('serviceId');
    this.name = this.route.snapshot.paramMap.get('name');
    this.partnerId = this.route.snapshot.paramMap.get('partnerId');
    this.address = this.locationService.getFormattedAddres();
    this.customPickerOptions = {
      buttons: [{
        text: 'Save',
        handler: () => console.log(this.startDate)
      }, {
        text: 'Log',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
          return false;
        }
      }]
    }


  }

  decreaseService() {
    if (this.serviceCount > 1) {
      this.serviceCount -= 1;
    }
  }

  increaseService() {
    this.serviceCount += 1;
  }

  changeDate($event) {
    var d = new Date($event.detail.value);
    var n = d.getDay();
    console.log(n);

    this.scheduleService.getScheduleTest('PPLvaERpS6LsePvNq6dw').subscribe(data => {
      this.timeSchedule = data.day;
      this.getTime('Mon');
      console.log(this.schedule);
    });



  }

  async showGoogleMap() {

    let modal = await this.modalCtrl.create({
      component: GoogleMapPage,
      cssClass: 'cart-modal'
    });
    modal.onWillDismiss().then(() => {

    })
    modal.present();


  }

  getTime(day): void {
    this.timeSchedule = this.timeSchedule.filter(h => h.name === day);
  }

  sendRequest() {
     this.dataRequest = {
      price: this.serviceCount * this.serviceCharge,
      address: this.locationService.getFormattedAddres().getValue(),
      serviceId: this.serviceId,
      serviceName: this.name,
      partnerId: this.partnerId,
      date: this.startDate,
      time: '8AM TO 10PM',
      status: 'Pending'
    };
    this.requestService.addRequestProvider(this.dataRequest );
    this.toastService.presentToast("You job request submitted successfully");
    this.router.navigate(['dashboard']);
    console.log(this.dataRequest );

  }

}
