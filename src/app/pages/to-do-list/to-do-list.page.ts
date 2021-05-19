import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { NotificationPage } from '../notification/notification.page';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.page.html',
  styleUrls: ['./to-do-list.page.scss'],
})
export class ToDoListPage implements OnInit {
  toDoListDTO:any={}
  constructor(
    public router:Router,
    public modalController :ModalController
  ) { }

  ngOnInit() {
  }
  urgent(){
    console.log("urgent");
  }
  profile(){
    this.router.navigateByUrl('/registration')
  }
  assignTask(){
    this.router.navigateByUrl('/assign-task')
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: NotificationPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
  addTODoList(){
    console.log("check list",this.toDoListDTO)
  }
}

