import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexPage } from './index.page';

const routes: Routes = [
  {
    path: '',
    component: IndexPage,
    children:[{
      path:'',
      loadChildren: () => import('../pages/welcome/welcome.module').then(
         m => m.WelcomePageModule)
    },
    {
      path:'login',
      loadChildren:()=>
        import('../pages/login/login.module').then(
          m => m.LoginPageModule
        )
    },   
    {
      path: 'signup',
      loadChildren: () => import('../pages/signup/signup.module').then( 
        m => m.SignupPageModule)
    },
    {
      path:'reasons',
      loadChildren:()=>
        import('../pages/reasons/reasons.module').then(
          m => m.ReasonsPageModule
        )
    },
    {
      path:'signup',
      loadChildren:()=>
        import('../pages/signup/signup.module').then(
          m => m.SignupPageModule
        )
    }]
  }];
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class IndexPageRoutingModule {}
