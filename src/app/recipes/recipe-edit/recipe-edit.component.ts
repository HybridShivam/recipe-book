import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {RecipeService} from '../recipe.service';
import {FormArray, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id: number;
  editMode = false;
  recipeForm: FormGroup;
  noOfIngredients;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private router: Router) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.editMode = params['id'] != null;
        this.formInit();
      }
    );
  }


  private formInit() {
    let recipeName = '';
    let recipeDesc = '';
    let recipeURL = '';
    let recipeIngredients = new FormArray([]);
    if (this.editMode) {
      const recipe = this.recipeService.getRecipeByID(this.id);
      recipeName = recipe.name;
      recipeDesc = recipe.desc;
      recipeURL = recipe.imagePath;
      if (recipe['ingredients']) {
        for (let ingredient of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name, [Validators.required,Validators.maxLength(25)]),
              'amount': new FormControl(+ingredient.amount, [Validators.required,Validators.maxLength(3), Validators.pattern(/^[1-9]+[0-9]*$/)])
            })
          );

        }
      }
      this.noOfIngredients=recipe.ingredients.length;
    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, [Validators.required,Validators.maxLength(45)]),
      'imagePath': new FormControl(recipeURL, Validators.required),
      'description': new FormControl(recipeDesc, Validators.required),
      'ingredients': recipeIngredients
    })
    ;
  }

  onSubmit() {
    const newRecipe = new Recipe(
      this.recipeForm.value['name'],
      this.recipeForm.value['description'],
      this.recipeForm.value['imagePath'],
      this.recipeForm.value['ingredients']);
    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, newRecipe);
    } else {
      this.recipeService.addRecipe(newRecipe);
    }
    this.router.navigate(['../'],{relativeTo: this.route});
    // this.onCancel();
  }


  getControls() {
    return (<FormArray> this.recipeForm.get('ingredients')).controls;
  }


  onAddIngredient() {
    (<FormArray> this.recipeForm.get('ingredients')).push(
      new FormGroup({
          'name': new FormControl(null, Validators.required),
          'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
        }
      )
    );
    this.noOfIngredients++;
  }


  deleteIngredient(index) {
    (<FormArray> this.recipeForm.get('ingredients')).removeAt(index);
    this.noOfIngredients--;
  }

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


}
