import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-otp',
  templateUrl: './get-otp.page.html',
  styleUrls: ['./get-otp.page.scss'],
})
export class GetOTPPage implements OnInit {
  otp:any;
  constructor(
    public router : Router
  ) { }

  ngOnInit() {
  }
  submit(){
    console.log("OTP",this.otp);
    this.router.navigate(['/registration']);
  }
}
