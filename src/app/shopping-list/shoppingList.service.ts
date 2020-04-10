import {Ingredient} from '../shared/ingredient.model';

export class ShoppingListService {

  ingredients: Ingredient[] = [new Ingredient('Apples', 3), new Ingredient('Bananas', 4)];


  addIngredients(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }


}
