// Module
import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Pages
import AppHome from './Pages/AppHome';
import AppAbout from './Pages/AppAbout';
import ViewPost from './Pages/Post/Content'

// Style
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <Route path="/" exact component={AppHome}/>
                    <Route path="/post/:id" component={ViewPost}/>
                    <Route path="/About" component={AppAbout}/>
                </Fragment>
            </Router>
        )
    }
}

export default App;