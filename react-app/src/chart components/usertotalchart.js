import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
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
    return ( <div style={{backgroundColor : "black", color:"black", width: "1050px", margin: "2em", borderRadius :"20px" }}>
          <BarChart
           width={1000}
           height={500}
            data={chart1}
            margin={{
              top: 20,
              right: 0,
              left: 10,
              bottom: 20,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name"   >
            </XAxis>
            <YAxis yAxisId="left" orientation="left" stroke="white" />
            <Tooltip />
              <Legend />
            <Bar yAxisId="left" dataKey="Strongly Agree" fill="#8D0C0C"  />
            <Bar yAxisId="left" dataKey="Agree" fill="#8D690C" />
            <Bar yAxisId="left" dataKey="Neutral" fill="#216828" />
            <Bar yAxisId="left" dataKey="Disagree" fill="#7A1C60" />
            <Bar yAxisId="left" dataKey="Strongly Disagree" fill="#194397" />
          </BarChart>
          <BarChart
          width={1000}
          height={500}
           data={chart2}
           margin={{
             top: 50,
             right: 0,
             left: 10,
             bottom: 20,
           }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name"   >
            </XAxis>
            <YAxis yAxisId="left" orientation="left" stroke="white" />
            <Tooltip />
              <Legend />
            <Bar yAxisId="left" dataKey="Strongly Agree" fill="#8D0C0C"  />
            <Bar yAxisId="left" dataKey="Agree" fill="#8D690C" />
            <Bar yAxisId="left" dataKey="Neutral" fill="#216828" />
            <Bar yAxisId="left" dataKey="Disagree" fill="#7A1C60" />
            <Bar yAxisId="left" dataKey="Strongly Disagree" fill="#194397" />
          </BarChart>
    </div> );
}
 
export default UserTotalChart;