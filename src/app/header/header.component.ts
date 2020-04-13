import {Component, EventEmitter, Output} from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  currentTab = 'recipe';
  // Events for Tab Selection
  // @Output() tabClickEvent = new EventEmitter<string>();

  // recipeClicked() {
  //   this.currentTab = 'recipe';
  //   this.tabClickEvent.emit('recipe');
  // }
  //
  //
  // shoppingListClicked() {
  //   this.currentTab = 'shoppingList';
  //   this.tabClickEvent.emit('shoppingList');
  // }
}
