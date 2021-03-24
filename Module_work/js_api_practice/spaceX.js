const url = "https://api.spacexdata.com/v2/launchpads";

//d3.json(url).then(receivedData => console.log(receivedData));
// the code above is the actual api call. receivedData is an arbitrary name
// in js, this syntax allows the line to finish the api call
// "then" acts as a Promise, where js will finish the line of code before moving to the next.

//examples to access the above
//d3.json(url).then(receivedData => console.log(receivedData[0]));

//d3.json(url).then(receivedData => console.log(receivedData[0]));

d3.json(url).then(receivedData => console.log(receivedData[0].location.latitude));

