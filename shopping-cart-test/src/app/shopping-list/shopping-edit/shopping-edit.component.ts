import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput : ElementRef;
  amountInput: number;

  @Output('ingrident') sendIngrident = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }

  createIngrident() {
    const ing = new Ingredient(this.nameInput.nativeElement.value, this.amountInput);
    console.log('child ing',ing);
    this.sendIngrident.emit(ing);
  }
}
