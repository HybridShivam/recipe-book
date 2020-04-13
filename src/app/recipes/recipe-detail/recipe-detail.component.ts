import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../../shopping-list/shoppingList.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ActivatedRoute, Params} from '@angular/router';
import {RecipeService} from '../recipe.service';

// import {Pokedex} from 'pokedex-api';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipeFromRecipeComponent: Recipe;
  id;

  constructor(private shoppingListService: ShoppingListService, private route: ActivatedRoute, private recipeService: RecipeService) {
  }

  ngOnInit(): void {
    // this.id = this.route.snapshot.params['id'];
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.recipeFromRecipeComponent =this.recipeService.getRecipes()[this.id];
    });
  }

  goToShopping(ingredient: Ingredient[]) {
    this.shoppingListService.ingredients.push(...ingredient);
  }


}
