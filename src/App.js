import React from 'react';
import {Route, Switch} from 'react-router-dom'

import Home from './components/Home/Home';
import Header from './components/Header/Header';
import StarshipsContainer from './components/ListStarships/StarshipsContainer';
import StarshipDetailsContainer from './components/StarshipDetails/StarshipDetailsContainer';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Header/>
      <div className="d-flex justify-content-center" style={{marginTop: 15}}>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/list" component={StarshipsContainer}/>
          <Route path="/list/:search" component={StarshipsContainer}/>
          <Route path="/details/:id" component={StarshipDetailsContainer}/>
        </Switch>
      </div>
    </>
  );
}

export default App;
