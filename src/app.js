import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

const Test = () => (
    <p> Hello routing </p> 
)

const Entry = () => (
    <p> Entry </p>
)

const Edit = () => (
    <p> Edit page </p>
)

const Help = () => (
    <p> Help page </p>
)

const NoFound = () => (
    <div>
        <p> 404 page </p> 
        <Link to='/'> Go to </Link>
    </div>
)

const Header = () => (
    <div>
        <p> Expensify </p>
        <NavLink activeClassName='active' to='/' exact={true}> Home </NavLink>
        <NavLink activeClassName='active' to='/entry'> Entry </NavLink>
        <NavLink activeClassName='active' to='/edit'> Edit </NavLink>
        <NavLink activeClassName='active' to='/help'> Help </NavLink>
    </div>
)

const routing = (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path='/' component={Test} exact={true} />
                <Route path='/entry' component={Entry} />
                <Route path='/help' component={Help} />
                <Route path='/edit' component={Edit} />
                <Route component={NoFound} />
            </Switch>
        </div>
    </BrowserRouter>
)

ReactDOM.render(routing, document.getElementById('app'));