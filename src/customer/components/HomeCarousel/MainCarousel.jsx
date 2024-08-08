import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './MainCarousel';

const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 1 },
};

const items = mainCarouselData.map((item)=> (
  <div className='w-full overflow-hidden md:h-[24vmax] h-[30vmax]'>
    <img className='w-full h-full object-cover cursor-pointer' role='presentation' src={`${item.image}`} alt='image'/>
  </div>
));

const MainCarousel = () => (
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        disableDotsControls
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
    />
);

export default MainCarousel