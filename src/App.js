import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/pages/Home';
import Navbar from './Components/Navbar';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component = {Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;