angular.module('pengApp').controller('pengestController', ['$scope', '$http',

    function($scope, $http) {


        //Variable to indicate whether to show the final summary page.
        $scope.text = "Hello world";

        $scope.reviews = [
          {
            name: "Chicken Run",
            location: {
              latitude: 51.5171559,
              longitude:-0.0741484
            },
            rating: {
              burger: 3,
              chips: 4.7,
              wing: 1.7,
              total: 3.6
            }
          }, {
            name: "Miami Fried Chicken",
            location: {
              latitude: 51.3795214,
              longitude:-0.0879298
            },
            rating: {
              burger: 4.4,
              chips: 4.2,
              wing: 4.3,
              total: 4.2
            }
          }


        ]


}]);
