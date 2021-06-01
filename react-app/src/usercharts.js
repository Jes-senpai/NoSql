import { useEffect,useState,useContext } from "react";
import axios from "axios";
import UserTotalChart from "./chart components/usertotalchart";
import Totalpersonality from "./chart components/totalpersonality"
import {PathContext} from './context';
const UserCharts = () => {
    const path= useContext(PathContext); 
    const [data,setData] =useState([])
    const [hasError, setHasError] = useState(true)
    useEffect(()=>{
        axios.get(path+"/user")
        .then((result)=>{
			console.log(result.data);
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
    console.log("render", data)
    return(
    <>
        {data && <div > 
            <UserTotalChart data={data[0]} /> 
            <Totalpersonality data={data[0]["type"]} /> 
            <Totalpersonality data={data[0]["category"]} /> 
        </div>}

    </> 
    )
}
 
export default UserCharts;