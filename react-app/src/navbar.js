import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    title: {
      flexGrow: 1,
    },
    btn:{
        marginRight : "1.5em",
    },

    link:{
        textDecoration:"none",
        color:"black"
    },
    root: {
      flexGrow: 1,
    },
    p:{
      padding: "2em"  
    }
  }));
function Navbar() {
    const classes = useStyles();
    return (
        <div>
            <AppBar  color="primary" elevation={5} position="fixed">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                    </Typography>
                    <Link to="/" className={classes.link}><Button color="inherit" className={classes.btn}>Home</Button></Link>
                    <Link to="/userCharts" className={classes.link}><Button color="inherit" className={classes.btn}>User Data</Button></Link>
                    <Link to="/Charts" className={classes.link}><Button color="inherit" className={classes.btn}>Character Data</Button></Link>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
