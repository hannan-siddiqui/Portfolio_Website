import React, { useRef } from 'react';
import Header from './Header';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import FourthPage from './FourthPage';
import "./App.css";

const Body = () => {
  
  const firstPageRef = useRef(null);
  const secondPageRef = useRef(null);
  const thirdPageRef = useRef(null);
  const fourthPageRef = useRef(null);



  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <div className='overflow-hidden bg-neutral-900'>

      <Header
        scrollToFirstPage={() => scrollToSection(firstPageRef)}
        scrollToSecondPage={() => scrollToSection(secondPageRef)}
        scrollToThirdPage={() => scrollToSection(thirdPageRef)}
        scrollToFourthPage={() => scrollToSection(fourthPageRef)}
      />

     <div className=''>
      
     <div ref={firstPageRef}><FirstPage /></div>
      <div ref={secondPageRef}><SecondPage /></div>
      <div ref={thirdPageRef}><ThirdPage /></div>
      <div ref={fourthPageRef}><FourthPage /></div>
     </div>

    </div>
  );
}

export default Body;
