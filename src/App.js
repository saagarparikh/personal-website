import Main from './components/main'
import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <div className="demo-big-content">
            <Layout>
                <Header title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Saagar Parikh</Link>} scroll>
                    <Navigation>
                      <Link to="/home">Home</Link>
                      <Link to="/images">Images</Link>
                      <Link to="/videos">Videos</Link>
                      <Link to="/projects">Projects</Link>
                    </Navigation>
                </Header>
                <Drawer title="Title">
                    <Navigation>
                        <a href="/home">Home</a>
                        <a href="/images">Images</a>
                        <a href="/videos">Vidoes</a>
                        <a href="/projects">Projects</a>
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
