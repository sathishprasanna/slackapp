import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChanneldetailPageRoutingModule } from './channeldetail-routing.module';

import { ChanneldetailPage } from './channeldetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChanneldetailPageRoutingModule
  ],
  declarations: [ChanneldetailPage]
})
export class ChanneldetailPageModule {}
