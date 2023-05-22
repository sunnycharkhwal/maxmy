import React from "react";
import Slider from "react-slick";
import { Container } from "react-bootstrap";

export const MainSlider = ({
  data,
  SliderCard,
  sliderClass,
  titleClass,
  SliderTitle,
}) => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container
      fluid
      className="my-sm-4 py-sm-4 py-3 my-3"
      style={{ backgroundColor: "#F5F5F5" }}
    >
      <Container className="">
        <h2 className={titleClass}>{SliderTitle}</h2>
        <Slider className={"slidebluearrows " + sliderClass} {...settings}>
          {data.map((val, i) => (
            <SliderCard key={i} {...val} />
          ))}
        </Slider>
      </Container>
    </Container>
  );
};
