import { Link } from "react-router-dom";
import './home.css';
/*const Home = () => {
    return ( 
        <div className='bod'>
            <div><Link to ="/test"><button>Get started</button></Link></div>
        </div>
        
     );
}
export default Home;*/


function Home(){
    return(
        <div className='bod'>
            <div><Link to ="/test"><button>Get started</button></Link></div>
        </div>
    );
}
export default Home;