import React, { Component } from 'react';
import axios from 'axios';
import {Button} from 'react-bootstrap';
import { Grid, Cell} from 'react-mdl';
import config from './firebase-config.js'

const firebase = require('firebase')

class Movies extends Component{
  constructor(props) {
    super(props);

    if (!firebase.apps.length) {
      firebase.initializeApp(config)
    }


    this.state = {
      movie_ids: this.getAllMovieIds(),
      movie_data: [],
      currMovieData: "",
      currData: {},
      isVisible: false,
    };


    // This console log prints all of the movie_ids retrieved from this.getAllMovieIds()
    console.log(this.state.movie_ids);

    // This prints 0, eventhough the length should be 6
    console.log(this.state.movie_ids.length);

    // Never enters this loop because the length of movie_ids is still somehow 0..
    for(var i = 0; i<this.state.movie_ids.length; i++){
      var curr_url = "https://www.omdbapi.com/?apikey=513d830e&i=" + this.state.movie_ids[i];
      axios.get(curr_url).then(res => {
        this.setState({
          movie_data: this.state.movie_data.concat(res["data"])
        })
      })
    }
  }

  getAllMovieIds(){
    var movies = []
    let ref = firebase.database().ref('all-movies');

    ref.on('value', snapshot => {
         var curr_state = snapshot.val()
         var currMessageData = []

         var keys = Object.keys(curr_state)
         for(var i = 0; i<keys.length; i++){
           var currKey = keys[i];
           var currValue = curr_state[currKey];
           currValue["key"] = currKey;
           movies.push(currValue);
         }
    })
    return movies;
  }

  componentDidMount(){
  }


  toggleLightbox = (e) => {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  }

  enlargeImage = (param) => (e) => {
    this.setState({
      currMovieData: param,
      isVisible: true,
    });
  }



  render(){
    const displayLightbox = () =>{
      if(this.state.isVisible){
        return(
          <div className = "movies-lightbox-wrapper">
          <div className="bg-modal" onClick = {this.toggleLightbox}></div>

          <div className="movies-modal-content">
            <img className="movie-img-modal" src={this.state.currMovieData["Poster"]} />
            <div className="movie-info-modal">
              <h2>{this.state.currMovieData["Title"]}</h2>
              <div className = "movie-rating">
                <p className = "movie-rating-text">IMDB Score: {this.state.currMovieData["Ratings"][0]["Value"]}</p>
              </div>
              <p>{this.state.currMovieData["Plot"]}</p>
              <p>Director: {this.state.currMovieData["Director"]}</p>
              <Button className = "delete-movie">Delete</Button>
            </div>
          </div>
          </div>

        )

      }
    }
    return(
      <div className = "images-body">
        <Grid align="center">
          {
            this.state.movie_data.map(curr_movie =>
              <Cell col={4} phone={6}>
                <div class="grid-box"><img onClick = {this.enlargeImage(curr_movie)} className="movie-img" src={curr_movie["Poster"]} /></div>
              </Cell>
            )
          }
        </Grid>
        {displayLightbox()}
      </div>

    )
  }
}

export default Movies;
