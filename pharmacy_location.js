import {csv} from "https://cdn.skypack.dev/d3-fetch@3";

const map = L.map('map').setView([29.25, 48], 9);

//const tiles = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
//    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//}).addTo(map);

let circleGroup = L.layerGroup([]).addTo(map);

// Reading the Data
csv("pharmacy.csv").then((data) => {
    //console.log(data); // [{"Hello": "world"}, …]
    window.data = data;
    renderCircle(data);  
});


// Drawing the pharmacies in circles
const renderCircle = function(data) {
    circleGroup.clearLayers();

    for (const d of data) {
        var circle = L.circle([d.y,d.x], {
            color: 'red',
            opacity: 0.75,
            fillOpacity: 0.25,
            radius: 5
    })//.addTo(map);

        circle.bindTooltip(d.name);
        circleGroup.addLayer(circle);
    }   
};
////////////////////////////////////////////////////////


// Filtering the pharmacies based on the category
document.getElementById('category-filter').addEventListener('change', function(event) {
    //console.log(event.target.value);
    
    let filteredData = [];
    if (event.target.value === " ") { filteredData = window.data;}
    console.log(filteredData);
    
    for (const d of data) {
        if (d.category === event.target.value) {
            filteredData.push(d);
            //console.log(filteredData);
        }
    }
    renderCircle(filteredData);

    
    //console.log(filteredData);
});
////////////////////////////////////////////////////////
