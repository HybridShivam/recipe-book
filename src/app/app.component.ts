import {Component, OnInit} from '@angular/core';
import smoothscroll from 'smoothscroll-polyfill';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    smoothscroll.polyfill();
  }

}
