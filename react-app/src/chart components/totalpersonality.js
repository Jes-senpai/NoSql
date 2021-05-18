import React from "react";
import { PieChart, Pie, Cell,LabelList } from "recharts";
const Totalpersonality = ({data, heading}) => {
    const chart = data;
    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042","#0088FE", "#00C49F", "#FFBB28", "#FF8042","#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
    return ( <div style={{backgroundColor :"white",}}>
        <h1 style={{color: "black"}}>{heading}</h1>
    <PieChart width={1000} height={700} margin={{
            top: 0,
            right: 50,
            left: 300,
            bottom: 0,
          }}>
        <Pie
            data={chart}
            cx={400}
            cy={300}
            innerRadius={100}
            outerRadius={260}
            paddingAngle={1}
            dataKey="count"
            label
        >
            <LabelList dataKey="_id" position="Inside" fontSize={12} />
            {chart.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} name={chart.type} />
            ))}
        </Pie>
      </PieChart>
    </div> 
    );
}
 
export default Totalpersonality;