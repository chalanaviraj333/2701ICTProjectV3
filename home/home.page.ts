import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  showPassword = false;
  passwordToggleIcon = 'eye'; 

  constructor(private router: Router) {}

  userName= '';

  signupButtonFun() {
    this.router.navigate(['signup']);
  }

  login(){
    // this.router.navigate(['firstpage']);
    this.router.navigateByUrl('/firstpage/'+ this.userName);
  }

  togglePassword():void{
    this.showPassword = !this.showPassword;

    if(this.passwordToggleIcon == 'eye') {
      this.passwordToggleIcon = 'eye-off';
    }else{
      this.passwordToggleIcon = 'eye';
    }
  }

}
