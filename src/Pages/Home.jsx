import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import './Home.css';
import icon1 from '../assets/a1.png';
import icon2 from '../assets/a2.png';
import icon3 from '../assets/a2.png';
import icon4 from '../assets/a3.png';
import icon5 from '../assets/a4.png';
import icon6 from './icons/icon (6).png';
import Bat from '../components/Bat';
import MySlider from '../components/MySlider';
import AllFeature from '../components/AllFeature';
import Youtube from '../addproduct/Youtube';
import Header from '../routes/Header';
import Footer from '../routes/Footer';
import { Link } from 'react-router-dom';
import DribbbleOAuth from '../components/Dribbble';
import ww1 from "../assets/car2.png"
import ImageGeneratorAi from '../components/ImageGeneratorAi';
import AiImages from '../components/AiImages';
import SearchImages from './SearchImages';

function Home() {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    // Stop the confetti after 60 seconds
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 60000); // Confetti duration in milliseconds (60000ms = 60s)

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Header />
      <div className='bg'>
      <div className='home'>
      
        <div className='text1'>- Explore a vast marketplace -</div>
        <div className='text2'>Your Ultimate Destination for Cutting-Edge Digital Assets Inspiration</div>
        <div className='text3'>Connect with talented creators and find exclusive Assets tailored to your needs.</div>
        <div className='mainbox'>
          <Link to='/home' style={{textDecoration: "none"}}>
            <div className='box'>
              <img src={icon1} alt='icon1' width="50px" />
              <br />
              <span className='text'>Branding</span>
            </div>
          </Link>
          <Link to='/home' style={{textDecoration: "none"}}>
            <div className='box'>
              <img src={icon3} alt='icon3' width="40px" />
              <br />
              <span className='text'>Animation</span>
            </div>
          </Link>
          <Link to='/home' style={{textDecoration: "none"}}>
            <div className='box' >
              <img src={icon4} alt='icon4' width="50px" />
              <br />
              <span className='text'>Illustration</span>
            </div>
          </Link>
          <Link to='/home' style={{textDecoration: "none"}}>
            <div className='box'>
              <img src={icon5} alt='icon5' width="50px" />
              <br />
              <span className='text'>Graphics</span>
            </div>
          </Link>
          <Link to='/home' style={{textDecoration: "none"}}>
            <div className='box'>
              <img src={icon6} alt='icon6' width="45px" />
              <br />
              <span className='text'>Vector</span>
            </div>
          </Link>
        </div>

      </div>
      <div style={{marginTop: "-200px", marginRight: "40px", display: "flex", flexDirection: "1 column", justifyContent: "end"}}>
      <img style={{width: "250px", height: "250px", rotate: "10deg", }} src={ww1} />
     
      </div>
    </div>

      <DribbbleOAuth />
      <SearchImages />
      <MySlider />
      <AllFeature />
      <Footer />
    
    </div>
  );
}

export default Home;
