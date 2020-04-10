import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() ingredient = new EventEmitter<Ingredient>();

  constructor() {
  }

  ngOnInit(): void {
  }

  emitShoppingListItemADD(name: string, quantity: string) {

    let ingredient = new Ingredient(name, Number(quantity));
    this.ingredient.emit(ingredient);
  }


}
