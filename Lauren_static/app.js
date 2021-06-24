d3.csv("updated_state_vaccinations.csv").then (data=>{
  console.log(data)

  var states=data.states;
  console.log(states)

  var total_vaccinations = data.total_vaccinations;
  console.log(total_vaccinations);

  var total_distributed = data.total_distributed;
  console.log(total_distributed);
  
  var people_vaccinated = data.people_vaccinated
  console.log(people_vaccinated);

  var people_fully_vaccinated_per_hundred = data.people_fully_vaccinated_per_hundred
  console.log(people_fully_vaccinated_per_hundred);
  
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

var trace3={
  type = 'table',
  header = list(
    values = c("<b>Cars</b>", names(mtcars)),
  align = c('left', rep('center', ncol(mtcars))),
  line = list(width = 1, color = 'black'),
  fill = list(color = 'rgb(235, 100, 230)'),
  font = list(family = "Arial", size = 14, color = "white")
  ),
  cells = list(
    values = rbind(
      rownames(mtcars), 
      t(as.matrix(unname(mtcars)))
    ),
    align = c('left', rep('center', ncol(mtcars))),
    line = list(color = "black", width = 1),
    fill = list(color = c('rgb(235, 193, 238)', 'rgba(228, 222, 249, 0.65)')),
    font = list(family = "Arial", size = 12, color = c("black"))
  ))

}



Plotly.newPlot("table", data, fig);


d3.selectAll("#selDataset").on("change", getData);

// Function called by DOM changes
function getData() {
  var dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a variable
  var dataset = dropdownMenu.property("value");
  // Initialize an empty array for the country's data
  var data = [];

  if (dataset == 'Alabama') {
      data = alabama;
  }
  else if (dataset == 'Alaska') {
      data = alaska;
  }
  else if (dataset == 'Arizona') {
      data = arizona;
  }
  // Call function to update the chart
  updatePlotly(data);
}

// Update the restyled plot's values
function updatePlotly(newdata) {
  Plotly.restyle("table", "values", [newdata]);
}

init();

    
