import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import {BrowserRouter, Route} from 'react-router-dom';

const Test = () => (
    <p> Hello routing </p> 
)

const Entry = ()=> (
    <p> Entry </p>
)

const Edit = ()=> (
    <p> Edit page </p>
)

const Help = ()=> (
    <p> Help page </p>
)

const routing = (
    <BrowserRouter>
        <div>
            <Route path='/' component={Test} exact={true} />
            <Route path='/entry' component={Entry} />
            <Route path='/help' component={Help} />
            <Route path='/edit' component={Edit} />
        </div>
    </BrowserRouter>
)

ReactDOM.render(routing, document.getElementById('app'));