import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-widget-ottawa',
  templateUrl: './weather-widget-ottawa.component.html',
  styleUrls: ['./weather-widget-ottawa.component.scss']
})
export class WeatherWidgetOttawaComponent implements OnInit {

  WeatherData: any;

  constructor() { }

  ngOnInit(){
    this.WeatherData = {
      main: {},
      isDay: true
    }
    this.getWeatherData();
    console.log(this.WeatherData);
  }

  getWeatherData(){
    var city = "Ottawa";
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6614716def7e71d5821946f1cae6337c`)
    .then(response => response.json())
    .then(data=>{this.setWeatherData(data);})
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

