import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/Guards/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./page/home/home.module').then((m) => m.HomePageModule),

    canActivate: [AuthGuard],
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./page/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'upload-data',
    loadChildren: () =>
      import('./page/upload-data/upload-data.module').then(
        (m) => m.UploadDataPageModule
      ),
  },
  {
    path: 'view-item',
    loadChildren: () =>
      import('./page/view-item/view-item.module').then(
        (m) => m.ViewItemPageModule
      ),
  },
  {
    path: 'welcome-page',
    loadChildren: () => import('./page/welcome-page/welcome-page.module').then( m => m.WelcomePagePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
