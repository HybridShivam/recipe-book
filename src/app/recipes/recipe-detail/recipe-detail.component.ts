import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../../shopping-list/shoppingList.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipeFromRecipeComponent: Recipe;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit(): void {
  }

  goToShopping(ingredient: Ingredient[]) {
    // for (let i of ingredient) {
    //   this.shoppingListService.addIngredients(i);
    // }
    this.shoppingListService.ingredients.push(...ingredient);
  }
}
