import React from 'react';
import Feature2 from './components/Feature2';
import Features from './components/Features';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import NewItems from './components/NewItems';
import Newsletter from './components/Newsletter';
import Product from './components/Product';
import Tesomonial from './components/Tesomonial';


const App = () => {
  return (
    <section className='w-full max-w-[1440px] mx-auto bg-primary'>
      <Header/>
      <Hero />
      <Features />
      <NewItems />
      <Feature2 />
      <Product />
      <Tesomonial />
       <Newsletter />
      <Footer /> 



    </section>

  );
};

export default App;
