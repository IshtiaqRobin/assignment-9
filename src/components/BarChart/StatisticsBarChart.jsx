import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const StatisticsBarChart = () => {
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
            <BarChart
                width={500}
                height={300}
                data={total}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="total" fill="#8884d8" />
            </BarChart>
        </div>
    );
};

export default StatisticsBarChart;