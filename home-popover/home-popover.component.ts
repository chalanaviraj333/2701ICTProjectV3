import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-popover',
  templateUrl: './home-popover.component.html',
  styleUrls: ['./home-popover.component.scss'],
})
export class HomePopoverComponent implements OnInit {

  constructor(public popoverController: PopoverController, private alertController: AlertController, private actionSheet: ActionSheetController, private router: Router) { }

  ngOnInit() {}

  // doc(){
  //   window.open('https://ionicframework.com/docs/api/popover', '_blank');
  //   this.popoverController.dismiss();
  // }

  editItem(){
    this.router.navigate(['edititem']);
    this.popoverController.dismiss();
  }
  close(){
    this.popoverController.dismiss();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'are you sure want to delete this item?',
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('you clicked me');
        }
      },
        {
          text: 'Okay',
          cssClass: 'secondary',
          handler: () => {
            console.log('Second Hanlder');
          }
        }

      ]
    });

    await alert.present();
  }

}
