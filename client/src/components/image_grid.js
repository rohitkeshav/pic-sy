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
// import Modal from './Modal';
// eslint-disable-next-line
class ImageGrid extends Component {
//     state = { show: false };

//   showModal = () => {
//     //   console.log
//     this.setState({ show: true });
//   };

//   hideModal = () => {
//     this.setState({ show: false });

// //   };
//     constructor(props) {
//         super(props);
    
//         this.state = { isOpen: false };
//       }
      
//       toggleModal = () => {
//         this.setState({
//           isOpen: !this.state.isOpen
//         });
//       }

//     handleClick = (e) => {
//         alert("Image is clicked"+e);
//     }

    createListItems() {
        const emptyMessage = (
            <p>There are no images yet in your collection.</p>
          );
        
        const images = this.props.images;
        const imageList = (
            <div className="ui four cards" >
              { images.map(image => <ImageCard image={image} key={image._id} />) }
            </div>
          );
          console.log("THIS.PROPS.IMAGE ==> ", images)
        //   console.log("show", this.state.isOpen)
          return (
              
            <div>
              {images.length === 0 ? emptyMessage : imageList}
              {/* <Modal show={this.state.show} handleClose={this.hideModal}>
              <div className="ui card">
                <img src={images.url} alt="category details" />
                
                <div></div>
                </div>
          
                
                </Modal> */}
              {/* <Modal show={this.state.isOpen}
                onClose={this.toggleModal}>
                Here's some content for the modal
                <div className="ui card">
                <img src={images.url} alt="category details" />
                
                <div></div>
                </div>
            </Modal> */}
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
