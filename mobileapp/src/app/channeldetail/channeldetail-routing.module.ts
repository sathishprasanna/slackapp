import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChanneldetailPage } from './channeldetail.page';

const routes: Routes = [
  {
    path: '',
    component: ChanneldetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChanneldetailPageRoutingModule {}
