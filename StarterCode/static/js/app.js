// from data.js
var tableData = data;

// YOUR CODE HERE!

// select statement 
jsbody = d3.select("jsbody")
console.log("hello")

// loop through table 
function showData(tableloop){ 
    jsbody.text("")
    tableloop.forEach(function(UFOsighting){
    thisdata = jsbody.append("thisdata")
    Object.entries(UFOsighting).forEach(function([key, value]){
        setdata = thisdata.append("td").text(value)	
    })
})}

showData(tableData)

console.log("hello2")


// Submit button
var submit = d3.select("#submit");

submit.on("click", function() {
    console.log("hello3")

  // Prevents page from refreshing
  d3.event.preventDefault();

  // Get raw HTML node
  var dateData = d3.select("#datetime");
  var cityData = d3.select("#city");
  var stateData = d3.select("#state");
  var countryData = d3.select("#country");
  var shapeData = d3.select("#shape");

  // Function for value property of element
  console.log(dateData.property("value"));
  console.log(cityData.property("value"));
  console.log(stateData.property("value"));
  console.log(countryData.property("value"));
  console.log(shapeData.property("value"));

  //Created a variabl so that if end user only completes certain filter criteria, funtion still works

 var filtered = tableData.filter(UFOsighting =>{
  return (UFOsighting.datetime===dateData.property("value") || !dateData.property("value") ) && 
            (UFOsighting.city===cityData.property("value") || !cityData.property("value")) &&
            (UFOsighting.state===stateData.property("value") || !stateData.property("value")) &&
            (UFOsighting.country===countryData.property("value") || !countryData.property("value")) &&
            (UFOsighting.shape===shapeData.property("value") || !shapeData.property("value"))
 })

 //run entries through showData function
 showData(filtered);


});

var filterData = d3.selectAll('.form-control');


function clearEntries() {
    filters = {};

    // created function to empty each field
    filterData._groups[0].forEach(entry => {
        if (entry.value != 0) {
            d3.select('#' + entry.id).node().value = "";
        }
    });
};

var clearButton = d3.select("#clear");
// Clear button on click clears fields
clearButton.on('click', function () {

    // Function that prevents page from refreshing everything 
    d3.event.preventDefault();
    // removes input fields
    clearEntries()
});



