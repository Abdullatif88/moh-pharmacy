

const map = L.map('map4').setView([29.25, 48], 9);

const tiles = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);



var geojsonMarkerOptions = {
    color: '#d672a9',
    opacity: 0.5,
    fillOpacity: 1,
    weight:0.5,
    radius: 200
};


var pharm = L.geoJson(pharmacy_data, {
    pointToLayer: function (feature, latlng) {
        return L.circle(latlng, geojsonMarkerOptions);
    }, onEachFeature: function (feature, layer) {
        // layer.bindTooltip(feature.properties.name);
    }
}).addTo(map);

var pharmControl = {
    "الصيدليات": pharm
};

var layerControl = L.control.layers(null,pharmControl).addTo(map);


if(layerControls.collapsed) {
    layerControls.expand();
  } else {
    layerControls.collapse();
  }
layerControls.addTo(map)    
layerControls.remove();