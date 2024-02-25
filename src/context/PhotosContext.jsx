// PhotosContext.jsx
import React, { createContext, useEffect, useState } from 'react';

// Función para agregar la propiedad 'isFavorite' a cada foto
export const addIsFavoriteProperty = (photos) => {
  return photos.map((photo) => ({
    ...photo,
    isFavorite: false,
  }));
};


export const PhotosContext = createContext();

const PhotosContextProvider = ({ children }) => {
  
  const [photos, setPhotos] = useState([]);
 
  const apiUrl = 'https://api.pexels.com/v1/curated?per_page=9';


  const apiKey = 'D2W1sOhXKlH73h1iJXWMTuxopP50BtGAuIMcSbdaiFI16mdiADDnWA5T';

  useEffect(() => {
    
    const headers = {
      Authorization: apiKey,
    };

    
    fetch(apiUrl, { headers })
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al obtener imágenes');
        }
        return response.json();
      })
      .then(data => {
     
        setPhotos(addIsFavoriteProperty(data.photos));
      })
      .catch(error => {
        console.error('Error al obtener imágenes:', error);
      });
  }, []); 

  return (
   
    <PhotosContext.Provider value={{ photos, setPhotos }}>
      {children}
    </PhotosContext.Provider>
  );
};

export default PhotosContextProvider;
