import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, AfterViewInit {
  styleBackgroundPosition: string = '0px';

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    window.addEventListener('scroll', () => {
      const multiplier: number = .7;
      let offset = window.pageYOffset;
      this.styleBackgroundPosition = (offset * multiplier).toString() + 'px';
    });
  }

}
