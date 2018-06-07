import {Directive, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[appAdvancedHighlight]'
})

export class AdvancedHighlightDirective {

  @HostBinding('style.backgroundColor') bg: string = 'blue';
  @HostBinding('style.color') myColor: string = 'white';

  constructor() { }

  @HostListener('mouseenter') mouseover() {
    this.bg = 'green';
  }

  @HostListener('mouseleave') mouseleave() {
    this.bg = 'blue';
  }
}


//////////////////// use renderer for this ///////////////////////////

/*import {Directive, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appAdvancedHighlight]'
})

export class AdvencedHighlightDirective implements OnInit{
  el:ElementRef;
  constructor(private element: ElementRef, private renderer: Renderer2) {
    this.el = element.nativeElement;
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.renderer.setStyle(this.el,'background-color', 'green');

  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(this.el,'background-color', 'blue');
  }

  ngOnInit() {
    this.renderer.setStyle(this.el,'color', 'white');
    this.renderer.setStyle(this.el,'background-color', 'blue');
  }

}*/


