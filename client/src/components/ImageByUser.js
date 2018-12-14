//kriti
import React from 'react';
import ImageCard from './ImageCard';
import { connect } from 'react-redux';
import { fetchImages } from '../actions/index';

class ImageByUser extends React.Component {
  

      createListItems() {
        const emptyMessage = (
            <p>You have not uploaded any image yet.</p>
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
        const email = "1";
        // const {category} = this.props.location.state === undefined ? "All" : this.props.location.state;
        // console.log("props.location.state.category ==> ", category);
        var url='http://localhost:3000/api/dashboard/'+email; //get category url

        
        this.props.fetchImages(url);
    }


render() {
    
    return (
        <div>
             <h2 align="center">Images by this user</h2>

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

export default connect(mapStateToProps, {fetchImages})(ImageByUser);
