import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CelebrationPageRoutingModule } from './celebration-routing.module';

import { CelebrationPage } from './celebration.page';
import { CalendarModule } from 'ion2-calendar';
import { RouterModule } from '@angular/router';
import { ToDoListPage } from '../to-do-list/to-do-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CelebrationPageRoutingModule,
    RouterModule.forChild([
      {
        path: '',
        component: ToDoListPage
      }
    ]),
    CalendarModule
  ],
  declarations: [CelebrationPage]
})
export class CelebrationPageModule {}
