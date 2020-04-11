import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirstpagePageRoutingModule } from './firstpage-routing.module';

import { FirstpagePage } from './firstpage.page';
import { AdditemPage } from '../additem/additem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirstpagePageRoutingModule
  ],
  declarations: [FirstpagePage,AdditemPage],
  entryComponents: [AdditemPage]
})
export class FirstpagePageModule {}
