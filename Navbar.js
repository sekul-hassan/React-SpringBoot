import React from 'react';
import {Link} from "react-router-dom";

function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand text-light" to="/">Navbar</Link>
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/add">Add</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Edit</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Delete</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Show</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;