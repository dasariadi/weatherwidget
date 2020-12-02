import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherWidgetOttawaComponent } from './weather-widget-ottawa.component';

describe('WeatherWidgetOttawaComponent', () => {
  let component: WeatherWidgetOttawaComponent;
  let fixture: ComponentFixture<WeatherWidgetOttawaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherWidgetOttawaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherWidgetOttawaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
