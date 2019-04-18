
// sets up my mapbox access token so they can track my usage of their basemap services
mapboxgl.accessToken = 'pk.eyJ1IjoibWFyemlwYW45NCIsImEiOiJjanVrOTdwaDQxdG42NDRwNGFmbzY5dWdtIn0.4lVQxPc89QYzHas2IIWmew';

var map = new mapboxgl.Map({
  container: 'mapContainer',
  style: 'mapbox://styles/mapbox/light-v9',
  center: [-73.98, 40.70],
  zoom: 9.5,
});

map.on('style.load', function(){
map.addSource('greenpoint_pluto',{
  type: 'geojson',
  data: './data/greenpoint_pluto.geojson'
})

map.addLayer({
  id:'greenpoint-lots-fill',
  type: 'fill',
  source: 'greenpoint_pluto',
})
})
