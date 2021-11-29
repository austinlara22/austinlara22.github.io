const fs = require('fs');

// work for Commuting.csv, education_attainment.csv, and median income.csv

let coolfilesnames = ["Commuting", "Educational_Attainment", "Median_Incomes"];
let coolfilesDistiction = ["Travel Time", "Education Level", "Household Type"];
for(let i = 0; i < 3; i++){
  let fileDATA = [];

  let file_csv = fs.readFileSync(coolfilesnames[i]+'.csv', 'utf8');

  let filedata = file_csv.split("\n");

  filedata.forEach(function(line) {
    let line_info = line.split(',');
    let linedata = {};
    linedata['location'] = line_info[0];
    linedata[coolfilesDistiction[i]] = line_info[1]
    linedata['year'] = line_info[2];
    linedata['data format'] = line_info[3];
    linedata['data'] = line_info[4];
    linedata['fips'] = line_info[5];
    linedata['Rank'] = line_info[6];
    linedata['Z-score'] = line_info[7].substring(0,line_info[7].length -1);

    fileDATA.push(linedata);
  });

  fs.writeFileSync(coolfilesnames[i] + ".json", JSON.stringify(fileDATA), 'utf8');
}


// work for the rest of them, listed in the object below
let filenames = {}
filenames["disYouth"] = "Disconnected_Youth";
filenames["housing"] = "Fair_to_Poor_Housing";
filenames["incDivs"] = "Income_Diversity_Ratio";
filenames["life"] = "Life_Expectancy";
filenames["math"] = "Math_Test_Scores";
filenames["reading"] = "Reading_Test_Scores";
filenames["unemploy"] = "Unemployment_Rate";

for (let i in filenames){
let fileDATA = [];

let file_csv = fs.readFileSync(filenames[i]+'.csv', 'utf8');

let filedata = file_csv.split("\n");

filedata.forEach(function(line) {
  let line_info = line.split(',');
  let linedata = {};
  linedata['location'] = line_info[0];
  linedata['year'] = line_info[1];
  linedata['data format'] = line_info[2];
  linedata['data'] = line_info[3];
  linedata['fips'] = line_info[4]
  linedata['Rank'] = line_info[5];
  linedata['Z-score'] = line_info[6].substring(0,line_info[6].length -1);

  fileDATA.push(linedata);
});

fs.writeFileSync(filenames[i] + ".json", JSON.stringify(fileDATA), 'utf8');
}
