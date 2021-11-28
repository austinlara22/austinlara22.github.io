d3.json('Commuting.json', function(err, rows){
      function unpack(rows, key) {
          return rows.map(function(row) { return row[key]; });
      }

      var data = [{
          type: 'choropleth',
          locationmode: 'geojson-id',
          locations: unpack(rows, 'fips'),
          geojson: "../data/Community Districts.geojson",
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
              thickness: 0.2
          },
          marker: {
              line:{
                  color: 'rgb(255,255,255)',
                  width: 2
              }
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
