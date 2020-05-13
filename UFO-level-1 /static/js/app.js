// from data.js
var tableData = data;

// Assess data
console.log(data);

var button=d3.select("#filter-btn")

//Define event handler

button.on("click", function(){
    // Prevent the page from refreshing
    d3.event.preventDefault();

    var tbody = d3.select("tbody")
    var rows=tbody.append("tr");
    

    //Extract input element
    var element_entered = d3.select("#datetime");
    //Extract input date
    var input_date = element_entered.property("value");
    var input_date1=input_date.toString()
    console.log(input_date1);


    //Filter data
     var filtered_data=data.filter(data=>data.datetime===input_date1);
     console.log(filtered_data);

     //Update data
     filtered_data.forEach(function(signting_stats){

        console.log(signting_stats);
        var row = tbody.append("tr");
    
        Object.entries(signting_stats).forEach(function([key, value]){
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
        });
    
    });

});



