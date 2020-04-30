import Main from './components/main'
import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { Link, NavLink } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeHome: true,
      activeImages: false,
      activeVideos: false,
      activeProjects: false,
    };
  }

  setActiveHome = (e) => {
    this.setState({
      activeHome: true,
      activeImages: false,
      activeVideos: false,
      activeProjects: false,
    });
  }

  setActiveImages = (e) => {
    this.setState({
      activeHome: false,
      activeImages: true,
      activeVideos: false,
      activeProjects: false,
    });
  }

  setActiveVideos = (e) => {
    this.setState({
      activeHome: false,
      activeImages: false,
      activeVideos: true,
      activeProjects: false,
    });
  }

  setActiveProjects = (e) => {
    this.setState({
      activeHome: false,
      activeImages: false,
      activeVideos: false,
      activeProjects: true,
    });
  }
  render() {
    return (
      <div>
        <div id = "navbar" className="demo-big-content">
            <Layout>
                <Header title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Saagar Parikh</Link>} scroll>
                    <Navigation>
                      <NavLink exact className = {this.state.activeHome && 'active-nav-tab'} onClick={this.setActiveHome} to="/home">Home</NavLink>
                      <NavLink exact className = {this.state.activeImages && 'active-nav-tab'} onClick={this.setActiveImages} to="/images">Images</NavLink>
                      <NavLink exact className = {this.state.activeVideos && 'active-nav-tab'} onClick={this.setActiveVideos} to="/videos">Videos</NavLink>
                      <NavLink exact className = {this.state.activeProjects && 'active-nav-tab'} onClick={this.setActiveProjects} to="/projects">Projects</NavLink>
                    </Navigation>
                </Header>
                <Drawer title="Title">
                    <Navigation>
                      <NavLink exact to="/home">Home</NavLink>
                      <NavLink exact to="/images">Images</NavLink>
                      <NavLink exact to="/videos">Videos</NavLink>
                      <NavLink exact to="/projects">Projects</NavLink>
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
