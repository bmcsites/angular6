import { Component, OnInit , EventEmitter, Output } from '@angular/core';
import {Recipe} from '../recipe.model';
import {LogService} from '../../services/log-service/log-service.service';
import {RecipesService} from '../../services/recipes-service/recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  providers: [LogService, RecipesService] // added 2 services
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = []; // int the recipes array .

  // send the currentItem to the recipe.component
  @Output() currentItem = new EventEmitter<Recipe>();

  // get the logStatus and RecipesServ services
  constructor(private recipeLog: LogService, private RecipesServ: RecipesService) { }

  ngOnInit() {
    this.recipes = this.RecipesServ.recipes; // insert the recipes list from the service RecipesService
  }

  getCurrentItem (recipe) {
    // calling the service to log
    this.recipeLog.logStatusChange(recipe,'a recipe as been selected.');
    this.currentItem.emit(recipe);
  }
}
