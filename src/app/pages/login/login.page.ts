import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  mobileNumber : any={};
  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }
  sendOTP(){
    console.log("number-",this.mobileNumber)
    this.router.navigate(['/get-otp']);
  }
}
