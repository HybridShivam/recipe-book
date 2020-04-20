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
  animate=false;
  mobile=false;

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit(): void {
    this.subs=this.recipeService.recipesChanged.subscribe(recipes => {
      this.noOfRecipes =recipes.length;
    });
    if(screen.width>=768){
      this.animate=true;
      this.mobile=true;
    }
    // setTimeout(()=>{this.animate=true},5000);
  }

  onWindowScroll(event){
    this.animate=true;
  }

  ngOnDestroy(){
    this.subs.unsubscribe();
  }


}
