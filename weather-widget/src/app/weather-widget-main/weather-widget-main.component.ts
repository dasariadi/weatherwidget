import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-widget-main',
  templateUrl: './weather-widget-main.component.html',
  styleUrls: ['./weather-widget-main.component.scss']
})
export class WeatherWidgetMainComponent implements OnInit {

  WeatherData: any;

  constructor() { }

  ngOnInit(){
    this.getWeatherData();
    console.log(this.WeatherData);
  }

  getWeatherData(){
    let data = JSON.parse('{"coord":{"lon":-79.42,"lat":43.7},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"base":"stations","main":{"temp":279.03,"feels_like":275.71,"temp_min":278.71,"temp_max":279.26,"pressure":1019,"humidity":56,"sea_level":1019,"grnd_level":999},"visibility":10000,"wind":{"speed":1.47,"deg":122},"clouds":{"all":100},"dt":1604435107,"sys":{"type":1,"id":718,"country":"CA","sunrise":1604404607,"sunset":1604441138},"timezone":-18000,"id":6167865,"name":"Toronto","cod":200}');
    this.setWeatherData(data)
  };

  setWeatherData(data){
    this.WeatherData = data;
    let sunsetTime = new Date(this.WeatherData.sys.sunset * 1000);
    this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString();
    let currentDate = new Date();
    this.WeatherData.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.WeatherData.temp_celcius = (this.WeatherData.main.temp - 273.15).toFixed(0);
    this.WeatherData.temp_feels_like = (this.WeatherData.main.feels_like - 273.15).toFixed(0);
  }

}
