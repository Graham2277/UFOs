// import the data from data.js
const tableData = data;

// Reference the HTML table using d3 by creating tbody variable that will look for <tbody> tags
// tbody tag references the data in a table
var tbody = d3.select("tbody");

function buildTable(data) {
    // clear the table so you can run clean table data with function
    tbody.html("");
}

// forEach function being called on dataRow 
data.forEach((dataRow) => {
    let row = tbody.append("tr");
    Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
    );
});