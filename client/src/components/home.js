import React, { Component } from 'react';
import '../style.css';
import { Link } from 'react-router-dom';


export default class Home extends Component {
    render() {
        return (
            <div className="home-div">
                <h1 className="home-h1">Welcome to Imagica</h1>
                <p className="home-p"> Image sharing app, built on top of Electron and ReactJS </p>
                <div className="wrapper">
                    <Link to="/categories">
                        <button type="button" className="button-stuff btn btn-success btn-xl">ENTER</button>
                    </Link>
                </div>
            </div>
        )
    }
}
