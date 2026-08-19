import React from "react";
import LightGallery from "lightgallery/react";
import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";
import "lightgallery/scss/lg-thumbnail.scss";
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import "./Gallery.scss";

const Gallery = ({ images }) => {
  return (
    <div className="gallery-container">
      <LightGallery speed={500} plugins={[lgZoom, lgThumbnail]}>
        {images.map((img, index) => (
          <a key={index} href={img.full}>
            <img src={img.thumb} alt={`Image ${index + 1}`} />
          </a>
        ))}
      </LightGallery>
    </div>
  );
};

export default Gallery;
