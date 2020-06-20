import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/request.service';
import { Observable } from 'rxjs';
import { RequestProvider } from '../../model/model';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.page.html',
  styleUrls: ['./request-list.page.scss'],
})
export class RequestListPage implements OnInit {
  pendingList : Observable<RequestProvider[]>;
  todoList : Observable<RequestProvider[]>;
  inProgressList : Observable<RequestProvider[]>;
  pastList : Observable<RequestProvider[]>;
  title = 'Pending';
  constructor(private requestService: RequestService) { }

  ngOnInit() {
    this.pendingList = this.requestService.getRequestProviderByUserId('9085356258', 'Pending');
    this.todoList = this.requestService.getRequestProviderByUserId('9085356258', 'To Do');
    this.inProgressList = this.requestService.getRequestProviderByUserId('9085356258', 'In Progress');
    this.pastList = this.requestService.getRequestProviderByUserId('9085356258', 'Past');
    this.pendingList.subscribe(data=>{
      console.log(data);
      
    })
    this.title = 'Pending';
  }
  segmentChanged(ev: any) {
    this.title = ev.detail.value;
    
  }

}
