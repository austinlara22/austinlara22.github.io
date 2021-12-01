d3.json('https://austinlara22.github.io/data/Commuting.json', function(err, rows){
      function unpack(rows, key) {
          return rows.map(function(row) { return row[key]; });
      }


var trace = {
    x: unpack(rows,"data"),
    type: 'histogram',
  };
var data = [trace];
Plotly.newPlot('myDiv_01', data);
});
