let tbody = d3.select("tbody");

function table(data) {
  tbody.html("");

  data.forEach((drow) => {
    let row = tbody.append("tr");
    Object.values(drow).forEach((val) => {
      let ufoInfo = row.append("td");
        ufoInfo.text(val);
      }
    );
  });
}


// Get references to the elements of the DOM
var $tbody = document.querySelector("tbody");
var $dateTimeInput = document.querySelector("#date_time");
var $cityInput = document.querySelector("#city");
var $stateInput = document.querySelector("#state");
var $countryInput = document.querySelector("#country");
var $shapeInput = document.querySelector("#shape");
var $searchBtn = document.querySelector("#search");
var $recordCounter = document.querySelector("#recordCounter");
var $pages = document.querySelector("#pages");
var $loadBtn = document.querySelector("#load");
var $nextBtn = document.querySelector("#next");
var $prevBtn = document.querySelector("#prev");

// Add event listeners
$searchBtn.addEventListener("click", handleSearchButtonClick);

// Initialize global variables
var filteredData = dataSet;
var count = 0;


// Search
function handleSearchButtonClick() {
    var filterDate = $dateTimeInput.value.trim();
    var filterCity = $cityInput.value.trim().toLowerCase();
    var filterState = $stateInput.value.trim().toLowerCase();
    var filterCountry = $countryInput.value.trim().toLowerCase();
    var filterShape = $shapeInput.value.trim().toLowerCase();

    if (filterDate != "") {
        filteredData = filteredData.filter(function (date) {
        var dataDate = date.datetime;
        return dataDate === filterDate;
    });

    }

    if (filterCity != "") {
        filteredData = filteredData.filter(function (city) {
        var dataCity = city.city;
        return dataCity === filterCity;
    });
    }

    if (filterState != "") {
        filteredData = filteredData.filter(function (state) {
            var dataState = state.state;
            return dataState === filterState;
        });
    }

    if (filterCountry != "") {
        filteredData = filteredData.filter(function (country) {
            var dataCountry = country.country;
            return dataCountry === filterCountry;
        });
    }

    if (filterShape != "") {
        filteredData = filteredData.filter(function (shape) {
            var dataShape = shape.shape;
            return dataShape === filterShape;
        });
    }

    renderTable();
}

