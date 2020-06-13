import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChannelhomePageRoutingModule } from './channelhome-routing.module';

import { ChannelhomePage } from './channelhome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChannelhomePageRoutingModule
  ],
  declarations: [ChannelhomePage]
})
export class ChannelhomePageModule {}
