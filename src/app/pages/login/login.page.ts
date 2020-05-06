import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { StorageService } from '../../services/storage.service';

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
    private storageServices: StorageService
  ) { }

  ngOnInit() {
  }

  loginAction(){
    this.router.navigate(['home']);
    /*this.authService.login(this.authenticate).subscribe((res: any) =>{
      if(res.authenticate){
        console.log(res.authenticate);
        
      }else{
        console.log('Incorrect username or password');
        
      }
    });*/
   // console.log(this.authenticate);
    
  }
}
