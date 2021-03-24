//reading in json data into a js file

// d3.json("samples.json").then(function(data){console.log(data);
//    });

// to extract wfreq from each volunteer in the json directory
// d3.json("samples.json").then(function(data){
//     wfreq = data.metadata.map(person => person.wfreq);
//     console.log(wfreq);
// });

// // now adding sort in descending order

// d3.json("samples.json").then(function(data){
//     wfreq = data.metadata.map(person =>
// person.wfreq).sort((a,b) => b - a);
//     console.log(wfreq);
// });

// lastly, removing null values
// d3.json("samples.json").then(
//     function(data){
        
//         wfreq = data.metadata.map(person => person.wfreq).sort((a,b) => b - a);
//         filteredWfreq = wfreq.filter(element => element != null);
        
//         console.log(filteredWfreq);
// });

// printing the metadata for the first person in the data set

d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key, value]) =>
      {console.log(key + ': ' + value);});
});