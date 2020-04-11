import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edititem',
  templateUrl: './edititem.page.html',
  styleUrls: ['./edititem.page.scss'],
})
export class EdititemPage implements OnInit {

  constructor(private router: Router) { }

  dismiss(){
    this.router.navigate(['firstpage']);
  }

  ngOnInit() {
  }

}
