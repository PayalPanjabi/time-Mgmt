import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
 
  user:any={}
  constructor(
    public router : Router
  ) { }

  ngOnInit() {
  }
  register(){
    console.log("register-",this.user)
    this.router.navigate(['/daily-routine']);
  }
}
