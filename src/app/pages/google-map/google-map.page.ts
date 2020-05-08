import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {Capacitor} from '@capacitor/core';
import {Plugins} from '@capacitor/core';
import { Observable } from 'rxjs';

const{Geolocation} = Plugins;

declare var google;
@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.page.html',
  styleUrls: ['./google-map.page.scss'],
})
export class GoogleMapPage implements OnInit {

  @ViewChild('map',{static : true}) mapElement: ElementRef;
  map: any;
  markers = [];
  myLat: number;
  myLong: number;
  locations:  Observable<any>;
  locationsCollection
  constructor() { }

  ngOnInit() {
    this.loadMap();
  }

    loadMap(){
        Geolocation.getCurrentPosition().then((resp) => {
console.log(resp);

  // this.myLat = resp.coords.latitude;
  // this.myLong = resp.coords.longitude;

  }).catch((error) => {
    console.log('Error getting location', error);
  });

  console.log(this.myLat , " " , this.myLong );
  
  
       
    let mapOptions = {
      center: {lat: 7.110656, lng: 125.62595839999999},
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }
  async getCurrentPosition() {
    const coordinates = await Geolocation.getCurrentPosition();
    console.log('Current', coordinates);
  }

  watchPosition() {
    const wait = Geolocation.watchPosition({}, (position, err) => {
    })
  }

}
