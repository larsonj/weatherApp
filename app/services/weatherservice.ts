/**
 * Created by jl on 8/26/2016.
 */
import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class WeatherService {
  constructor(private http: Http) {
}

  getWeatherConditionsByZip(zipCode) {
    let weatherConditions =
      this.http.get(`http://api.wunderground.com/api/515e332c1f08c7a3/conditions/q/${zipCode}/.json`);
    return weatherConditions;
  }

  getWeatherAlmanacByZip(zipCode) {
    let weatherAlmanac =
      this.http.get(`http://api.wunderground.com/api/515e332c1f08c7a3/almanac/q/${zipCode}/.json`);
    return weatherAlmanac;
  }

  getWeatherForecastByZip(zipCode) {
    let weatherForecast =
      this.http.get(`http://api.wunderground.com/api/515e332c1f08c7a3/conditions/q/${zipCode}/.json`);
    return weatherForecast;
  }

}
