// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import CategoryGrid from './components/CategoryGrid';
import TrendingTicker from './components/TrendingTicker';



function App() {
  return (
  <div className='max-w-screen-2xl mx-auto'>
    <Header/>
    <TrendingTicker/>
    <main>

      <HeroSection/>
      <CategoryGrid/>
    

    </main>
    <Footer/>
     
  </div>

  );
}




export default App;

