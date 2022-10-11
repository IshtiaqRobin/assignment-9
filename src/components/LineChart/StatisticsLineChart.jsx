import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ReferenceLine
} from 'recharts';

const StatisticsLineChart = () => {
    const [total, setTotal] = useState([]);
    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/quiz')
            .then(data => {
                const quesLoaded = data.data.data;
                const quesData = quesLoaded.map(chart => {
                    const totals = chart.total;

                    const singleQues = {
                        name: chart.name,
                        total: totals
                    }
                    return singleQues
                })
                setTotal(quesData)
            });
    }, [])
    return (
        <div>
            <LineChart
                width={400}
                height={300}
                data={total}
                margin={{
                    top: 20,
                    right: 50,
                    left: 10,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <ReferenceLine x="Page C" stroke="red" label="Max PV PAGE" />
                <ReferenceLine y={9800} label="Max" stroke="red" />
                <Line type="monotone" dataKey="total" stroke="#8884d8" />\
            </LineChart>

        </div>
    );
};

export default StatisticsLineChart;