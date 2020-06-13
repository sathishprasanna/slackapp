import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
    path: 'channelhome',
    loadChildren: () => import('./channelhome/channelhome.module').then( m => m.ChannelhomePageModule)
    
  },
  {
    path: 'channelhome',
    loadChildren: () => import('./channelhome/channelhome.module').then( m => m.ChannelhomePageModule)
  },
 
  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }