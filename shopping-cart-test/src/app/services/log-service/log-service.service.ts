import { Injectable } from '@angular/core';
import {Recipe} from '../../recipies/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  logStatusChange(recipe: Recipe, info: string) {
    console.log(info, recipe);
  }
  // the service used in recipe-list-component
}
