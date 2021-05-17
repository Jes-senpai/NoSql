import Totalchart from "./chart components/totalchart"
import { useEffect,useState } from "react";
import axios from "axios";
import Totalpersonality from "./chart components/totalpersonality"
const Charts = () => {
    const [data,setData] =useState([])
    useEffect(()=>{
        axios.get("http://localhost:3002/aggregation")
        .then((result)=>{
			console.log(result.data);
            var val=data;
            val.push(result.data);
            setData(val);
            console.log(data);
		})
    },[data])
   
    return (
        
        <div>
        {/* {data.length===0 && refresh()} */}
        { data.length!==0 && 
        <>
        <div style={{marginBottom: "2em"}}><Totalchart data={data} indi={"Total"} heading={"Total"} /></div>
        <div style={{marginBottom: "2em"}}><Totalpersonality data={data[0]["data"]} heading={"Total"} /></div>
        <div style={{marginBottom: "2em"}}><Totalchart data={data} indi={"Marvel"} heading={"Marvel"} /></div>
        <div style={{marginBottom: "2em"}}><Totalpersonality data={data[0]["MarvelComics"]} heading={"Marvel"} /></div>
        <div style={{marginBottom: "2em"}}><Totalchart data={data} indi={"DC"} heading={"DC"}/></div>
        <div style={{marginBottom: "2em"}}><Totalpersonality data={data[0]["DCComics"]} heading={"DC"} /></div>
        </>}
        </div>
     )
}
 
export default Charts;
