import React from "react";
import { PieChart, Pie, Cell,LabelList } from "recharts";
const Totalpersonality = ({data, heading}) => {
    const chart = data;
    const COLORS = ["#8D0C0C","#8D690C","#216828","#7A1C60","#194397","#8D0C0C","#8D690C","#216828","#7A1C60","#194397","#8D0C0C","#8D690C","#216828","#7A1C60","#194397","#8D0C0C","#8D690C","#216828","#7A1C60","#194397"];
    return ( <div style={{backgroundColor :"black", color:"white", textAlign: "center", width: 800, margin : "2em", borderRadius : "20px"}}>
        <h1 style={{color: "white"}}>{heading}</h1>
    <PieChart width={700} height={700} margin={{
            top: 0,
            right: 0,
            left: 0,
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
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke={"black"} name={chart.type} />
            ))}
        </Pie>
      </PieChart>
    </div> 
    );
}
 
export default Totalpersonality;