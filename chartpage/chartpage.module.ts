import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChartpagePageRoutingModule } from './chartpage-routing.module';

import { ChartpagePage } from './chartpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChartpagePageRoutingModule
  ],
  declarations: [ChartpagePage]
})
export class ChartpagePageModule {}
