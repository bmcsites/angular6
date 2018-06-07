import { Injectable } from '@angular/core';
import {Recipe} from '../../recipies/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  logStatusChange(recipe: Recipe) {
    console.log('a recipe is been added ', recipe);
  }

}
