
function myFun(){
    console.log("hi");
}
    function csvConvert() {
        var csvString = "../gundata.csv";
        var json = [];
        var csvArray = csvString.split("\n");
        
        // Remove the column names from csvArray into csvColumns.
        // Also replace single quote with double quote (JSON needs double).
        var csvColumns = JSON
                .parse("[" + csvArray.shift().replace(/'/g, '"') + "]");
    
        csvArray.forEach(function(csvRowString) {
    
            var csvRow = csvRowString.split(",");
    
            // Here we work on a single row.
            // Create an object with all of the csvColumns as keys.
            jsonRow = new Object();
            for ( var colNum = 0; colNum < csvRow.length; colNum++) {
                // Remove beginning and ending quotes since stringify will add them.
                var colData = csvRow[colNum].replace(/^['"]|['"]$/g, "");
                jsonRow[csvColumns[colNum]] = colData;
            }
            json.push(jsonRow);
            console.log("yay")
        });
    
        return JSON.stringify(json);
    };

function myMethod(){
    d3.csv("gundata.csv", function(data){
        console.log(data);
    });
    
}