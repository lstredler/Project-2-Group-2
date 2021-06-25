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
var trace1 = {
    x: state,
    y: vaxx_admin,
  };
  
  // Create the data array for the plot
  var data = [trace1];

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

var layout = {
    title: "Percentage of Vaccines Administered by State",
    xaxis: { title: "State" },
    yaxis: { title: "Percentage of Administered Vaccines" }
  };

  Plotly.newPlot("bar-plot", data, layout);
