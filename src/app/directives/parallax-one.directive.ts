import { Directive, AfterViewInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appParallaxOne]'
})
export class ParallaxOneDirective implements AfterViewInit{
  styleBackgroundPosition: string = '0px';

  constructor(private elRef: ElementRef) {}

   ngAfterViewInit(): void {
    window.addEventListener('scroll', () => {
      const multiplier: number = .7;
      let offset = window.pageYOffset;
      this.styleBackgroundPosition = (offset * multiplier).toString() + 'px';
      this.elRef.nativeElement.style.backgroundPositionY=this.styleBackgroundPosition;
    });
  }

}
