// App.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Favorites from './views/Favorites';
import Home from './views/Home';
import PhotosContextProvider from './context/PhotosContext';

const App = () => {
  return (
    <PhotosContextProvider>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favorites />} />
        </Routes>
      </div>
    </PhotosContextProvider>
  );
};

export default App;
