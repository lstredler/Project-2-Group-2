//Use d3 library to read in samples data //
d3.csv("Data/state_vaccinations.csv").then(data=>{
    console.log(data)
   
    var total_vacs=data.total_vaccinations;
    console.log(total_vacs)
});

function getPlots(id) {
    d3.csv("Data/state_vaccinations.csv").then (data=>{
        console.log(data)
        
        var total_vacs=data.total_vaccinations;
        console.log(total_vacs)
        
        var fully_vaccinated = data.people_vaccinated;
        console.log(fully_vaccinated)
        
        var total_distr = data.total_distributed;
        console.log(total_distr)
        
        var people_vaccinated = data.people_fully_vaccinated_per_hundred;
        console.log(people_vaccinated)
        
        var doses_used=data.share_doses_used;
        console.log(doses_used)
        
        
        // //LAUREN BAR CHART TOP 10 STATES FULLY VACCINATED 
        
        var top_states = (data.total_vaccinations.slice(0,10)).reverse;
        
        
        //grab the otu data  //
        var top_states_data = top_states.map(d => "STATES" + d);
        console.log(`location: ${location}`)

        //BAR CHART //
        var state_labels =  data.total_vaccinations.slice(0,10);
        console.log(`state_labels: ${state_labels}`)
        var trace1 = {
            type: "bar",
            orientation: "h",
            x: state_name,
            y: fully_vaccinated,
        };
        // data variable //
        var data1 = [trace1];

        var layout1={
            title: "Top 10 States With Highest Number of People Fully Vaccinated", 
            yaxis:{
                tickmode:"linear",
            },
            margin: {
                r:75, 
                t:55,
                l:75,
                b:25
            }
        };
        Plotly.newPlot("bar", data1, layout1);

    });

};







//           //MELISSA BAR CHART NUMBER OF PEOPLE VACCINATED PER HUNDRED //////////
    
//     ///////DOMENIC GROUP BY CHART DOSES USED VZ DISTRIBUTED BY STATE/////
    
//     //////THOMAS MAP % VACCINATED PER STATE MARKER///////

//////DROP DOWN MENU///////

// Create an array of each state's numbers
var Alabama = Object.values(data.Alabama);
var Alaska = Object.values(data.Alaska);
var Arizona = Object.values(data.Arizona);

// Create an array of labels
var labels = Object.keys(data.Alabama);

// Display the default plot
function init() {
  var data = [{
    values: Alabama,
    labels: labels,
    type: "bar"
  }];

  var layout = {
    height: 600,
    width: 800
  };

  Plotly.newPlot("bar", data, layout);
}

// On change to the DOM, call getData()
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

init();


