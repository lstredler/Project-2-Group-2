var data = [
    {
      x: ['New Mexico', 'Wisconsin', 'Connecticut', 'Vermont',
          'Massachusetts', 'Washington', 'North Dakota',
          'Nevada', 'Minnesota', 'Kentucky'],
      y: [97.75, 95.34, 92.43, 92.15, 90.16, 89.74, 89.58,
          89.02, 88.81, 88.67],
      type: 'bar'
    }
  ];
  
  
  var layout = {
      title: "Top 10 Most Vaccinated States",
      xaxis: { title: "State" },
      yaxis: { title: "Percentage of Administered Vaccines" }
    };
  
    Plotly.newPlot("bar-plot", data, layout);