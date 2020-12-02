import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherWidgetMainComponent } from './weather-widget-main/weather-widget-main.component';
import { WeatherWidgetOttawaComponent } from './weather-widget-ottawa/weather-widget-ottawa.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherWidgetMainComponent,
    WeatherWidgetOttawaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
