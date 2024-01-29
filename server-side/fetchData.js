const fs = require('fs');
const Papa = require('papaparse');
var DataSet = []



function fetchCSVAndConvertToJSON() {
    try {
        // Reading the CSV file
        const csvData = fs.readFileSync('./dataSetFile/dataset.csv', 'utf8');
        // Parsing CSV data to JSON
        Papa.parse(csvData, {
            header: true,
            skipEmptyLines: true,
            complete: (results) => {
                console.log('CSV data has been successfully converted to JSON!');
                DataSet = results.data;
            },
            error: (error) => {
                console.error('An error occurred during parsing:', error);
            }
        });
        return DataSet;
    } catch (error) {
        throw new Error('An error occurred:', error);
    }
}

;
module.exports = fetchCSVAndConvertToJSON;