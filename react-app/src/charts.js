import Totalchart from "./chart components/totalchart"
import { useEffect,useState,useContext } from "react";
import axios from "axios";
import Totalpersonality from "./chart components/totalpersonality"
import {PathContext} from './context';
const Charts = () => {
    const [data,setData] =useState([])
    const [hasError, setHasError] = useState(true)
    const path= useContext(PathContext); 
    
    useEffect(()=>{
        const headers =  { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        axios.get(path+"/character",headers)
        .then((result)=>{
			console.log(JSON.stringify(result));
            var val=data;
            val.push(result.data);
            setData(val);
            console.log(data);
            setHasError(false);
		})
    },[data,path])
    if(hasError){
        return <div style={{color : "white",height:"100vh", textAlign :"center"}}><h1>Loading....</h1></div>
    }
    return(
            <div style={{height : "100vh"}}> 
            <Totalchart data={data} indi={"Total"} heading={"Total"} />
            <Totalpersonality data={data[0]["data"]} heading={"Total"} />
            <Totalchart data={data} indi={"Marvel"} heading={"Marvel"} />
            <Totalpersonality data={data[0]["MarvelComics"]} heading={"Marvel"} />
            <Totalchart data={data} indi={"DC"} heading={"DC"}/>
            <Totalpersonality data={data[0]["DCComics"]} heading={"DC"} /> 
        </div>
    )
}
 
export default Charts;
