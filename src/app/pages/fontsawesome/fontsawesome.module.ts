import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FontsawesomePageRoutingModule } from './fontsawesome-routing.module';

import { FontsawesomePage } from './fontsawesome.page';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FontsawesomePageRoutingModule,
    FontAwesomeModule
  ],
  declarations: [FontsawesomePage]
})
export class FontsawesomePageModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fab,far,fas);
  }
}
