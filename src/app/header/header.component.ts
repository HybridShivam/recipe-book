import {Component} from '@angular/core';
import {DataStorageService} from '../shared/data-storage.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isCollapsed = true;

  constructor(private dataStorageService: DataStorageService) {
  }


  storeRecipes() {
    this.dataStorageService.storeRecipes();
  }

  fetchRecipes() {
    // let observables=
    this.dataStorageService.fetchRecipes();
    // observables[0].subscribe();
    // observables[1].subscribe();
  }

  collapseToggle() {
    this.isCollapsed = !this.isCollapsed;
  }

  collapse() {
    this.isCollapsed = true;
  }


  saveAsServerRecipes() {
    this.dataStorageService.saveAsServerRecipes();
  }


  revertToServerRecipes() {
    this.dataStorageService.revertToServerRecipes();
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
