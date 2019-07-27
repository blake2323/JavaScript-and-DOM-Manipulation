// from data.js
var tableData = data;

// YOUR CODE HERE!


//Append table to webpage
var myTableBody = d3.select('tbody');

function populateTable(arrObj) {

    
    for (var i = 0; i < arrObj.length; i++) {

        //add rows
        var myRow = myTableBody.append("tr");

        // Loop 
        for (var key in arrObj[i]) {
            var myTd = myRow.append('td');
            myTd.text(arrObj[i][key]);
        }


    }

}

var filterButton = d3.select("#filter-btn");

filterButton.on("click", function() {
console.log("Hello world");
// capture user input, create a "research .filter" (javascript function, filter array)
// 
//var filterData = tableData.filter()

myTableBody.text("");

//populateTable(filterData)
});



populateTable(tableData);
