import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


export default class NavBar extends Component {
    render() {
        return (
            // <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    
                    <a className="navbar-brand" href="/">Imagica</a>
                    
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">

                                <li className="nav-item">
                                    <Link className="nav-link" to="/categories">Categories</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/dashboard">Dashboard</Link>
                                </li>

                            </ul>

                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search"></input>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>

                    </div>
                </nav>
        );
    }
}
