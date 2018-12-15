// kriti
import React, { Component } from "react";
import "../style.css";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { connect } from 'react-redux';
import { mostViewed } from '../actions/index';

// eslint-disable-next-line
class ImageDetails extends Component {
    createListItems() {
        const emptyMessage = (
            <p>Please select a image to view details.</p>
          );
          
        const image_url = this.props.location.state.selectedImage;
        console.log("image_url == >", image_url)
          return (
              
            <div>
              {image_url.length === 0 ? emptyMessage : image_url._id}
            </div>
            
          );
    }

    componentDidMount() {
        console.log("this.props.location.state", this.props.location.state);
        const {selectedImage} = this.props.location.state;
        console.log("props.location.state.selectedImage ==> ", selectedImage);
        var url='';
        url = 'http://localhost:3000/api/mostviewed/'+selectedImage._id; 
        
        this.props.mostViewed(url);
    }


    render() {
        return (
            <div>
                <h1>Image Details</h1>

                    <div className="container">

                    <div className="row">
                        { this.createListItems() }
                    </div>

                </div> 
             </div> 
        ); 
    }
}

export default connect(null, {mostViewed})(ImageDetails);
