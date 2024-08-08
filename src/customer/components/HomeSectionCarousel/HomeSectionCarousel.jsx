import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import './HomeSectionCarousel.css'; // Import custom styles
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
const responsive = {
  0: { items: 1 },
  720: { items: 2 },
  1024: { items: 4 },
};

const items = [1,1,1,1,1,1,1,1,1,1,1,].map((item)=>(<HomeSectionCard product={item}/>))

const HomeSectionCarousel = (props) => {
  return (
    <div className="">
      <div className=" lg:p-8 py-8 relative">
      <h2 className="lg:text-3xl text-2xl font-bold text-center  text-gray-900 lg:mb-8 mb-4">{props.title || 'TRENDING'}</h2>
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          controlsStrategy="alternate"
          disableDotsControls 
          infinite
        //   disableButtonsControls // Hide default buttons
          renderPrevButton={() => <button className="alice-carousel__prev-btn carousel-btn"><KeyboardArrowLeftIcon/></button>}
          renderNextButton={() => <button className="alice-carousel__next-btn carousel-btn"><ChevronRightIcon/></button>}
        />
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
