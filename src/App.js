import React from 'react';
import Home from "./Components/Home";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import ScheduleFinder from "./Components/ScheduleFinder";
import Login from "./Components/Login";

function App() {
  return(
      <Router>
          <div className="container">
              <Route exact path="/" component={Login}/>
              <Route path="/4e4aec82-944e-45a2-830a-fe21d503b83d" component={Home} />
              <Route path="/schedule" component={ScheduleFinder}/>
          </div>
      </Router>
  );
}

export default App;
