import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';
import {map, tap} from 'rxjs/operators';
import {CookieService} from 'ngx-cookie-service';
import {ShoppingListService} from '../shopping-list/shoppingList.service';
import {observable} from 'rxjs';
import {Ingredient} from './ingredient.model';

@Injectable({providedIn: 'root'})
export class DataStorageService implements OnInit {
  uniqueID: string;
  firstTimeLogin = false;

  constructor(private http: HttpClient, private recipeService: RecipeService, private cookieService: CookieService, private shoppingListService: ShoppingListService) {
    if (cookieService.get('id')) {
      this.uniqueID = cookieService.get('id');
      this.firstTimeLogin = false;
    } else {
      let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
      const lengthOfCode = 10;
      this.uniqueID = DataStorageService.randomGenerator(lengthOfCode, possible);
      cookieService.set('id', this.uniqueID);
      this.firstTimeLogin = true;
    }
    this.getInitialData();
    console.log("Unique ID" +this.uniqueID);
  }

  ngOnInit(): void {

  }

  private static randomGenerator(lengthOfCode: number, possible: string) {
    let text = '';
    for (let i = 0; i < lengthOfCode; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }


  getInitialData() {
    if (this.firstTimeLogin) {
      this.revertToServerRecipes();
    } else {
      // let observables=
      this.fetchRecipes();
      // observables[0].subscribe();
      // observables[1].subscribe();
    }
  }


  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.put('https://recipebook-6eef7.firebaseio.com/user-recipes/' + this.uniqueID + '.json', recipes).subscribe(response => {
        console.log(response);
      }
    );
    this.http.put('https://recipebook-6eef7.firebaseio.com/user-shopping-list/' + this.uniqueID + '.json', this.shoppingListService.ingredients).subscribe(response => {
        console.log(response);
      }
    );
  }


  fetchRecipes() {
    // let observables = [];
    //Recipes
    // observables[0] =
    this.http.get<Recipe[]>('https://recipebook-6eef7.firebaseio.com/user-recipes/' + this.uniqueID + '.json').pipe(map(recipe => {
      if (recipe == null) {
        recipe = [];
      }
      return recipe.map(recipe => {
        return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []};
      });
    })).subscribe(recipes => {
      if (recipes == null) {
        recipes = [];
      }
      console.log("Fetched",recipes);
      this.recipeService.importFetchedRecipes(recipes);
    });
    //Ingredients
    // observables[1] =
    this.http.get<Ingredient[]>('https://recipebook-6eef7.firebaseio.com/user-shopping-list/' + this.uniqueID + '.json').subscribe(
      ingredients => {
        if (ingredients == null) {
          ingredients = [];
        }
        console.log("Fetched",ingredients);
        this.shoppingListService.importIngredients(ingredients);
      });
  }


  saveAsServerRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.put('https://recipebook-6eef7.firebaseio.com/recipes.json', recipes).subscribe(response => {
        console.log(response);
      }
    );
    this.http.put('https://recipebook-6eef7.firebaseio.com/shopping-list.json', this.shoppingListService.ingredients).subscribe(response => {
        console.log(response);
      }
    );
  }


  revertToServerRecipes() {
    this.http.get<Recipe[]>('https://recipebook-6eef7.firebaseio.com/recipes.json').pipe(map(recipe => {
      if (recipe == null) {
        recipe = [];
      }
      return recipe.map(recipe => {
        return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []};
      });
    })).subscribe(
      recipes => {
        if (recipes == null) {
          recipes = [];
        }
        console.log("Reverted to",recipes);
        this.recipeService.importFetchedRecipes(recipes);
        //Now Store to userRecipes
        this.http.put('https://recipebook-6eef7.firebaseio.com/user-recipes/' + this.uniqueID + '.json', recipes).subscribe(response => {
          }
        );
      }
    );
    this.http.get<Ingredient[]>('https://recipebook-6eef7.firebaseio.com/shopping-list.json').subscribe(
      ingredients => {
        if (ingredients == null) {
          ingredients = [];
        }
        console.log("Reverted to",ingredients);
        this.shoppingListService.importIngredients(ingredients);
        //Now Store to userIngredients
        this.http.put('https://recipebook-6eef7.firebaseio.com/user-shopping-list/' + this.uniqueID + '.json', ingredients)
          .subscribe(response => {
            }
          );
      }
    );
  }

}
