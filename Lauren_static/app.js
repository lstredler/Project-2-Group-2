//CREATE BAR CHART STATES WITH MOST VACCINATIONS ADMINISTERED 

var trace1 = {
  x: ["California", "Texas", "Florida", "Pennsylvania","Illinois",
  "New Jersey", "Ohio", "Michigan", "Virginia","Massachusetts"],
  y: [23787425, 13733578, 11302856, 7934904,7397909,5697232,5582498,5084444,4974473,4799195],
  mode: "markers",
  marker:{
    color: 'blue'},
    type: "bar",
    orientation: "h",}
  };
    
var data = [trace1];

var layout = {
  title: "Top 10 States With Highest Quantity of Vaccines Administered",
  yaxis:{
    tickmode:"linear",
  },
  margin:{
    l:100,
    r:100,
    t:100,        
    b:30
  }
};

Plotly.newPlot("plot", data, layout);
    
