//state names 
function init(){
  d3.json("Data/state_vaccinations.json").then (data=>{
    console.log(data)
    var alabama = Object.values(data.alabama);
    var alaska = Object.values(data.alaska);
    var arizona = Object.values(data.arizona);
    var arkansas = Object.values(data.arkansas);
    var california = Object.values(data.california);
    var colorado = Object.values(data.colorado);
    var connecticut = Object.values(data.connecticut);
    // Create an array of state variable info 
    var state_data = Object.keys(data.alabama);
    
    var data = [{
      values: alabama,
      x: state_data,
      y: state_data,
      type: "bar"
    }];
    
    var layout = {
      height: 600,
      width: 800
    };
    
    Plotly.newPlot("bar", data, layout);
  }

// On change to the DOM, call getData(
  d3.selectAll("#selDataset").on("change", getData);
  // Function called by DOM changes
  function getData() {
    var dropdownMenu = d3.select("#selDataset");
    // Assign the value of the dropdown menu option to a variable
    var dataset = dropdownMenu.property("value");
    // Initialize an empty array for the country's data
    var data = [];
    if (dataset == 'alabama') {
      data = alabama;
    }
    else if (dataset == 'alaska') {
      data = alaska;
    }
    else if (dataset == 'arizona') {
      data = arkansas;
    }
    else if (dataset == 'arkansas') {
      data = arkansas;
    }
    // Call function to update the chart
    updatePlotly(data);
}
// Update the restyled plot's values
function updatePlotly(newdata) {
  Plotly.restyle("bar", "values", [newdata]);
}
init();