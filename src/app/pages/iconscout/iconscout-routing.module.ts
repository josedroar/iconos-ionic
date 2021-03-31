import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IconscoutPage } from './iconscout.page';

const routes: Routes = [
  {
    path: '',
    component: IconscoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IconscoutPageRoutingModule {}
