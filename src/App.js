import React, {lazy, Suspense} from 'react';
import {Route, Switch} from 'react-router-dom'

import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';

const StarshipsContainer = lazy(() => import('./components/ListStarships/StarshipsContainer'));
const StarshipDetailsContainer = lazy(() => import('./components/StarshipDetails/StarshipDetailsContainer'));

function App() {
  return (
    <>
      <Header/>
      <div className="d-flex justify-content-center" style={{marginTop: 15}}>
        <Suspense fallback={<div>...Loading</div>}>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/starships" component={StarshipsContainer}/>
            <Route exact path="/starships/:id" component={StarshipDetailsContainer}/>
          </Switch>
        </Suspense>
      </div>
    </>
  );
}

export default App;
