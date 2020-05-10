import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [{
      path: '',
      loadChildren: () =>
        import('../pages/dashboard/dashboard.module').then(
          m => m.DashboardPageModule)
    },
    {
      path: 'profile',
      loadChildren: () =>
        import('../pages/profile/profile.module').then(
          m => m.ProfilePageModule
        )
    },
    {
      path: 'badges',
      loadChildren: () => import('../pages/badges/badges.module').then(m => m.BadgesPageModule)
    },
    {
      path: 'hospital',
      loadChildren: () => import('../pages/hospital/hospital.module').then(m => m.HospitalPageModule)
    },
    {
      path: 'faqs',
      loadChildren: () => import('../pages/faqs/faqs.module').then(m => m.FaqsPageModule)
    },
    {
      path: 'help',
      loadChildren: () => import('../pages/help/help.module').then(m => m.HelpPageModule)
    },
    {
      path: 'order',
      loadChildren: () => import('../pages/order/order.module').then(m => m.OrderPageModule)
    },
    {
      path: 'google-map',
      loadChildren: () => import('../pages/google-map/google-map.module').then(m => m.GoogleMapPageModule)
    },
    {
      path: 'todo/:id',
      loadChildren: () => import('../pages/todo-details/todo-details.module').then(m => m.TodoDetailsPageModule)
    },
    {
      path: 'todo',
      loadChildren: () => import('../pages/todo-details/todo-details.module').then(m => m.TodoDetailsPageModule)
    },
    {
      path: 'todo-list',
      loadChildren: () => import('../pages/todo-list/todo-list.module').then(m => m.TodoListPageModule)
    }
    ]
  }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
