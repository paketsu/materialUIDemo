import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { ListItemSecondaryAction } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const postitems = [
    {
        title: "First candy",
        image: "http://justfunfacts.com/wp-content/uploads/2018/01/candies.jpg",
        text: "Tässä on ensimmäinen karkki, joka näyttää herkulliselta ja värikkäältä.",
        id: 1
    },
    {
        title: "Second candy",
        image: "https://images.unsplash.com/photo-1517683551739-7f3f08efba84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        text: "Tässä on ensimmäinen karkki, joka näyttää herkulliselta ja värikkäältä.",
        id: 2
    },
    {
        title: "Third candy",
        image: "https://images.unsplash.com/photo-1525059337994-6f2a1311b4d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=354&q=80",
        text: "Tässä on ensimmäinen karkki, joka näyttää herkulliselta ja värikkäältä.",
        id: 3
    },
    {
        title: "Fourth candy",
        image: "https://images.unsplash.com/photo-1514517521153-1be72277b32f?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        text: "Pidätkö donitseista? Nekin näyttävät värikkäiltä ja herkullisilta.",
        id: 4
    },
    {
        title: "Fifth candy",
        image: "https://images.unsplash.com/photo-1532117364815-720cd35ff6e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        text: "Lollipops galore! Tilaa itsellesi koko satsi tikkareita!",
        id: 5
    },
    {
        title: "Sixth candy",
        image: "https://images.unsplash.com/photo-1548848221-0c2e497ed557?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        text: "French macarons, yummy! Macaroneista saa helposti makeayliannostuksen.",
        id: 6
    }

]

const Posts = () => {
    return (
        <div style={{marginTop:120}}>
        <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={4}>
            {postitems.map(item=> (
            <Grid item xs={4}>
                <Card key={item.id} style={{margin: 20, display:"inline-block"}}>
                    <CardContent >
                        <Typography variant="h5">{item.title}</Typography>
                        <Typography>{item.text}</Typography>
                    </CardContent>
                    <CardMedia
                        component="img"
                        alt={item.title}
                        height="150"
                        image={item.image}>
                    </CardMedia>
                </Card>
            </Grid>
            ))}
            </Grid>
        </div>
    )}

export default Posts;