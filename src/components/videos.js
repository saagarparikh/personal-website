import React, { Component } from 'react';
import { Player } from 'video-react';
import { Grid, Cell, Row, Card, CardTitle, CardText, CardMenu, IconButton } from 'react-mdl';


class Videos extends Component{
  handleScroll(e) {
    console.log(window.pageYOffset)
    window.scrollTo({
      top: -100,
      behavior: "smooth"
    });
  }
  render(){
    return(
      <div className = "videos-body">
        <a href="#top"><button id="btnScrollToTop"><img src="arrow.png"/></button></a>
        <Grid container spacing={24} direction="column" align="center" id = "top">
          <Cell col={4}>
            <h4>Kobe Bryant Highlights</h4>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/OTTWedyp37o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Cell>

          <Cell col={4}>
            <h4>Bob Ross Painting</h4>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/lLWEXRAnQd0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Cell>

          <Cell col={4}>
            <h4>Great White Shark Breaching</h4>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/pgYmY6--DjI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Cell>

          <Cell col={4}>
            <h4>A$AP Forever Music Video</h4>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/BNzc6hG3yN4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Cell>

          <Cell col={4}>
            <h4>Tour of Venice!</h4>
            <iframe width="500" height="715" src="https://www.youtube.com/embed/JphHw6iU4m8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
