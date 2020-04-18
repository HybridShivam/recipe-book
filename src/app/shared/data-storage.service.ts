import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';
import {map} from 'rxjs/operators';
import {CookieService} from 'ngx-cookie-service';

@Injectable({providedIn: 'root'})
export class DataStorageService implements OnInit {
  uniqueID: string;

  constructor(private http: HttpClient, private recipeService: RecipeService, cookieService: CookieService) {
    if (cookieService.get('id')) {
      this.uniqueID = cookieService.get('id');
    } else {
      let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
      const lengthOfCode = 10;
      this.uniqueID = DataStorageService.randomGenerator(lengthOfCode, possible);
      cookieService.set('id', this.uniqueID);
    }
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


  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.put('https://recipebook-6eef7.firebaseio.com/user-recipes/'+this.uniqueID+'.json', recipes).subscribe(response => {
        console.log(response);
      }
    );
  }


  fetchRecipes() {
    this.http.get<Recipe[]>('https://recipebook-6eef7.firebaseio.com/user-recipes/'+this.uniqueID+'.json').pipe(map(recipe => {
      return recipe.map(recipe => {
        return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []};
      });
    })).subscribe(
      recipes => {
        console.log(recipes);
        this.recipeService.importFetchedRecipes(recipes);
      }
    );
  }


  revertToServerRecipes(){
    this.http.get<Recipe[]>('https://recipebook-6eef7.firebaseio.com/recipes.json').pipe(map(recipe => {
      return recipe.map(recipe => {
        return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []};
      });
    })).subscribe(
      recipes => {
        console.log(recipes);
        this.recipeService.importFetchedRecipes(recipes);
      }
    );
  }


  getBrowserID() {

  }

}
