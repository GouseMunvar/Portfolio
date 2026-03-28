import React from "react";
import Slider from "react-slick";
import SvgCard from "./SvgCard";
import { DynamicList } from "./DynamicList";

const CarouselComponent = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 5, // default for large screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // below 1024px width
        settings: {
          slidesToShow: 3, // show 3 slides on smaller screens
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // optional: even smaller screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // mobile
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {DynamicList.map((item) => (
          <div key={item.id} className="px-2">
            <SvgCard
              component={item.component}
              description={item.description}
              color={item.color}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselComponent;