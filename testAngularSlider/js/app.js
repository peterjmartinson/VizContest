(function () {
  'use strict';

  var app = angular.module('dateSlider', []);

  /*___________________ SERVICES ____________________*/
  
  app.factory('testFactory', ['$http', '$q', function ($http, $q) {

    var url = 'data/data.csv',
        getData = function() {
          return $http.get(url).then(function(data) {
            return Papa.parse(data.data, {
              header: true,
              dynamicTyping: true,
              skipEmptyLines: true,
              complete: function(results) {
                return results.data;
              }
            });
          });
        }
    return {
      getData: getData
    };
  }]);
  /*___________________ CONTROLLER _____________________*/

  app.controller('dateSliderController', ['$scope', function ($scope){//, testFactory) {
    
//    testFactory.getData().then(function(results) {
      
      var i, j, k, l,
          dateIndex,
          workingData = [];

          for (i=0; i<results.length; i++) {
            console.log('i: ' + i);
            workingData.push({
              source : results[i].source,
              target : results[i].target,
              value  : results[i].value,
              annum  : new Date(results[i].annum)
            });
            console.log('source: ' + workingData[i].source);
            console.log('target: ' + workingData[i].target);
            console.log('value: ' + workingData[i].value);
            console.log('annum: ' + workingData[i].annum); // this is the problem spot - same date each time
          }

    dateIndex = workingData.uniqueDates().sort();

    // Bind data to $scope object

    $scope.outputData     = workingData;
    $scope.dateArray      = dateIndex;
    $scope.minDate        = dateIndex[0];
    $scope.maxDate        = dateIndex[dateIndex.length - 1];
    $scope.sliderIndex    = 0;
    $scope.sliderIndexMax = dateIndex.length - 1;

    console.log('outputData    : ' + $scope.outputData[0]);
    console.log('dateArray     : ' + $scope.dateArray);
    console.log('minDate       : ' + $scope.minDate);
    console.log('maxDate       : ' + $scope.maxDate);
    console.log('sliderIndex   : ' + $scope.sliderIndex);
    console.log('sliderIndexMax: ' + $scope.sliderIndexMax);
//    });
  }]);

  /*_____________________ DIRECTIVES ____________________*/
  

    app.directive('introduction', function() {
        return {
            restrict: 'AE',
            templateUrl: 'directives/introduction.tpl.html',
            replace: true
        };
    });
    
    app.directive('tabularOutput', function() {
        return {
            restrict: 'AE',
            templateUrl: 'directives/tabular-output.tpl.html',
            replace: true
        };
    });
    
    app.directive('jsonOutput', function() {
        return {
            restrict: 'AE',
            templateUrl: 'directives/json-output.tpl.html',
            replace: true
        };
    });

})();






