import './App.css';
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Header from './components/Header/Header';
import ArtGalleryPage from './pages/ArtGalleryPage/ArtGalleryPage';
import ContactInfoPage from './pages/ContactInfoPage/ContactInfoPage';
import AboutPage from './pages/AboutPage/AboutPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';

function App() {
  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/css2?family=Noto+Serif:wght@300&family=Tangerine:wght@700&display=swap" rel="stylesheet"></link>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<ArtGalleryPage/>}/>
          <Route path='/contact-me' element={<ContactInfoPage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='*' element={<ErrorPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
