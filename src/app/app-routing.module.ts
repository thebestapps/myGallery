import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./page/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./page/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./page/signup/signup.module').then( m => m.SignupPageModule)
  },  {
    path: 'upload-data',
    loadChildren: () => import('./page/upload-data/upload-data.module').then( m => m.UploadDataPageModule)
  },
  {
    path: 'view-item',
    loadChildren: () => import('./page/view-item/view-item.module').then( m => m.ViewItemPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
