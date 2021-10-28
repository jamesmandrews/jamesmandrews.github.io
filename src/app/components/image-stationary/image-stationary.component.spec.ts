import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageStationaryComponent } from './image-stationary.component';

describe('ImageStationaryComponent', () => {
  let component: ImageStationaryComponent;
  let fixture: ComponentFixture<ImageStationaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageStationaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageStationaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
