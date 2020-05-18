import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home';
import Images from './images';
import Videos from './videos';
import Projects from './projects';
import GuestBook from './guestbook';
import Movies from './movies';


const Main = () => (
  <Switch>
    <Route exact path = {process.env.PUBLIC_URL + "/" } component={Home}/>
    <Route exact path = "/home" component={Home}/>
    <Route path = "/images" component={Images}/>
    <Route path = "/videos"  component={Videos}/>
    <Route path = "/projects" component={Projects}/>
    <Route path = "/guestbook" component={GuestBook}/>
    <Route path = "/movies" component={Movies}/>
  </Switch>
)

export default Main;
