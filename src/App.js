import React, { Component } from 'react';
import './App.css';
import Page from './components/04-pages/homePage';
import { BrowserRouter as Router, Route} from "react-router-dom";
import ContactPage from "./components/04-pages/navigationPages/contactPage"

class App extends Component {
  render() {
    return (
        <Router>
            <div>

                <Route exact path="/" component={Page} />
                <Route path="/contact" component={ContactPage} />

            </div>
        </Router>
    );
  }
}

export default App;
