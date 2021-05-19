import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  selector: 'app-assign-task',
  templateUrl: './assign-task.page.html',
  styleUrls: ['./assign-task.page.scss'],
})
export class AssignTaskPage implements OnInit {
  message:any;
  chat:any;
  constructor(
    public router: Router,
    // public socialSharing : SocialSharing
  ) { }

  ngOnInit() {
  }
  back(){
    this.router.navigateByUrl('/to-do-list')
  }
  share(){
    let subject = 'Sharing Time Management Application with you';
    let message = 'Hi I found Time Management Applicaiton very useful and I Share To Do List With You!..';
    var options = {
      message: message,
      subject: subject,
      chooserTitle: 'Share Via',
      url: 'https://play.google.com/store',
    };
    // this.socialSharing.shareWithOptions(options);
  }
  send(){
    console.log("send msg",this.chat)
  }
}
