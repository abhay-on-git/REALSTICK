import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import './HomeSectionCarousel.css'; // Import custom styles

const responsive = {
  0: { items: 1 },
  720: { items: 2 },
  1024: { items: 4 },
};

const items = Array(10).fill(<HomeSectionCard />);

const HomeSectionCarousel = () => {
  return (
    <div className="relative lg:px-20">
      <div className=" lg:p-8 py-8 relative">
          <h2 className="text-3xl font-bold text-center  text-gray-900 mb-8">Categories</h2>
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          controlsStrategy="alternate"
          disableDotsControls 
          infinite
        //   disableButtonsControls // Hide default buttons
          renderPrevButton={() => <button className="alice-carousel__prev-btn carousel-btn">‹</button>}
          renderNextButton={() => <button className="alice-carousel__next-btn carousel-btn">›</button>}
        />
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
