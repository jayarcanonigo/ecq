
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { map, take, finalize } from 'rxjs/operators'; 
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';
import { DataService } from '../../services/data.service';
import { AlertController } from '@ionic/angular';
import { ToastService } from '../../services/toast.service';
import { AngularFireStorageReference , AngularFireUploadTask ,AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.page.html',
  styleUrls: ['./upload-image.page.scss'],
})
export class UploadImagePage  {

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadState: Observable<string>;
  uploadProgress: Observable<number>;
  currentImage :string;
  files: Observable<any>;
 
  constructor(public navCtrl: NavController, private dataProvider: DataService, private alertCtrl: AlertController,
     private toastCtrl: ToastService, private iab: InAppBrowser, private afStorage: AngularFireStorage,
     private camera: Camera) {
    this.files = this.dataProvider.getFiles();
  }
  ngOnInit() {
  }
  upload(event) {
    const id = Math.random().toString(36).substring(2);
    this.ref = this.afStorage.ref(id);
    this.task = this.ref.put(event.target.files[0]);
     this.task.snapshotChanges().pipe(
      finalize(() => {
        this.ref.getDownloadURL().subscribe(url => {
          this.currentImage =  url;
          console.log(url); // <-- do what ever you want with the url..
        });
      })
    ).subscribe();
    this.uploadProgress = this.task.percentageChanges();
    console.log(this.uploadProgress);
    
    //this.downloadURL = this.task.downloadURL();
  }
 
  async addFile() {
    let inputAlert = await   this.alertCtrl.create({
      subHeader: 'Store new information',
      inputs: [
        {
          name: 'info',
          placeholder: 'Lorem ipsum dolor...'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Store',
          handler: data => {
            console.log(data);
            
            this.uploadInformation(data.info);
          }
        }
      ]
    });
    await inputAlert.present();
  }
 
  uploadInformation(text) {
    let upload = this.dataProvider.uploadToStorage(text);
 
    // Perhaps this syntax might change, it's no error here!
   

      
  }
 
  deleteFile(file) {
    this.dataProvider.deleteFile(file).subscribe(() => {
      this.toastCtrl.presentToast('New File added!')
    });
  }
 
  viewFile(url) {
    this.iab.create(url);
  }

  openGallery() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    };

    this.camera.getPicture(options).then((imageData) => {
      this.currentImage = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
      console.log("Camera issue:" + err);
    });
  }


}
