var map;
var elkgrove = new google.maps.LatLng(38.4383, -121.3819);

var latitude = 38.4383,
	longitude = -121.3819,
	map_zoom = 10;

var is_internetExplorer11= navigator.userAgent.toLowerCase().indexOf('trident') > -1;
var marker_url = ( is_internetExplorer11 ) ? 'img/cd-icon-location.png' : 'img/cd-icon-location.svg';
	
var MY_MAPTYPE_ID = 'custom_style';

function initialize() {

var	main_color = '#FF5C4A',
	saturation_value= -5,
	brightness_value= 5;

//we define here the style of the map
var style= [ 
	{
		//set saturation for the labels on the map
		elementType: "labels",
		stylers: [
			{saturation: saturation_value}
		]
	},  
    {	//poi stands for point of interest - don't show these lables on the map 
		featureType: "poi",
		elementType: "labels",
		stylers: [
			{visibility: "off"}
		]
	},
	{
		//don't show highways lables on the map
        featureType: 'road.highway',
        elementType: 'labels',
        stylers: [
            {visibility: "off"}
        ]
    }, 
	{ 	
		//don't show local road lables on the map
		featureType: "road.local", 
		elementType: "labels.icon", 
		stylers: [
			{visibility: "off"} 
		] 
	},
	{ 
		//don't show arterial road lables on the map
		featureType: "road.arterial", 
		elementType: "labels.icon", 
		stylers: [
			{visibility: "off"}
		] 
	},
	{
		//don't show road lables on the map
		featureType: "road",
		elementType: "geometry.stroke",
		stylers: [
			{visibility: "off"}
		]
	}, 
	//style different elements on the map
	{ 
		featureType: "transit", 
		elementType: "geometry.fill", 
		stylers: [
			{ hue: main_color },
			{ visibility: "on" }, 
			{ lightness: brightness_value }, 
			{ saturation: saturation_value }
		]
	}, 
	{
		featureType: "poi",
		elementType: "geometry.fill",
		stylers: [
			{ hue: main_color },
			{ visibility: "on" }, 
			{ lightness: brightness_value }, 
			{ saturation: saturation_value }
		]
	},
	{
		featureType: "poi.government",
		elementType: "geometry.fill",
		stylers: [
			{ hue: main_color },
			{ visibility: "on" }, 
			{ lightness: brightness_value }, 
			{ saturation: saturation_value }
		]
	},
	{
		featureType: "poi.sport_complex",
		elementType: "geometry.fill",
		stylers: [
			{ hue: main_color },
			{ visibility: "on" }, 
			{ lightness: brightness_value }, 
			{ saturation: saturation_value }
		]
	},
	{
		featureType: "poi.attraction",
		elementType: "geometry.fill",
		stylers: [
			{ hue: main_color },
			{ visibility: "on" }, 
			{ lightness: brightness_value }, 
			{ saturation: saturation_value }
		]
	},
	{
		featureType: "poi.business",
		elementType: "geometry.fill",
		stylers: [
			{ hue: main_color },
			{ visibility: "on" }, 
			{ lightness: brightness_value }, 
			{ saturation: saturation_value }
		]
	},
	{
		featureType: "transit",
		elementType: "geometry.fill",
		stylers: [
			{ hue: main_color },
			{ visibility: "on" }, 
			{ lightness: brightness_value }, 
			{ saturation: saturation_value }
		]
	},
	{
		featureType: "transit.station",
		elementType: "geometry.fill",
		stylers: [
			{ hue: main_color },
			{ visibility: "on" }, 
			{ lightness: brightness_value }, 
			{ saturation: saturation_value }
		]
	},
	{
		featureType: "landscape",
		stylers: [
			{ hue: main_color },
			{ visibility: "on" }, 
			{ lightness: brightness_value }, 
			{ saturation: saturation_value }
		]
		
	},
	{
		featureType: "road",
		elementType: "geometry.fill",
		stylers: [
			{ hue: main_color },
			{ visibility: "on" }, 
			{ lightness: brightness_value }, 
			{ saturation: saturation_value }
		]
	},
	{
		featureType: "road.highway",
		elementType: "geometry.fill",
		stylers: [
			{ hue: main_color },
			{ visibility: "on" }, 
			{ lightness: brightness_value }, 
			{ saturation: saturation_value }
		]
	}, 
	{
		featureType: "water",
		elementType: "geometry",
		stylers: [
			{ hue: main_color },
			{ visibility: "on" }, 
			{ lightness: brightness_value }, 
			{ saturation: saturation_value }
		]
	}
];

var mapOptions = {
	zoom: 10,
	center: elkgrove,
	scrollwheel: false,
	disableDefaultUI: true,
	mapTypeId: MY_MAPTYPE_ID
};

  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  var styledMapOptions = {
    name: 'Custom Style'
  };

	var marker = new google.maps.Marker({
	  	position: new google.maps.LatLng(latitude, longitude),
	    map: map,
	    visible: true,
	 	icon: marker_url,
	});

  var customMapType = new google.maps.StyledMapType(style, styledMapOptions);

  map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
}

google.maps.event.addDomListener(window, 'load', initialize);
