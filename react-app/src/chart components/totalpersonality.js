import React from "react";
import { PieChart, Pie, Cell,LabelList } from "recharts";
const Totalpersonality = ({data, heading}) => {
    const chart = data;
    const COLORS = ["#C11B8B","#CF4516","#E4A500","#AAAF33","#0A775F","#C11B8B","#CF4516","#E4A500","#AAAF33","#0A775F","#C11B8B","#CF4516","#E4A500","#AAAF33","#0A775F","#C11B8B","#CF4516","#E4A500","#AAAF33","#0A775F"];
    return ( <div style={{backgroundColor :"rgba(0,0,0,0.75)", color:"white", textAlign: "center", width: 800, margin : "2em", borderRadius : "20px", padding: "5%"}}>
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
            <Cell key={`cell-${index}`} stroke={"rgba(0,0,0,0.75)"} fill={COLORS[index % COLORS.length]}  name={chart.type} />
            ))}
        </Pie>
      </PieChart>
    </div> 
    );
}
 
export default Totalpersonality;