import React from 'react';
import Feature2 from './components/Feature2';
import Features from './components/Features';
import Hero from './components/Hero';
import NewItems from './components/NewItems';
import Product from './components/Product';


const App = () => {
  return (
    <section className='w-full max-w-[1440px] mx-auto bg-primary'>
      
      <Hero/>
      <Features/>
      <NewItems />
      <Feature2/>
      <Product/>



    </section>
   
  );
};

export default App;
