const mapboxgl = require('mapbox-gl');

const iconURLs = {
  activities: 'http://i.imgur.com/WbMOfMl.png',
  hotels: 'http://i.imgur.com/D9574Cu.png',
  restaurants: 'http://i.imgur.com/cqR6pUI.png',
};

const buildMarker = (type, cords) => {
  if (type === 'Activity') {
    const activityMarkerDomEl = document.createElement('div'); // Create a new, detached DIV
    activityMarkerDomEl.style.width = '32px';
    activityMarkerDomEl.style.height = '39px';
    activityMarkerDomEl.style.backgroundImage = `url(${iconURLs.activities})`;

    return new mapboxgl.Marker(activityMarkerDomEl).setLngLat(cords);
  }
  if (type === 'Hotel') {
    const hotelMarkerDomEl = document.createElement('div'); // Create a new, detached DIV
    hotelMarkerDomEl.style.width = '32px';
    hotelMarkerDomEl.style.height = '39px';
    hotelMarkerDomEl.style.backgroundImage = `url(${iconURLs.hotels})`;

    return new mapboxgl.Marker(hotelMarkerDomEl).setLngLat(cords);
  }
  if (type === 'Restaurant') {
    const restaurantMarkerDomEl = document.createElement('div'); // Create a new, detached DIV
    restaurantMarkerDomEl.style.width = '32px';
    restaurantMarkerDomEl.style.height = '39px';
    restaurantMarkerDomEl.style.backgroundImage = `url(${
      iconURLs.restaurants
    })`;

    return new mapboxgl.Marker(restaurantMarkerDomEl).setLngLat(cords);
  }
};

module.exports = buildMarker;
