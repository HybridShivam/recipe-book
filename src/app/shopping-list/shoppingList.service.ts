import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class ShoppingListService {

  ingredients: Ingredient[] = [new Ingredient('Apples', 3), new Ingredient('Bananas', 4)];
  ingredientsEmitter = new EventEmitter<Ingredient[]>();

  addIngredients(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

  transferIngredients(ingredient: Ingredient[]) {
    this.ingredientsEmitter.emit(ingredient);
  }

}
