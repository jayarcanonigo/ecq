import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { AuthConstants } from '../config/auth-constants';
import { CartService } from '../services/cart.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartModalPage } from '../pages/cart-modal/cart-modal.page';
import { ModalController, NavController } from '@ionic/angular';
import { LocationService } from '../services/location.service';
import { Plugins } from '@capacitor/core';
import { JobsService } from '../services/jobs.service';
import { CategoriesService } from '../services/categories.service';
import { Category } from '../model/model';
const { Geolocation } = Plugins;
declare var google;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  cartItemCount: BehaviorSubject<number>;
  currentLocation: BehaviorSubject<string>;
  public cagtegories: Observable<Category[]>;
  public selectedIndex = 0;
  map: any;
  constructor(private storageService: StorageService,
    private router: Router,
    private jobService: JobsService,
    private modalCtrl: ModalController,
    private location: LocationService,
    public zone: NgZone,
    private categoriesService: CategoriesService,
    public navCtrl: NavController,
    private authService: AuthService,
  ) {
    this.cagtegories = this.categoriesService.getCategories();
    this.currentLocation = location.getFormattedAddres();

    if (!this.authService.userId) {
      this.storageService.get(AuthConstants.AUTH).then(user => {
        console.log(user);
        
        this.authService.userId = user.user_name;
      })
    }

  }

  ngOnInit() {
    this.cartItemCount = this.jobService.getServiceItemCount();
    //this.loadMap();
    console.log('inimap');

  }

  pushPage() {
    // push another page onto the navigation stack
    // causing the nav controller to transition to the new page
    // optional data can also be passed to the pushed page.
    this.navCtrl.navigateForward('order');
  }

  logout() {
    this.router.navigate(['']);
    this.storageService.clear();
  }



  async openCart() {

    let modal = await this.modalCtrl.create({
      component: CartModalPage,
      cssClass: 'cart-modal'
    });

    modal.present();
  }


  gotoLocation() {
    this.router.navigate(['home/google-map']);
  }


}
