import {Directive, HostBinding, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appDynamicAdvancedHighlight]'
})
export class DynamicAdvancedHighlightDirective implements OnInit {

  @Input() defaultBgColor: string = 'blue';
  @Input() dynamicBgColor: string = 'green';
  @Input() defaultColor: string = 'white';

  @HostBinding('style.backgroundColor') bg: string;
  @HostBinding('style.color') myColor: string;

  constructor() { }

  ngOnInit() {
    this.bg = this.defaultBgColor;
    this.myColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover() {
    this.bg = this.dynamicBgColor;
  }

  @HostListener('mouseleave') mouseleave() {
    this.bg = this.defaultBgColor;
  }

}
