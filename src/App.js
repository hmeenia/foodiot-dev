import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
import Signup from './Components/Signup'
import UserAnalytics from './Components/UserAnalytics'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/signup" component={Signup} />
          <Route path="/useranalytics" component={UserAnalytics} />
        </div>
      </Router>
    );
  }

}


export default App;
