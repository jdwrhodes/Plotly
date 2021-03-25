// The distribution somePointThatIsOnACircle == sqrt( x**2 + y**2 ) 
// The distribution somePointThatIsInsideACircle < sqrt( x**2 + y**2 )

// The distribution somePointThatIsOutsideACircle > sqrt( x**2 + y**2 )

var x = [];
var y = [];

var insideX = [];
var insideY = [];

var outsideX = [];
var outsideY = [];

var radius = 1;

var sampleSize = 10000;

for (var i = 0; i < sampleSize; i++ ){
    x.push(Math.random())
    y.push(Math.random())

    if( x[i] <= 0.5){
        insideX.push(x[i])
        insideY.push(y[i])
    }
    else{
        outsideX.push(x[i])
        outsideY.push(y[i])
    }
}

var estimate = insideX.length / x.length

var insideCircle = {
    x: insideX,
    y: insideY,
    type: 'scatter',
    name: "Tails"
}

var outsideCircle = {
    x: outsideX,
    y: outsideY,
    type: "scatter",
    name: "Heads"
}

var objectsToPlot = [insideCircle,outsideCircle];

var layout = {
    grid : {rows : 1 , columns: 2, pattern: 'independent'}
}

document.getElementById('estimateValue').innerHTML = "The estimate is:" + estimate;

Plotly.newPlot("piPlot",objectsToPlot);