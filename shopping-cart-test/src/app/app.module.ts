import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { RecipiesComponent } from './recipies/recipies.component';
import { RecipeListComponent } from './recipies/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './recipies/recipe-details/recipe-details.component';
import { RecipeItemComponent } from './recipies/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { BasicHighlightDirective } from './directives/basic-directive/basic-highlight.directive';
import { AdvancedHighlightDirective } from './directives/advenced-highlights/advanced-highlight.directive';
import { DynamicAdvancedHighlightDirective } from './directives/dynamic-advenced-highlight/dynamic-advanced-highlight.directive';
import { RecipesListEditComponent } from './recipies/recipe-list/recipes-list-edit/recipes-list-edit.component';



const approute : Routes = [
  {
    path: '',
    redirectTo: 'recipes',
    pathMatch: 'full'
  },
  {
    path: 'recipes',
    component: RecipiesComponent
  },
  {
    path: 'shopping-list',
    component: ShoppingListComponent
  },
  {
    path: 'shopping-list/:id',
    component: ShoppingListComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    RecipiesComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    BasicHighlightDirective,
    AdvancedHighlightDirective,
    DynamicAdvancedHighlightDirective,
    RecipesListEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(approute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
