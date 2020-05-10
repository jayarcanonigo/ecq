import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../model/user.model';
import { FormBuilder } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import { auth } from 'firebase';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  hide = true;
  conhide = true;
  confirmPassword : String = "";
  user  : User = {
    phoneNumber: "",
    lastName: "",
    firstName: "",
    password: ""
};

  constructor(private router: Router,
    private toastCtrl: ToastController,
    private authService:  AuthService
  ) { }

  ngOnInit() {
  }
    
  navigateToLogin(){
    console.log(this.user);
    if(this.authService.checkUserExists(this.user)){
      this.showToast('Phone number already exists'); 
    }else{
      this.authService.addUser(this.user);
      this.router.navigate(['login']);
    }
      
  }

  showToast(msg) {  
    this.toastCtrl.create({  
      message: msg,  
      duration: 2000  
    }).then(toast => toast.present());  
  }  


}
