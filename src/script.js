mapboxgl.accessToken = 'pk.eyJ1IjoidmFpbmVuYWF0dG9yaSIsImEiOiJjbDFuZmg2bHIwMTZoM2JucDc5N2wxeTBqIn0.3IwfrIdxCDfo1ik4f1SxxQ';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [33, 50], // starting position [lng, lat]
    zoom: 9 // starting zoom
});

const navigations = new mapboxgl.NavigationControl();
map.addControl(navigations);

var directions = new MapboxDirections({

    accessToken: mapboxgl.accessToken, 
  });


  map.addControl(directions);