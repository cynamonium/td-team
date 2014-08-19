'use strict';

/**
 * @ngdoc overview
 * @name tdTeamApp
 * @description
 * # tdTeamApp
 *
 * Main module of the application.
 */
angular
  .module('tdTeamApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/chart/index.html',
        controller: 'ChartCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
