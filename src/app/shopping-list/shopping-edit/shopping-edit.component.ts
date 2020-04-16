import {Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shoppingList.service';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') form;
  editingModeSubsciption: Subscription;
  editingMode = false;
  editingItemIndex: number;
  editedIngredient: Ingredient;
  isEmpty=false;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit(): void {
    this.editingModeSubsciption = this.shoppingListService.editingModeSubject.subscribe((index) => {
      this.editingMode = true;
      this.shoppingListService.modeEmitter.next(this.editingMode);
      this.editingItemIndex = index;
      this.editedIngredient = this.shoppingListService.ingredients[index];
      this.form.setValue({
        name: this.editedIngredient.name,
        amount: this.editedIngredient.amount
      });
    });
    this.isEmpty=this.shoppingListService.ingredients.length == 0;
  }

  ngOnDestroy(): void {
    this.editingModeSubsciption.unsubscribe();
  }

  onSubmit(form: NgForm) {
    if (this.editingMode == false) {
      const value = form.value;
      const ingredient = new Ingredient(value.name, Number(value.amount));
      this.shoppingListService.addIngredients(ingredient);
    } else {
      const value = form.value;
      const ingredient = new Ingredient(value.name, Number(value.amount));
      this.shoppingListService.ingredients[this.editingItemIndex] = ingredient;
      this.editingMode = false;
      this.shoppingListService.modeEmitter.next(this.editingMode);
      form.reset();
    }
    this.isEmpty=this.shoppingListService.ingredients.length == 0;
  }

  onClear() {
    this.editingMode = false;
    this.shoppingListService.modeEmitter.next(this.editingMode);
    this.form.reset();
  }

  onDelete() {
    this.shoppingListService.ingredients.splice(this.editingItemIndex, 1);
    this.isEmpty=this.shoppingListService.ingredients.length == 0;
    this.editingMode = false;
    this.shoppingListService.modeEmitter.next(this.editingMode);
    this.form.reset();
  }


}
