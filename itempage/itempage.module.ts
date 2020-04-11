import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItempagePageRoutingModule } from './itempage-routing.module';

import { ItempagePage } from './itempage.page';
import { HomePopoverComponent } from '../home-popover/home-popover.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItempagePageRoutingModule
  ],
  entryComponents: [HomePopoverComponent],
  declarations: [ItempagePage, HomePopoverComponent]
})
export class ItempagePageModule {}
