import React, { useContext } from 'react'
import HeroSection from './components/HeroSection';
import { useProductContext } from './Context/productcontext';


const About = () => {

  const {myName} = useProductContext();
    

  const data = {

    name:"Saychoice Ecommerce",
 };


  return (
    <>
    {myName}
    <HeroSection  myData={data} />{" "}
    </>
  );
};

export default About;