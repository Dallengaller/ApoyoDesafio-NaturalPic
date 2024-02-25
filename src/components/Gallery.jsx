// Gallery.jsx
import React, { useContext } from 'react';
import { PhotosContext} from '../context/PhotosContext';
import IconHeart from './IconHeart';

// Función para manejar la lógica de favoritos
const addFavorite = (photos, id) => {
  return photos.map((photo) => {
    if (photo.id === id) {
      return {
        ...photo,
        isFavorite: !photo.isFavorite,
      };
    }
    return photo;
  });
};

const Gallery = () => {
  // Accede al contexto para obtener las imágenes y la función setPhotos
  const { photos, setPhotos } = useContext(PhotosContext);

  return (
    <div className="gallery grid-columns-5 p-3">
      {photos.map((photo, i) => (
        <div
          onClick={() => setPhotos(addFavorite(photos, photo.id))}
          className="photo"
          style={{ backgroundImage: `url(${photo.src.tiny})` }}
          key={i}
        >
          <IconHeart filled={photo.isFavorite} />
          <p> {photo.desc} </p>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
