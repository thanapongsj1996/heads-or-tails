import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import home from './pages/Home'

class App extends Component {

  renderRouter(){
    return (
      <Switch>
        <Route exact path='/' component={home} />
      </Switch>
    )
  }

  render() {
    return (
      <BrowserRouter>{this.renderRouter()}</BrowserRouter>
    );
  }
}

export default App;

