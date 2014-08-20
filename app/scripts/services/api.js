'use strict';

angular.module('tdTeamApp')
  .service('API', ['$http', '$q', '$timeout', function($http, $q, $timeout) {
    //this just fake data generator - don't want to waste time for creating external API 
    var fakeApiResult = function(){
      var colors = ['#FFAA00',
                    '#9FEE00',
                    '#85004B',
                    '#06266F',
                    '#FF2800',
                    '#00C90D',
                    '#44036F',
                    '#ED002F',
                    '#55C700',
                    '#75EE3B',
                    '#007241',
                    '#A66400',
                    '#A60099',
                    '#5DD0C0',
                    '#C869EA',
                    '#FF6C00',
                    '#8FF83E'];

      var results = _.map(colors, function(c){
        var num = _.random(0, 100); 
        return {value: num, label: "Label for "+num, color: c}
      })
      return {
        strokeColor: colors[_.random(0,16)],
        fillColor: "#EEE",
        results: results
      }
    };
    var paramsToUrl = function(urlParams){
      return config.api.url+"?bpi="+urlParams.selectedBpi+"&dimension="+urlParams.selectedDimension+"&timeline="+urlParams.selectedTimeline;
    }
    //this would be the right way to do it, but i haven't got a real api

    var getData = function(urlParams) {
          return $http.get(paramsToUrl(urlParams))
              .then(function(response) {
                  if (typeof response.data === 'object') {
                      return response.data;
                  } else {
                      // invalid response
                      return $q.reject(response.data);
                  }

              }, function(response) {
                  // something went wrong
                  return $q.reject(response.data);
          });
    };

    this.statsData = function(statsParams, callback){
      getData(statsParams).then(function(data) {
          // promise fulfilled
          //real solution
          //callback(data);
           }, function(error) {
          // promise rejected,
      });
      //fake solution to show just something
      $timeout(function(){
        callback(fakeApiResult(),2000);
      });
    }

  }]);