import { Component, OnInit } from '@angular/core';
import { PopoverController} from '@ionic/angular';
import { HomePopoverComponent } from '../home-popover/home-popover.component';

@Component({
  selector: 'app-itempage',
  templateUrl: './itempage.page.html',
  styleUrls: ['./itempage.page.scss'],
})
export class ItempagePage implements OnInit {

  constructor(public popoverController: PopoverController) { }
 
  async presentPopover(event){
    const popover = await this.popoverController.create({
      component:HomePopoverComponent,
      event
    });
    return await popover.present();
    alert("Hi");
  }

  ngOnInit() {
  }

}
