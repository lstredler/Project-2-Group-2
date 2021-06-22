function getPlots(data) {
  d3.js("state_vaccinations.js").then (data=>{
    console.log(data)
  
    var alabama = Object.values(data.alabama);
    var alaska = Object.values(data.alaska);
    var arizona = Object.values(data.arizona);
    var arkansas = Object.values(data.arkansas);
    var california = Object.values(data.california);
    var colorado = Object.values(data.colorado);
    var connecticut = Object.values(data.connecticut);
    // Create an array of state variable info 
    var labels = Object.keys(data.alabama);

    function init() {
      var data = [{
        values: alabama,
        labels: labels,
        type: "pie"
      }];

      var layout = {
        height: 600,
        width: 800
      };
      Plotly.newPlot("pie", data, layout);
    });
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
    Plotly.restyle("bar", "values", [newdata]);
  }
  