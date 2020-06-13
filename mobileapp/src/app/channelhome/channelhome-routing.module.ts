import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChannelhomePage } from './channelhome.page';

const routes: Routes = [
  {
    path: '',
    component: ChannelhomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChannelhomePageRoutingModule {}
