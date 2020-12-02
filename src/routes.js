import React from 'react'
import {
    BrowserRouter as Router, Switch, Route,
} from "react-router-dom";
import Login from './containers/Login'
import Signup from './containers/Signup'
import LandingPage from './containers/LandingPage'

const AppRoutes = () => {
    return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={Signup}/>
      </Switch>
    </Router>)
} 

export default AppRoutes