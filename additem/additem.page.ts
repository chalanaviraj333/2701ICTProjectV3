import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.page.html',
  styleUrls: ['./additem.page.scss'],
})
export class AdditemPage implements OnInit {

  constructor(public modalController: ModalController, private router: Router) { }

  ngOnInit() {
  }


  dismiss(){
    this.modalController.dismiss();
  }

  itemPage() {
    this.router.navigate(['itempage']);
  }

}
