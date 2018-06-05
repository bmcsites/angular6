import {Directive, ElementRef, OnInit,  Renderer2} from '@angular/core';

@Directive({
  selector: '[appAdvancedHighlight]'
})
export class AdvencedHighlightDirective implements OnInit{

  constructor(private element: ElementRef, private renderer: Renderer2) {

  }

  ngOnInit() {
    let el = this.element.nativeElement;
    this.renderer.setStyle(el,'color', 'white');
    this.renderer.setStyle(el,'background-color', 'blue');
  }

}
