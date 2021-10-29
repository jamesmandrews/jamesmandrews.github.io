import { Directive, AfterViewInit, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appParallaxOne]'
})
export class ParallaxOneDirective implements AfterViewInit{
  styleBackgroundPosition: string = '0px';
  @Input('multiplier') multiplier!: number; 

  constructor(private elRef: ElementRef) {}

   ngAfterViewInit(): void {
    window.addEventListener('scroll', () => {
      const multiplier: number = this.multiplier;
      let offset = window.pageYOffset;
      this.styleBackgroundPosition = (offset * multiplier).toString() + 'px';
      this.elRef.nativeElement.style.backgroundPositionY=this.styleBackgroundPosition;
    });
  }

}
