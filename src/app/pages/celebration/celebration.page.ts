import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-celebration',
  templateUrl: './celebration.page.html',
  styleUrls: ['./celebration.page.scss'],
})
export class CelebrationPage implements OnInit {
  date: string;
  type: 'string';
  constructor() { }

  ngOnInit() {
  }
  onChange($event) {
    console.log($event);
  }
  addDate(){}
}
