import {Recipe} from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [new Recipe('Test Recipe', 'Test Desc', 'https://cdn-image.myrecipes.com/sites/default/files/styles/300x300/public/wild-mushroom-farfalle-ck.jpg?itok=-V6XhwIv'), new Recipe('Test Recipe 2', 'Test Desc 2', 'https://cdn-image.myrecipes.com/sites/default/files/styles/300x300/public/wild-mushroom-farfalle-ck.jpg?itok=-V6XhwIv'), new Recipe('Test Recipe 3', 'Test Desc 3', 'https://cdn-image.myrecipes.com/sites/default/files/styles/300x300/public/wild-mushroom-farfalle-ck.jpg?itok=-V6XhwIv')];

  getRecipes(){
    return this.recipes.slice();
  }

}
