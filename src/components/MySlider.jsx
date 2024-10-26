import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import you1 from './you1.png';
import sass from './sass1.png'
import websites from './websites1.png'
import insta from './insta1.png'


const MySlider = () => {
  const slides = [
    {
      headline: "Boost Your Brand with a Ready-to-Go YouTube Channel!",
      bullets: [
        "Fully Monetized with Active Subscribers",
        "Professionally Designed and Optimized Content",
        "Instant Access to a Global Audience",
        "Proven Track Record of Growing Engagement"
      ],
      buttonText: "Buy Now & Start Growing",
      imageUrl: you1, // Replace with your image URLs
    },
    {
      headline: "Own a High-Engagement Instagram Account Today!",
      bullets: [
        "Thousands of Real, Active Followers",
        "Curated Content with High Engagement Rates",
        "Niche-Specific Audience Ready to Converte",
        "Professionally Managed with Consistent Growth"
      ],
      buttonText: "Get Instant Access Now",
      imageUrl: insta,
    },
    {
      headline: "Take Over a Viral TikTok Account Instantly!",
      bullets: [
        "High-Impact Videos with Millions of Views",
        "Large Following Ready to Engage",
        "Trending Content in Your Desired Niche",
        "Proven Growth with Strong Audience Loyalty"
      ],
      buttonText: "Buy Your TikTok Account",
      imageUrl: insta,
    },
    {
      headline: "Start Earning with a Profitable Blog Website!",
      bullets: [
        "Monetized with Steady Income Stream",
        "High-Quality Content and Loyal Readers",
        "Optimized for SEO and Ad Revenue",
        "Ready-to-Use with Minimal Setup"
      ],
      buttonText: "Your Revenue-Generating",
      imageUrl: websites,
    },
    {
      headline: "Unlock Success with Our Proven SaaS Products!",
      bullets: [
        "Scalable Solutions for Growing Businesses",
        "High-Quality Content and Loyal Readers",
        "Seamless Integration and User-Friendly",
        "Comprehensive Analytics for Data-Driven Decisions"
      ],
      buttonText: "Explore Our SaaS Products",
      imageUrl: sass,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className='slider'>
    <div className="custom-slider">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <div className="slide-content">
              <div className="text-content">
                <h2>{slide.headline}</h2>
                <ul>
                  {slide.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
                <button>{slide.buttonText}</button>
              </div>
              <div className="image-content">
                <img src={slide.imageUrl} alt={`Slide ${index + 1}`} />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </div>
  );
};

export default MySlider;
