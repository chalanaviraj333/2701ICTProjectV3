import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'

@Component({
  selector: 'app-chartpage',
  templateUrl: './chartpage.page.html',
  styleUrls: ['./chartpage.page.scss'],
})
export class ChartpagePage implements OnInit {
  monthlyFlow = [{id:1, name:'Cavity Lock', sold:4, ordered:9}, {id:2, name:'Dead Lock', sold:6, ordered:12},{id:3, name:'Sliding Door Lock', sold:11, ordered:4}, {id:4, name:'Classroom Lock', sold:8, ordered:7}];

  constructor(private router: Router) { }

  dismiss(){
    this.router.navigate(['firstpage']);
  }

  ngOnInit() {
  }

}
