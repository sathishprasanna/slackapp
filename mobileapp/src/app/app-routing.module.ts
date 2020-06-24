import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: ()=>  import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'forgotpassword',
    loadChildren: () => import('./forgotpassword/forgotpassword.module').then( m => m.ForgotpasswordPageModule)
  },
  {
    path: '',
    redirectTo: 'channel',
    pathMatch: 'full'
  },
  {
    path: 'channel',
    loadChildren: () => import('./channel/channel.module').then( m => m.ChannelPageModule)
  },
  {
    path: '',
    redirectTo: 'channeldetail',
    pathMatch: 'full'
  },
  {
    path: 'channeldetail',
    loadChildren: () => import('./channeldetail/channeldetail.module').then( m => m.ChanneldetailPageModule)
  },
  {
    path: 'channeldetail',
    loadChildren: () => import('./channeldetail/channeldetail.module').then( m => m.ChanneldetailPageModule)
  },
 
  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }