import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home';
import Images from './images';
import Videos from './videos';
import Projects from './projects';


const Main = () => (
  <Switch>
    <Route exact path = "/home" component={Home}/>
    <Route path = "/images" component={Images}/>
    <Route path = "/videos" component={Videos}/>
    <Route path = "/projects" component={Projects}/>
  </Switch>
)

export default Main;
