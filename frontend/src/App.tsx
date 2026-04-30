

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import ImageSlider from './components/ImageSlider';
import About from './components/About';
import Theatre from "./components/Theatre";
import FilmAndTV from "./components/FilmAndTV";
import FilmProduction from "./components/FilmProduction";
import ArtWorks from "./components/ArtWorks";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";


export default function App() {
  return (
    <Router>
       <Navbar />
       <ImageSlider />
       <About />
       <Theatre />
       <FilmAndTV />
       <FilmProduction />
       <ArtWorks />
       <Gallery />
       <Footer />
    </Router>
  );
}
