'use strict';

/**
 * @ngdoc function
 * @name tdTeamApp.controller: ChartCtrl
 * @description
 * # ChartCtrl
 * Controller of the tdTeamApp
 */
angular.module('tdTeamApp')
  .controller('ChartCtrl', ['$scope', 'API', 'chartTypes', 'chartDataTypes', 
  function ($scope, API, chartTypes, chartDataTypes) {

  $scope.statsParams = {selectedBpi: null, selectedDimension: null, selectedTimeline: "none"};
  $scope.loading = true;

  //watches - actually observers but angular uses this word

  $scope.$watch('statsParams.selectedBpi', function(newVal, oldVal){
    var selectKeys = _.map($scope.dataTypes.bpi[$scope.statsParams.selectedBpi].dimensions, 
                                     function(val,key){return key});
    $scope.statsParams.selectedDimension = selectKeys[0];
    $scope.updateCharts();
  }, true);

  $scope.$watch('statsParams.selectedDimension', function(newVal, oldVal){
    $scope.updateCharts();
  }, true);

  $scope.$watch('statsParams.selectedTimeline', function(newVal, oldVal){
    $scope.updateCharts();
  }, true);

  //public 
  $scope.updateCharts = function(){
    $scope.loading = true;
    API.statsData($scope.statsParams, updateViewCallback);
  };

  //private methods

  var updateViewCallback = function(data){
    if($scope.initialized){
      //clear previous data - have to do this, 
      //Chart.js does not provide any good method to change a whole dataset
      $scope.LineChart.destroy();
      $scope.BarChart.destroy();
      $scope.PieChart.destroy();
    }
    setupCharts(data);
    var bpi = $scope.statsParams.selectedBpi;
    var dim = $scope.statsParams.selectedDimension;
    $scope.currentChart = $scope.dataTypes.bpi[bpi].dimensions[dim].defaultchart;
    $scope.loading = false;
  };

  var setupCharts = function(data){
    //initialize chart 
    var LineData = chartTypes.LineChart()
    var BarData = chartTypes.BarChart()
    var PieData = chartTypes.PieChart()

    if(!!data){
      //modify data for charts if new
      LineData.labels = _.map(data.results, function(val){return val.label});
      LineData.datasets[0].data = _.map(data.results, function(val){return val.value});
      LineData.datasets[0].fillColor = data.fillColor;
      LineData.datasets[0].strokeColor = data.strokeColor;
      //line and bar have the same structure - here i just make a copy as a example
      BarData.labels = _.clone(LineData.labels);
      BarData.datasets[0].data =  _.clone(LineData.datasets[0].data);
      BarData.datasets[0].fillColor = data.strokeColor;
      BarData.datasets[0].strokeColor = data.strokeColor;
      //pie is a little different then Line and Bar
      PieData = _.map(data.results, function(val){return {value: val.value, label: val.label, color: val.color}});
    }
    $scope.LineChart = new Chart($scope.lineChartCanvas).Line(LineData);
    $scope.BarChart = new Chart($scope.barChartCanvas).Bar(BarData);
    $scope.PieChart = new Chart($scope.pieChartCanvas).Pie(PieData);
    $scope.initialized = true;
  };

  var initialize = function(){
    //get canvas context for charts
    $scope.lineChartCanvas = angular.element("#line-chart").get(0).getContext("2d");
    $scope.barChartCanvas = angular.element("#bar-chart").get(0).getContext("2d");
    $scope.pieChartCanvas = angular.element("#pie-chart").get(0).getContext("2d");

    //get basic data types
    $scope.dataTypes = chartDataTypes.getTypes();
    var selectKeys = _.map($scope.dataTypes.bpi, 
                                       function(val,key){return key});
    $scope.statsParams.selectedBpi = selectKeys[0];

  };

  initialize();

  }]);
