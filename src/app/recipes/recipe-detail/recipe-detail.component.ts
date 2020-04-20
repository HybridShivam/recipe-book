import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../../shopping-list/shoppingList.service';
import {ActivatedRoute, Params} from '@angular/router';
import {RecipeService} from '../recipe.service';

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
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  deleteRecipe(){
    this.recipeService.deleteRecipe(this.id);
  }

  // scrollToElement($element): void {
  //   $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  // }
  scrollTo(): void {
    // $element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
    var headerOffset = 87;
    // var elementPosition = $element.getBoundingClientRect().top;
    // var offsetPosition = elementPosition - headerOffset;
    window.scrollTo({
      top: headerOffset,
      behavior: "smooth"
    });
  }

  deleteScrollTo(): void {
    // $element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
    if(screen.width>767){
    var headerOffset = 87;
    // var elementPosition = $element.getBoundingClientRect().top;
    // var offsetPosition = elementPosition - headerOffset;
    window.scrollTo({
      top: headerOffset,
      behavior: "smooth"
    });}
  }


  scrollToElement($element): void {
    $element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
  }

  scrollFromEdit($element){
    if(screen.width<=767){
      this.scrollToElement($element);
    }
    else {
      this.scrollTo();
    }
  }

}
