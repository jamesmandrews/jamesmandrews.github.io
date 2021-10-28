import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, AfterViewInit {
  @ViewChild('parallax') parallax; 
  styleBackgroundPosition: string = '0px';

  constructor() { 

  }

  ngOnInit(): void {
    this.styleBackgroundPosition='';
  }

  ngAfterViewInit(): void {
    window.addEventListener('scroll', () => {
      const multiplier: number = .7;
      let offset = window.pageYOffset;
      this.styleBackgroundPosition = (offset * multiplier).toString() + 'px';
    });
    console.log(this.parallax);
  }


}
