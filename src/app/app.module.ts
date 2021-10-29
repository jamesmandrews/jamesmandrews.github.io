import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { HeroComponent } from './components/hero/hero.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { ImageStationaryComponent } from './components/image-stationary/image-stationary.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { ParallaxOneDirective } from './directives/parallax-one.directive';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeroComponent,
    IntroductionComponent,
    ImageStationaryComponent,
    FooterComponent,
    MainNavComponent,
    ParallaxOneDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
