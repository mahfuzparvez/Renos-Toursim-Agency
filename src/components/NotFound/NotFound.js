import React from 'react';
import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
        <div>
            <img className='w-100' src="https://i.postimg.cc/rmcqhN6M/error-404-concept-landing-page-114360-2279.jpg" alt="" />
            <Link to="/home"><button style={{ fontSize: "20px" }} className='btn btn-warning'>Go Back</button></Link>
        </div>
    );
};

export default NotFound;