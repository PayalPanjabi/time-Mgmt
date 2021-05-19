import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage implements OnInit {
  data:any={};
  constructor(
    public actionSheetController : ActionSheetController,
    public alertController: AlertController
  ) { }

  ngOnInit() {
  }
  addNotes(){
    console.log("Notes-", this.data)
  }

  
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Action',
      cssClass: 'my-custom-class',
      buttons: [ {
        text: 'Add',
        icon: 'add',
        handler: () => {
          console.log('Add clicked',this.data);
          this.presentAlertConfirm()
        }
      },{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          //  this.data.splice(index, this.data);
          
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Your Note <strong>Saved</strong> Successfully !!!',
      buttons: [
        {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
}
