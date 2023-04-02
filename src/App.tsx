import React from 'react';
import './App.css';
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import ArtGalleryPage from './pages/ArtGalleryPage/ArtGalleryPage';
import ContactInfoPage from './pages/ContactInfoPage/ContactInfoPage';
import AboutPage from './pages/AboutPage/AboutPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ArtGalleryPage/>}/>
          <Route path='/contact-me' element={<ContactInfoPage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
