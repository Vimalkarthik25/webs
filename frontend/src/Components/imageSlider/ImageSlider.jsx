import React, { useState, useEffect, useRef } from 'react';
import './ImageSlider.css';
import image from './Images/pvt_ltd-1.avif'
import image1 from './Images/pvt_ltd-2.avif'
import image2 from './Images/pvt_ltd-3.avif'
import image3 from './Images/pvt_ltd-4.avif'
import image4 from './Images/pvt_ltd-1.avif'

const ImageSlider = () => {
  const [items, setItems] = useState([
    { background: `url(${image})`, title: 'spectra construction pvt ltd', name: 'Spectra Parijatha', description: 'Whitefield, Bangalore' },
    { background: `url(${image1})`, title: 'jrc projects pvt ltd', name: 'JRC Wild Woods', description: 'Sarjapur Road, Bengaluru' },
    { background: `url(${image2})`, title: 'casagrand builder private limited', name: 'CasaGrand Casablanca', description: 'Badamanavarathekaval, Bangalo' },
    { background: `url(${image3})`, title: 'SLIDER', name: 'BUTTERFLY', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.' },
    { background: `url(${image4})`, title: 'SLIDER', name: 'OWL', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.' },
    { background: `url(${image4})`, title: 'SLIDER', name: 'EAGLE', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.' },
    { background: `url(${image4})`, title: 'SLIDER', name: 'KINGFISHER', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.' },
    { background: `url(${image4})`, title: 'SLIDER', name: 'PARROT', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.' },
  ]);

  const carouselRef = useRef(null);
  const timeRunningRef = useRef(null);
  const timeRunning = 3000;
  const timeAutoNext = 7000;

  const resetTimeAnimation = () => {
    timeRunningRef.current.style.animation = 'none';
    // timeRunningRef.current.offsetHeight; // trigger reflow
    timeRunningRef.current.style.animation = null;
    timeRunningRef.current.style.animation = 'runningTime 7s linear 1 forwards';
  };

  const showSlider = (type) => {
    if (!carouselRef.current) return;
    const list = carouselRef.current;
    if (type === 'next') {
      list.appendChild(list.firstChild);
    } else {
      list.insertBefore(list.lastChild, list.firstChild);
    }

    list.classList.add(type);

    setTimeout(() => {
      list.classList.remove(type);
    }, timeRunning);

    resetTimeAnimation();
  };

  useEffect(() => {
    const autoNext = setTimeout(() => {
      showSlider('next');
    }, timeAutoNext);

    return () => clearTimeout(autoNext);
  }, []);

  return (
    <div className="carousel">
      <div className="list" ref={carouselRef}>
        {items.map((item, index) => (
          <div className="item" style={{ backgroundImage: item.background }} key={index}>
            <div className="content">
              <div className="title">{item.title}</div>
              <div className="name">{item.name}</div>
              <div className="des">{item.description}</div>
              <div className="btn">
                <button>See More</button>
                <button>Contect</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="arrows">
        <button className="prev" onClick={() => showSlider('prev')}>&lt;</button>
        <button className="next" onClick={() => showSlider('next')}>&gt;</button>
      </div>
      <div className="timeRunning" ref={timeRunningRef}></div>
    </div>
  );
};

export default ImageSlider;
