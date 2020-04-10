import {Component, EventEmitter, Output} from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  headerName = 'Shivam';
  menuItems = ['Home', 'Pokemon', 'About'];
  currentTab = 'recipe';
  // Events for Tab Selection
  @Output() tabClickEvent = new EventEmitter<string>();

  headerElementActive = false;


  setActive() {
    this.headerElementActive = true;
  }

  unsetActive() {
    this.headerElementActive = false;
  }


  recipeClicked() {
    this.currentTab = 'recipe';
    this.tabClickEvent.emit('recipe');
  }


  shoppingListClicked() {
    this.currentTab = 'shoppingList';
    this.tabClickEvent.emit('shoppingList');
  }
}
