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
    
    return ( <div style={{backgroundColor : "rgba(0,0,0,0.75)", color:"white", width: "780px", margin: "2em", borderRadius :"20px", padding: "5%" }}>
        <h1 style={{color: "white", textAlign:"center"}}>{heading}</h1>
        <BarChart
          width={700}
          height={500}
          data={chart1}
          margin={{
            top: 0,
            right: 0,
            left: 60,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" orientation="left" stroke="#AAAF33" />
          <YAxis yAxisId="right" orientation="right" stroke="#0A775F" />
          <Tooltip />
            <Legend />
          <Bar yAxisId="left" dataKey="I" fill="#AAAF33" />
          <Bar yAxisId="right" dataKey="E" fill="#0A775F" />
          <Bar yAxisId="left" dataKey="N" fill="#AAAF33" />
          <Bar yAxisId="right" dataKey="S" fill="#0A775F" />
          <Bar yAxisId="left" dataKey="T" fill="#AAAF33" />
          <Bar yAxisId="right" dataKey="F" fill="#0A775F" />
          <Bar yAxisId="left" dataKey="J" fill="#AAAF33" />
          <Bar yAxisId="right" dataKey="P" fill="#0A775F" />
        </BarChart>
    </div> );
}
 
export default Totalcharts;
