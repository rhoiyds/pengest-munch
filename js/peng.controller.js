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
          }, {
            name: "Taste of Tennessee",
            location: {
              latitude: 51.527163,
              longitude: -0.083739
            },
            rating: {
              burger: 3,
              chips: 1.5,
              wings: 4.2,
              total: 2.9
            }
          }, {
            name: "Dixy",
            location: {
              latitude: 51.5561328,
              longitude: -0.1390873
            },
            rating: {
              burger: 3,
              chips: 2,
              wings: 2,
              total: 2
            }
          } , {
            name: "Dallas",
            location: {
              latitude: 51.5036952,
              longitude: -0.1150325
            },
            rating: {
              burger: 4.6,
              chips: 4,
              wings: 4.3,
              total: 4.5
            }
          } , {
            name: "Chicken Valley",
            location: {
              latitude: 51.52099119,
              longitude: -0.1712288
            },
            rating: {
              burger: 1.2,
              chips: 2.9,
              wings: 1.9,
              total: 1.5
            }
          } , {
            name: "Chick King",
            location: {
              latitude: 51.6044748,
              longitude: -0.0682239
            },
            rating: {
              burger: 1.2,
              chips: 3,
              wings: 3.5,
              total: 3.5
            }
          }, {
            name: "Sams Chicken",
            location: {
              latitude: 51.613932,
              longitude: -0.1769936
            },
            rating: {
              burger: 3.8,
              chips: 3,
              wings: 4,
              total: 4.3
            }
          } , {
            name: "Morleys",
            location: {
              latitude: 51.398632,
              longitude: -0.096530
            },
            rating: {
              burger: 4.2,
              chips: 4.1,
              wings: 4.5,
              total: 4.3
            }
          }, {
            name: "Chicken Valley",
            location: {
              latitude: 51.5058768,
              longitude: -0.2278134
            },
            rating: {
              burger: 1.7,
              chips: 3.2,
              wings: 2.3,
              total: 1.7
            }
          }, {
            name: "KRFC",
            location: {
              latitude: 51.5058768,
              longitude: -0.032140
            },
            rating: {
              burger: 3.3,
              chips: 3.2,
              wings: 4.6,
              total: 4
            }
          } , {
            name: "FFC",
            location: {
              latitude: 51.525135,
              longitude: -0.0337925
            },
            rating: {
              burger: 1.5,
              chips: 2.4,
              wings: 2,
              total: 2
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
                $scope.map.panTo(marker.getPosition());
                infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
                infoWindow.open($scope.map, marker);
            });

            review.marker = marker;
            $scope.markers.push(marker);
        }

         $scope.selectMarker = function(review) {
          $scope.map.panTo(review.marker.getPosition());
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
