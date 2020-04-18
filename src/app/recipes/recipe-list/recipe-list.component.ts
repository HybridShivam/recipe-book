import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {

  recipes: Recipe[] = [];
  sub;

  constructor(private recipeService: RecipeService, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
    this.sub = this.recipeService.recipesChanged.subscribe(recipes => {
      this.recipes = recipes;
    });
    // this.http.post('https://recipebook-6eef7.firebaseio.com/recipes.json', this.recipes).subscribe(response => {
    //   console.log(response);
    // });
    //
    // this.http.get('https://pokeapi.co/api/v2/pokemon/ditto/').subscribe(pokemon => {
    //   console.log(pokemon);
    //   console.log(pokemon['base_experience'],pokemon['sprites']['front_default']);
    // });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }


}
