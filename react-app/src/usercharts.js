import { useEffect,useState } from "react";
import axios from "axios";
import UserTotalChart from "./chart components/usertotalchart";
import Totalpersonality from "./chart components/totalpersonality"
const UserCharts = () => {
    const [data,setData] =useState([])
    const [hasError, setHasError] = useState(true)
    useEffect(()=>{
        axios.get("http://localhost:3002/user")
        .then((result)=>{
			console.log(result.data);
            var val=data;
            val.push(result.data);
            setData(val);
            console.log(data);
            setHasError(false);
		})
    },[data])
    if(hasError){
        return <>Loading....</>
    }
    console.log("render", data)
    return(
    <>
        {data && <div style={{backgroundColor : "white"}}> 
            <UserTotalChart data={data[0]} /> 
            <Totalpersonality data={data[0]["type"]} /> 
            <Totalpersonality data={data[0]["category"]} /> 
        </div>}

    </> 
    )
}
 
export default UserCharts;