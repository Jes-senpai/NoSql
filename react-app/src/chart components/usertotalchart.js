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
    return ( <div style={{backgroundColor : "rgba(0,0,0,0.75)", color:"white", width: "1050px", margin: "2em", borderRadius :"20px", padding: "5%" }}>
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
            <Bar yAxisId="left" dataKey="Strongly Agree" fill="#C11B8B"  />
            <Bar yAxisId="left" dataKey="Agree" fill="#CF4516" />
            <Bar yAxisId="left" dataKey="Neutral" fill="#E4A500" />
            <Bar yAxisId="left" dataKey="Disagree" fill="#AAAF33" />
            <Bar yAxisId="left" dataKey="Strongly Disagree" fill="#0A775F" />
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
            <Bar yAxisId="left" dataKey="Strongly Agree" fill="#C11B8B"  />
            <Bar yAxisId="left" dataKey="Agree" fill="#CF4516" />
            <Bar yAxisId="left" dataKey="Neutral" fill="#E4A500" />
            <Bar yAxisId="left" dataKey="Disagree" fill="#AAAF33" />
            <Bar yAxisId="left" dataKey="Strongly Disagree" fill="#0A775F" />
          </BarChart>
    </div> );
}
 
export default UserTotalChart;