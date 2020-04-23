import React, { Component } from 'react';

import { Grid, Cell, Card, CardTitle, CardText, CardMenu, IconButton } from 'react-mdl';


class Home extends Component{
  componentDidMount() {
    console.log(window.pageYOffset)
  }

  printYOffset(){
    console.log(window.pageYOffset)
  }
  render(){
    return(
      <div >
        <div className = "home-body">
          <Grid container spacing={24} direction="column" align="center">
            <Cell col={12}>
              <img className = "profile" src="profile.jpg"/>
              <h1>Hi! I'm Saagar, nice to meet you.</h1>
              <hr></hr>
              <h4>This website tells you a little bit about myself. There are 4 tabs, as seen on the top right.</h4>
              <p>The images tab displays some of my favorite music albums, featuring Young Thug and Playboi Carti</p>
              <p>The videos tab shows some of my favorite videos, including Kobe Bryant highlights and a video of a Great White Shark</p>
              <p>The projects tab displays some of my personal projects. Click on the image assosicated with each project takes you to to a link!</p>
            </Cell>
          </Grid>

        </div>


      </div>
    )
  }
}

export default Home;
