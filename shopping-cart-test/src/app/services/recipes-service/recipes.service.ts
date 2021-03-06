import { Injectable } from '@angular/core';
import {Recipe} from '../../recipies/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  recipes: Recipe[] = [
    new Recipe('burger','yummy jucy burger','https://osrfgtie1.office.osrenterprises.com/resources?rid=3661842b742d0a4f1d718fad7eb8096966b919a221fbc2dcfbd82cf391c15888&url=https%3A%2F%2Fcdn0.iconfinder.com%2Fdata%2Ficons%2Ffood-2-11%2F128%2Ffood-13-512.png&cid=Y2Zpci5iaXRhbkBPU1JET00uTE9DQUw1__FGL__0023277584c12ae0d2d6e624972e3060a91f78df00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000&eid=9'),
    new Recipe('pizza','yummy hot pizza','https://osrfgtie1.office.osrenterprises.com/resources?rid=00bf198f62f30185f352989b76c48ed93ad1b89cb0f33be08252be447f7ddb1f&url=http%3A%2F%2Ficons.iconarchive.com%2Ficons%2Fsonya%2Fswarm%2F256%2FPizza-icon.png&cid=Y2Zpci5iaXRhbkBPU1JET00uTE9DQUw1__FGL__0023277584c12ae0d2d6e624972e3060a91f78df00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000&eid=9')
  ];

  constructor() {
    console.log('service is starting');
  }

  addRecipe(name: string, description: string, imagePath: string) {
    console.log('recipe edit function : addRecipe as been activated ');
    this.recipes.push(new Recipe(name,description,imagePath));
    console.log(this.recipes);
  }

}
