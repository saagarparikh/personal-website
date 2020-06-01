import React, { Component } from 'react';
import axios from 'axios';
import {Button, Form} from 'react-bootstrap';
import { Grid, Cell} from 'react-mdl';
import config from './firebase-config.js';

const firebase = require('firebase')

class Movies extends Component{
  constructor(props) {
    super(props);

    if (!firebase.apps.length) {
      firebase.initializeApp(config)
    }

    this.state = {
      movie_ids: "",
      all_movie_data: [],
      movie_data: [],
      movie_titles: [],
      currMovieData: "",
      currMovie:"",
      currData: {},
      isVisible: false,
      numMovies: [],
      movieLists: [],
      searchValue: "",
      listLimit: 8,
      showLoadMore: true,
      currList: "",
    };

  }
  componentDidMount(){

     var movies = [];
     var movies_data = [];
     var titles = [];
     var tt_firebase_map = {}
     let ref = firebase.database().ref('all-movies');

     ref.on('value', snapshot => {
          var curr_state = snapshot.val()

          var keys = Object.keys(curr_state)
          for(var i = 0; i<keys.length; i++){
            var currKey = keys[i];
            console.log(currKey);
            var currValue = curr_state[currKey];
            var movie_id = currValue["movie"]
            currValue["key"] = currKey;
            currValue["IMDBID"] = movie_id
            tt_firebase_map[movie_id] = currKey;

           movies.push(currValue);
           console.log(currKey);
           var curr_res = {}
           axios
           .get(
               `https://www.omdbapi.com/?apikey=513d830e&i=${
                   movie_id
               }&plot=full`
           )
           .then(res => res.data)
           .then(res => {
             res["firebase_key"] = tt_firebase_map[res["imdbID"]]
             movies_data.push(res)
             titles.push(res["Title"]);
             this.setState({movie_ids: movies,
               movie_data: movies_data, all_movie_data: movies_data})

           });
          }
     })

     ref = firebase.database().ref('movie-lists')

     ref.on('value', snapshot => {
          var curr_state = snapshot.val();
          var keys = Object.keys(curr_state);


          this.setState({
            movieLists: keys
          });

          console.log(this.state.movieLists)


     })

     this.setState({
       currList: "All"
     });
   }

  toggleLightbox = (e) => {
    this.setState({
      isVisible: !this.state.isVisible,
      addToListConfirm: false,
    });
  }

  enlargeImage = (param) => (e) => {
    this.setState({
      currMovieData: param,
      isVisible: true,
    });
  }

  handleDelete = (param) => (e) => {
    this.toggleLightbox();
    window.location.reload(false);
    let ref = firebase.database().ref('all-movies/' + param);
    ref.remove();
  }

  handleDelete = (param) => (e) => {
    this.toggleLightbox();
    window.location.reload(false);

    for(var i = 0; i<this.state.movieLists.length; i++){
      var list_name =this.state.movieLists[i] + "-list" ;
      if(list_name == "All-list"){
        list_name = "all-movies";
      }
      let ref = firebase.database().ref(list_name +'/'+ param);
      ref.remove();
    }




  }

  handleSearchChange = (e) => {
    this.setState({
      searchValue: e.target.value
    });
  }

  handleSearchSubmit = (e) => {
    e.preventDefault();
    var search_result = [];
    for(var i = 0; i<this.state.all_movie_data.length; i++){
      console.log(this.state.all_movie_data[i])
      if(this.state.all_movie_data[i]["Title"] == this.state.searchValue){
        search_result.push(this.state.all_movie_data[i]);
        this.setState({
          movie_data: search_result
        })
        break;
      }
    }
    this.setState({
      movie_data: search_result
    })
  }

