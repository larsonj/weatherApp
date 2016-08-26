"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ionic_angular_1 = require('ionic-angular');
var weatherservice_1 = require('../../services/weatherservice');
var HomePage = (function () {
    function HomePage(navCtrl, weatherService) {
        this.navCtrl = navCtrl;
        this.weatherService = weatherService;
    }
    HomePage.prototype.getWeatherConditionsbyZip = function () {
        var _this = this;
        this.weatherService.getWeatherConditionsByZip(this.zipCode).subscribe(function (data) {
            _this.weatherData = data.json();
        }, function (err) { return console.error(err); }, function () { return console.log('get weather data for (' + _this.zipCode + ') completed'); });
    };
    HomePage = __decorate([
        core_1.Component({
            templateUrl: 'build/pages/home/home.html',
            providers: [weatherservice_1.WeatherService]
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController, weatherservice_1.WeatherService])
    ], HomePage);
    return HomePage;
}());
exports.HomePage = HomePage;
