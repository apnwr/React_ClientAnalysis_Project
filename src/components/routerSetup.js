import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Pages
import Dashboard from './dashboard'
import Employees from './employees';
import Appointments from './appointments';
import Calendar from './calendar';
import Messages from './messages';
import Error from './error';

//Navbar
import Navbar from './navbar';
import HeadBar from "./headbar";
import FootBar from './footer';


const ReactRouterSetup = () => {
    return (
        <Router>
        <Navbar />
        <HeadBar />
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/employees">
            <Employees />
          </Route>
          <Route path="/appointments">
            <Appointments />
          </Route>
          <Route  path="/calendar">
            <Calendar />
          </Route>
          <Route  path="/messages">
            <Messages />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
        <FootBar/>
      </Router>
    );
}
export default ReactRouterSetup;