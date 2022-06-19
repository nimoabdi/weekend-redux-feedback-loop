import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Comments from '../Comments/Comments';
import Feeling from '../Feeling/Feeling';
import Support from '../Support/Support';
import Understanding from '../Understanding/Understanding';

function App() {

  return (
  <Router>
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
    </div>
    <Route>
      
    </Route>
    <Route>
      <Comments />
    </Route>
    <Route>
      <Feeling />
    </Route>
    <Route>
      <Support />
    </Route>
    <Route>
      <Understanding />
    </Route>

  </Router>  
  );
}

export default App;
