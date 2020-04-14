import React, { Component } from 'react';
import { Player } from 'video-react';
import { Grid, Cell, Card, CardTitle, CardText, CardMenu, IconButton } from 'react-mdl';


class Videos extends Component{
  render(){
    return(
      <div className = "images-body">
        <Grid container spacing={24} direction="column" align="center">
          <Cell col={4}>
            <h4>Kobe Bryant Highlights</h4>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/OTTWedyp37o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <h4>Bob Ross Painting</h4>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/lLWEXRAnQd0" className = "BobRoss" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Cell>

          <Cell col={4}>
            <h4>Great White Shark Breaching</h4>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/pgYmY6--DjI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <h4>A$AP Forever Music Video</h4>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/BNzc6hG3yN4" className = "BobRoss" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Cell>

          <Cell col={4}>
            <h4>Tour of Venice!</h4>
            <iframe width="500" height="715" src="https://www.youtube.com/embed/JphHw6iU4m8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Cell>

        </Grid>

      </div>
    )
  }
}

export default Videos;
