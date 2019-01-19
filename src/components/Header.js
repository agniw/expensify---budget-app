import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <div>
        <h1> Expensify </h1>
        <NavLink activeClassName='active' to='/' exact={true}> Expense Dashbord Page </NavLink>
        <NavLink activeClassName='active' to='/add'> Add Expense Page </NavLink>
        <NavLink activeClassName='active' to='/edit'> Edit Expense PAge </NavLink>
        <NavLink activeClassName='active' to='/help'> Help Page </NavLink>
    </div>
)

export default Header;