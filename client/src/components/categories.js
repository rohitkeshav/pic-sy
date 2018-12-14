import React, { Component } from "react";
import "../style.css";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// eslint-disable-next-line
class Categories extends Component {

    createListItems() {
        // console.log("this.props.categoryImages ==> ", this.props.categoryImages);
        return this.props.categoryImages.map((cImage) => {
            console.log("cimage ==> ", cImage);
            return (
                <div key={cImage.id} className="row">

                    <div className="card categories-image-card col">
                        <Link className="nav-link" to={{ pathname: '/image_grid', state: { category: cImage.category_name} }}>
                            <img className="card-img-top" src={cImage.img_src} alt=""></img>

                            <div className="card-body">
                                <p className="card-text">{cImage.category_name}</p>
                            </div>
                        </Link>
                    </div>

                </div>
            );
        });
    }

    render() {
        return (
            <div>
                <h1>Categories</h1>

                <div className="container">

                    <div className="row">
                        { this.createListItems() }
                    </div>

                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log("State ==> ", state);
    return {
        categoryImages: state.categoryImages
    }
}

export default connect(mapStateToProps)(Categories);


// render() {
//     return (
//         <div>
//             <h1>Categories</h1>

//             <div className="container">

//                 <div className="row">

//                     <div className="col">

//                         <div className="card categories-image-card">

//                             <img className="card-img-top" src={all} alt=""></img>

//                             <div className="card-body">
//                                 <p className="card-text">
//                                     All : Some quick example text to build on the card title and make up the bulk of the card's content.
//                                         </p>
//                             </div>
//                         </div>

//                     </div>

//                     <div className="col">

//                         <div className="card categories-image-card">
//                             <img className="card-img-top" src={funny} alt=""></img>

//                             <div className="card-body">
//                                 <p className="card-text">
//                                     Funny : Some quick example text to build on the card title and make up the bulk of the card's content.
//                                         </p>
//                             </div>
//                         </div>

//                     </div>

//                     <div className="col">

//                         <div className="card categories-image-card">
//                             <img className="card-img-top" src={memes} alt=""></img>

//                             <div className="card-body">
//                                 <p className="card-text">
//                                     Memes : Some quick example text to build on the card title and make up the bulk of the card's content.
//                                         </p>
//                             </div>
//                         </div>

//                     </div>
//                 </div>

//                 <div className="row">
//                     <div className="col">

//                         <div className="card categories-image-card">
//                             <img className="card-img-top" src={fail} alt=""></img>

//                             <div className="card-body">
//                                 <p className="card-text">
//                                     Fail : Some quick example text to build on the card title and make up the bulk of the card's content.
//                                         </p>
//                             </div>
//                         </div>

//                     </div>

//                     <div className="col">

//                         <div className="card categories-image-card">
//                             <img className="card-img-top" src={anime} alt=""></img>

//                             <div className="card-body">
//                                 <p className="card-text">
//                                     Anime : Some quick example text to build on the card title and make up the bulk of the card's content.
//                                         </p>
//                             </div>
//                         </div>

//                     </div>

//                     <div className="col">

//                         <div className="card categories-image-card">
//                             <img className="card-img-top" src={staffPick} alt=""></img>

//                             <div className="card-body">
//                                 <p className="card-text">
//                                     Staff Picks : Some quick example text to build on the card title and make up the bulk of the card's content.
//                                         </p>
//                             </div>
//                         </div>

//                     </div>
//                 </div>

//             </div>
//         </div>
//     );
// }