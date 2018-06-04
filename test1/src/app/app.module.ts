import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { myMenu } from './my-menu/my-menu.component';
import { MenuItemComponent } from './menu-item/menu-item.component';


@NgModule({
  declarations: [
    AppComponent,
    myMenu,
    MenuItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
