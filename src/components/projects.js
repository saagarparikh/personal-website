import React, { Component, Image } from 'react';
import { Grid, Cell, Card, CardTitle, CardText, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component{
  render(){
    return(
      <div >
        <div>
          <Grid container spacing={24} direction="column" align="center">
            <Cell col={12}>
            <a href="https://github.com/saagarparikh/MissionForward"><img className = "profile" src="missionforward.png"/> </a>
            <h4> Mission Forward is a project that helps soon-to-be college students navigate their personal and professional lives after HS.</h4>
            </Cell>
            <Cell col={12}>
            <a href="https://github.com/saagarparikh/MissionForward"><img className = "profile" src="https://icons-for-free.com/iconfiles/png/512/music+party+sound+speaker+icon-1320185815741133916.png"/> </a>
            <h4> MusicQ enables a real-time, collaborative Spotify queue.</h4>
            </Cell>
            <Cell col={12}>
            <a href="https://github.com/saagarparikh/cs56-android-calculate-walking-time"><img className = "profile" src="https://static.thenounproject.com/png/19727-200.png"/> </a>
            <h4> Campus Commute lets users schedule their day on campus.</h4>
            </Cell>
          </Grid>
        </div>


      </div>
    )
  }
}

export default Projects;
