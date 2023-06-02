# Belly_Button-Challenge


In this assignment, you will build an interactive dashboard to explore the Belly Button Biodiversity datasetLinks to an external site., which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.
    
    1.Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual
    2.Create a bubble chart that displays each sample.
    3.Display the sample metadata, i.e., an individual's demographic information.
    4.Display each key-value pair from the metadata JSON object somewhere on the page.
   

###Instructions
Complete the following steps:

1-Use the D3 library to read in samples.json from the URL https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json.

2-Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

    Use sample_values as the values for the bar chart.

    Use otu_ids as the labels for the bar chart.

    Use otu_labels as the hovertext for the chart.

![image](https://user-images.githubusercontent.com/45497824/229296783-fb05c4e9-1538-4802-9ed7-461efba83212.png)

3-Create a bubble chart that displays each sample.

    Use otu_ids for the x values.
    
    Use sample_values for the y values.

    Use sample_values for the marker size.

    Use otu_ids for the marker colors.

    Use otu_labels for the text values.
    
 ![image](https://user-images.githubusercontent.com/45497824/229296894-4100d8be-faa5-4935-b139-45cdfa84fc0b.png)

4-Display the sample metadata, i.e., an individual's demographic information.

5-Display each key-value pair from the metadata JSON object somewhere on the page.

![image](https://user-images.githubusercontent.com/45497824/229296943-515e730e-ac29-416e-981f-e211014cee7e.png)

6-Update all the plots when a new sample is selected. Additionally, you are welcome to create any layout that you would like for your dashboard.
  An example dashboard is shown as follows:
  
 ![image](https://user-images.githubusercontent.com/45497824/229296976-c33d50b4-08e5-4607-9598-575c34e1034d.png)

7-Deploy your app to a free static page hosting service, such as GitHub Pages. Submit the links to your deployment and your GitHub repo.
   Ensure that your repository    has regular commits and a thorough README.md file




















