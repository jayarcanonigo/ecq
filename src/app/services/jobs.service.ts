import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Job{
  id: number;
  name: string;
  price: number;
  quantity: number;
}
@Injectable({
  providedIn: 'root'
})
export class JobsService {

  data: Job[] = [
    {id: 0, name: 'Massage', price: 500, quantity: 1},
    {id: 1, name: 'Hair Cut', price: 200, quantity: 1},
    {id: 2, name: 'Hair Color', price: 300, quantity: 1},
    {id: 3, name: 'Hair Wax', price: 600, quantity: 1}

  ];

  private job = [];
  private serviceCount = new BehaviorSubject(0);
  constructor() { }

  getProducts(){
    return this.data;
  }

  getCart(){
    return this.job;
  }

  getServiceItemCount(){
    return this.serviceCount;
  }

  addService(job){
    let added = false;
    for(let p of this.job){
      if(p.id === job.id){
        p.quantity += 1;
        added = true;
        break;
      }
    }
    if(!added){
      this.job.push(job);
    }
    this.serviceCount.next(this.serviceCount.value + 1);
  }

  decreasService(job){
  
    for(let [index, p] of this.job.entries()){
      if(p.id === job.id){
        p.quantity -= 1;      
         if(p.quantity == 0){
           this.job.splice(index, 1);
         }
      }
    }    
    this.serviceCount.next(this.serviceCount.value - 1);
  }

  removeService(job){
       
    for(let [index, p] of this.job.entries()){      
      if(p.id === job.id){
        this.serviceCount.next(this.serviceCount.value - p.quantity);
        this.job.splice(index, 1);
      }
     
    }  
  }
}
