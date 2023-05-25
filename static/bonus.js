

//build the gauge chart with initial plot and function call in app.js
function buildGaugeChart(sample) {
    d3.json(url).then((data) => {
        let metadata = data.metadata;
        let value = metadata.filter(result => result.id == sample);
        let valueData = value[0];
        let wfreq = valueData.wfreq;
        console.log(wfreq);
        let data1 = [
            {
                domain: { x: [0, 1], y: [0, 1] },
                value: wfreq,
                title: { text: "Belly Button Washing Frequency" },
                type: "indicator",
                visible: true,
                mode: "gauge+number",
                gauge: {
                    axis: { range: [null, 9] },
                    bar: { color: "black" },
                    steps: [
                        { range: [0, 1], color: "red" },
                        { range: [1, 2], color: "orange" },
                        { range: [2, 3], color: "yellow" },
                        { range: [3, 4], color: "yellowgreen" },
                        { range: [4, 5], color: "green" },
                        { range: [5, 6], color: "blue" },
                        { range: [6, 7], color: "indigo" },
                        { range: [7, 8], color: "violet" },
                        { range: [8, 9], color: "purple" }
                    ]
                }
            }
        ];
        let layout = { width: 600, height: 500, margin: { t: 0, b: 0 } };
        Plotly.newPlot('gauge', data1, layout);
    });
}