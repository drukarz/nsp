import React from 'react';
import Home from "./Components/Home";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function App() {
  return(
      <Router>
          <div className="container">
              <Route exact path="/" component={Home} />
          </div>
      </Router>
  );
}

export default App;
