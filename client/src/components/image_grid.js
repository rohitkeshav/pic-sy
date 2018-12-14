// kriti
import React, { Component } from "react";
import "../style.css";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import selectImages from '../actions/index';
// import axios from 'axios';
import { fetchImages } from '../actions/index';
import ImageCard from './ImageCard';
// eslint-disable-next-line
class ImageGrid extends Component {
    

    createListItems() {
        const emptyMessage = (
            <p>There are no images yet in your collection.</p>
          );
        
        const images = this.props.images;
        const imageList = (
            <div className="ui four cards">
              { images.map(image => <ImageCard image={image} key={image._id} />) }
            </div>
          );
          console.log("THIS.PROPS.IMAGE ==> ", images)
          return (
              
            <div>
              {images.length === 0 ? emptyMessage : imageList}
            </div>
          );
    }

    componentDidMount() {
        console.log("this.props.location.state", this.props.location.state);
        // const {category} = this.props.location.state;
        const {category} = this.props.location.state === undefined ? "All" : this.props.location.state;
        console.log("props.location.state.category ==> ", category);
        var url='';
        if(category === "All") {
            url = 'http://localhost:3000/api/image';
        }
        else {
            url = 'http://localhost:3000/api/image/'+category; //get category url
        }
        
        this.props.fetchImages(url);
    }


    render() {
        
        return (
            <div>
                <h1>Image Grid</h1>

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
        images: state.allImages
    }
}

export default connect(mapStateToProps, {fetchImages})(ImageGrid);
