import {csv} from "https://cdn.skypack.dev/d3-fetch@3";



const map = L.map('map2').setView([29.25, 48], 9);


const tiles = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);




// var nbh = L.geoJSON(data).addTo(map);




var chor1 = L.choropleth(data, {
	valueProperty: 'tot_ku', // which property in the features to use
	scale: "PuRd", // chroma.js scale - include as many as you like
	steps: 4, // number of breaks or steps in range
	mode: 'k', // q for quantile, e for equidistant, k for k-means
	style: {
		color: 'black', // border color
		weight: 0.5,
		fillOpacity: 0.8
	},
    onEachFeature: function (feature, layer) {
        layer.bindPopup('إجمالي السكان (كويتي) ' +
        '<br>' +  feature.properties.tot_ku 
        
        // + '<br>' +
        //     feature.properties.GOV_NO.toLocaleString() + ' incidents'
            )
      }
}).addTo(map);

var chor2 = L.choropleth(data, {
	valueProperty: 'tot_n_ku', // which property in the features to use
	scale: "PuRd", // chroma.js scale - include as many as you like
	steps: 4, // number of breaks or steps in range
	mode: 'k', // q for quantile, e for equidistant, k for k-means
	style: {
		color: 'black', // border color
		weight: 0.5,
		fillOpacity: 0.8
	},
    onEachFeature: function (feature, layer) {
        layer.bindPopup('إجمالي السكان (غير كويتي) ' +
        '<br>' +  feature.properties.tot_n_ku 
        
        // + '<br>' +
        //     feature.properties.GOV_NO.toLocaleString() + ' incidents'
            )
      }
});

var chor3 = L.choropleth(data, {
	valueProperty: 'pop_den_km', // which property in the features to use
	scale: "YlGnBu", // chroma.js scale - include as many as you like
	steps: 4, // number of breaks or steps in range
	mode: 'k', // q for quantile, e for equidistant, k for k-means
	style: {
		color: 'black', // border color
		weight: 0.5,
		fillOpacity: 0.8
	},
    onEachFeature: function (feature, layer) {
        layer.bindPopup('كثافة السكان/كم2 ' +
        '<br>' +  feature.properties.pop_den_km 
        
        // + '<br>' +
        //     feature.properties.GOV_NO.toLocaleString() + ' incidents'
            )
      }
});

var chor4 = L.choropleth(data, {
	valueProperty: 'pharm_n', // which property in the features to use
	scale: "PuBuGn", // chroma.js scale - include as many as you like
	steps: 4, // number of breaks or steps in range
	mode: 'k', // q for quantile, e for equidistant, k for k-means
	style: {
		color: 'black', // border color
		weight: 0.5,
		fillOpacity: 0.8
	},
    onEachFeature: function (feature, layer) {
        layer.bindPopup('عدد الصيدليات لكل منطقة ' +
        '<br>' +  feature.properties.pharm_n 
        
        // + '<br>' +
        //     feature.properties.GOV_NO.toLocaleString() + ' incidents'
            )
      }
});

var chor5 = L.choropleth(data, {
	valueProperty: 'pharm_pop', // which property in the features to use
	scale: "PuBuGn", // chroma.js scale - include as many as you like
	steps: 4, // number of breaks or steps in range
	mode: 'k', // q for quantile, e for equidistant, k for k-means
	style: {
		color: 'black', // border color
		weight: 0.5,
		fillOpacity: 0.8
	},
    onEachFeature: function (feature, layer) {
        layer.bindPopup('كثافة الصيدليات (صيدلية/نسمة) ' +
        '<br>' +  feature.properties.pharm_pop 
        
        // + '<br>' +
        //     feature.properties.GOV_NO.toLocaleString() + ' incidents'
            )
      }
});

var choropleths = {
    "إجمالي السكان الكويتيون": chor1,
    "إجمالي السكان غير الكويتيين": chor2,
    "الكثافة السكانية / كم2": chor3,
    "عدد الصيدليات لكل منطقة": chor4,
    "كثافة الصيدليات (صيدلية/نسمة)": chor5
};

var geojsonMarkerOptions = {
        color: 'navy',
        opacity: 1,
        fillOpacity: 1,
        weight:0.5,
        radius: 20
};
var pharm = L.geoJson(pharmacy_data, {
    pointToLayer: function (feature, latlng) {
        return L.circle(latlng, geojsonMarkerOptions);
    }, onEachFeature: function (feature, layer) {
        layer.bindTooltip(feature.properties.name);
    }
}).addTo(map);

var pharmControl = {
    "الصيدليات": pharm
};

var layerControl = L.control.layers(choropleths,pharmControl).addTo(map);


////////////////////////////////////////////////////////
