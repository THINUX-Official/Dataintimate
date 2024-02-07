import React from 'react';
import {Doughnut} from 'react-chartjs-2';

export const DoughnutChart = () => {

    const data = {
        labels: ['Direct', 'Social', 'Referral'],
        datasets: [
            {
                label: 'Traffic Sources',
                data: [300, 50, 100], // Sample data for the three elements
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'], // Custom colors for each element
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'], // Hover colors
            },
        ],
    };
    return <Doughnut data={data}/>;
};