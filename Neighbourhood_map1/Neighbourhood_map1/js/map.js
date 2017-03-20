
		var map;
		var markers = [	]
		var locations = [
			{title:'Some oaks bistro', location:{lat:-33.965765, lng:18.475173},content:"adfdasf"},
			{title:'Chuck Yangs Chinese', location:{lat:-33.965748, lng:18.475282},content:"adfafdasfdasf"},
			{title:'Michaels Kitchen & Bar', location:{lat:-33.965513, lng:18.475367},content:"adfafdasfdasf"},
			{title:'Rondebosch park', location:{lat:-33.965025, lng:18.476031},content:"adfafdasfdasf"},
			{title:'Woodlands park', location:{lat:-33.962696, lng:18.476267},content:"adfafdasfdasf"},
			{title:'Newlands rugby staduim', location:{lat:-33.96994, lng:18.46852},content:"adfafdasfdasf"},
			{title:'Keurboom Park', location:{lat:-33.973252, lng:18.478419},content:"adfafdasfdasf"},
			{title:'Newlands cricket staduim ', location:{lat:-33.973652, lng:18.468838},content:"adfafdasfdasf"},
			{title:'Kelvin Grove club', location:{lat:-33.971508, lng:18.470646},content:"adfafdasfdasf"},
			{title:'Rondebosch commons', location:{lat:-33.957671, lng:18.481354},content:"adfafdasfdasf"},
			{title:'Fesival court', location:{lat:-33.96757, lng:18.473613},content:"adfafdasfdasf"},
			{title:'Rondebosch veterinary clinic', location:{lat:-33.970013, lng:18.473865 },content:"adfafdasfdasf"}
		
			]

		var styles = [
			    {
			        "featureType": "all",
			        "elementType": "labels.text.fill",
			        "stylers": [
			            {
			                "color": "#ffffff"
			            }
			        ]
			    },
			    {
			        "featureType": "all",
			        "elementType": "labels.text.stroke",
			        "stylers": [
			            {
			                "color": "#000000"
			            },
			            {
			                "lightness": 13
			            }
			        ]
			    },
			    {
			        "featureType": "administrative",
			        "elementType": "geometry.fill",
			        "stylers": [
			            {
			                "color": "#000000"
			            }
			        ]
			    },
			    {
			        "featureType": "administrative",
			        "elementType": "geometry.stroke",
			        "stylers": [
			            {
			                "color": "#144b53"
			            },
			            {
			                "lightness": 14
			            },
			            {
			                "weight": 1.4
			            }
			        ]
			    },
			    {
			        "featureType": "landscape",
			        "elementType": "all",
			        "stylers": [
			            {
			                "color": "#08304b"
			            }
			        ]
			    },
			    {
			        "featureType": "poi",
			        "elementType": "all",
			        "stylers": [
			            {
			                "visibility": "off"
			            }
			        ]
			    },
			    {
			        "featureType": "poi",
			        "elementType": "geometry",
			        "stylers": [
			            {
			                "color": "#0c4152"
			            },
			            {
			                "lightness": 5
			            }
			        ]
			    },
			    {
			        "featureType": "poi.park",
			        "elementType": "geometry.fill",
			        "stylers": [
			            {
			                "visibility": "on"
			            },
			            {
			                "saturation": "100"
			            },
			            {
			                "lightness": "14"
			            },
			            {
			                "color": "#0a4529"
			            }
			        ]
			    },
			    {
			        "featureType": "road.highway",
			        "elementType": "geometry.fill",
			        "stylers": [
			            {
			                "color": "#000000"
			            }
			        ]
			    },
			    {
			        "featureType": "road.highway",
			        "elementType": "geometry.stroke",
			        "stylers": [
			            {
			                "color": "#0b434f"
			            },
			            {
			                "lightness": 25
			            }
			        ]
			    },
			    {
			        "featureType": "road.arterial",
			        "elementType": "geometry.fill",
			        "stylers": [
			            {
			                "color": "#000000"
			            }
			        ]
			    },
			    {
			        "featureType": "road.arterial",
			        "elementType": "geometry.stroke",
			        "stylers": [
			            {
			                "color": "#0b3d51"
			            },
			            {
			                "lightness": 16
			            }
			        ]
			    },
			    {
			        "featureType": "road.local",
			        "elementType": "geometry",
			        "stylers": [
			            {
			                "color": "#000000"
			            }
			        ]
			    },
			    {
			        "featureType": "transit",
			        "elementType": "all",
			        "stylers": [
			            {
			                "color": "#146474"
			            }
			        ]
			    },
			    {
			        "featureType": "water",
			        "elementType": "all",
			        "stylers": [
			            {
			                "color": "#021019"
			            }
			        ]
			    },
			    {
			        "featureType": "water",
			        "elementType": "geometry.fill",
			        "stylers": [
			            {
			                "saturation": "-100"
			            },
			            {
			                "lightness": "0"
			            },
			            {
			                "color": "#291451"
			            }
			        ]
			    }
				]

		function initMap(){

			map = new google.maps.Map(document.getElementById('map'), {
				center :{lat:-33.967585, lng:18.473704},
				zoom: 15,
				styles:styles
			}); 

 var largeInfowindow = new google.maps.InfoWindow();
        // The following group uses the location array to create an array of markers on initialize.
        for (var i = 0; i < locations.length; i++) {
          // Get the position from the location array.
          var position = locations[i].location;
          var title = locations[i].title;
          var content = locations[i].content;
          // Create a marker per location, and put into markers array.
           var marker = new google.maps.Marker({
            position: position,
            title: title,
            content:content,
            animation: google.maps.Animation.DROP,
            id: i

          });
          // Push the marker to our array of markers.
          markers.push(marker);
          // Create an onclick event to open an infowindow at each marker.
          marker.addListener('click', function() {
            populateInfoWindow(this, largeInfowindow);
            
          });
        
        document.getElementById('show-listings').addEventListener('click', showListings);
        document.getElementById('hide-listings').addEventListener('click', hideListings);
        // listMarkers(markers)
      }

      		
      	
      // This function populates the infowindow when the marker is clicked. We'll only allow
      // one infowindow which will open at the marker that is clicked, and populate based
      // on that markers position.
      function populateInfoWindow(marker, infowindow) {
        // Check to make sure the infowindow is not already opened on this marker.
        if (infowindow.marker != marker) {
          infowindow.marker = marker;
          infowindow.setContent('<div>' + marker.title + '</div>'+'<div>'+ marker.content +'</div>');
          infowindow.open(map, marker);
          marker.setIcon("http://maps.google.com/mapfiles/ms/icons/green-dot.png");
          // Make sure the marker property is cleared if the infowindow is closed.
          infowindow.addListener('closeclick', function() {
            infowindow.marker = null;
            marker.setIcon("http://maps.google.com/mapfiles/ms/icons/red-dot.png");
          });
        }
      }
 //     

      // This function will loop through the markers array and display them all.
      function showListings() {
      	// listMarkers(markers);
        var bounds = new google.maps.LatLngBounds();
        // Extend the boundaries of the map for each marker and display the marker
        for (var i = 0; i < markers.length; i++) {
          markers[i].setMap(map);
          bounds.extend(markers[i].position);
        }
        map.fitBounds(bounds);
        
      }
      // This function will loop through the listings and hide them all.
      function hideListings() {
        for (var i = 0; i < markers.length; i++) {
          markers[i].setMap(null);
        }
    }	
}

function viewModel(){
	 var self = this;

		self.locations = ko.observableArray(locations);
		self.openInfo =function(marker){
			this.populateInfoWindow(this,largeInfowindow);
		}

	}
		ko.applyBindings(new viewModel());



  //     	for (var i = 0; i < locations.length; i++) {
  //     		var box = document.getElementById("aaa");
  //     		var mark = document.createElement('ul') ;
  //     		var tex = document.createTextNode(markers[i].title);
  //     		markers[i].addListener('click',function(){
  //     			populateInfoWindow(markers[i],largeInfowindow);
  //     		});
  //     		mark.appendChild(tex);
  //     		box.appendChild(mark) ;

		// }
