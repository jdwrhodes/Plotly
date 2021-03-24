// //Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);
// // for the newPlot() syntax, you put the id name first, then the values are next within an array

// Plotly.newPlot("plot", [{x: [1, 12, 33], y: [11, 20, 5]}]);

// var trace = {
//     x: ['burrito', 'pizza', 'chicken'],
//     y: [10, 18, 5],
//     type: 'bar'
// };

// var layout = {
//     title: 'Luncheon Survey',
//     xaxis: {title: 'Food Option'},
//     yaxis: {title: 'Number of Respondents'}
// };

// Plotly.newPlot('plotArea', [trace], layout); //the bar graph info is given as a variable within an array

// var drink_data = {
//     x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type: 'bar'
// };

// var drink_layout = {
//     title: "'Bar' Chart",
//     xaxis: {title: 'Drinks'},
//     yaxis: {title: '% of Drinks Ordered'}
// };

// Plotly.newPlot('drinkBar', [drink_data], drink_layout);

// var pie = {

// }

// var drink_pie = {
//     labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
//        "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type: 'pie'
//   };
//   //pie charts use 'labels' and 'values' instead of X and Y axis

//   var pie_data = [drink_pie];
//   var pie_layout = {
//     title: "'Pie' Chart",
//   };
//   Plotly.newPlot("drinkPie", pie_data, pie_layout);

//   // Scatter plot
//   var scatter_data = {
//     x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
//     "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     mode: 'markers',
//     type: 'scatter'
//   };

//   var scatter_layout = {
//     title: "Scatter Chart",
//     xaxis: {title: 'Drinks'},
//     yaxis: {title: '% of Drinks Ordered'}
// };

//   Plotly.newPlot('drinkScatter', [scatter_data], scatter_layout);

// var numbers = [1,2,3,4,5]

// var doubled = numbers.map(function(num){
//   return num * 2;
// });

// //console.log(doubled);

// var triple = numbers.map(x => x ** 3); //same as above except it's a fat arrow function (remember, similar to a python lambda function)

// console.log(triple);

// var words = ['cats', 'dogs', 'aliens', 'mice']

// var caps = words.map( i => i.toUpperCase());

// console.log(caps);

// var arrowNum = numbers.map(i => i + 5);

// console.log(arrowNum);

// var cities = [
//   {
//     "Rank": 1,
//     "City": "San Antonio ",
//     "State": "Texas",
//     "Increase_from_2016": "24208",
//     "population": "1511946"
//   },
//   {
//     "Rank": 2,
//     "City": "Phoenix ",
//     "State": "Arizona",
//     "Increase_from_2016": "24036",
//     "population": "1626078"
//   },
//   {
//     "Rank": 3,
//     "City": "Dallas",
//     "State": "Texas",
//     "Increase_from_2016": "18935",
//     "population": "1341075"
//   }
// ];

// // var cityNames = cities.map(i => i.population);

// // console.log(cityNames);

// var numbers = [1,2,3,4,5];

// var larger = numbers.filter(function(num){
//     return num > 1;
// });

// console.log(larger);

// //fat arrow
// var numbers = [1,2,3,4,5];

// var larger = numbers.filter(i => i > 1);

// console.log(larger);

// var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];

// var sWords = words.filter(i => i[0] === 's');

// console.log(sWords);

//using sort

// var familyAge = [3,2,39,37,9];
// var sortedAge = familyAge.sort((a,b) => a - b);
// console.log(sortedAge);

//Slice

var integers = [0,1,2,3,4,5]
var slice1 = integers.slice(0,2); //this only returns the first 2 elements of the array

console.log(slice1);

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];

var slice2 = words.slice(-1);

console.log(slice2);