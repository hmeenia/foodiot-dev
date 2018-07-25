import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
import Signup from './Components/Signup'
import UserAnalytics from './Components/UserAnalytics'
import Dashboard from './Components/Dashboard'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/signup" component={Signup} />
          <Route path="/useranalytics" component={UserAnalytics} />
          <Route path="/dashboard" component={Dashboard} />
        </div>
      </Router>
    );
  }

}


export default App;
