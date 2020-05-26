import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-time-schedule',
  templateUrl: './time-schedule.component.html',
  styleUrls: ['./time-schedule.component.scss'],
})
export class TimeScheduleComponent implements OnInit {

 
   timelist = [
    { name: "FROM8AMTO10AM", label: '8 AM - 10 AM', isSelected : true },
    { name: "FROM10AMTO12PM", label: '10 AM - 12 PM', isSelected : true },
    { name: "FROM12PMTO2PM", label: '12 PM - 2 PM', isSelected : false },
    { name: "FROM2PMTO4PM", label: '2 PM - 4 PM', isSelected : true },
    { name: "FROM4PMTO6PM", label: '4 PM - 6 PM', isSelected : true },
    { name: "FROM6PMTO8PM", label: '6 PM - 8 PM', isSelected : true },
    { name: "FROM8PMTO10PM", label: '8 PM - 10 PM', isSelected : true },
    { name: "FROM10PMTO12AM", label: '10 PM - 12 AM', isSelected : true }
  ]

  @Input('day') masterName: string;
  constructor() {    
    
   }

  ngOnInit() {
    console.log(this.masterName);
    if(this.masterName == "Mon"){
     // this.timelist[7] =  { id: 4, label: '2 PM - 4 PM', isSelected : false };
    }
  }

}
