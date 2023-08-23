import React from 'react'
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Truested from './components/Trusted';
import FeatureProduct from './components/FeatureProduct';

const Home = () => {

  const data = {

     name:"Saychoice store",
  };

  return <>
  
  
  
        <HeroSection myData ={data} />
        <FeatureProduct/>
        <Services/>
        <Truested/>
     
      



</>
  
 
};



export default Home ;