import {Component, OnInit} from '@angular/core';
import smoothscroll from 'smoothscroll-polyfill';
import {ActivatedRoute, Router} from '@angular/router';
import {DataStorageService} from './shared/data-storage.service';
import {RecipesComponent} from './recipes/recipes.component';
import {RecipeService} from './recipes/recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private dataStorageService: DataStorageService, recipeService: RecipeService) {
    router.navigate(['/recipes']);
  }

  ngOnInit(): void {
    smoothscroll.polyfill();
  }

}
