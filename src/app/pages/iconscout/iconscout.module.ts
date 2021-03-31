import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IconscoutPageRoutingModule } from './iconscout-routing.module';

import { IconscoutPage } from './iconscout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IconscoutPageRoutingModule
  ],
  declarations: [IconscoutPage]
})
export class IconscoutPageModule {}
