import { Component, OnInit, NgZone } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LocationService } from '../../services/location.service';
import { Plugins } from '@capacitor/core';
import { ModalController } from '@ionic/angular';
import { CartModalPage } from '../../pages/cart-modal/cart-modal.page';
const { Geolocation } = Plugins;
declare var google;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  currentLocation: BehaviorSubject<string>;

  constructor(private location: LocationService,  public zone: NgZone, private modalCtrl: ModalController,) { }

  ngOnInit() {
    this.currentLocation = this.location.getFormattedAddres();
    if(this.currentLocation){
      this.loadMap();
    }
  }

  async getGeoLocation(lat: number, lng: number, type?) {
    if (navigator.geolocation) {
      let geocoder = await new google.maps.Geocoder();
      let latlng = await new google.maps.LatLng(lat, lng);
      let request = { latLng: latlng };

      await geocoder.geocode(request, (results, status) => {
        if (status == google.maps.GeocoderStatus.OK) {
          let result = results[0];
          this.zone.run(() => {
            if (result != null) {
              this.location.setFormattedAddress(result.formatted_address);
              this.location.setAddress({
                name: result.formatted_address,
                latitude: request.latLng.lat,
                longitude: request.latLng.lng

              })
              console.log('result.formatted_address' + result.formatted_address);


            }
          })
        }
      });
    }
  }

  loadMap() {
    Geolocation.getCurrentPosition().then((resp) => {
      this.getGeoLocation(resp.coords.latitude, resp.coords.longitude);

    }).catch((error) => {
      console.log('Error getting location', error);
    });

  }

  async openCart() {

    let modal = await this.modalCtrl.create({
      component: CartModalPage,
      cssClass: 'cart-modal'
    });

    modal.present();
  }

}
