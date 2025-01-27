import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ icon, title }) =>  {
    
    
        return (
            <nav className="navbar bg-primary">
                <h1>
                    <i className={icon}/> 
                    { title }
                </h1>

                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About Us</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    
};

Navbar.defaultProps = {
    title: ' Github Finder ',
    icon: 'fa fa-github'
};

export default Navbar;
