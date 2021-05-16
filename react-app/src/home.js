import { Link } from "react-router-dom";

const Home = () => {
    const style={
        textDecoration : "none"
    }
    return ( 
        <div><Link to ="/test" style={style}><button>Get started</button></Link></div>
     );
}
 
export default Home;