const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";



functionbuildMetadata(sample) {
  d3.json(url,callback).then((data) =>{    
  var metadata = data.metadata;
  // Filter the data for the object with the desired sample number
  var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
  var result = resultArray[0]; 
    
    // Use d3 to select the panel with id of `#sample-metadata`
  var PANEL = d3.select("#sample-metadata");   

    // Use `.html("") to clear any existing metadata
    PANEL.html("");   

    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
    Object.entries(result).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
    }); 
    // BONUS: Build the Gauge Chart
    buildGauge(data.WFREQ);   
  });
}




// Initialize the dashboard
init();

