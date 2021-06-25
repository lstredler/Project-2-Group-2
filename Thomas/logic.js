var myMap = L.map("map", {
  center: [37.8, -96],
  zoom: 5
});

// Adding tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

// Load in geojson data
// var statesData = "static/data/pop_data.json";

// var geojson;

L.geoJson(statesData).addTo(myMap);

function getColor(d) {
  return d > 70 ? '#145A32' :
         d > 60  ? '#1E8449' :
         d > 50  ? '#52BE80' :
         d > 40   ? '#A9DFBF' :
         d > 30   ? '#E9F7EF' :
                    '#E7EAFF';
}

function style(feature) {
  return {
      fillColor: getColor(feature.properties.percent_vaccinated),
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
  };
  
}

L.geoJson(statesData, {style: style}).addTo(myMap);


var legend = L.control({position: 'bottomright'});

legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = [30, 40, 50, 60, 70],
        labels = [];

        div.innerHTML += '<h4>Percentage Vaccinated</h4>'
    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
        '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
          grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');

    }

    return div;
};

legend.addTo(myMap);

function highlightFeature(e) {
  var layer = e.target;

  layer.setStyle({
      weight: 5,
      color: '#666',
      dashArray: '',
      fillOpacity: 0.7
  });

  if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
      layer.bringToFront();
  }
}

function resetHighlight(e) {
  geojson.resetStyle(e.target);
}

var geojson;
// ... our listeners


function onEachFeature(feature, layer) {
  layer.on({
      mouseover: highlightFeature,
      mouseout: resetHighlight
  });
}

geojson = L.geoJson(statesData, {
  style: style,
  onEachFeature: onEachFeature,
  onEachFeature: function(feature, layer) {
    layer.bindPopup(feature.properties.name + "<br>" + feature.properties.percent_vaccinated + "%");
  }
}).addTo(myMap);




//Grab data with d3
// d3.json(statesData).then(function(data) {

//   // Create a new choropleth layer
//   geojson = L.choropleth(data, {

//     // Define what  property in the features to use
//     valueProperty: "density",

//     // Set color scale
//     scale: ["#ffffb2", "#b10026"],

//     // Number of breaks in step range
//     steps: 10,

//     // q for quartile, e for equidistant, k for k-means
//     mode: "q",
//     style: {
//       // Border color
//       color: "#fff",
//       weight: 1,
//       fillOpacity: 0.8
//     },

//     // Binding a pop-up to each layer
//     onEachFeature: function(feature, layer) {
//       layer.bindPopup("State " + feature.properties.name + "<br>Median Household Income:<br>" +
//         "$" + feature.properties.percent_vaccinated);
//     }
//   }).addTo(myMap);

//   // Set up the legend
//   var legend = L.control({ position: "bottomright" });
//   legend.onAdd = function() {
//     var div = L.DomUtil.create("div", "info legend");
//     var limits = geojson.options.limits;
//     var colors = geojson.options.colors;
//     var labels = [];

//     // Add min & max
//     var legendInfo = "<h1>Median Income</h1>" +
//       "<div class=\"labels\">" +
//         "<div class=\"min\">" + limits[0] + "</div>" +
//         "<div class=\"max\">" + limits[limits.length - 1] + "</div>" +
//       "</div>";

//     div.innerHTML = legendInfo;

//     limits.forEach(function(limit, index) {
//       labels.push("<li style=\"background-color: " + colors[index] + "\"></li>");
//     });

//     div.innerHTML += "<ul>" + labels.join("") + "</ul>";
//     return div;
//   };

//   // Adding legend to the map
//   legend.addTo(myMap);

// });