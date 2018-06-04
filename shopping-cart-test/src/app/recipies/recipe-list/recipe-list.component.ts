import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('burger','yummy jucy burger','https://osrfgtie1.office.osrenterprises.com/resources?rid=3661842b742d0a4f1d718fad7eb8096966b919a221fbc2dcfbd82cf391c15888&url=https%3A%2F%2Fcdn0.iconfinder.com%2Fdata%2Ficons%2Ffood-2-11%2F128%2Ffood-13-512.png&cid=Y2Zpci5iaXRhbkBPU1JET00uTE9DQUw1__FGL__0023277584c12ae0d2d6e624972e3060a91f78df00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000&eid=9')
  ];

  constructor() { }

  ngOnInit() {
  }

}
