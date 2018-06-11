import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  id: number;
  // add ingredients to the list
  ingredients: Ingredient[] = [
    new Ingredient('apples',5),
    new Ingredient('oranges',2)
  ];

  // call the route to retrieve params from URL
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // check if the route continues id by the route roll shopping-list/:id
    if(this.route.snapshot.params['id'] !== undefined) {
      this.id = this.route.snapshot.params['id'];
    }

    // watcher on the route params
    this.route.params.subscribe(
      (params) => {
        this.id = params['id'];
      }
    )

  }
  // function that starts when shopping-edit-components send an ingredient
  addIngrident(e) {
    console.log('inside father', e);
    this.ingredients.push(e);
  }

}
