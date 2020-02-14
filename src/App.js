import React from 'react';
import {Route, Switch} from 'react-router-dom'

import Header from './components/Header/Header';
import StarshipsContainer from './containers/StarshipsContainer';
import StarshipDetailsContainer from './containers/StarshipDetailsContainer';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Header/>
      <div className="d-flex justify-content-center" style={{marginTop: 15}}>
        <Switch>
          <Route path='/list' component={StarshipsContainer}/>
          <Route path='/list/:search' component={StarshipsContainer}/>
          <Route path='/details/:id' component={StarshipDetailsContainer}/>
        </Switch>
      </div>
      <footer>
        Footer
      </footer>
    </>
  );
}

export default App;
