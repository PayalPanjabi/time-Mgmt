import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.page.html',
  styleUrls: ['./to-do-list.page.scss'],
})
export class ToDoListPage implements OnInit {

  constructor(
    public router:Router
  ) { }

  ngOnInit() {
  }
  urgent(){
    console.log("urgent");
  }
  profile(){
    this.router.navigateByUrl('/registration')
  }
}
