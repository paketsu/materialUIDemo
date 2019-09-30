import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Posts from './Posts/Posts';
import Form from './Form/Form';
import { makeStyles } from '@material-ui/styles';
import MainNavigation from './MainNavigation/MainNavigation';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    padding: 25,
    backgroundColor: '#E348C3',
  },
  list: {
    background: 'green'
  }, 
  title: {
    flexGrow: 1
  }
})

const App = () => {
  const classes = useStyles();
  return (
    <div className="App">
      <AppBar className={classes.root}>
          <Toolbar>
          <Typography className={classes.title} variant="h6">Candy Shop</Typography>
          <MainNavigation />
        </Toolbar>
      </AppBar>
      <Posts />
      <Form />
    </div>
  );
}

export default App;
