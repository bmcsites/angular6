import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from './recipe.model';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css']
})
export class RecipiesComponent implements OnInit {

  currentItem: Recipe;
  @Input('myrecipe') recipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

  getCurrentItem(item: Recipe) {
    this.currentItem = item;
    console.log('the item as been clicked : ', this.currentItem);
  }
}
