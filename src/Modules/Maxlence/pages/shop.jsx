import React from "react";
import shophero from "../assests/shophero.png";
import shopherobg from "../assests/shopherobg.jpg";
import { BlueBtn } from "../components/Btn";
import { Shoptabs } from "../pages/home";
import { Container } from "react-bootstrap";
import seoshopbanner from "../assests/seoshopbanner.png";
import socialmediabanner from "../assests/seoshopbanner.png";
import freetrial from "../assests/freetrial.png";
import shop24icon from "../assests/shop24icon.png";
import secureshopicon from "../assests/secureshopicon.png";
import Slider from "react-slick";
import youtubecamp from "../assests/youtubecamp.jpg";
import pageseo from "../assests/pageseo.jpg";
import socialmediamarketing from "../assests/socialmediamarketing.jpg";
import emailmarketing from "../assests/emailmarketing.jpg";
import { NavLink } from "react-router-dom";

export const Shop = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: false,
    // autoplay: true,
    // speed: 4000,
    // autoplaySpeed: 4000,
    slidesToShow: 5,
    slidesToScroll: 5,
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
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  const [itemsLimit, setItemsLimit] = React.useState(8);
  const fetchMoreItems = () => {
    setItemsLimit((old) => old + 8);
  };
  return (
    <>
      <div
        className="container-fluid m-0 py-3 bgproperty shophero"
        style={{
          backgroundImage: `url(${shopherobg})`,
        }}
      >
        <div className="container my-sm-4 py-0 my-0">
          <div className="row my-4 g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-4 g-4 justify-content-center align-items-center text-sm-start text-center">
            <div className="col-sm-6 col-12 my-3 ">
              <h1 className="text-white my-sm-4 ">
                <span>One-Stop-Shop</span> Digital Solution For Your Business
              </h1>
              <p className="text-white">
                A place to help a brand to grow up in global environment
              </p>
              <div className="col-md-4 col-7 ms-md-0 m-auto">
                <BlueBtn to="/creation" title="Get Started" />
              </div>
            </div>
            <div className="col-sm-6 pe-0 wow animate__animated animate__fadeInUp">
              <img className="w-100" src={shophero} alt="f" />
            </div>
          </div>
        </div>
      </div>

      <Container className="shoptabs py-3 mt-3">
        <NavLink to="/product_details">product details</NavLink>
        <h1 className="text-left my-2">Product Overview</h1>
        <Shoptabs className="my-4" itemsLimit={itemsLimit} />
        <div className="col-md-3 col-7 m-auto">
          <BlueBtn title="View More" onClick={fetchMoreItems} />
        </div>
      </Container>

      <Container>
        <div className="row mt-5 mb-2 g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-4 g-4 justify-content-center align-items-center  ">
          <div className="col-sm-5 my-3">
            <img className="w-100" src={seoshopbanner} alt="f" />
          </div>
          <div className="col-sm-5 my-3 justify-content-around align-items-center ">
            <img className="w-100" src={socialmediabanner} alt="f" />
          </div>
        </div>
      </Container>

      <div
        className="container py-4 my-5"
        style={{
          borderTop: "1px solid rgba(33, 37, 41, 0.5)",
          borderBottom: "1px solid rgba(33, 37, 41, 0.5)",
        }}
      >
        <div className="row  g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-4 g-4 justify-content-around py-3">
          <div className="col-md-4 text-center border-right border-xs-right-none">
            <img className="my-2" src={freetrial} alt="f" />
            <h6>Free Trial</h6>
            <small>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
              voluptatum.
            </small>
          </div>

          <div className="col-md-4 text-center vendorbenifits border-right border-xs-right-none ">
            <img className="my-2" src={secureshopicon} alt="f" />
            <h6>Secure Payment</h6>
            <small>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
              voluptatum.
            </small>
          </div>

          <div className="col-md-4 text-center vendorbenifits">
            <img className="my-2" src={shop24icon} alt="f" />
            <h6>24/7 Service</h6>
            <small>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
              voluptatum.
            </small>
          </div>
        </div>
      </div>

      <Container className="my-5">
        <h2 className="py-2">Recently viewed</h2>
        <Slider className="slidebluearrows py-2" {...settings}>
          <div className="productCards col-md-3 col-6">
            <div className="productImageContainer">
              <img
                className="productimg w-80 m-auto"
                alt="Products"
                src={youtubecamp}
              />
            </div>
            <div className="productDetailsContainer ms-4 my-3">
              <p className="productTitle mb-1">Youtube Campaign</p>
              <h5 className="productPrice">$ &nbsp;100</h5>
            </div>
          </div>
          <div className="productCards col-md-3 col-6">
            <div className="productImageContainer">
              <img
                className="productimg w-80 m-auto"
                alt="Products"
                src={pageseo}
              />
            </div>
            <div className="productDetailsContainer ms-4 my-3">
              <p className="productTitle mb-1">Youtube Campaign</p>
              <h5 className="productPrice">$ &nbsp;100</h5>
            </div>
          </div>
          <div className="productCards col-md-3 col-6">
            <div className="productImageContainer">
              <img
                className="productimg w-80 m-auto"
                alt="Products"
                src={socialmediamarketing}
              />
            </div>
            <div className="productDetailsContainer ms-4 my-3">
              <p className="productTitle mb-1">Youtube Campaign</p>
              <h5 className="productPrice">$ &nbsp;100</h5>
            </div>
          </div>
          <div className="productCards col-md-3 col-6">
            <div className="productImageContainer">
              <img
                className="productimg w-80 m-auto"
                alt="Products"
                src={emailmarketing}
              />
            </div>
            <div className="productDetailsContainer ms-4 my-3">
              <p className="productTitle mb-1">Youtube Campaign</p>
              <h5 className="productPrice">$ &nbsp;100</h5>
            </div>
          </div>
          <div className="productCards col-md-3 col-6">
            <div className="productImageContainer">
              <img
                className="productimg w-80 m-auto"
                alt="Products"
                src={youtubecamp}
              />
            </div>
            <div className="productDetailsContainer ms-4 my-3">
              <p className="productTitle mb-1">Youtube Campaign</p>
              <h5 className="productPrice">$ &nbsp;100</h5>
            </div>
          </div>
          <div className="productCards col-md-3 col-6">
            <div className="productImageContainer">
              <img
                className="productimg w-80 m-auto"
                alt="Products"
                src={emailmarketing}
              />
            </div>
            <div className="productDetailsContainer ms-4 my-3">
              <p className="productTitle mb-1">Youtube Campaign</p>
              <h5 className="productPrice">$ &nbsp;100</h5>
            </div>
          </div>
        </Slider>
      </Container>
    </>
  );
};
