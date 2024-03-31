import React from 'react';
import "../../assets/styles/home/Home.css";
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Testimonials from './Testimonials';
import Section4 from './Section4';
import Faq from './Faq';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Home() {
  return (
    <div>
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Testimonials />
      <Section4 />
      <Faq />
      <Footer />
    </div>
  )
}

export default Home
