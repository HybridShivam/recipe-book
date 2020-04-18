import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {
  }


  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.put('https://recipebook-6eef7.firebaseio.com/recipes.json', recipes).subscribe(response => {
        console.log(response);
      }
    );
  }


  fetchRecipes(){
    this.http.get<Recipe[]>('https://recipebook-6eef7.firebaseio.com/recipes.json').pipe(map(recipe=>{
      return recipe.map(recipe=>{ return {...recipe,ingredients: recipe.ingredients? recipe.ingredients: []}})
    })).subscribe(
      recipes=>{
        console.log(recipes);
        this.recipeService.importFetchedRecipes(recipes);
      }
    )
  }


}
