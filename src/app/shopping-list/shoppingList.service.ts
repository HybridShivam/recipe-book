import {Ingredient} from '../shared/ingredient.model';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class ShoppingListService {

  editingModeSubject=new Subject<number>();
  ingredients: Ingredient[] = [new Ingredient('Apples', 3), new Ingredient('Bananas', 4)];
  ingredientsEmitter = new Subject<Ingredient[]>();
  editingMode=false;

  addIngredients(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

  transferIngredients(ingredient: Ingredient[]) {
    this.ingredientsEmitter.next(ingredient);
  }

}
