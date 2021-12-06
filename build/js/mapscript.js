let data;
let buttons = Array.from(document.getElementsByClassName("dataset"));
console.log(buttons)
buttons.forEach(function(el) {
  if(el.checked == true){
    data = el.value + ".json"
    d3.json('https://austinlara22.github.io/data/'+ data, function(err, rows){
          function unpack(rows, key) {
              return rows.map(function(row) { return row[key]; });
          }

          var data = [{
              type: 'choropleth',
              locationmode: 'geojson-id',
              locations: unpack(rows, "fips"),
              featureidkey: "properties.boro_cd",
              geojson: "https://austinlara22.github.io/data/Community Districts.geojson",
              z: unpack(rows, 'data'),
              text: unpack(rows, 'location'),
              zmin: 0,
              zmax: 0.4,
              colorscale: [
                  [0, 'rgb(242,240,247)'], [0.2, 'rgb(218,218,235)'],
                  [0.4, 'rgb(188,189,220)'], [0.6, 'rgb(158,154,200)'],
                  [0.8, 'rgb(117,107,177)'], [1, 'rgb(84,39,143)']
              ],
              colorbar: {
                  title: 'Percent',
                  thickness: 15
              }
          }];


          var layout = {
              title: 'Perecent of Population with commutes to work over 1 hour',
              geo:{
                  fitbounds: "geojson",
              }
          };

          Plotly.newPlot("myDiv", data, layout, {showLink: false});
    });

  }
});

let titleNames = ["Median household income by neighborhood",
                  "Percent of teens ages 16 to 24 not in school or working",
                  "Percent of people who earned a bachelor's degree of higher",
                  "Percent of adults to rate their housing as fair or poor",
                  "The Variability of the Distribution of Income by Neighborhood",
                  "Life Expectancy by Neighborhood",
                  "Percent of population with commutes to work over 1 hour",
                  "Mean Score for Math Tests by Neighborhood",
                  "Mean Score for Reading Tests by Neighborhood",
                  "Unemployment Rate by Neighborhood"
                ];
let colorNames =["Income",
                 "Proportion",
                 "Proportion",
                 "Proportion",
                 "Variability",
                 "Age",
                 "Proportion",
                 "Score",
                 "Score",
                 "Proportion"
                ];
let zMins =     [20000,
                 0.03,
                 0.11,
                 0.01,
                 3.5,
                 75,
                 0,
                 585,
                 594,
                 0.01
                ];
let zMaxes =    [170000,
                 0.25,
                 0.83,
                 0.55,
                 11,
                 88,
                 0.4,
                 615,
                 622,
                 0.12
                ];
buttons.forEach(function(el, index) {

  el.addEventListener('click', function(){
    data = el.value + ".json"
    d3.json('https://austinlara22.github.io/data/'+ data, function(err, rows){
          function unpack(rows, key) {
              return rows.map(function(row) { return row[key]; });
          }

          var data = [{
              type: 'choropleth',
              locationmode: 'geojson-id',
              locations: unpack(rows, "fips"),
              featureidkey: "properties.boro_cd",
              geojson: "https://austinlara22.github.io/data/Community Districts.geojson",
              z: unpack(rows, 'data'),
              text: unpack(rows, 'location'),
              zmin: zMins[index],
              zmax: zMaxes[index],
              colorscale: [
                  [0, 'rgb(242,240,247)'], [0.2, 'rgb(218,218,235)'],
                  [0.4, 'rgb(188,189,220)'], [0.6, 'rgb(158,154,200)'],
                  [0.8, 'rgb(117,107,177)'], [1, 'rgb(84,39,143)']
              ],
              colorbar: {
                  title: colorNames[index],
                  thickness: 15
              }
          }];


          var layout = {
              title: titleNames[index],
              geo:{
                  fitbounds: "geojson",
              }
          };
          Plotly.react("myDiv", data, layout, {showLink: false});
    });
  })
});
