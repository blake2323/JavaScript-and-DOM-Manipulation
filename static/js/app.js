// from data.js
var tableData = data;

// Append table to webpage
var myTableBody = d3.select('tbody');

// Define function that creates table based on input
function populateTable(arrObj) {

    for (var i = 0; i < arrObj.length; i++) {

        //add rows
        var myRow = myTableBody.append("tr");

        // Add elements for each row;  
        for (var key in arrObj[i]) {
            var myTd = myRow.append('td');
            myTd.text(arrObj[i][key]);
        }

    }

}

// button that user clicks after entering "datetime"
var filterButton = d3.select("#filter-btn");


// Parse and populate new table if user enters datetime and clicks button 'Filter Table'
filterButton.on("click", function () {

    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

    // Display user input in console
    console.log(inputValue);

    // Define object such that all members ('each event') have datetime equivalent to user's input
    var filteredData = tableData.filter(event => event.datetime === inputValue);

    // Display updated table in console
    console.log(filteredData);

    //Clear table output on screen of webpage
    myTableBody.text("");

    // populate updated filteredData table 
    populateTable(filteredData)
});


// populate all elements of table from data.js
populateTable(tableData);
