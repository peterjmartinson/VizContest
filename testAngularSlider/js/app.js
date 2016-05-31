(function () {
  'use strict';

  var app = angular.module('dateSlider', []);

  /*___________________ SERVICES ____________________*/
  
//  app.factory('testFactory', ['$http', '$q', function ($http, $q) {

//    var url = 'data/data.csv',
//        getData = function() {
//          return $http.get(url).then(function(data) {
//            return Papa.parse(data.data, {
//              header: true,
//              dynamicTyping: true,
//              skipEmptyLines: true,
//              complete: function(results) {
//                return results.data;
//              }
//            });
//          });
//        }
//    return {
//      getData: getData
//    };
//  }]);
////
//
//
//


//
//
//
//k
var results = 
[
    {
    "source": "GROCER",
        "target": "AVOCADO",
        "value": 123145,
        "annum": 1454994000000
    },
    {
        "source": "FARM",
        "target": "BANANA",
        "value": 59037,
        "annum": 1454994000000
    },
    {
        "source": "FRUIT STAND",
        "target": "BANANA",
        "value": 590861,
        "annum": 1454994000000
    },
    {
        "source": "FOOD TRUCK",
        "target": "BANANA",
        "value": 987169,
        "annum": 1454994000000
    },
    {
        "source": "GAS STATION",
        "target": "BANANA",
        "value": 7551,
        "annum": 1454994000000
    },
    {
        "source": "CAFE",
        "target": "KIWI",
        "value": 25346492,
        "annum": 1454994000000
    },
    {
        "source": "GROCER",
        "target": "KIWI",
        "value": 6416007,
        "annum": 1454994000000
    },
    {
        "source": "CAFETERIA",
        "target": "APPLE",
        "value": 148026310,
        "annum": 1454994000000
    },
    {
        "source": "KIOSK",
        "target": "BANANA",
        "value": 34674141,
        "annum": 1454994000000
    },
    {
        "source": "INSTITUTIONAL KITCHEN",
        "target": "KIWI",
        "value": 500713,
        "annum": 1454994000000
    },
    {
        "source": "BODEGA",
        "target": "PEAR",
        "value": 21878533,
        "annum": 1454994000000
    },
    {
        "source": "KIOSK",
        "target": "PEAR",
        "value": 5439516,
        "annum": 1454994000000
    },
    {
        "source": "GAS STATION",
        "target": "AVOCADO",
        "value": 147968,
        "annum": 1454994000000
    },
    {
        "source": "DISTRIBUTOR",
        "target": "BANANA",
        "value": 13529026,
        "annum": 1454994000000
    },
    {
        "source": "GROCER",
        "target": "ORANGE",
        "value": 660523,
        "annum": 1454994000000
    },
    {
        "source": "LOCAL COOP",
        "target": "KIWI",
        "value": 1491633,
        "annum": 1454994000000
    },
    {
        "source": "FOOD TRUCK",
        "target": "PEAR",
        "value": 8078428,
        "annum": 1454994000000
    },
    {
        "source": "ONLINE",
        "target": "PEAR",
        "value": 12014225,
        "annum": 1454994000000
    },
    {
        "source": "GROCER",
        "target": "BANANA",
        "value": 17807485,
        "annum": 1454994000000
    },
    {
        "source": "ONLINE",
        "target": "BANANA",
        "value": 1454109,
        "annum": 1454994000000
    },
    {
        "source": "DISTRIBUTOR",
        "target": "TANGERINE",
        "value": 587123840,
        "annum": 1454994000000
    },
    {
        "source": "MARKET",
        "target": "TANGERINE",
        "value": 892948208,
        "annum": 1454994000000
    },
    {
        "source": "GROCER",
        "target": "TANGERINE",
        "value": 67215,
        "annum": 1454994000000
    },
    {
        "source": "DISTRIBUTOR",
        "target": "KIWI",
        "value": 7561049,
        "annum": 1454994000000
    },
    {
        "source": "MARKET",
        "target": "APPLE",
        "value": 142840045,
        "annum": 1454994000000
    },
    {
        "source": "CAFETERIA",
        "target": "BANANA",
        "value": 280834846,
        "annum": 1454994000000
    },
    {
        "source": "INSTITUTIONAL KITCHEN",
        "target": "BANANA",
        "value": 832915055,
        "annum": 1454994000000
    },
    {
        "source": "CAFETERIA",
        "target": "TANGERINE",
        "value": 512169190,
        "annum": 1454994000000
    },
    {
        "source": "GAS STATION",
        "target": "KIWI",
        "value": 98373,
        "annum": 1454994000000
    },
    {
        "source": "CAFETERIA",
        "target": "KIWI",
        "value": 58894409,
        "annum": 1454994000000
    },
    {
        "source": "FRUIT STAND",
        "target": "PEAR",
        "value": 5218150,
        "annum": 1454994000000
    },
    {
        "source": "LOCAL COOP",
        "target": "PEAR",
        "value": 3705553,
        "annum": 1454994000000
    },
    {
        "source": "BODEGA",
        "target": "BANANA",
        "value": 79691139,
        "annum": 1454994000000
    },
    {
        "source": "BODEGA",
        "target": "KIWI",
        "value": 24121078,
        "annum": 1454994000000
    },
    {
        "source": "KIOSK",
        "target": "KIWI",
        "value": 2014764,
        "annum": 1454994000000
    },
    {
        "source": "MARKET",
        "target": "PEAR",
        "value": 11125084,
        "annum": 1454994000000
    },
    {
        "source": "MARKET",
        "target": "BANANA",
        "value": 172081125,
        "annum": 1454994000000
    },
    {
        "source": "LOCAL COOP",
        "target": "BANANA",
        "value": 1483013,
        "annum": 1454994000000
    },
    {
        "source": "FOOD TRUCK",
        "target": "KIWI",
        "value": 906656,
        "annum": 1454994000000
    },
    {
        "source": "ONLINE",
        "target": "KIWI",
        "value": 1258667,
        "annum": 1454994000000
    },
    {
        "source": "INSTITUTIONAL KITCHEN",
        "target": "PEAR",
        "value": 346353,
        "annum": 1454994000000
    },
    {
        "source": "BODEGA",
        "target": "TANGERINE",
        "value": 503348480,
        "annum": 1454994000000
    },
    {
        "source": "KIOSK",
        "target": "TANGERINE",
        "value": 20062782,
        "annum": 1454994000000
    },
    {
        "source": "FARM",
        "target": "KIWI",
        "value": 43408,
        "annum": 1454994000000
    },
    {
        "source": "FRUIT STAND",
        "target": "KIWI",
        "value": 533054,
        "annum": 1454994000000
    },
    {
        "source": "MARKET",
        "target": "KIWI",
        "value": 8139811,
        "annum": 1454994000000
    },
    {
        "source": "CAFETERIA",
        "target": "PEAR",
        "value": 160522274,
        "annum": 1454994000000
    },
    {
        "source": "GAS STATION",
        "target": "PEAR",
        "value": 278368,
        "annum": 1454994000000
    }
];
//}]);
  /*___________________ CONTROLLER _____________________*/

  app.controller('dateSliderController', ['$scope', function ($scope){//, testFactory) {
    
//    testFactory.getData().then(function(results) {
      
      var i, j, k, l,
          dateIndex,
          workingData = [];

          for (i=0; i<results.length; i++) {
            workingData.push({
              source : results[i].source,
              target : results[i].target,
              value  : results[i].value,
              annum  : Date.toString(results[i].annum)
            });
          }

    dateIndex = workingData.uniqueDates().sort();

    // Bind data to $scope object

    $scope.outputData     = workingData;
    $scope.dateArray      = dateIndex;
    $scope.minDate        = dateIndex[0];
    $scope.maxDate        = dateIndex[dateIndex.length - 1];
    $scope.sliderIndex    = 0;
    $scope.sliderIndexMax = dateIndex.length - 1;

    console.log('outputData    : ' + $scope.outputData);
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






