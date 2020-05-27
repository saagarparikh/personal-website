import Main from './components/main'
import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { Link, NavLink } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      home: false,
      images: false,
      videos: false,
      projects: false,
      guestbook: false,
      movies: false,
      addMovie: false
    }
  }

  setActiveTabHome = (e) => {
    this.setState({
      home: true,
      images: false,
      videos: false,
      projects: false,
      guestbook: false,
      movies: false,
      addMovie: false,
    });
  }

  setActiveTabProjects = (e) => {
    this.setState({
      home: false,
      images: false,
      videos: false,
      projects: true,
      guestbook: false,
      movies: false,
      addMovie: false,
    });
  }
  setActiveTabImages = (e) => {
    this.setState({
      home: false,
      images: true,
      videos: false,
      projects: false,
      guestbook: false,
      movies: false,
      addMovie: false,
    });
  }

  setActiveTabVideos = (e) => {
    this.setState({
      home: false,
      images: false,
      videos: true,
      projects: false,
      guestbook: false,
      movies: false,
      addMovie: false,
    });
  }

  setGuestBook = (e) => {
    this.setState({
      home: false,
      images: false,
      videos: false,
      projects: false,
      guestbook: true,
      movies: false,
      addMovie: false,
    });
  }

  setMovies = (e) => {
    this.setState({
      home: false,
      images: false,
      videos: false,
      projects: false,
      guestbook: false,
      movies: true,
      addMovie: false,
    });
  }

  setAddMovie = (e) => {
    this.setState({
      home: false,
      images: false,
      videos: false,
      projects: false,
      guestbook: false,
      movies: false,
      addMovie: true,
    });
  }

  render() {
    return (
      <div>
        <div id = "navbar" className="demo-big-content">
            <Layout className = "NavBar">
                <Header title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Saagar Parikh</Link>} scroll>
                    <Navigation>
                      <NavLink exact className = {this.state.home && 'active-nav-tab'} onClick={this.setActiveTabHome} to="/home">Home</NavLink>
                      <NavLink exact className = {this.state.images && 'active-nav-tab'} onClick={this.setActiveTabImages} to="/images">Images</NavLink>
                      <NavLink exact className = {this.state.videos && 'active-nav-tab'} onClick={this.setActiveTabVideos} to="/videos">Videos</NavLink>
                      <NavLink exact className = {this.state.projects && 'active-nav-tab'} onClick={this.setActiveTabProjects} to="/projects">Projects</NavLink>
                      <NavLink exact className = {this.state.guestbook && 'active-nav-tab'} onClick={this.setGuestBook} to="/guestbook">GuestBook</NavLink>
                      <NavLink exact className = {this.state.movies && 'active-nav-tab'} onClick={this.setMovies} to="/movies">Movies</NavLink>
                      <NavLink exact className = {this.state.addMovie && 'active-nav-tab'} onClick={this.setAddMovie} to="/add-movie">Add Movie</NavLink>

                    </Navigation>
                </Header>
                <Drawer title="Title">
                    <Navigation>
                      <NavLink exact to="/home">Home</NavLink>
                      <NavLink exact to="/images">Images</NavLink>
                      <NavLink exact to="/videos">Videos</NavLink>
                      <NavLink exact to="/projects">Projects</NavLink>
                      <NavLink exact to="/guestbook">GuestBook</NavLink>
                      <NavLink exact to="/movies">Movies</NavLink>
                    </Navigation>
                </Drawer>
                <Content>
                    <div className="page-content" />
                    <Main/>
                </Content>
            </Layout>
        </div>
      </div>
    );
  }
}

export default App;
