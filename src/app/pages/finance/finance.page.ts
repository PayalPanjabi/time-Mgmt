import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.page.html',
  styleUrls: ['./finance.page.scss'],
})
export class FinancePage implements OnInit {
  item:any;
  constructor() { }

  ngOnInit() {
    this.item = true;
    console.log(this.item)
  }
  remindChecked(ev,item){
    // console.log("item",item)
  }
}
