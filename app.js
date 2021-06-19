//Use d3 library to read in samples data //
function getPlots(id) {
    d3.csv("Data/state_vaccinations.csv").then (vaccinations_data=>{
        console.log(vaccinations_data)
       
        var total_vacs=state_vaccinations.total_vaccinations;
        console.log(total_vacs)
        var fully_vaccinated = state_vaccinations.people_vaccinated;
        console.log(fully_vaccinated)
        var total_distr = state_vaccinations.total_distributed;
        console.log(total_distr)
        var people_vaccinated = state_vaccinations.people_fully_vaccinated_per_hundred;
        console.log(people_vaccinated)
        var doses_used=state_vaccinations.share_doses_used;
        console.log(doses_used)
        //var otu_labels =  result.otu_labels.slice(0,10);
        //console.log (otu_labels)
        
        //LAUREN BAR CHART TOP 10 STATES FULLY VACCINATED 
        // add top 10 OTUs constraint/specification //
        var top_states = (state_vaccinations.total_vaccinations.slice(0,10)).reverse;
        
        
        //grab the otu data  //
        var top_states_data = top_states.map(d => "STATES" + d);
        console.log(`location: ${location}`)

        //BAR CHART //
        var state_labels =  state_vaccinations.total_vaccinations.slice(0,10);
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







          //MELISSA BAR CHART NUMBER OF PEOPLE VACCINATED PER HUNDRED //////////
    
    ///////DOMENIC GROUP BY CHART DOSES USED VZ DISTRIBUTED BY STATE/////
    
    //////THOMAS MAP % VACCINATED PER STATE MARKER///////

