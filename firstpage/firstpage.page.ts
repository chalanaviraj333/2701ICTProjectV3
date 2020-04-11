import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AdditemPage } from '../additem/additem.page';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.page.html',
  styleUrls: ['./firstpage.page.scss'],
})
export class FirstpagePage implements OnInit {
  itemsMost = [{name:'Cavity Lock', price:14.90, available:27}, {name:'Dead Lock', price:113.40, available:3},{name:'Dead Bolt Lock', price:45.00, available:18}];
  itemsAll = [{name:'Cavity Lock', price:14.90, available:27}, {name:'Dead Lock', price:113.40, available:3},{name:'Dead Bolt Lock', price:45.00, available:18},{name:'Knob Set', price:40.00, available:22},{name:'Lever Set', price:45.00, available:18},{name:'Combination Set', price:36.00, available:5},{name:'Classroom Lock', price:18.00, available:7},]
  // itemsAll = ['Cavity Lock', 'Dead Lock', 'Dead Bolt Lock', 'Knob Set', 'Lever Set', 'Combination Set', 'Classroom Lock', 'Entrance Lock', 'Storage Room Lock'];
  userName: string = '';

  constructor(public modalController: ModalController, private router: Router, private route: ActivatedRoute) {

   }

   itemPage() {
    this.router.navigate(['itempage']);
  }

  chartPage(){
    this.router.navigate(['chartpage']);
  }

  itemButton(i){
    this.router.navigate(['itempage']);
  }

  


   async presentModal(){
     const modal = await this.modalController.create({
      component: AdditemPage
     });

     await modal.present();
   }

  ngOnInit() {
    this.userName = this.route.snapshot.paramMap.get('userName');
  }

}
