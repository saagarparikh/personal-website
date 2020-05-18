import React, { Component } from 'react';
import axios from 'axios';
import { Grid, Cell} from 'react-mdl';

class Movies extends Component{
  constructor(props) {
    super(props);
    this.state = {
      movie_ids: ["tt0104257", "tt3659388", "tt1285016", "tt0468569", "tt0111161",  "tt0266543"],
      movie_data: [],
      currMovieData: "",
      currData: {},
      isVisible: false,
    };
  }

  componentDidMount(){
    for(var i = 0; i<this.state.movie_ids.length; i++){
      var curr_url = "https://www.omdbapi.com/?apikey=513d830e&i=" + this.state.movie_ids[i]
      axios.get(curr_url).then(res => {
        this.setState({
          movie_data: this.state.movie_data.concat(res["data"])
        })
      })
    }
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
        return <div className="bg-modal" onClick = {this.toggleLightbox}>
          <div className="movies-modal-content">
            <img className="movie-img-modal" src={this.state.currMovieData["Poster"]} />
            <div className="movie-info-modal">
              <h2>{this.state.currMovieData["Title"]}</h2>
              <div className = "movie-rating">
                <p className = "movie-rating-text">IMDB Score: {this.state.currMovieData["Ratings"][0]["Value"]}</p>
              </div>

              <p>{this.state.currMovieData["Plot"]}</p>
              <p>Director: {this.state.currMovieData["Director"]}</p>
            </div>

          </div>
        </div>
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
