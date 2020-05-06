import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { StorageService } from './storage.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthConstants } from '../config/auth-constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpService: HttpService,
    private storageService: StorageService,
    private router: Router
  ) { }

  login(postData : any): Observable<any>{
    return this.httpService.get('authenticate', postData);
  }

  signup(postData : any): Observable<any>{
    return this.httpService.post('authenticate', postData);
  }

  logout(){
   this.storageService.removeItem(AuthConstants.AUTH).then(
     res =>{
        this.router.navigate(['login']);
     }
   )
  }
}
