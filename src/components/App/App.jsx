import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Comments from '../Comments/Comments';
import Feeling from '../Feeling/Feeling';
import Support from '../Support/Support';
import Understanding from '../Understanding/Understanding';
import Review from '../Review/Review';
import SubmitThankYou from '../SubmitThankYou/SubmitThankYou';

function App() {

  return (
  <Router>
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
    </div>
    <Route exact path='/' >
      <p>Enter feedback</p>
      <Feeling />
    </Route>
    <Route exact path='/Understanding'>
      <Understanding />
    </Route>
    <Route exact path='/Support'>
      <Support />
    </Route>
    <Route exact path='/Comments'>
      <Comments />
    </Route>
    <Route exact path='/Review'>
      <Review />
    </Route>
    <Route exact path='/SubmitThankYou'>
      <SubmitThankYou />
    </Route>
    
  </Router>  
  );
}

export default App;
