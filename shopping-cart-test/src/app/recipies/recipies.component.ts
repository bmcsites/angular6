import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from './recipe.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css']
})
export class RecipiesComponent implements OnInit {

  currentItem: Recipe;
  @Input('myrecipe') recipe: Recipe;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  getCurrentItem(item: Recipe) {
    this.currentItem = item;
    console.log('the item as been clicked : ', this.currentItem);
  }

  goToShop() {
    this.router.navigate(['/shopping-list']);
  }
}
