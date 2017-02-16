angular.module('pengApp').controller('pengestController', ['$scope', '$http',

    function($scope, $http) {


        //Variable to indicate whether to show the final summary page.
        $scope.text = "Hello world";

        $scope.data = [
          {
            shopName: "Chicken Run",
            location: {
              latitude: 51.5171559,
              longitude:-0.0741484
            },


          },


        ]


}]);
