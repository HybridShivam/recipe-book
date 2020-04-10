import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;
  @Output() recipeEmit = new EventEmitter<Recipe>();

  constructor() {
  }

  ngOnInit(): void {
  }

  recipeClicked() {
    this.recipeEmit.emit(this.recipe);
  }

}
