import Totalchart from "./chart components/totalchart"
import { useEffect,useState } from "react";
import axios from "axios";
import Totalpersonality from "./chart components/totalpersonality"

const Charts = () => {
    const [data,setData] =useState([])
    const [hasError, setHasError] = useState(true)
    
    useEffect(()=>{
        const headers =  { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        axios.get("http://localhost:3002/character",headers)
        .then((result)=>{
			console.log(JSON.stringify(result));
            var val=data;
            val.push(result.data);
            setData(val);
            console.log(data);
            setHasError(false);
		})
    },[data])
    if(hasError){
        return <div style={{backgroundColor: "white", height:"100vh"}}>Loading....</div>
    }
    return(
        <div style={{backgroundColor: "white", height:"100vh", marginTop : "-1.3em"}}> 
            <div><Totalchart data={data} indi={"Total"} heading={"Total"} /></div>
            <div><Totalpersonality data={data[0]["data"]} heading={"Total"} /></div>
            <div><Totalchart data={data} indi={"Marvel"} heading={"Marvel"} /></div>
            <div><Totalpersonality data={data[0]["MarvelComics"]} heading={"Marvel"} /></div>
            <div><Totalchart data={data} indi={"DC"} heading={"DC"}/></div>
            <div><Totalpersonality data={data[0]["DCComics"]} heading={"DC"} /></div> 
        </div>
    )
}
 
export default Charts;
