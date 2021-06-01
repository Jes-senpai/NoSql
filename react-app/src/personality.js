import './index.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    cont: {
      flexGrow: 2,
    },
    paper: {
      height: 140,
      width: 100,
    },
    cards: {
      padding: theme.spacing(5),
    },
    img:{
      padding: "50px 50px 45px 50px",
    },
    cardBG:{
        backgroundColor: "rgba(0,0,0,0.75)",
    },
    names:{
      color: "white",
      padding:"0px 50px 50px 50px",
      fontSize: "25px"
    },
    
  }));
const Personality = ({data}) => {
    // const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();
    return ( 
        <div>
            {console.log(data)}
            <div>
            
                 <Grid  container className={classes.bodyDiv} align="center">  
                {data && data[0].map((elem,index)=>{                 
                       return <Grid item key={index} className={classes.cards} md={3}>
                            <Paper className={classes.cardBG}>                      
                             <div className={classes.cont}>
                             <img src={elem.ImgUrl} alt={elem.Name} className={classes.img}/>                           
                              <p className={classes.names}>{elem.Name}</p>
                             </div>
                            </Paper>
                        </Grid>   
                      })}                       
                </Grid>
             
            </div>
        </div>
     );
}
 
export default Personality;


