import React from 'react';
import StatisticsLineChart from '../LineChart/StatisticsLineChart';
import StatisticsPieChart from '../StatisticsPieChart/StatisticsBarChart';

const Statistics = () => {
    return (
        <div className='flex mx-auto'>
            <div>
                <StatisticsLineChart></StatisticsLineChart>
            </div>
            <div>
                <StatisticsPieChart></StatisticsPieChart>
            </div>


        </div>
    );
};

export default Statistics;