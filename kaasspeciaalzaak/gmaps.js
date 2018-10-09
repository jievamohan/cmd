let map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 52.0786246,
      lng: 4.2697373
    },
    zoom: 15,
    disableDefaultUI: true,
    styles: [
      {
        elementType: 'geometry',
        stylers: [{color: '#242f3e'}]
      },
      {
        elementType: 'labels.text.stroke',
        stylers: [{color: '#242f3e'}]
      },
      {
        elementType: 'labels.text.fill',
        stylers: [{color: '#746855'}]
      },
      {
        featureType: 'administrative.locality',
        stylers: [{visibility: 'off'}]
      },
      {
        featureType: 'poi',
        stylers: [{visibility: 'off'}]
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{color: '#38414e'}]
      },
      {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{color: '#212a37'}]
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{color: '#9ca5b3'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{color: '#746855'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{color: '#1f2835'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{color: '#f3d19c'}]
      },
      {
        featureType: 'transit',
        stylers: [{visibility: 'off'}]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{color: '#17263c'}]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{color: '#515c6d'}]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{color: '#17263c'}]
      }
    ]
  });
  
  
  let infowindow = new google.maps.InfoWindow({
    content: "<div style='text-align:center;'>" +
      "<b>Kaasspeciaalzaak Ed Boele</b><br><br>" +
      "Fahrenheitstraat 625<br>" +
      "2561 DC Den Haag" +
      "</div>"
  });
  infowindow.setPosition({
    lat: 52.0786246,
    lng: 4.2697373
  });
  infowindow.open(map);
  
}