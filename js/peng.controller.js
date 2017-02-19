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
              wings: 1.7,
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
              wings: 4.3,
              total: 4.2
            }
          },  {
            name: "Edens Cottage",
            location: {
              latitude: 51.5642703,
              longitude: -0.1073761
            },
            rating: {
              burger: 4.5,
              chips: 4,
              wings: 5,
              total: 4
            }
          }
        ]

        var mapOptions = {
            zoom: 10,
            center: new google.maps.LatLng(51.5074,0.1278),
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: false
        }

        $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

        $scope.markers = [];

        var infoWindow = new google.maps.InfoWindow();

        var createMarker = function (review) {

            var marker = new google.maps.Marker({
                map: $scope.map,
                position: new google.maps.LatLng(review.location.latitude, review.location.longitude),
                title: review.name,
                link: review.url
            });
            marker.content = '<div class="infoWindowContent">' +
                              "Burger: " + review.rating.burger + "<br />" +
                              "Chips: " + review.rating.chips + "<br />" +
                              "Wings: " + review.rating.wings + "<br />" +
                              "Overall: " + review.rating.total;

            google.maps.event.addListener(marker, 'click', function(){
                $scope.map.setCenter(marker.getPosition());
                infoWindow.setContent('<h2>marker.title</h2>' + marker.content);
                infoWindow.open($scope.map, marker);
            });

            review.marker = marker;
            $scope.markers.push(marker);
        }

         $scope.selectMarker = function(review) {
          $scope.map.setCenter(review.marker.getPosition());
          infoWindow.setContent('<h2>' + review.marker.title + '</h2>' + review.marker.content);
          infoWindow.open($scope.map, review.marker);
        }

        for (i = 0; i < $scope.reviews.length; i++){
            createMarker($scope.reviews[i]);
        }

        $scope.openInfoWindow = function(e, selectedMarker){
            e.preventDefault();
          }

        }

]);
