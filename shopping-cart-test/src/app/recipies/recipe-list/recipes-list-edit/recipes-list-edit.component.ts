import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RecipesService} from '../../../services/recipes-service/recipes.service';
import {Recipe} from '../../recipe.model';

@Component({
  selector: 'app-recipes-list-edit',
  templateUrl: './recipes-list-edit.component.html',
  styleUrls: ['./recipes-list-edit.component.css'],
})
export class RecipesListEditComponent implements OnInit {
  recipeName: string;
  recipeDesc: string;
  recipeImg: string;

  @Output('updateListRecipes') update = new EventEmitter<boolean>();
  /*@Output('updateListRecipes') update = new EventEmitter<Recipe>();*/

  constructor(private RecipesServ: RecipesService) { }

  ngOnInit() {
  }

  addRecipeWithService() {
    console.log('list edit component add recipe.');
    this.RecipesServ.addRecipe(this.recipeName,this.recipeDesc,this.recipeImg);
    this.update.emit(true);
  }

/*  addRecipeWithService() {
    console.log('list edit component add recipe.');
    this.update.emit(new Recipe(this.recipeName,this.recipeDesc,this.recipeImg));
  }*/
}
