import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: 70
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  navlinks: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" style={{backgroundColor:'#147EFB'}}>
        <Toolbar>
          
          <Typography variant="h6" className={classes.title}>
            Feel Free
          </Typography>

            <Typography variant="h6" style={{fontSize:'16px'}} className={classes.navlinks}>
                <NavLink to='/posts' style={{textDecoration:'none', color:'white'}}>
                    Posts
                </NavLink>
            </Typography>
            <Typography variant="h6" style={{fontSize:'16px'}} className={classes.navlinks}>
                <NavLink to='/myposts' style={{textDecoration:'none', color:'white'}}>
                    My Posts
                </NavLink>
            </Typography>
            <Typography variant="h6" style={{fontSize:'16px'}} className={classes.navlinks}>
                <NavLink to='/create' style={{textDecoration:'none', color:'white'}}>
                    Create
                </NavLink>
            </Typography>
            <Typography variant="h6" style={{fontSize:'16px'}} className={classes.navlinks}>
                <NavLink to='/help' style={{textDecoration:'none', color:'white'}}>
                    Help
                </NavLink>
            </Typography>

        </Toolbar>
      </AppBar>
    </div>
  );
}
