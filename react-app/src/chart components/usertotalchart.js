import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from "recharts";
const UserTotalChart = ({data}) => {
    let chart1 = []
    let chart2 =[]
    for(let i =1;i<=10;i++){
      let val = data["Q"+i]
        let obj={}
        for(let j=0;j<val.length;j++){
          obj[val[j]["_id"]]=val[j]["count"]
        }
        obj["name"]= "Question"+i
        chart1.push(obj);
    }
    for(let i =11;i<=20;i++){
      let val = data["Q"+i];
        let obj={}
        for(let j=0;j<val.length;j++){
          obj[val[j]["_id"]]=val[j]["count"]
        }
        obj["name"]= "Question"+i
        chart2.push(obj);
    }
    return ( <div style={{ backgroundColor: "white"}}>
        <ResponsiveContainer width="80%" height={400}>
          <BarChart
            data={chart1}
            margin={{
              top: 20,
              right: 80,
              left: 50,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name"   >
            </XAxis>
            <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
            <Tooltip />
              <Legend />
            <Bar yAxisId="left" dataKey="Strongly Agree" fill="#8884d8"  />
            <Bar yAxisId="left" dataKey="Agree" fill="#82ca9d" />
            <Bar yAxisId="left" dataKey="Neutral" fill="#8884d8" />
            <Bar yAxisId="left" dataKey="Disagree" fill="#82ca9d" />
            <Bar yAxisId="left" dataKey="Strongly Disagree" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
        <ResponsiveContainer width="80%" height={400}>
          <BarChart
            data={chart2}
            margin={{
              top: 20,
              right: 80,
              left: 50,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name"   >
            </XAxis>
            <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
            <Tooltip />
              <Legend />
            <Bar yAxisId="left" dataKey="Strongly Agree" fill="#8884d8"  />
            <Bar yAxisId="left" dataKey="Agree" fill="#82ca9d" />
            <Bar yAxisId="left" dataKey="Neutral" fill="#8884d8" />
            <Bar yAxisId="left" dataKey="Disagree" fill="#82ca9d" />
            <Bar yAxisId="left" dataKey="Strongly Disagree" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
        
        {/* <BarChart
          width={800}
          height={500}
          data={chart3}
          margin={{
            top: 20,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
          <Tooltip />
            <Legend />
          <Bar yAxisId="left" dataKey="Strongly Agree" fill="#8884d8" />
          <Bar yAxisId="left" dataKey="Agree" fill="#82ca9d" />
          <Bar yAxisId="left" dataKey="Neutral" fill="#8884d8" />
          <Bar yAxisId="left" dataKey="Disagree" fill="#82ca9d" />
          <Bar yAxisId="left" dataKey="Strongly Disagree" fill="#8884d8" />
        </BarChart>
        <BarChart
          width={800}
          height={500}
          data={chart4}
          margin={{
            top: 20,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
          <Tooltip />
            <Legend />
          <Bar yAxisId="left" dataKey="Strongly Agree" fill="#8884d8" />
          <Bar yAxisId="left" dataKey="Agree" fill="#82ca9d" />
          <Bar yAxisId="left" dataKey="Neutral" fill="#8884d8" />
          <Bar yAxisId="left" dataKey="Disagree" fill="#82ca9d" />
          <Bar yAxisId="left" dataKey="Strongly Disagree" fill="#8884d8" />
        </BarChart> */}
    </div> );
}
 
export default UserTotalChart;

// {
//     name: 'Question1',
//     SA: data[0]["I_"+indi],
//     A: data[0]["E_"+indi],
//     N: data[0]["E_"+indi],
//     DA: data[0]["E_"+indi],
//     SDA: data[0]["E_"+indi],
//     amt: Math.min(data[0]["I_"+indi],data[0]["E_"+indi]),
// }

// [{
//     name: 'Question1',
//     SA: data[0]["I_"+indi],
//     A: data[0]["E_"+indi],
//     N: data[0]["E_"+indi],
//     DA: data[0]["E_"+indi],
//     SDA: data[0]["E_"+indi],
//     amt: Math.min(data[0]["I_"+indi],data[0]["E_"+indi]),
//   },
//   {
//     name: 'N vs S',
//     N: data[0]["N_"+indi],
//     S: data[0]["S_"+indi],
//     amt: Math.min(data[0]["N_"+indi],data[0]["S_"+indi]),
//   },
//   {
//     name: 'T vs F',
//     T: data[0]["T_"+indi],
//     F: data[0]["F_"+indi],
//     amt: Math.min(data[0]["T_"+indi],data[0]["F_"+indi]),
//   },
//   {
//     name: 'J vs P',
//     J: data[0]["J_"+indi],
//     P: data[0]["F_"+indi],
//     amt: Math.min(data[0]["J_"+indi],data[0]["F_"+indi]),
//   },
// ]