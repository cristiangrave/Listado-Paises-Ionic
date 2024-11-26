import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Paises', url: '/list-country', icon: 'planet' },
    { title: 'Inbox', url: '/folder/inbox', icon: 'mail' },
  ];
  constructor() {}
}
