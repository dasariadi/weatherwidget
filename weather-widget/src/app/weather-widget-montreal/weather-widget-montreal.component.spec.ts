import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherWidgetMontrealComponent } from './weather-widget-montreal.component';

describe('WeatherWidgetMontrealComponent', () => {
  let component: WeatherWidgetMontrealComponent;
  let fixture: ComponentFixture<WeatherWidgetMontrealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherWidgetMontrealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherWidgetMontrealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
