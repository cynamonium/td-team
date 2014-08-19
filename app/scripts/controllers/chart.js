'use strict';

/**
 * @ngdoc function
 * @name tdTeamApp.controller: ChartCtrl
 * @description
 * # ChartCtrl
 * Controller of the tdTeamApp
 */
angular.module('tdTeamApp')
  .controller('ChartCtrl', function ($scope) {



  //private methods
  var initialize = function(){
    //get basic data
    $scope.dataTypes = DataTypes;
    $scope.selectedBpi = "";
    //initialize chart 
    var LineData = angular.copy(LineChartBase);
    var BarData = angular.copy(BarChartBase);
    var PieData = angular.copy(PieChartBase);

    var lineChartCanvas = angular.element("#line-chart").get(0).getContext("2d");
    var barChartCanvas = angular.element("#bar-chart").get(0).getContext("2d");
    var pieChartCanvas = angular.element("#pie-chart").get(0).getContext("2d");

    $scope.LineChart = new Chart(lineChartCanvas).Line(LineData);
    $scope.BarChart = new Chart(barChartCanvas).Bar(BarData);
    $scope.PieChart = new Chart(pieChartCanvas).Pie(PieData);

  };

  initialize();



  });
