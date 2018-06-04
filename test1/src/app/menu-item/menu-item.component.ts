import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  isDisabled = false;
  name = '';
  title = '';

  constructor() {

  }

  ngOnInit() {
  }

  disableButton()  {
    this.isDisabled = true;
  }

  onUpdateInput(e) {
    console.log(e.target.value);
    this.title = e.target.value;
  }

}
