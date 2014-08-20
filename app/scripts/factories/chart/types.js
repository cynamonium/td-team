'use strict';


angular.module('tdTeamApp').factory('chartTypes', function(){
  var service = {};

  service.PieChart = function(){
    return [{
    value: 300,
    color:"#F7464A",
    highlight: "#FF5A5E",
    label: "Red"
    }];
  };

  service.LineChart = function(){
    return {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Title 1",
          fillColor: "rgba(220,220,220,0.2)",
          strokeColor: "rgba(220,220,220,1)",
          pointColor: "rgba(220,220,220,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: [65, 59, 80, 81, 56, 55, 40]
        }
      ]
    };
  };

  service.BarChart = function(){
    return {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Title 1",
          fillColor: "rgba(220,220,220,0.5)",
          strokeColor: "rgba(220,220,220,0.8)",
          highlightFill: "rgba(220,220,220,0.75)",
          highlightStroke: "rgba(220,220,220,1)",
          data: [65, 59, 80, 81, 56, 55, 40]
        }
      ]
    };
  };


  return service;
});