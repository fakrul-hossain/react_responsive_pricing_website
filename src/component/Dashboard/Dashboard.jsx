import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Dashboard = () => {
    const students = [
        { id: 1, name: "John", math: 85, physics: 90, chemistry: 80 },
        { id: 2, name: "Emily", math: 92, physics: 87, chemistry: 95 },
        { id: 3, name: "David", math: 78, physics: 83, chemistry: 88 },
        { id: 4, name: "Sarah", math: 80, physics: 91, chemistry: 87 },
        { id: 5, name: "Michael", math: 87, physics: 89, chemistry: 92 },
        { id: 6, name: "Emma", math: 95, physics: 92, chemistry: 96 },
        { id: 7, name: "Daniel", math: 82, physics: 85, chemistry: 80 },
        { id: 8, name: "Olivia", math: 90, physics: 89, chemistry: 94 },
        { id: 9, name: "William", math: 75, physics: 81, chemistry: 83 },
        { id: 10, name: "Sophia", math: 94, physics: 97, chemistry: 98 },
        { id: 11, name: "Ava", math: 85, physics: 88, chemistry: 91 },
        { id: 12, name: "Ethan", math: 91, physics: 92, chemistry: 85 }
      ];
      
    return (
        <div width="100%" height="100%">
            <h1 className="mt-6 text-center font-bold text-3xl text-green-500">Dashboard</h1>
            <div className="mx-auto mt-5 dark:bg-slate-800 shadow-2xl">
            <LineChart
            width={1000}
            height={700}
            data={students}
            >
              <Line stroke="#37CDBE" dataKey="physics"></Line>
              <Line stroke="#F000B8" dataKey="math"></Line>
              <Line stroke="#570DF8" dataKey="chemistry"></Line>
              <XAxis></XAxis>
              <YAxis></YAxis>
              <Tooltip></Tooltip>
            </LineChart>
            </div>
        </div>
    );
};

export default Dashboard;