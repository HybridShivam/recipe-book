import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from './shoppingList.service';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {RecipesComponent} from '../recipes/recipes.component';
import {RecipeService} from '../recipes/recipe.service';
import {DataStorageService} from '../shared/data-storage.service';
import {Recipe} from '../recipes/recipe.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[];
  editingItemIndex: number;
  private subscription: Subscription;
  editingMode = false;
  modeSubscription;
  corresponsingRecipes: Recipe[]=[];

  constructor(private shoppingListService: ShoppingListService, private dataStorageService: DataStorageService, private recipeService: RecipeService) {
  }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.ingredients;
    this.subscription = this.shoppingListService.ingredientsEmitter.subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    });
    this.modeSubscription = this.shoppingListService.modeEmitter.subscribe(mode => {
      this.editingMode = mode;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.modeSubscription.unsubscribe();
  }

  onEdit(index: number) {
    this.shoppingListService.editingModeSubject.next(index);
    this.editingItemIndex = index;
    let recipes=this.recipeService.getRecipes();
    this.corresponsingRecipes=[];
    for(let recipe of recipes){
      for(let ingredient of recipe.ingredients){
        if(ingredient.name===this.ingredients[this.editingItemIndex].name){
          this.corresponsingRecipes.push(recipe);
          break;
        }
      }
    }
    // console.log(this.corresponsingRecipes);

  }

}
