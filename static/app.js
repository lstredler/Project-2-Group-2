//Use d3 library to read in samples data //
function getPlots(data) {
    d3.csv("state_vaccinations.csv").then (data=>{
      console.log(data)
      var result=data.variables.filter(object=>object.data.toString()===data)[0];
      console.log(result)
     
      //Variables for State Names 
      var alabama = Object.values(data.alabama);
      console.log(alabama)
      var alaska = Object.values(data.alaska);
      console.log(alaska)
      var arizona = Object.values(data.arizona);
      console.log(arizona)
      var arkansas = Object.values(data.arkansas);
      console.log(arkansas)
      var california = Object.values(data.california);
      console.log(california)
      var colorado = Object.values(data.colorado);
      console.log(colorado)
      var connecticut = Object.values(data.connecticut);
      console.log(connecticut)
  
      //Total Number of Vaccines Administered  
      var total_vacs=data.total_vaccinations;
      console.log(total_vacs)
  
      //Total # of people who received at least 1 vaccine dose 
      var total_vacs = data.people_vaccinated;
      console.log(total_vacs)
  
      //Total Counts of Covid vaccine doses recorded as shipped AKA Distributed (DOMENIC
      var total_distr = data.total_distributed;
      console.log(total_distr)
  
       //Total vaccinated per 100 in the state out of population 
      var people_vaccinated_100 = data.people_fully_vaccinated_per_hundred;
      console.log(people_vaccinated_100)
  
        //share administered to distrubuted (DOMENIC)
      var doses_used=data.share_doses_used;
      console.log(doses_used)
  
      ////ORDER OF STATES VACCINATED///// 
      var state_rank = (data.people_vaccinated.slice(0,50)).reverse();
  
      //grab the state data  //
      var state_rank_chart = state_rank.map(d => "STATES" + d);
      console.log(`people_vaccinated: ${people_vaccinated}`)
  
      //BAR CHART TOP 10//
      var state_labels = data.total_vacs.slice(0,50);
      console.log(`data: ${data}`)
      var trace1 = {
        type: "bar",
        orientation: "h",
        x: location,
        y: state_rank,
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
  } 
  //     //MELISSA BAR CHART NUMBER OF PEOPLE VACCINATED PER HUNDRED //////////
      
  //     ///////DOMENIC GROUP BY CHART DOSES USED VZ DISTRIBUTED BY STATE/////
      
  //     //////THOMAS MAP % VACCINATED PER STATE MARKER///////
  
  //////DROP DOWN MENU///////
  
  // Create an array of each state's numbers
  //var alabama = Object.values(data.location.AlabamaAlabama);
  //var alaska = Object.values(data.locatio.Alaska);
  //var arizona = Object.values(data.location.Arizona);
  
  // Create an array of labels
  //var labels = Object.keys(data.Alabama);
  
  // Display the default plot
  
function getDemoInfo(state) {
  d3.js("state_vaccinations.js").then((data)=> {
    var data = data.metadata;
    console.log(metadata)
    var result = metadata.filter(meta => meta.state.toString() === id)[0];
    var demoInfo = d3.select("#state");
    demoInfo.html(" ");
    Object.entries(result).forEach((key) => {   
      demoInfo.append("h6").text(key[0]+ ": " + key[1]);
    });
  });
}

function optionChanged(state) {
    getPlots(state);
    getDemoInfo(state);
}

function init() {
    var dropdownMenu = d3.selectAll("#selDataset");

    d3.json("state_vaccinations.json").then((data)=> {
        console.log(data)
        data.names.forEach(function(name) {
            dropdownMenu.append("option").text(name).property("value");
        });

        getDemoInfo(data.names[0]);
        getPlots(data.names[0]);
    });
}
init();