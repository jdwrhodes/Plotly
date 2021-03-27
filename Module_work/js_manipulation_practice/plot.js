// Now take a moment to plan our next steps. We will need to:

// Sort the cities in descending order of population growth.
// Select only the top five cities in terms of growth.
// Create separate arrays for the city names and their population growths.
// Use Plotly to create a bar chart with these arrays.

// //console.log(cityGrowths);

var sortedCities = cityGrowths.sort((a, b) => a.Increase_from_2016 - b.Increase_from_2016).reverse();

var topFiveCities = sortedCities.slice(0, 5);

var topFiveCityNames = topFiveCities.map(city => city.City);

var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016)); //parseInt turns the array of numbers from strings into ints

var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: 'bar'
};
var data = [trace];

var layout = {
    title: 'Most Rapidly Growing Cities',
    xaxis: {title: 'City'},
    yaxis: {title: 'Population Growth, 2016-2017'}
};

Plotly.newPlot('bar-plot', data, layout);

var sortedPopCities = cityGrowths.sort((a,b) => a.population - b.population).reverse();

var topSevenCities = sortedPopCities.slice(0, 7);

var topSevenCityNames = topSevenCities.map(city => city.City);

var topSevenCityPop = topSevenCities.map(city => parseInt(city.population)); //parseInt turns the array of numbers from strings into ints

var tracePop = {
    x: topSevenCityNames,
    y: topSevenCityPop,
    type: 'bar'
};
var dataPop = [tracePop];

var layoutPop = {
    title: 'Most Populous Cities',
    xaxis: {title: 'City'},
    yaxis: {title: 'Population'}
};

Plotly.newPlot('pop-plot', dataPop, layoutPop);

console.log('hello');