import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './ProjectsFocus.css'; // Assuming your custom styles are in this file

const ProjectsFocus = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardData = [
    {
      id: 1, // Unique ID for each card
      name: 'JRC Will Wood',
      description: 'by  JRC will wood Pvt ',
      imgSrc: 'https://housing-images.n7net.in/4f2250e8/f1cd626dcac2f71b5cb5267e4e5ac88e/v0/large/jrc_wild_woods-sarjapur_main_road-bengaluru-jrc_projects_pvt_ltd.jpeg',
      spacilities: "2.3 ,3BHK Apartment Pvt Ltd",
      location: "Bangalore",
      rant: '3.5 Cr - 2.6 Cr'
    },
    {
      id: 2, // Unique ID for each card
      name: 'Buildiko Spring Wood',
      description: 'by  JRC will wood Pvt ',
      imgSrc: 'https://housing-images.n7net.in/4f2250e8/595cb75e4dd4f5677fcebacd703c37fe/v0/large/buildiko_spring_woods-sarjapur-bengaluru-buildiko_ventures_llp.jpeg',
      spacilities: "2.3 ,3BHK Apartment Pvt Ltd",
      location: "Bangalore",
      rant: '3.5 Cr - 2.6 Cr'
    },
    {
      id: 3, // Unique ID for each card
      name: 'Mohamed Yousef',
      description: 'by  JRC will wood Pvt ',
      imgSrc: 'https://housing-images.n7net.in/4f2250e8/f7948332a02e2c1a54c66a2c010e3542/v0/large/coevolve_florenza-sarjapur_main_road-bengaluru-coevolve_estates.jpeg',
      spacilities: "2.3 ,3BHK Apartment Pvt Ltd",
      location: "Bangalore",
      rant: '3.5 Cr - 2.6 Cr'
    },
    {
      id: 4, // Unique ID for each card
      name: 'Mohamed Yousef',
      description: 'by  JRC will wood Pvt ',
      imgSrc: 'https://housing-images.n7net.in/4f2250e8/f1cd626dcac2f71b5cb5267e4e5ac88e/v0/large/jrc_wild_woods-sarjapur_main_road-bengaluru-jrc_projects_pvt_ltd.jpeg',
      spacilities: "2.3 ,3BHK Apartment Pvt Ltd",
      location: "Bangalore",
      rant: '3.5 Cr - 2.6 Cr'
    },
    {
      id: 5, // Unique ID for each card
      name: 'Mohamed Yousef',
      description: 'by  JRC will wood Pvt ',
      imgSrc: 'https://housing-images.n7net.in/4f2250e8/f1cd626dcac2f71b5cb5267e4e5ac88e/v0/large/jrc_wild_woods-sarjapur_main_road-bengaluru-jrc_projects_pvt_ltd.jpeg',
      spacilities: "2.3 ,3BHK Apartment Pvt Ltd",
      location: "Bangalore",
      rant: '3.5 Cr - 2.6 Cr'
    },
    // Repeat or add more card objects here
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cardData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cardData.length - 1 : prevIndex - 1
    );
  };

  return (

   <section>
    <div className='projectsFocus-header'>
     <h1>Projects in Focus</h1>
     <p>Noteworthy projects in Bengaluru</p>
     </div>
     <div className="projectsFocus-container">
    
      <div className="projectsFocus-content" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {cardData.map((card) => (
          <Link 
            to={`/project/${card.id}`} 
            key={card.id} 
            className="projectsFocus-card" 
            style={{ backgroundImage: `url(${card.imgSrc})` }}
          >
            <div className="projectsFocus-overlay"></div>
            <div className="projectsFocus-cardContent">
              <h2 className="projectsFocus-name">{card.name}</h2>
              <p className="projectsFocus-description">{card.description}</p>
              <p className="projectsFocus-spacilities">{card.spacilities}</p>
              <p className="projectsFocus-location">{card.location}</p>
              <p className="projectsFocus-rant">{card.rant}</p>
            </div>
          </Link>
        ))}
      </div>

      <button className="projectsFocus-sliderButton projectsFocus-prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="projectsFocus-sliderButton projectsFocus-next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
   </section>
  );
};

export default ProjectsFocus;
