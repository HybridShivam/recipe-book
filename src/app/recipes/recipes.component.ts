import {Component, OnInit} from '@angular/core';
import {RecipeService} from './recipe.service';
import {Recipe} from './recipe.model';
import {ShoppingListService} from '../shopping-list/shoppingList.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: []
})
export class RecipesComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    // this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
    //   this.currentRecipeObject = recipe;
    // });
  }

  scrollToElement($element): void {
    console.log($element);
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}
