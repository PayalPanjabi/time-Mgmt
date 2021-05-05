import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    // { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    
    { title: 'TO DO', url: '/to-do-list', icon: 'list' },
    { title: 'Daily-Routine', url: '/daily-routine', icon: 'time' },
    { title: 'Finance', url: '/finance', icon: 'albums' },
    { title: 'Health', url: '/health', icon: 'medkit' },
    { title: 'Celebration', url: '/celebration', icon: 'happy' },
    { title: 'Review', url: '/review', icon: 'search' },
    { title: 'Notes', url: '/notes', icon: 'information-circle' },
    { title: 'Social Media', url: '/social-media', icon: 'share' },
    { title: 'Profile', url: '/registration', icon: 'person' },
    { title: 'Login', url: '/login', icon: 'log-in' },
    
    
  ];
  // public labels = ['Profile', 'Login'];
  constructor() {}
}
