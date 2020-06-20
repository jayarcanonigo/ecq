import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardPage, 
    children :[   
    {
      path: '',
      loadChildren: () => import('../pages/tab/tab.module').then( m => m.TabPageModule)
    },
    {
      path: 'request-list',
      loadChildren: () => import('../pages/request-list/request-list.module').then(m => m.RequestListPageModule)
    }

  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
