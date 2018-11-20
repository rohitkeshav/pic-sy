import React, { Component } from "react";
import "../style.css";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

// category images
import all from '../assets/categories/all.png';
import funny from '../assets/categories/funny.jpg';
import fail from '../assets/categories/fail.jpeg';
import anime from '../assets/categories/anime.jpg';
import staffPick from '../assets/categories/staff.jpeg';
import memes from '../assets/categories/meme.jpg'

// eslint-disable-next-line
class Categories extends Component {
    render() {
        return (
            <div>
                <h1>Categories</h1>

                <div className="container">

                    <div className="row">

                        <div className="col">

                            <div className="card categories-image-card">
                            
                                <img className="card-img-top" src={all} alt=""></img>

                                    <div className="card-body">
                                        <p className="card-text">
                                            All : Some quick example text to build on the card title and make up the bulk of the card's content.
                                        </p>
                                    </div>
                            </div>

                        </div>

                        <div className="col">
                            
                            <div className="card categories-image-card">
                                <img className="card-img-top" src={funny} alt=""></img>

                                <div className="card-body">
                                    <p className="card-text">
                                        Funny : Some quick example text to build on the card title and make up the bulk of the card's content.
                                        </p>
                                </div>
                            </div>

                        </div>

                        <div className="col">
                            
                            <div className="card categories-image-card">
                                <img className="card-img-top" src={memes} alt=""></img>

                                <div className="card-body">
                                    <p className="card-text">
                                        Memes : Some quick example text to build on the card title and make up the bulk of the card's content.
                                        </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            
                            <div className="card categories-image-card">
                                <img className="card-img-top" src={fail} alt=""></img>

                                <div className="card-body">
                                    <p className="card-text">
                                        Fail : Some quick example text to build on the card title and make up the bulk of the card's content.
                                        </p>
                                </div>
                            </div>

                        </div>

                        <div className="col">
                            
                            <div className="card categories-image-card">
                                <img className="card-img-top" src={anime} alt=""></img>

                                <div className="card-body">
                                    <p className="card-text">
                                        Anime : Some quick example text to build on the card title and make up the bulk of the card's content.
                                        </p>
                                </div>
                            </div>

                        </div>

                        <div className="col">

                            <div className="card categories-image-card">
                                <img className="card-img-top" src={staffPick} alt=""></img>

                                <div className="card-body">
                                    <p className="card-text">
                                        Staff Picks : Some quick example text to build on the card title and make up the bulk of the card's content.
                                        </p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Categories;