  handleListChange = (e) => {
    var list_title = e.target.value;
    var list_name = e.target.value + "-list" ;
    if(list_name == "All-list"){
      list_name = "all-movies";
    }
    console.log(list_name)
    var movies = [];
    var tt_firebase_map = {}
    var movies_data = [];
    let ref = firebase.database().ref(list_name);

    ref.on('value', snapshot => {
         var curr_state = snapshot.val()

         var keys = Object.keys(curr_state)
         for(var i = 0; i<keys.length; i++){
           var currKey = keys[i];
           console.log(currKey);
           var currValue = curr_state[currKey];
           var movie_id = currValue["movie"]
           currValue["key"] = currKey;
           currValue["IMDBID"] = movie_id
           tt_firebase_map[movie_id] = currKey;

          movies.push(currValue);
          console.log(currKey);
          var curr_res = {}
          axios
          .get(
              `https://www.omdbapi.com/?apikey=513d830e&i=${
                  movie_id
              }&plot=full`
          )
          .then(res => res.data)
          .then(res => {
            res["firebase_key"] = tt_firebase_map[res["imdbID"]]
            movies_data.push(res)
            console.log(res);
            this.setState({movie_ids: movies,
              movie_data: movies_data})
          });
         }
    })
    this.setState({
      listLimit: 8
    })
    this.setState({
      currList: list_title
    })
  }

  handleAddToList = (e) => {
    var list_name = e.target.value + "-list";
    var jsonBody = {
      movie: this.state.currMovieData["imdbID"]
    }

    firebase.database().ref(list_name).child(this.state.currMovieData["firebase_key"]).set(jsonBody);
    this.setState({
      addToListConfirm: true
    })

    window.location.reload(false);


  }

  handleLoadMore = (e) => {
    this.setState({
      listLimit: this.state.listLimit + 8
    })


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
              <div>
                <p className = "movie-rating-text">IMDB Score: {this.state.currMovieData["Ratings"][0]["Value"]}</p>
              </div>
              <select placeholder="Add to List" onChange = {this.handleAddToList} className = "add-to-list-dropdown">
                <option value="default">Add to list</option>
                {
                  this.state.movieLists.map(curr_list =>
                    <option value = {curr_list}>{curr_list}</option>
                  )
                }
              </select>
              {this.state.addToListConfirm == true && <p>Movie has been added to list!</p>}
              <p>{this.state.currMovieData["Plot"]}</p>
              <p>Director: {this.state.currMovieData["Director"]}</p>
              <button onClick = {this.handleDelete(this.state.currMovieData["firebase_key"])} className = "delete-movie">Delete</button>
            </div>
          </div>
          </div>

        )

      }
    }
    return(
      <div className = "images-body">
        <Grid align="center">
          <Cell>
            <h1>{this.state.currList} Movies</h1>
            <hr></hr>
          </Cell>
          <Cell className="list-dropdown-wrapper" col={12} phone={6}>
            <h5>Select List to View</h5>
            <select placeholder="Select List" className = "movie-list-dropdown" onChange = {this.handleListChange}>
              <option value="default">Select list from below</option>
              {
                this.state.movieLists.map(curr_list =>
                  <option value = {curr_list}>{curr_list}</option>
                )
              }
            </select>
          </Cell>
          <Cell col={12} phone={6}>
            <form onSubmit={this.handleSearchSubmit}>
              <input className="search-bar" type="text" value={this.state.searchValue} onChange={this.handleSearchChange}></input>
              <input type="submit" value="Search" />
            </form>

          </Cell>
          {
            this.state.movie_data.slice(0,this.state.listLimit).map(curr_movie =>
              <Cell col={2} phone={6}>
                <div class="grid-box"><img onClick = {this.enlargeImage(curr_movie)} className="movie-img" src={curr_movie["Poster"]} /></div>
              </Cell>
            )
          }
          <Cell col={12} phone={6}>
            {(this.state.listLimit < this.state.movie_data.length) && <Button onClick={this.handleLoadMore}>Load More</Button>}
          </Cell>
        </Grid>
        {displayLightbox()}
      </div>

    )
  }
}

export default Movies;
