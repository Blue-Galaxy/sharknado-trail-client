// Base Packages
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PrivateRoute from './utilities/PrivateRoute'
// Views
import Game from './views/game/Game';
import Login from './views/login/Login'
import Registration from './views/registration/Registration'
// Styling
import './App.css';

function App() {
  return (
    <Router>
      {/* Public Routes */}
      <Route exact path ="/" component={Login} />
      <Route exact path ="/register" component={Registration} />
      {/* Private Routes */}
      <Route exact path ="/game" component={Game} />
    </Router>
  );
}

export default App;
