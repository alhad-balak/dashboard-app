const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const errorHandler = require("./middleware/errorHandler");
const { downsampleLTTBMonthly, downsampleLTTBYearly } = require('./downSamplingAlgo');
const fetchCSVAndConvertToJSON = require('./fetchData');

dotenv.config();
const app = express();
app.use(cors());

//Fetching data from CSV file
const DataSet = fetchCSVAndConvertToJSON();
// Serve the downsampled data
const data1 = downsampleLTTBYearly(DataSet, 4);
const data2 = downsampleLTTBMonthly(DataSet, 1);

//Need to add error handling for downSampling and fetching data
app.get('/api/graph-data', (req, res) => {
    if (!DataSet) {
        res.status(404);
        throw new Error("Unable to fetch data from CSV file!");
    }
    if (!data1 || !data2) {
        res.status(500);
        throw new Error("Unable to perform downsampling!");
    }
    res.status(200).json({ month: data2, yearly: data1 });
});
app.use(errorHandler);


//Listening to port
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
