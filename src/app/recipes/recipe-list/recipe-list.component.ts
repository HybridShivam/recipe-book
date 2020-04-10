import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [new Recipe('Test Recipe', 'Test Desc', 'https://cdn-image.myrecipes.com/sites/default/files/styles/300x300/public/wild-mushroom-farfalle-ck.jpg?itok=-V6XhwIv'), new Recipe('Test Recipe 2', 'Test Desc 2', 'https://cdn-image.myrecipes.com/sites/default/files/styles/300x300/public/wild-mushroom-farfalle-ck.jpg?itok=-V6XhwIv'),new Recipe('Test Recipe 3', 'Test Desc 3', 'https://cdn-image.myrecipes.com/sites/default/files/styles/300x300/public/wild-mushroom-farfalle-ck.jpg?itok=-V6XhwIv')];
  @Output() recipeEmit = new EventEmitter<Recipe>();


  constructor() {
  }

  ngOnInit(): void {
  }

  emitFromList(recipeObject) {
    this.recipeEmit.emit(recipeObject);
  }


}
