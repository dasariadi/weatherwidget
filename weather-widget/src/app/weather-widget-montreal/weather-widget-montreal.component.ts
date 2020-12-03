import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-widget-montreal',
  templateUrl: './weather-widget-montreal.component.html',
  styleUrls: ['./weather-widget-montreal.component.scss']
})
export class WeatherWidgetMontrealComponent implements OnInit {

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
    var city = "Montreal";
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
