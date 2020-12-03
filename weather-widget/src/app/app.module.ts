import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherWidgetMainComponent } from './weather-widget-main/weather-widget-main.component';
import { WeatherWidgetOttawaComponent } from './weather-widget-ottawa/weather-widget-ottawa.component';
import { WeatherWidgetMontrealComponent } from './weather-widget-montreal/weather-widget-montreal.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherWidgetMainComponent,
    WeatherWidgetOttawaComponent,
    WeatherWidgetMontrealComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
