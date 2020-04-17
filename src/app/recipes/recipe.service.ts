import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs';

export class RecipeService {

  recipesChanged=new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe('Pizza',
      'Pizza is a savory dish of Italian origin, consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients baked at a high temperature, traditionally in a wood-fired oven. A small pizza is sometimes called a pizzetta.',
      'https://www.simplyrecipes.com/wp-content/uploads/2007/01/homemade-pizza-horiz-a-1200-768x512.jpg',
      [new Ingredient('Vegetables', 4), new Ingredient('Sauce', 1), new Ingredient('Spices', 5), new Ingredient('Wheat', 2)]),
    new Recipe('Burger',
      'A hamburger (also burger for short) is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun; condiments such as ketchup, mustard, mayonnaise, relish, or "special sauce"; and are frequently placed on sesame seed buns.',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/RedDot_Burger.jpg/1200px-RedDot_Burger.jpg',
      [new Ingredient('Bread', 4), new Ingredient('Sauce', 1), new Ingredient('Spices', 5), new Ingredient('Wheat', 2)]),
    new Recipe('Hotcake',
      'A pancake (or hotcake, griddlecake, or flapjack, not to be confused with oat bar flapjacks) is a flat cake, often thin and round, prepared from a starch-based batter that may contain eggs, milk and butter and cooked on a hot surface such as a griddle or frying pan, often frying with oil or butter.',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Blueberry_pancakes_%283%29.jpg/1200px-Blueberry_pancakes_%283%29.jpg',
      [new Ingredient('Namakeen', 4), new Ingredient('Buns', 2), new Ingredient('Noodles', 1), new Ingredient('Maida', 1)])];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipeByID(index) {
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  // deleteRecipe(index: number) {
  //   this.recipes.splice(index, 1);
  //   this.recipesChanged.next(this.recipes.slice());
  // }

}
