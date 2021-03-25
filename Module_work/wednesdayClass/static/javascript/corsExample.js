d3.json('/static/cancerData/data.json').then( (data) => {
    var cancerData = {
        x: data.organ,
        y: data.survival,
        type : "box",
        name : "Cancer Data",
        boxpoints : "all"
    }

    var objectsToPlot = [cancerData]

    Plotly.newPlot("cancerPlot",objectsToPlot)

});