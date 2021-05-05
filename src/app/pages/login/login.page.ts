import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  userPhone : any;
  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }
  sendOTP(){
    this.router.navigate(['/get-otp']);
  }
}
