//1234 I DECLARE A THUMB WAR
var tableData = data;
var tbody = d3.select("tbody");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]
var resetbtn = d3.select("#reset");

// Do the On form submit stuff
var submit = d3.select("#submit");

submit.on("click", function () {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    tbody.html("");

    
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    console.log(inputValue);

    // BRITA PITCHER FILTERS ON SALE AT TARGET
    var filteredData = data.filter(sighting => sighting.datetime === inputValue);

    tbody.html("");

    // check if there's water in the brita pitcher
    if (filteredData.length !== 0) {
        console.log(filteredData);

        //pour that stuff into a glass
        filteredData.forEach(sighting => {
            var row = tbody.append("tr");
            columns.forEach(column => row.append("td").text(sighting[column])
            )
        })
    }
    else if (filteredData.length === 0) {
        alert("Put your tin foil hat back on, buddy....nobody saw anything on that date...or maybe your uncle just had one too many yuenglings....");
    }

});


resetbtn.on("click", () => {
    tbody.html("");
    console.log("Table reset")
  })