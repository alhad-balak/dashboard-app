import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

export default function Chart() {

    const [growthDataMonthly, setGrowthDataMonthly] = useState([]);
    const [growthDataYearly, setGrowthDataYearly] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5003/api/graph-data')
            .then(response => {
                setGrowthDataYearly(response.data.yearly);
                setGrowthDataMonthly(response.data.month);
            })
            .catch(error => {
                throw new Error('Error fetching graph data');
            });
    }, []);

    const chartData = {
        labels: growthDataYearly.map(data => new Date(data.Timestamp).toDateString().split(" ")[1] + " " + new Date(data.Timestamp).toDateString().split(" ")[3]),
        // labels: ['Jul 2016', ' Dec 2016', 'Apr 2017', 'Jul 2017', 'Jan 2018', 'Jun 2018'],
        datasets: [
            {
                id: 1,
                label: 'Profit Percentage',
                // data: [65, 59, 80, 81, 56, 55, 40],
                data: growthDataYearly.map(data => data.ProfitPercentage),
                fill: true,
                borderColor: 'rgb(37, 204, 37)',
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
        <div className='h-[90%] items-center w-full'>
            <Line type='area' data={chartData} options={options} />
        </div>
    </>);
}
