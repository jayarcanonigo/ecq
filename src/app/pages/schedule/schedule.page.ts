import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {
  master = 'Master';

   days = ['Mon', 'Tue', 'Wen', 'Thur', 'Fri', 'Sat', 'Sun'];
  constructor() { }

  ngOnInit() {  
  }

  onSequenceChangeEvent($event){
    console.log($event);
    
  }

  

}
