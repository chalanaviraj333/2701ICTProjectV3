import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChartpagePage } from './chartpage.page';

const routes: Routes = [
  {
    path: '',
    component: ChartpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChartpagePageRoutingModule {}
