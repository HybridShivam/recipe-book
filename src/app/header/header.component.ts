import {Component, EventEmitter, Output} from '@angular/core';
import {DataStorageService} from '../shared/data-storage.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  currentTab = 'recipe';

  constructor(private dataStorageService: DataStorageService) {
  }


  storeRecipes() {
    this.dataStorageService.storeRecipes();
  }

  fetchRecipes(){
    this.dataStorageService.fetchRecipes();
  }

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
