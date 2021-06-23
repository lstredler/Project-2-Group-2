function getPlots(data) {
  d3.js("state_vaccinations.js").then (data=>{
    console.log(data)
  
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
    }

// On change to the DOM, call getData(
  d3.selectAll("#selDataset").on("change", getData);

  // Function called by DOM changes
  function getDemoInfo(id) {
    d3.json("samples.json").then((data)=> {
        var metadata = data.metadata;
        console.log(metadata)
        var result = metadata.filter(meta => meta.id.toString() === id)[0];
        var demoInfo = d3.select("#sample-metadata");
        demoInfo.html(" ");
        Object.entries(result).forEach((key) => {   
            demoInfo.append("h6").text(key[0]+ ": " + key[1]);    
        });
    });
}

function optionChanged(id) {
    getPlots(id);
    getDemoInfo(id);
}

function init() {
    var dropdownMenu = d3.selectAll("#selDataset");

    d3.json("samples.json").then((data)=> {
        console.log(data)
        data.names.forEach(function(name) {
            dropdownMenu.append("option").text(name).property("value");
        });

        getDemoInfo(data.names[0]);
        getPlots(data.names[0]);
    });
}
init();