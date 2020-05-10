import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { StorageService } from '../../services/storage.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public authenticate = {
    user_name: "",
    pwd: ""
  };
  constructor(
    private router: Router,
    private authService: AuthService,
    private storageServices: StorageService,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
  }

  loginAction() {

    this.authService.getUser(this.authenticate.user_name).subscribe(user => {
      console.log("Exists : ", user);
      if (user) {
        if (user.password == this.authenticate.pwd) {
          this.router.navigate(['home']);
        } else {
          this.showToast('Incorrect username or password');
        }

      } else {
        this.showToast('Incorrect username or password');
      }
    });

  }
  showToast(msg) {
    this.toastCtrl.create({
      message: msg,
      duration: 2000
    }).then(toast => toast.present());
  }
}
