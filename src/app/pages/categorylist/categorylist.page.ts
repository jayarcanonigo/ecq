import { Component, OnInit } from '@angular/core';
import { DataService, Category } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.page.html',
  styleUrls: ['./categorylist.page.scss'],
})
export class CategorylistPage implements OnInit {
  public files: Observable<Category[]>;
  constructor(private dataProvider: DataService) {
    this.files = this.dataProvider.getFiles();
   }

  ngOnInit() {
  }

}
