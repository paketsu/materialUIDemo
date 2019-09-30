import React from 'react';
import { List, ListItem, ListItemText, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    listitem: {
        display: "inline-block",
        width: 150,
        textAlign: "right"
    }
  })

const listitems = [
    {
        text: "Home",
        id: 1
    },
    {
        text: "Shopping cart",
        id: 2
    },
    {
        text: "Info",
        id: 3
    },
    {
        text: "Contact",
        id: 4
    }
]
  
const MainNavigation = () => {
    const classes = useStyles();
    return (
        <div component="nav">  
            <List >
            {listitems.map(item => (
                <ListItem className={classes.listitem} key={item.id}>
                    <ListItemText>
                        <Typography>{item.text}</Typography>
                    </ListItemText>
                </ListItem>
                ))}
            </List>
        </div>
    )
}

export default MainNavigation;