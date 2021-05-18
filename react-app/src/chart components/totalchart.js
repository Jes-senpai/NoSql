import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";
const Totalcharts = ({data,indi,heading}) => {
    let chart1 =[{
        name: 'I vs E',
        I: data[0]["I_"+indi],
        E: data[0]["E_"+indi],
        amt: Math.min(data[0]["I_"+indi],data[0]["E_"+indi]),
      },
      {
        name: 'N vs S',
        N: data[0]["N_"+indi],
        S: data[0]["S_"+indi],
        amt: Math.min(data[0]["N_"+indi],data[0]["S_"+indi]),
      },
      {
        name: 'T vs F',
        T: data[0]["T_"+indi],
        F: data[0]["F_"+indi],
        amt: Math.min(data[0]["T_"+indi],data[0]["F_"+indi]),
      },
      {
        name: 'J vs P',
        J: data[0]["J_"+indi],
        P: data[0]["F_"+indi],
        amt: Math.min(data[0]["J_"+indi],data[0]["F_"+indi]),
      },
]
    
    return ( <div style={{backgroundColor : "white", color:"black", }}>
        <h1 style={{color: "black"}}>{heading}</h1>
        <BarChart
          width={1000}
          height={500}
          data={chart1}
          margin={{
            top: 0,
            right: 0,
            left: 400,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
          <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
          <Tooltip />
            <Legend />
          <Bar yAxisId="left" dataKey="I" fill="#8884d8" />
          <Bar yAxisId="right" dataKey="E" fill="#82ca9d" />
          <Bar yAxisId="left" dataKey="N" fill="#8884d8" />
          <Bar yAxisId="right" dataKey="S" fill="#82ca9d" />
          <Bar yAxisId="left" dataKey="T" fill="#8884d8" />
          <Bar yAxisId="right" dataKey="F" fill="#82ca9d" />
          <Bar yAxisId="left" dataKey="J" fill="#8884d8" />
          <Bar yAxisId="right" dataKey="P" fill="#82ca9d" />
        </BarChart>
    </div> );
}
 
export default Totalcharts;
