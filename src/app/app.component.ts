import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [`h3 {
    color: chartreuse;
  }
  `]
})
export class AppComponent {
  title = 'hybrid-angular';
  tab = 'recipe';

  tabButtonClick(choose: string) {
    this.tab = choose;
  }
}
