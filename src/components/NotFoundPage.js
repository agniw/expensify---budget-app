import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        <p> 404 page </p>
        <Link to='/'> Go to Dashbord </Link>
    </div>
)

export default NotFoundPage;