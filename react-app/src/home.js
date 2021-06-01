import { Link } from "react-router-dom";
import './home.css';
import {motion} from "framer-motion"
function Home(){
    const bgstyle ={
        textAlign: "left", color : "#FFFFFF", padding :"3em", margin :"3em",borderRadius :"20px", marginTop: "10em",
        backgroundColor : "rgba(0, 0, 0, 0.75)", height: "max-content"
    }
    return(
        <motion.div 
        initial={{y:-500}}
        animate={{y: -10}}
        style={bgstyle}>
                <motion.div
                animate={{fontSize :"80px"}} 
                >Find Your</motion.div> 
                <motion.div
                animate={{fontSize :"80px"}} 
                >Superhero Match</motion.div>
            <p >Discover the platform that lets you find your personality match among your favourite characters.<br></br>
                So what are you waiting for?
                Go ahead and give your first test!
            </p>
            <motion.div
            initial={{x:-1000}}
            animate={{x:-20}}
            whileHover={{scale :1.3}}
            transition={{delay : 0.5}}
            style={{textAlign : "center"}}><Link to ="/test"><button>Get started</button></Link>
            </motion.div>
        </motion.div>
    );
}
export default Home;