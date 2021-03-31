import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FontsawesomePage } from './fontsawesome.page';

const routes: Routes = [
  {
    path: '',
    component: FontsawesomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FontsawesomePageRoutingModule {}
