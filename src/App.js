import React, {Component} from 'react';
import styles from './styles/atoms/basics.scss';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PageNotFound from './screens/PageNotFound'
import MainScreen from './screens/MainScreen'

class App extends Component {
    render() {
        return <Router>
            <Switch>
                <Route path="/" component={MainScreen}/>
                <Route render={PageNotFound}/>
            </Switch>
        </Router>
    }
}

export default App;
