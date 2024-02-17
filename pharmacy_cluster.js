const map = L.map('map3').setView([29.25, 48], 9);

//const tiles = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}.png', {
//    maxZoom: 19,
//    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
//}).addTo(map);


var markers = L.markerClusterGroup();
var marker = L.geoJSON(pharmacy_data);

markers.addLayer(marker);
map.addLayer(markers);