import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './TopProjects.css'; // Import your updated styles
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";

const TopProjects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      src: 'https://housing-images.n7net.in/4f2250e8/857dbfa14c6251d7a79818de5d629400/v0/medium/rrl_palacio-sarjapur-bengaluru-rrl_builders_and_developers_pvt_ltd.jpeg',
      name: 'Lorem ipsum 1',
      descrip:" projects in Bengaluru",
      price:"2.26Cr - 3.66Cr",
      priceName:"Price",
      description: 'lorem ipsum dol',
      link: '/page1', // Internal link for each slide
    },
    {
      src: 'https://housing-images.n7net.in/4f2250e8/528170a5f652d1841009b3988d65ad93/v0/medium/concorde_mayfair-yelahanka-bengaluru-concorde_housing_corporation_pvt_ltd.jpeg',
      name: 'Lorem ipsum 2',
      descrip:" projects in Bengaluru",
      price:"2.26Cr - 3.66Cr",
      priceName:"Price",
      description: 'lorem ipsum dol',
      link: '/page2', // Internal link for each slide
    },
    {
      src: 'https://housing-images.n7net.in/4f2250e8/1401e61c07a9b557753c5835b4a63c4e/v0/medium/sumadhura_folium_phase_i-whitefield-bengaluru-sumadhura_infracon_pvt_ltd.jpeg',
      name: 'Lorem ipsum 3',
      descrip:" projects in Bengaluru",
      price:"2.26Cr - 3.66Cr",
      priceName:"Price",
      description: 'lorem ipsum dol',
      link: '/page3', // Internal link for each slide
    },
    {
      src: 'https://housing-images.n7net.in/4f2250e8/857dbfa14c6251d7a79818de5d629400/v0/medium/rrl_palacio-sarjapur-bengaluru-rrl_builders_and_developers_pvt_ltd.jpeg',
      name: 'Lorem ipsum 4',
      descrip:" projects in Bengaluru",
      price:"2.26Cr - 3.66Cr",
      priceName:"Price",
      description: 'lorem ipsum dol',
      link: '/page4', // Internal link for each slide
    },
    {
      src: 'https://housing-images.n7net.in/4f2250e8/1401e61c07a9b557753c5835b4a63c4e/v0/medium/sumadhura_folium_phase_i-whitefield-bengaluru-sumadhura_infracon_pvt_ltd.jpeg',
      name: 'Lorem ipsum 5',
      descrip:" projects in Bengaluru",
      price:"2.26Cr - 3.66Cr",
      priceName:"Price",
      description: 'lorem ipsum dol',
      link: '/page5', // Internal link for each slide
    },
    
   
  ];

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="topProjects">
        <div className='topProjects-header'>
        <h1>Top Projects</h1>
        <p>Best developers in Bengaluru to explore</p>
        </div>
      <div className="carousel-container">
        <div className="carousel-wrapper" style={{ transform: `translateX(-${currentIndex * 500}px)` }}>
          {slides.map((slide, index) => (
            <div key={index} className="carousel-slide">
              <Link to={slide.link} className="carousel-link">
                <div className="product">
                  <img className="photograph" src={slide.src} alt={slide.name} />
                 <div className='photograph-flex'>
                 <div >
                  <h2 className="product__name">{slide.name}</h2>
                  <p>{slide.descrip}</p>
                  </div>
                  <div>
                  <h2 className="product__name">{slide.price}</h2>
                  <p>{slide.priceName}</p>
                  </div>
                 </div>
                 <h2 className="product__name">{slide.name}</h2>
                  <p className="product__description">{slide.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <button className="carousel-button prev" onClick={goToPrevSlide}>
      <IoIosArrowRoundBack />
      </button>
      <button className="carousel-button next" onClick={goToNextSlide}>
      <IoIosArrowRoundForward />
      </button>
    </div>
  );
};

export default TopProjects;
