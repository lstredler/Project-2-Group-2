//////BAR CHART 1
var trace1 = {
  x: ["California", "Texas", "New York", "Florida", "Pennsylvania","Illinois", "Ohio", "New Jersey", 
  "Michigan", "Virginia"],
  y: [41639567, 25095675, 21301120,20516373, 13651077, 12629554, 10519985, 9949593, 9285546, 9057681,9285546,9057681],
  mode: "markers",
  marker:{
    color: 'green'},
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

//////BAR CHART 2

var trace2 = {
  x: ["Idaho","Rhode Island","Delaware","Montana","DC","Vermont","South Dakota","Alaska","North Dakota","Wyoming",],
  y: [1303710,1252559,1011994, 921925,845387,840948,809311,641457,635417,414810],

  mode: "markers",
  marker:{
    color: ('red')},
    type: "bar",
  };
    
var data = [trace2];

var layout2 = {
  title: "States With Lowest # of Vaccines Administered",
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

//////CHART 3


//CREATE BAR CHART STATES WITH STATES WITH MOST VACCINES PER HUNDRED

var trace3 = {
  x: ["Vermont", "Maine", "Massachusetts", "Connecticut","Rhode Island",
  "New Jersey", "New Hampshire", "Maryland", "Washington","New Mexico"],
  y: [64.45, 60.24, 60.1, 59.11,57.41,54.93,54.87,54.01,52.93,52.5],
  mode: "markers",
  marker:{
    color: 'green'},
    type: "bar",
  };
    
var data = [trace3];

var layout3 = {
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

Plotly.newPlot("plot3", data, layout3);

//////CHART 4

var trace4 = {
  x: ["West Virginia", "Utah","Georgia","Idaho","Tennessee","Louisiana","Wyoming","Arkansas","Alabama","Mississippi"],
  y: [36.55,36.49,35.42,35.31,34.57,33.84,33.84,33.41,31.96,29.13],
  mode: "markers",
  marker:{
    color: 'red'},
    type: "bar",
  };
    
var data = [trace4];

var layout4 = {
  title: "Lowest 10 Rank: Percentage of People Fully Vaccinated in State",
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

Plotly.newPlot("plot4", data, layout4);

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
var trace4 = {
    x: state,
    y: vaxx_admin,
  };
  
  // Create the data array for the plot
  var data = [trace4];

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

var layout4 = {
    title: "Percentage of Vaccines Administered by State",
    xaxis: { 
      title: "State", 
    tickangle:-45
  },
    yaxis: { title: "Percentage of Administered Vaccines" }
  };

  Plotly.newPlot("scatter-plot", data, layout4);


  //////BAR GRAPH - TOP 10 STATES BY PERCENT ADMINISTERED///////
  var data = [
    {
      x: ['New Mexico', 'Wisconsin', 'Connecticut', 'Vermont',
          'Massachusetts', 'Washington', 'North Dakota',
          'Nevada', 'Minnesota', 'Kentucky'],
      y: [97.75, 95.34, 92.43, 92.15, 90.16, 89.74, 89.58,
          89.02, 88.81, 88.67],
      type: 'bar'
    }
  ];
  
  
  var layout = {
      title: "Top 10 Most Vaccinated States",
      xaxis: { title: "State" },
      yaxis: { title: "Percentage of Administered Vaccines" }
    };
  
    Plotly.newPlot("bar-plot6", data, layout);


////////LINE CHARTS////////////


var trace1 = {
  x:["Jan 5", "Jan 12", "Jan 19", "Jan 26", "Feb 2 ", "Feb 9", "Feb 16","Feb 23 ","Mar 2","Mar 9","Mar 16","Mar 23","Mar 30","Apr 6", "Apr 13", "Apr 20", "Apr 27", "May 4", "May 11", "May 18", "May 25", "Jun 1", "Jun 8", "Jun 15", "Jun 22"],
  y: [0.0, 0.3, 0.8, 1.3, 2.3, 3.7, 5.5, 7.2, 9.3, 11.2, 13.6, 15.8, 18.4, 21.4, 25.1, 28.5, 31.7, 34.5, 37.6, 39.9, 41.8, 43.1, 44.5, 46.1, 47.4],
  mode: 'lines',
  name: 'Female'
};
var trace2 = {
  x: ["Jan 5", "Jan 12", "Jan 19", "Jan 26", "Feb 2 ", "Feb 9", "Feb 16","Feb 23 ","Mar 2","Mar 9","Mar 16","Mar 23","Mar 30","Apr 6", "Apr 13", "Apr 20", "Apr 27", "May 4", "May 11", "May 18", "May 25", "Jun 1", "Jun 8", "Jun 15", "Jun 22"],
  y: [0.0, 0.2, 0.4, 0.7, 1.3, 2.1, 3.4, 4.7, 6.4, 8.0, 10.0, 11.8, 14.0, 16.6, 20.2, 23.4, 26.6, 29.5, 32.7, 35.2, 37.7, 38.9, 40.3, 41.9, 43.3],
  mode: 'lines',
  name: 'Male'
};
var layout4 = {
  title: 'People Fully Vaccinated by Gender',
  xaxis: {
    title: 'Date',
    showgrid: false,
    zeroline: false
  },
  yaxis: {
    title: 'Percent Vaccinated',
    showline: false
  }
};
var data = [trace1, trace2];
Plotly.newPlot('myDiv', data, layout4);


////////LINE CHART/////////////////
var trace1 = {
  x:["Jan 5", "Jan 19", "Feb 2", "Feb 16", "Mar 2", "Mar 16", "Mar 30", "Apr 13", "Apr 27", "May 11", "May 25", "Jun 8", "Jun 22"],
  y: [ 0.0, 0.3, 2.3, 12.3, 28.4, 43.1, 54.0, 62.7, 67.5, 70.6, 72.6, 74.0, 75.2],
  mode: 'lines',
  name: '75+'
};
var trace2 = {
  x: ["Jan 5", "Jan 19", "Feb 2", "Feb 16", "Mar 2", "Mar 16", "Mar 30", "Apr 13", "Apr 27", "May 11", "May 25", "Jun 8", "Jun 22"],
  y: [0.0, 0.4, 1.8, 7.6, 17.9, 32.2, 47.3, 60.9, 68.1, 72.5, 75.3, 77.1, 78.8],
  mode: 'lines',
  name: '65-74'
};
var trace3 = {
  x:["Jan 5", "Jan 19", "Feb 2", "Feb 16", "Mar 2", "Mar 16", "Mar 30", "Apr 13", "Apr 27", "May 11", "May 25", "Jun 8", "Jun 22"],
  y: [ 0.0, 1.0, 2.8, 5.6, 8.2, 12.0, 17.4, 28.8, 41.7, 51.0, 56.8, 60.1, 62.9],
  mode: 'lines',
  name: '50-64'
};
var trace4 = {
  x: ["Jan 5", "Jan 19", "Feb 2", "Feb 16", "Mar 2", "Mar 16", "Mar 30", "Apr 13", "Apr 27", "May 11", "May 25", "Jun 8", "Jun 22"],
  y: [0.0, 1.1, 3.0, 5.7, 7.9, 10.6, 14.2, 21.3, 30.3, 39.2, 45.8, 49.5, 52.8],
  mode: 'lines',
  name: '40-49'
};
var trace5 = {
  x:["Jan 5", "Jan 19", "Feb 2", "Feb 16", "Mar 2", "Mar 16", "Mar 30", "Apr 13", "Apr 27", "May 11", "May 25", "Jun 8", "Jun 22"],
  y: [ 0.0, 1.1, 2.6, 4.8, 6.6, 8.5, 11.1, 16.5, 23.1, 30.9, 37.0, 40.5, 43.7],
  mode: 'lines',
  name: '25-39'
};
var trace6 = {
  x: ["Jan 5", "Jan 19", "Feb 2", "Feb 16", "Mar 2", "Mar 16", "Mar 30", "Apr 13", "Apr 27", "May 11", "May 25", "Jun 8", "Jun 22"],
  y: [0.0, 0.3, 0.9, 2.0, 3.0, 4.2, 5.8, 9.8, 15.2, 23.1, 29.7, 33.8, 37.7],
  mode: 'lines',
  name: '18-24'
};
var trace7 = {
  x:["Jan 5", "Jan 19", "Feb 2", "Feb 16", "Mar 2", "Mar 16", "Mar 30", "Apr 13", "Apr 27", "May 11", "May 25", "Jun 8", "Jun 22"],
  y: [ 0.0, 0.0, 0.0, 0.1, 0.3, 0.5, 0.8, 1.9, 5.2, 13.5, 21.8, 26.7, 32.2],
  mode: 'lines',
  name: '16-17'
};
var trace8 = {
  x: ["Jan 5", "Jan 19", "Feb 2", "Feb 16", "Mar 2", "Mar 16", "Mar 30", "Apr 13", "Apr 27", "May 11", "May 25", "Jun 8", "Jun 22"],
  y: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.1, 0.3, 0.6, 5.5, 18.2],
  mode: 'lines',
  name: '12-15'
};
var layout5 = {
  title: 'People Fully Vaccinated by Age Group',
  xaxis: {
    title: 'Date',
    showgrid: false,
    zeroline: false
  },
  yaxis: {
    title: 'Percent Vaccinated',
    showline: false
  }
};
var data = [trace1, trace2, trace3, trace4, trace5, trace6, trace7, trace8];
Plotly.newPlot('myDiv2', data, layout5);



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





// ////DROPDOWN MENU////////////////////////////




//   ////create table////////////////////////////////
  

// //////////////////////////////////


// // On change to the DOM, call getData()
// d3.selectAll("#selDataset").on("change", getData);

// // Function called by DOM changes
// function getData() {
//   var dropdownMenu = d3.select("#selDataset");
//   // Assign the value of the dropdown menu option to a variable
//   var state = dropdownMenu.property("value");

  


//   // Initialize an empty array for the country's data
//   var data = [];

//   // Call function to update the chart
//   updatePlotly(filterdata);
// }

// // Update the restyled plot's values
// function updatePlotly(newdata) {
//   Plotly.restyle("table", "values", [newdata]);
// }

// init();

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





    
