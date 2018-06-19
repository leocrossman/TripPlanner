console.log('hfdgjkn');

const mapboxgl = require('mapbox-gl');
const buildMarker = require('./marker.js');

mapboxgl.accessToken =
  'pk.eyJ1IjoibGVvY3Jvc3NtYW4iLCJhIjoiY2ppbTUzZGx6MDBmeDNwbWh2cW8yMHhtcyJ9.UaNLLu5gQqagYE8emmo0-Q';

fullstackCords = [-74.009, 40.705];

const map = new mapboxgl.Map({
  container: 'map',
  center: fullstackCords, // FullStack NY coordinates;
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available.
});

const markerDomEl = document.createElement('div'); // Create a new, detached DIV
markerDomEl.style.width = '32px';
markerDomEl.style.height = '39px';
markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';

new mapboxgl.Marker(markerDomEl).setLngLat(fullstackCords).addTo(map);

buildMarker('Hotel', [-73.986221, 40.758617]).addTo(map);
buildMarker('Restaurant', [-73.9816, 40.7691]).addTo(map);
buildMarker('Activity', [-73.9654, 40.7829]).addTo(map);
