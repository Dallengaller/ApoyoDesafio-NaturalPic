// Favorites.jsx
import React, { useContext } from "react";
import { PhotosContext } from "../context/PhotosContext";
import IconHeart from "../components/IconHeart";

const Favorites = () => {
 
  const { photos, setPhotos } = useContext(PhotosContext);

  const removeFavorite = (id) => {
    const newPhotos = photos.map((photo) =>
      photo.id === id ? { ...photo, isFavorite: false } : photo
    );
    setPhotos(newPhotos);
  };

  return (
    <div>
      <div className="favoritas">
      <h1>Fotos favoritas</h1>
      </div>
      <div className="p-3 gallery grid-columns-4">
        {photos
          .filter((photo) => photo.isFavorite)
          .map((photo, i) => (
            <div
              onClick={() => removeFavorite(photo.id)}
              className="photo"
              style={{ backgroundImage: `url(${photo.src.tiny})` }}
              key={i}
            >
              <IconHeart filled={photo.isFavorite} />
              <p> {photo.desc} </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Favorites;
