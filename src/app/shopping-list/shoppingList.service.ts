import {Ingredient} from '../shared/ingredient.model';
import {Injectable, OnInit} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class ShoppingListService implements OnInit{

  editingModeSubject=new Subject<number>();
  ingredients: Ingredient[]=[]; //= [new Ingredient('Apples', 3), new Ingredient('Bananas', 4)];
  ingredientsEmitter = new Subject<Ingredient[]>();
  modeEmitter=new Subject<boolean>();

  ngOnInit(): void {
  }

  addIngredients(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

  transferIngredients(ingredient: Ingredient[]) {
    this.ingredientsEmitter.next(ingredient);
  }

}
