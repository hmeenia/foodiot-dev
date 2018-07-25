import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
import Signup from './Components/Signup'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/signup" component={Signup} />
          <Route path="/useranalytics" component={Signup} />
        </div>
      </Router>
    );
  }

}


export default App;
