import {Component, OnDestroy, OnInit} from '@angular/core';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-start',
  templateUrl: './recipe-start.component.html',
  styleUrls: ['./recipe-start.component.css']
})
export class RecipeStartComponent implements OnInit,OnDestroy {

  noOfRecipes;
  subs;

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit(): void {
    this.subs=this.recipeService.recipesChanged.subscribe(recipes => {
      this.noOfRecipes =recipes.length;
      console.log(this.noOfRecipes);
    });
  }

  ngOnDestroy(){
    this.subs.unsubscribe();
  }


}
