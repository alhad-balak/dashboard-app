import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

export default function Chart() {

    const [growthData2, setGrowthData2] = useState([]);
    const [growthData3, setGrowthData3] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5003/api/graph-data')
            .then(response => {
                setGrowthData2(response.data.month);
                setGrowthData3(response.data.yearly);
                console.log(response.data.month)
                console.log(response.data.yearly)
            })
            .catch(error => {
                throw new Error('Error fetching graph data');
            });
    }, []);

    const chartData2 = {
        labels: growthData2.map(data => (new Date(data.Timestamp).getMonth() + " / " + (new Date(data.Timestamp).getFullYear()))),
        // labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Profit Percentage',
                // data: [65, 59, 80, 81, 56, 55, 40],
                data: growthData2.map(data => data.ProfitPercentage),
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
            },
        ],
    };
    const chartData3 = {
        // labels: growthData3.map(data => new Date(data.Timestamp).toDateString().split(" ")[1] + " " + new Date(data.Timestamp).toDateString().split(" ")[3]),
        labels: ['Jul 2016', ' Dec 2016', 'Apr 2017', 'Jul 2017', 'Jan 2018', 'Jun 2018'],
        datasets: [
            {
                label: 'Profit Percentage',
                // data: [65, 59, 80, 81, 56, 55, 40],
                data: growthData3.map(data => data.ProfitPercentage),
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
        elements: {
            line: {
                borderWidth: 3,
            },
        },
    };
    return (<>
        <Line data={chartData3} options={options} />
        {/* <Line data={chartData2} /> */}
    </>);
}
