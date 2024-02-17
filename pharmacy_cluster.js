const map = L.map('map3').setView([29.25, 48], 9);

const tiles = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


var markers = L.markerClusterGroup();
var marker = L.geoJSON(pharmacy_data);

markers.addLayer(marker);
map.addLayer(markers);