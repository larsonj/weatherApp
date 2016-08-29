import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherService } from '../../services/weatherservice';

@Component({
  templateUrl: 'build/pages/home/home.html',
  providers: [WeatherService]
})
export class HomePage {
  public weatherData;
  public zipCode;
  public zipCodeRefresh;

  constructor(private navCtrl: NavController,
              private weatherService: WeatherService) {
  }

  getWeatherConditionsByZip() {
    this.weatherService.getWeatherConditionsByZip(this.zipCode).subscribe(
      data => {
        this.weatherData = data.json();

      },
      err => console.error(err),
      () => {
        console.log('get weather data for (' + this.zipCode + ') completed');
        console.log('data: ', JSON.stringify(this.weatherData,null,2));
        this.zipCodeRefresh = true;
      }
    );
  }

}
