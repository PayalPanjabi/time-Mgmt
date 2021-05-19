import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-daily-routine',
  templateUrl: './daily-routine.page.html',
  styleUrls: ['./daily-routine.page.scss'],
})
export class DailyRoutinePage implements OnInit {
  tab: string = "add";
  constructor(public alertController : AlertController) { }

  ngOnInit() {
  }
  async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'Remind And Check',
      buttons: ['Cancel', 'Open Modal', 'Delete']
    });
  }

}
