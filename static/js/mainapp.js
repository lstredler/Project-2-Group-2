//CREATE BAR CHART STATES WITH MOST VACCINATIONS ADMINISTERED 

var trace1 = {
  x: ["California", "Texas", "Florida", "Pennsylvania","Illinois",
  "New Jersey", "Ohio", "Michigan", "Virginia","Massachusetts"],
  y: [23787425, 13733578, 11302856, 7934904,7397909,5697232,5582498,5084444,4974473,4799195],
  mode: "markers",
  marker:{
    color: 'purple'},
    type: "bar",
  };
    
var data = [trace1];

var layout1 = {
  title: "States With Highest # of Vaccines Administered",
  font:{
    family: "Raleway, sans-serif"
  },
  showlegend: false,
  xaxis:{
    tickangle:-45
  },
  yaxis:{
    zeroline:false,
    gridwidth:2
  },
  bargap:0.05,
  margin:{
    l:100,
    r:50,
    t:100,        
    b:70
  }
};

Plotly.newPlot("plot1", data, layout1);

//CREATE BAR CHART STATES WITH STATES WITH MOST VACCINES PER HUNDRED

var trace2 = {
  x: ["Vermont", "Maine", "Massachusetts", "Connecticut","Rhode Island",
  "New Jersey", "New Hampshire", "Maryland", "Washington","New Mexico"],
  y: [64.45, 60.24, 60.1, 59.11,57.41,54.93,54.87,54.01,52.93,52.5],
  mode: "markers",
  marker:{
    color: 'blue'},
    type: "bar",
  };
    
var data = [trace2];

var layout2 = {
  title: "Top 10 Rank: Percentage of People Fully Vaccinated in State",
  font:{
    family: "Raleway, sans-serif"
  },
  showlegend: false,
  xaxis:{
    tickangle:-45
  },
  yaxis:{
    zeroline:false,
    gridwidth:2
  },
  bargap:0.05,
  margin:{
    l:100,
    r:50,
    t:100,        
    b:70
  }
};

Plotly.newPlot("plot2", data, layout2);


/////DOMENIC/////
var state = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
                'Delaware', 'District of Columbia', 'Florida', 'Georgia', 'Hawaii',
                'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
                'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
                'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
                'New Mexico', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon',
                'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
                'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin',
                'Wyoming']
var vaxx_admin = [69.16, 77.45, 79.36, 77.79, 85.53, 86.87, 92.43, 79.82, 80.18, 83.41, 74.36, 86.12,
                    78.64, 86.86, 82.84, 87.37, 79.89, 88.67, 81.77, 86.42, 79.86, 90.16, 80.46, 88.81,
                    70.95, 82.68, 83.63, 87.01, 89.02, 82.76, 87.12, 97.75, 73.60, 89.58, 85.50, 80.08,
                    79.25, 88.07, 83.62, 77.13, 84.79, 71.20, 79.70, 87.29, 92.15, 88.50, 89.74, 74.18,
                    95.34, 80.86]

// Create the Trace
var trace3 = {
    x: state,
    y: vaxx_admin,
  };
  
  // Create the data array for the plot
  var data = [trace3];

var data = [{
  type: 'scatter',
  x: state,
  y: vaxx_admin,
  mode: 'markers',
  transforms: [{
    type: 'groupby',
    groups: vaxx_admin,
    styles: [
      {target: 'wyoming', value: {marker: {color: 'blue'}}},
      {target: 'texas', value: {marker: {color: 'red'}}},
      {target: 'washington', value: {marker: {color: 'black'}}}
    ]
  }]
}]

var layout3 = {
    title: "Percentage of Vaccines Administered by State",
    xaxis: { 
      title: "State", 
    tickangle:-45
  },
    yaxis: { title: "Percentage of Administered Vaccines" }
  };

  Plotly.newPlot("scatter-plot", data, layout3);


//////THOMAS MAP /////////////////////////

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

////DROPDOWN MENU////////////////////////////



d3.csv("updated_state_vaccinations.csv").then (sampledata=>{
  console.log(sampledata)
  var filterdata = sampledata.filter(data => data.STATE===state);


  ////create table////////////////////////////////
  
  var tbody = d3.select("tbody");
  console.log(data);

  data.forEach((weatherReport) => {
    var row = tbody.append("tr");
    Object.entries(weatherReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
//////////////////////////////////


// On change to the DOM, call getData()
d3.selectAll("#selDataset").on("change", getData);

// Function called by DOM changes
function getData() {
  var dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a variable
  var state = dropdownMenu.property("value");

  


  // Initialize an empty array for the country's data
  var data = [];

  // Call function to update the chart
  updatePlotly(filterdata);
}

// Update the restyled plot's values
function updatePlotly(newdata) {
  Plotly.restyle("table", "values", [newdata]);
}

init();





////////DROP DOWN 

// function getPlots(data) {

//   d3.csv("updated_state_vaccinations.csv").then (data=>{
//     console.log(data)

//     var states=data.states;
//     console.log(states)

//     var total_vaccinations = data.total_vaccinations;
//     console.log(total_vaccinations);

//     var total_distributed = data.total_distributed;
//     console.log(total_distributed);
    
//     var people_vaccinated = data.people_vaccinated
//     console.log(people_vaccinated);

//     var people_fully_vaccinated_per_hundred = data.people_fully_vaccinated_per_hundred
//     console.log(people_fully_vaccinated_per_hundred);

// function getDemoInfo(data) {
//   // read json file 
//       d3.csv("updated_state_vaccinations.csv").then((data)=> {
        
//         var data = data;
//         console.log(data)

//         var total_vaccinations = data.total_vaccinations
//         console.log(total_vaccinations);

//         // filter by state
//          var result = data.filter(data => data.total_vaccinations.toString() === total_vaccinations)[0];
//         // select demo panel
//          var StateInfo = d3.select("#vaccination-data");
          
//        // empty demo panel 
//          StateInfo.html("");
  
//        // grab demo data, append to panel
//           Object.entries(result).forEach((key) => {   
//               StateInfo.append("h5").text(key[0].toUpperCase() + ": " + key[1] + "\n");    
//           });
//       });
//   }
//   // create change event function 
//   function optionChanged(data) {
//       getDemoInfo(data);
//   }
  
//   // create initial data rendering function 
//   function init() {
//       // dropdown menu 
//       var dropdown = d3.select("#selDataset");
  
//       // read the data 
//       d3.csv("updated_state_vaccinations.csv").then((data)=> {
//           console.log(data)
  
//           // id data to dropdown menu 
//           data.states.forEach(function(state) {
//               dropdown.append("option").text(state).property("value");
//           });
  
//           // display data page 
//           getDemoInfo(data.state[0]);
//       });
//   }
  
//   init();





    