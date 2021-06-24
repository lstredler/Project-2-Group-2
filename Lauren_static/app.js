d3.csv("updated_state_vaccinations.csv").then (data=>{
  console.log(data)
});

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
  title: "Top 10 States: People Vaccinated Per 100",
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



function getDemoInfo(data) {
  // read json file 
      d3.csv("updated_state_vaccinations.csv").then((data)=> {
  //  metadata for demographic panel
          var statedata = data;
  
          console.log(data)
  
        // filter by state
         var result = data.filter(data => data.variables.toString() === variables)[0];
        // select demo panel
         var stateInfo = d3.select("#data");
          
       // empty demo panel 
         stateInfo.html("");
  
       // grab demo data, append to panel
          Object.entries(result).forEach((key) => {   
              stateInfo.append("h5").text(key[0].toUpperCase() + ": " + key[1] + "\n");    
          });
      });
  }
  // create change event function 
  function optionChanged(id) {
      getPlots(id);
      getDemoInfo(id);
  }

// create initial data rendering function 
function init() {
  // dropdown menu 
  var dropdown = d3.select("#selDataset");

  // read the data 
  d3.csv("updated_state_vaccinations.csv").then((data)=> {
      console.log(data)

      // id data to dropdown menu 
      data.states.forEach(function(state) {
          dropdown.append("option").text(state).property("value");
      });

      // display data and plots to page 
      getPlots(data.state[0]);
      getDemoInfo(data.state[0]);
  });
}

init();
    
