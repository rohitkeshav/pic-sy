import React from 'react';

export default function ImageCard({ image }) {
  return (
    <div className="ui card">
        <img src={image.url} alt="image Cover" />
      <div className="content">
        <div className="header">{image.category}</div>
      </div>
    </div>
  );
}
