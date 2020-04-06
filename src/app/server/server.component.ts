import {Component} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online {
      color: white
    }
  `]
})

export class ServerComponent {
  serverID = 10;
  serverStatus = 'Offline';
  serverName = '';


  /*
   Lets create a method
  */
  getServerStatus() {
    return this.serverName;
  }

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
  }

  getBackgroundColor() {
    return this.serverStatus === 'Online' ? 'green' : 'red';
  }
}
