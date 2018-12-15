import React from 'react';
import { Link } from 'react-router-dom';

export default function ImageCard({ image }) {
  return (
    <Link className="nav-link" to={{ pathname: '/ImageDetails', state: { selectedImage: image} }}>
    <div className="ui card">
        <img src={image.url} alt="category details" />
      <div className="content">
        <div className="header">{image.category}</div>
        <div></div>
      </div>
    </div>
    </Link>
  );
}
