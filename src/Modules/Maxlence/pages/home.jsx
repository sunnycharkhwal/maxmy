import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import homehero1 from "../assests/homehero1.png";
import homehero2 from "../assests/homehero2.png";
import homehero3 from "../assests/homehero3.png";
import homelogo1 from "../assests/homelogo1.jpg";
import homelogo2 from "../assests/homelogo2.jpg";
import homelogo3 from "../assests/homelogo3.jpg";
import homegif from "../assests/homegif.gif";
import webview from "../assests/webview.png";
import demovideo from "../assests/demovideo.mp4";
import arrowup from "../assests/arrowup.png";
import dashboardagency from "../assests/dashboardagency.svg";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Nav, Container } from "react-bootstrap";
import { PartnersList } from "../components/Partners";
import { BlueBtn, OutlineBtn, OutlineLinkBtn } from "../components/Btn";
import { Faqs } from "../components/Faqs";
import { ProductLists } from "../components/ProductLists";
import { Cta } from "../components/Cta";
import { MainSlider } from "../components/TestimonialComp";
import Tab from "react-bootstrap/Tab";
import { VscStarFull, VscStarHalf } from "react-icons/vsc";
import ENDPOINT from "../config/ENDPOINT";
import Ctasearch from "../assests/ctasearch.png";
export const Shoptabs = (props) => {
  return (
    <Tab.Container
      className=""
      id="top-tabs-example"
      defaultActiveKey="first"
      unmountOnExit="true"
    >
      <Nav variant="" className="flex-row mb-3 mt-5">
        <Nav.Item className="col-2 col-sm-2 col-md-auto">
          <Nav.Link eventKey="first">SEO</Nav.Link>
        </Nav.Item>
        <Nav.Item className="col-5 col-sm-4 col-md-auto">
          <Nav.Link eventKey="second">GOOGLE ADS</Nav.Link>
        </Nav.Item>
        <Nav.Item className=" col-9 col-sm-7 col-md-auto">
          <Nav.Link eventKey="third">SOCIAL MEDIA MARKETING</Nav.Link>
        </Nav.Item>
        <Nav.Item className="col-7 col-sm-5 col-md-auto">
          <Nav.Link eventKey="fourth">EMAIL MARKETING</Nav.Link>
        </Nav.Item>
        <Nav.Item className="col-7 col-sm-5 col-md-auto">
          <Nav.Link eventKey="fifth">VALUE PACKS</Nav.Link>
        </Nav.Item>
      </Nav>

      <Tab.Content className={props.className}>
        <Tab.Pane eventKey="first">
          <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-4 g-4">
            <ProductLists itemsLimit={props.itemsLimit} catId={1} />
          </div>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
          <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-4 g-4">
            <ProductLists itemsLimit={props.itemsLimit} catId={2} />
          </div>
        </Tab.Pane>
        <Tab.Pane eventKey="third">
          <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-4 g-4">
            <ProductLists itemsLimit={props.itemsLimit} catId={3} />
          </div>
        </Tab.Pane>
        <Tab.Pane eventKey="fourth">
          <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-4 g-4">
            <ProductLists itemsLimit={props.itemsLimit} catId={4} />
          </div>
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>
  );
};

export const Home = () => {
  const [portfolio, setPortfolio] = useState([]);
  const [testimonial, setTestimonial] = useState([]);

  async function getPortfolio() {
    let res = await fetch(ENDPOINT + `portfolio`);
    const data = await res.json();
    setPortfolio(data);
  }

  useEffect(() => {
    getPortfolio();
  }, []);

  const VideoCard = (props) => {
    // console.log(props);
    return (
      <div className="SlidercontentContainer p-0">
        <img
          width="100%"
          height="100%"
          src={ENDPOINT + "uploads/" + props.img}
          alt="demo"
        />
      </div>
    );
  };

  async function getTestimonial() {
    let res = await fetch(ENDPOINT + `testimonial`);
    const data = await res.json();
    setTestimonial(data);
  }

  useEffect(() => {
    getTestimonial();
  }, []);

  const TestimonialCard = (props) => {
    return (
      <div className="SlidercontentContainer">
        <div className="row justify-content-start g-1">
          <div className="col-3 testimg">
            <img
              width="100%"
              src={ENDPOINT + "uploads/" + props.pic}
              alt="demo"
            />
          </div>
          <div className="col-6 testname">
            <h5>{props.client_name}</h5>
          </div>
        </div>
        <div className="row justify-content-start g-3">
          <div className="col-12 testdescription">
            <small>{props.desc}</small>
          </div>
        </div>
        <div className="d-flex my-3 ratingstars justify-content-center g-1">
          {props.rating === "1" ? (
            <VscStarFull />
          ) : props.rating === "2" ? (
            <>
              <VscStarFull /> <VscStarHalf />
            </>
          ) : props.rating === "3" ? (
            <>
              <VscStarFull /> <VscStarFull /> <VscStarHalf />
            </>
          ) : props.rating === "4" ? (
            <>
              <VscStarFull /> <VscStarFull /> <VscStarFull /> <VscStarHalf />
            </>
          ) : (
            <>
              <VscStarFull /> <VscStarFull /> <VscStarFull /> <VscStarFull />
              <VscStarHalf />
            </>
          )}
        </div>
      </div>
    );
  };

  const settings = {
    dots: false,
    arrows: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };
  const BluePills = (props) => (
    <div className={props.className}>
      <div className="bluepills">
        <Link to={props.to} className="">
          <h5 className="text-dark mb-0">{props.title}</h5>
        </Link>
      </div>
    </div>
  );
  return (
    <>
      <Container fluid className="" style={{ backgroundColor: "#fafafa" }}>
        <Container className="py-3">
          <div className="row py-3">
            <div>
              <Slider {...settings}>
                <div className="row d-flex align-items-center justify-content-around g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-4 g-4">
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                    <h1 className="all_h1_title">
                      We pour our heart into every design,
                      <span>Mobile Apps</span>
                    </h1>
                    <p className="all_h1_title_p">
                      This is a Dummy text This is a Dummy text This is a Dummy
                      text This is a Dummy textThis is a Dummy text This is a
                      Dummy text.This is a Dummy text This is a Dummy text This
                      is a Dummy text This is a Dummy textThis is a Dummy text
                      This is a Dummy text This is a Dummy text This is a Dummy
                      text This is a Dummy text This is a Dummy textThis is a
                      Dummy text This is a Dummy text
                    </p>
                    <div className="col-md-4 col-7">
                      <BlueBtn to="/creation" title="Get Started" />
                    </div>
                  </div>
                  <div className="col-xxl-6 d-flex justify-content-end col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                    <img className="w-md-80 w-100" alt="demo" src={homehero1} />
                  </div>
                </div>
                <div className="row d-flex align-items-center justify-content-around g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-4 g-4">
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                    <h2 className="all_h1_title">
                      We pour our heart into every design,
                      <span>Mobile Apps</span>
                    </h2>
                    <p className="all_h1_title_p">
                      This is a Dummy text This is a Dummy text This is a Dummy
                      text This is a Dummy textThis is a Dummy text This is a
                      Dummy text.This is a Dummy text This is a Dummy text This
                      is a Dummy text This is a Dummy textThis is a Dummy text
                      This is a Dummy text This is a Dummy text This is a Dummy
                      text This is a Dummy text This is a Dummy textThis is a
                      Dummy text This is a Dummy text
                    </p>
                    <div className="col-md-4 col-7">
                      <BlueBtn to="/creation" title="Get Started" />
                    </div>
                  </div>
                  <div className="col-xxl-6 d-flex justify-content-end col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                    <img className="w-md-80 w-100" alt="demo" src={homehero2} />
                  </div>
                </div>
                <div className="row d-flex align-items-center justify-content-around g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-4 g-4">
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                    <h2 className="all_h1_title">
                      We pour our heart into every design,
                      <span>Mobile Apps</span>
                    </h2>
                    <p className="all_h1_title_p">
                      This is a Dummy text This is a Dummy text This is a Dummy
                      text This is a Dummy textThis is a Dummy text This is a
                      Dummy text.This is a Dummy text This is a Dummy text This
                      is a Dummy text This is a Dummy textThis is a Dummy text
                      This is a Dummy text This is a Dummy text This is a Dummy
                      text This is a Dummy text This is a Dummy textThis is a
                      Dummy text This is a Dummy text
                    </p>
                    <div className="col-md-4 col-7">
                      <BlueBtn to="/creation" title="Get Started" />
                    </div>
                  </div>
                  <div className="col-xxl-6 d-flex justify-content-end col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                    <img className="w-md-80 w-100" alt="demo" src={homehero3} />
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </Container>
      </Container>

      <Cta
        bgcolor="greengradient"
        ctaheading="Search your digital solution here"
        btntype="out_line_btn"
        btntext="Get In Touch"
        className="Search_my_div"
      >
        <div class="p-1  ">
          <div class="input-group justify-content-around align-items-center">
            <img
              style={{ position: "absolute", left: "2.2rem", zIndex: "10" }}
              src={Ctasearch}
              alt=""
            />
            <input
              type="search"
              placeholder="Search Here"
              aria-describedby="button-addon1"
              class="form-control ctasearch rounded-pill  fontrale border-0 bg-light m-3"
            />
            <br />
          </div>
        </div>
        {/* <Form className="d-flex mt-3">
          <img
            style={{ position: "absolute", left: "2.2rem", zIndex: "10" }}
            src={Ctasearch}
            alt=""
          ></img>
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <span className=""></span>
        </Form> */}
        {/* <TextField
          fullWidth
          id="standard-bare"
          variant="outlined"
          defaultValue="How can we help"
          InputProps={{
            endAdornment: (
              <IconButton>
                <SearchOutlined />
              </IconButton>
            ),
          }}
        /> */}
      </Cta>

      <Container className="py-5" fluid style={{ backgroundColor: "#fafafa" }}>
        <Container>
          <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-4 g-4 webview">
            <div className="col-12 col-md-12 col-lg-6 col-xl-6">
              <img width="100%" alt="demo" src={webview} />
            </div>
            <div className="col-12 col-md-12 col-lg-6 col-xl-6">
              <h2 className="all_h1_title">
                We make it <span>easier</span> for you to
                <span>understand</span> the digital landscape
              </h2>

              <p>Get your business online, Maximize your exposure.</p>

              <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-4 g-4">
                <div className="col-12 col-md-12 col-lg-6 col-xl-6">
                  <p>
                    <span>SEO</span>
                  </p>
                  <small>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </small>
                </div>
                <div className="col-12 col-md-12 col-lg-6 col-xl-6">
                  <p>
                    <span>Google Ads</span>
                  </p>
                  <small>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </small>
                </div>
                <div className="col-12 col-md-12 col-lg-6 col-xl-6">
                  <p>
                    <span>Content Marketing</span>
                  </p>
                  <small>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </small>
                </div>
                <div className="col-12 col-md-12 col-lg-6 col-xl-6">
                  <p>
                    <span>Social Media Marketing</span>
                  </p>
                  <small>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </small>
                </div>
                <div className="col-md-4 col-7 mr-0">
                  <OutlineBtn title="Get Started" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Container>

      <Container fluid className="">
        <Container className="py-3 mt-3">
          <div className="row py-3">
            <div>
              <Slider {...settings}>
                <div className="row d-flex align-items-center justify-content-around g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-4 g-4">
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                    <h2 className="all_h1_title">
                      Design your own personalised, <span>Logos</span>
                    </h2>
                    <p className="all_h1_title_p">
                      This is a Dummy text This is a Dummy text This is a Dummy
                      text This is a Dummy textThis is a Dummy text This is a
                      Dummy text.This is a Dummy text This is a Dummy text This
                      is a Dummy text This is a Dummy textThis is a Dummy text
                      This is a Dummy text This is a Dummy text This is a Dummy
                      text This is a Dummy text This is a Dummy textThis is a
                      Dummy text This is a Dummy text
                    </p>
                    <div className="col-md-4 col-7">
                      <BlueBtn to="/creation" title="Explore Now" />
                    </div>
                  </div>
                  <div className="col-12 col-md-12 col-lg-5">
                    <img className="w-md-80 w-100" alt="demo" src={homelogo1} />
                  </div>
                </div>
                <div className="row d-flex align-items-center justify-content-around g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-4 g-4">
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                    <h2 className="all_h1_title">
                      Design your own personalised, <span>Logos</span>
                    </h2>
                    <p className="all_h1_title_p">
                      This is a Dummy text This is a Dummy text This is a Dummy
                      text This is a Dummy textThis is a Dummy text This is a
                      Dummy text.This is a Dummy text This is a Dummy text This
                      is a Dummy text This is a Dummy textThis is a Dummy text
                      This is a Dummy text This is a Dummy text This is a Dummy
                      text This is a Dummy text This is a Dummy textThis is a
                      Dummy text This is a Dummy text
                    </p>
                    <div className="col-md-4 col-7">
                      <BlueBtn to="/creation" title="Explore Now" />
                    </div>
                  </div>
                  <div className="col-12 col-md-12 col-lg-5">
                    <img className="w-md-80 w-100" alt="demo" src={homelogo2} />
                  </div>
                </div>
                <div className="row d-flex align-items-center justify-content-around g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-4 g-4">
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                    <h2 className="all_h1_title">
                      Design your own personalised, <span>Logos</span>
                    </h2>
                    <p className="all_h1_title_p">
                      This is a Dummy text This is a Dummy text This is a Dummy
                      text This is a Dummy textThis is a Dummy text This is a
                      Dummy text.This is a Dummy text This is a Dummy text This
                      is a Dummy text This is a Dummy textThis is a Dummy text
                      This is a Dummy text This is a Dummy text This is a Dummy
                      text This is a Dummy text This is a Dummy textThis is a
                      Dummy text This is a Dummy text
                    </p>
                    <div className="col-md-4 col-7">
                      <BlueBtn to="/creation" title="Explore Now" />
                    </div>
                  </div>
                  <div className="col-12 col-md-12 col-lg-5">
                    <img className="w-md-80 w-100" alt="demo" src={homelogo3} />
                  </div>
                </div>
              </Slider>
            </div>
          </div>

          <div className="row align-items-center g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-4 g-4 py-3 mt-3 ">
            <div className="text-center">
              <h2 className="all_h1_title">What do you need to design?</h2>
            </div>
            <BluePills
              className="col-12 col-md-6 col-lg-3"
              to="/"
              title="Logos"
            />
            <BluePills
              className="col-12 col-md-6 col-lg-3"
              to="/"
              title="Social Media Posts"
            />
            <BluePills
              className="col-12 col-md-6 col-lg-3"
              to="/"
              title="Marketing Ads & Banners"
            />
            <BluePills
              className="col-12 col-md-6 col-lg-3"
              to="/"
              title="Landing Page"
            />
          </div>
        </Container>
      </Container>

      <Container fluid className="" style={{ backgroundColor: "#E9E9E9" }}>
        <Container className="py-3 mt-3">
          <div className="row align-items-center py-3 g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-4 g-4">
            <div className="col-12 col-md-12 col-lg-6">
              <img width="100%" src={homegif} className="" alt="demo" />
            </div>
            <div className="col-12 col-md-12 col-lg-6">
              <h2 className="all_h1_title">
                All you need to power your <span>online stores.</span>
              </h2>
              <p className="all_h1_title_p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque excepturi voluptas magnam eum consectetur tempore.
              </p>
              <div className="col-md-4 col-7">
                <OutlineBtn title="Get Started" />
              </div>
            </div>
          </div>
        </Container>
      </Container>

      <Container className="shoptabs py-3 mt-3">
        <h2 className="text-center my-2 all_h1_title">
          Shop our services with <span>best offers</span>
        </h2>
        <Shoptabs className="productscrollcontainer my-2" />
        <div className="col-md-3 col-7 m-auto">
          {/* <BlueBtn to="/shop" title="View More" /> */}
          <Link to="/shop">
            <button className="BlueBtn">View More</button>
          </Link>
        </div>
      </Container>

      <Container
        className="py-5 mt-3"
        fluid
        style={{ backgroundColor: "#fafafa" }}
      >
        <Container>
          <div className="row d-flex align-items-center justify-content-around g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-4 g-4">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <h2 className="all_h1_title">
                We differentiate between <span>local & enterprise growth</span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien
                adipiscing nulla urna dictum tristique porttitor purus. Mattis
                nullam neque eget in volutpat volutpat porta nibh. Habitant sed
                sed non scelerisque ultrices. Semper sed nunc scelerisque dolor
                tristique eu congue pulvinar. Pretium posuere et nullam ligula
                at erat duis congue. Semper pellentesque vitae libero dignissim
                mauris dignissim pulvinar.
              </p>
            </div>
            <div className="col-xxl-6 d-flex justify-content-end col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 552 450"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.24"
                  className="floating"
                  d="M145.719 5.87736C115.164 17.9784 97.4329 49.0718 74.3054 72.429C61.0424 85.8553 45.6655 96.9376 32.0294 109.975C18.3934 123.012 6.33228 138.633 2.18758 157.02C-5.69565 191.874 16.2796 225.916 22.0324 261.184C23.8644 272.448 24.055 284.069 27.7107 294.87C30.6037 303.418 35.5773 311.145 41.3302 318.061C64.6317 346.272 101.926 362.349 138.457 359.931C162.554 358.332 185.707 349.262 209.87 348.26C246.286 346.744 283.041 363.641 318.362 354.688C334.651 350.546 349.074 341.228 362.934 331.736C390.439 312.893 419.07 289.784 425.461 257.076C430.153 233.056 421.797 207.736 427.625 183.972C431.007 170.182 438.957 157.932 443.151 144.364C452.062 115.599 442.546 82.8735 422.245 60.6179C401.944 38.3622 372.152 26.0706 342.128 23.4616C322.441 21.7471 302.629 23.9088 282.867 23.5278C234.639 22.6499 195.762 -13.9432 145.719 5.87736Z"
                  fill="#0A76E5"
                />
                <path
                  opacity="0.24"
                  d="M104.495 292.592C102.439 293.006 100.251 293.545 98.8666 295.077C96.9186 297.297 97.358 300.875 99.1402 303.235C100.922 305.596 103.699 306.938 106.451 307.99C119.416 312.959 133.657 313.001 147.534 313.017C175.544 313.017 204.615 312.852 229.98 300.966C209.48 293.056 190.39 293.445 169.053 291.938C146.854 290.438 126.702 288.053 104.495 292.592Z"
                  fill="#0A76E5"
                />
                <path
                  d="M272.903 163.249L259.723 170.463L241.038 216.573L280.596 194.93L272.903 163.249Z"
                  fill="#0A76E5"
                />
                <path
                  d="M329.727 163.249L342.907 170.463L361.591 216.573L322.034 194.93L329.727 163.249Z"
                  fill="#0A76E5"
                />
                <path
                  d="M272.903 163.249L259.723 170.463L241.038 216.573L280.596 194.93L272.903 163.249Z"
                  fill="url(#paint0_linear_2500_950)"
                />
                <path
                  d="M329.727 163.249L342.907 170.463L361.591 216.573L322.034 194.93L329.727 163.249Z"
                  fill="url(#paint1_linear_2500_950)"
                />
                <path
                  d="M173.38 289.61C173.125 290.506 173.179 291.461 173.534 292.323C173.889 293.184 174.524 293.9 175.336 294.356C176.144 294.717 176.993 294.979 177.865 295.135C180.538 295.79 183.013 297.083 185.076 298.903C185.412 299.125 185.686 299.428 185.872 299.785C186.057 300.141 186.149 300.539 186.137 300.941C185.947 301.86 184.869 302.25 183.957 302.465C182.04 302.985 180.082 303.343 178.105 303.533C174.085 303.807 170.106 302.705 166.226 301.587C164.751 301.165 162.529 300.527 162.189 298.812C162.121 297.631 162.176 296.445 162.355 295.276L162.612 289.312"
                  fill="#606161"
                />
                <path
                  d="M150.477 296.725C150.3 297.18 150.26 297.677 150.36 298.154C150.46 298.632 150.696 299.071 151.04 299.417C151.738 300.098 152.534 300.671 153.403 301.115C155.696 302.505 157.718 304.298 159.371 306.408C160.134 307.377 160.847 308.644 160.366 309.779C160.11 310.305 159.703 310.743 159.197 311.038C157.542 311.999 155.635 312.438 153.726 312.297C148.91 312.172 141.789 309.166 140.397 303.956C139.957 302.341 140.438 300.129 140.504 298.464L140.679 294.447"
                  fill="#606161"
                />
                <path
                  d="M177.773 197.482L174.027 291.076C172.581 292.138 170.846 292.736 169.053 292.791C165.596 292.99 164.975 293.238 162.488 290.977L151.629 192.818L177.773 192.272V197.482Z"
                  fill="#606161"
                />
                <path
                  d="M177.773 197.482L174.027 291.076C172.581 292.138 170.846 292.736 169.053 292.791C165.596 292.99 164.975 293.238 162.488 290.977L151.629 192.818L177.773 192.272V197.482Z"
                  fill="url(#paint2_linear_2500_950)"
                />
                <path
                  d="M163.002 205.888L152.226 296.916C152.226 296.916 150.667 298.514 146.423 298.572C141.607 298.63 141.168 297.976 140.09 295.541L137.96 191.129L162.704 195.345L163.002 205.888Z"
                  fill="#606161"
                />
                <path
                  d="M163.002 205.888L152.226 296.916C152.226 296.916 150.667 298.514 146.423 298.572C141.607 298.63 141.168 297.976 140.09 295.541L137.96 191.129L162.704 195.345L163.002 205.888Z"
                  fill="url(#paint3_linear_2500_950)"
                />
                <path
                  d="M166.359 196.777C162.983 197.918 159.504 198.734 155.972 199.213C151.289 199.693 146.382 197.432 142.709 197.241C137.81 196.993 137.678 196.835 137.678 193.647C137.678 192.04 178.412 188.188 178.412 188.188C178.412 188.188 178.221 191.129 178.23 193.845C178.23 195.883 177.359 195.767 173.654 195.982C169.948 196.198 169.236 195.071 166.359 196.777Z"
                  fill="#F2FBFF"
                />
                <path
                  d="M150.286 124.917C150.286 124.917 143.455 126.689 138.581 130.234C135.572 132.421 137.653 193.647 137.653 193.647C137.951 193.597 151.04 198.898 163.698 196.72C174.474 194.864 178.362 189.812 178.362 189.812C178.362 189.812 179.332 131.063 177.235 128.652C176.306 127.575 166.052 123.79 166.052 123.79C166.052 123.79 161.576 130.516 150.286 124.917Z"
                  fill="#0A76E5"
                />
                <path
                  d="M150.286 124.917C150.286 124.917 143.455 126.689 138.581 130.234C135.572 132.421 137.653 193.647 137.653 193.647C137.951 193.597 151.04 198.898 163.698 196.72C174.474 194.864 178.362 189.812 178.362 189.812C178.362 189.812 179.332 131.063 177.235 128.652C176.306 127.575 166.052 123.79 166.052 123.79C166.052 123.79 161.576 130.516 150.286 124.917Z"
                  fill="url(#paint4_linear_2500_950)"
                />
                <path
                  d="M152.524 111.316L150.286 124.917C150.286 124.917 155.26 132.239 161.618 131.145C167.976 130.052 166.376 127.103 166.376 127.103L165.547 115.615C165.547 115.615 159.835 116.617 152.524 111.316Z"
                  fill="#C8A59C"
                />
                <path
                  d="M151.737 116.087L152.566 111.316C159.877 116.617 163.674 114.364 163.674 114.364L165.439 120.535C164.446 121.574 163.108 122.216 161.676 122.341C158.128 122.589 154.58 119.814 151.737 116.087Z"
                  fill="#B58B81"
                />
                <path
                  d="M150.568 123.277L143.936 126.391C143.936 126.391 154.381 137.424 157.564 137.208C157.564 137.208 160.573 131.626 163.367 130.748L150.568 123.277Z"
                  fill="#F2FBFF"
                />
                <path
                  d="M165.928 125.173C165.38 127.15 164.524 129.029 163.392 130.739C164.013 130.98 168.067 133.804 168.133 135.709C168.133 135.709 172.162 126.598 170.496 125.165C169.102 124.456 167.672 123.823 166.21 123.268L165.928 125.173Z"
                  fill="#F2FBFF"
                />
                <path
                  d="M141.276 128.619C141.276 128.619 131.022 131.932 129.861 148.291C128.8 163.199 126.131 174.025 128.303 178.44C131.129 184.196 150.9 185.149 150.9 185.149C151.378 182.284 151.256 179.351 150.543 176.535L139.709 172.211C139.709 172.211 141.45 131.17 141.276 128.619Z"
                  fill="#0A76E5"
                />
                <path
                  d="M146.796 101.41C147.335 108.956 155.086 122.291 162.629 121.753C170.172 121.214 172.369 105.601 171.83 98.0557C171.291 90.5101 167.056 86.2279 159.496 86.7663C157.699 86.8944 155.946 87.3749 154.336 88.1802C152.725 88.9855 151.289 90.0999 150.11 91.4598C148.931 92.8196 148.031 94.3983 147.463 96.1056C146.894 97.8129 146.668 99.6154 146.796 101.41Z"
                  fill="#C8A59C"
                />
                <path
                  d="M164.577 183.964C164.395 182.523 165.075 181.14 165.273 178.688C165.472 176.236 163.881 175.599 161.552 175.375C160.913 175.3 160.416 175.226 159.993 175.16C157.821 175.681 159.554 178.315 159.67 180.129C159.786 181.943 159.38 184.544 160.01 185.099C160.275 185.339 162.273 185.231 164.585 184.933C164.623 184.611 164.62 184.286 164.577 183.964Z"
                  fill="#B58B81"
                />
                <path
                  d="M166.011 113.959C166.011 113.959 165.804 113.768 164.221 113.884C162.341 113.98 160.456 113.846 158.609 113.486C157.39 113.18 156.81 113.37 156.951 115.002C157.092 116.634 158.368 118.083 161.568 118.257C165.157 118.448 166.666 117.098 166.948 115.483C167.147 114.315 166.409 113.925 166.011 113.959Z"
                  fill="#C8A59C"
                />
                <path
                  d="M152.226 176.791C153.572 176.505 154.898 176.135 156.197 175.681C157.904 175.035 158.443 175.416 160.946 175.681C163.45 175.946 165.166 176.584 164.95 179.094C164.735 181.604 164.014 183.012 164.204 184.478C164.395 185.944 163.939 187.203 161.717 187.252C159.496 187.302 152.226 185.066 152.226 185.066"
                  fill="#C8A59C"
                />
                <path
                  d="M149.805 176.137H153.61C153.61 176.137 155.268 181.62 153.113 185.422L148.91 185.248C148.91 185.248 150.336 179.914 149.805 176.137Z"
                  fill="#F2FBFF"
                />
                <path
                  d="M151.728 178.796C152.191 178.796 152.565 178.399 152.565 177.909C152.565 177.42 152.191 177.023 151.728 177.023C151.266 177.023 150.891 177.42 150.891 177.909C150.891 178.399 151.266 178.796 151.728 178.796Z"
                  fill="#D2E8EC"
                />
                <path
                  d="M166.558 104.972C166.434 104.492 166.405 103.993 166.475 103.503C166.545 103.012 166.711 102.54 166.964 102.114C167.213 101.686 167.545 101.313 167.941 101.015C168.336 100.718 168.788 100.503 169.269 100.383C169.756 100.233 170.268 100.183 170.775 100.237C171.282 100.29 171.773 100.446 172.218 100.694C172.663 100.942 173.053 101.278 173.365 101.681C173.677 102.084 173.903 102.546 174.031 103.039C174.159 103.533 174.185 104.046 174.109 104.55C174.032 105.054 173.855 105.536 173.586 105.969C173.318 106.402 172.964 106.777 172.547 107.069C172.13 107.362 171.657 107.567 171.159 107.672H171.026C170.077 107.885 169.081 107.723 168.249 107.22C167.416 106.716 166.81 105.911 166.558 104.972ZM169.493 101.261C168.758 101.452 168.129 101.927 167.743 102.58C167.358 103.234 167.248 104.014 167.437 104.748C167.577 105.293 167.875 105.785 168.293 106.162C168.711 106.539 169.231 106.784 169.788 106.868C170.345 106.952 170.915 106.87 171.425 106.632C171.936 106.394 172.365 106.012 172.659 105.532C172.954 105.052 173.1 104.497 173.081 103.934C173.061 103.372 172.876 102.828 172.549 102.369C172.222 101.911 171.767 101.56 171.241 101.358C170.715 101.157 170.142 101.114 169.592 101.236L169.493 101.261Z"
                  fill="#292F67"
                />
                <path
                  d="M158.857 107.73C158.372 107.446 157.947 107.068 157.609 106.619C157.27 106.169 157.024 105.658 156.884 105.113C156.674 104.295 156.711 103.433 156.991 102.636C157.271 101.839 157.78 101.142 158.456 100.635C159.131 100.127 159.942 99.8305 160.786 99.7829C161.63 99.7353 162.469 99.9387 163.198 100.367C163.926 100.796 164.511 101.43 164.879 102.191C165.246 102.951 165.38 103.804 165.264 104.64C165.147 105.477 164.785 106.26 164.223 106.891C163.661 107.522 162.924 107.972 162.107 108.186H161.949C160.898 108.435 159.791 108.272 158.857 107.73ZM160.183 100.781C159.75 100.891 159.344 101.085 158.987 101.354C158.63 101.622 158.33 101.959 158.104 102.345C157.879 102.73 157.733 103.157 157.674 103.599C157.616 104.042 157.646 104.491 157.763 104.922C157.929 105.562 158.28 106.139 158.772 106.581C159.264 107.023 159.876 107.311 160.53 107.408C161.185 107.506 161.853 107.409 162.453 107.13C163.053 106.851 163.557 106.401 163.903 105.838C164.249 105.275 164.422 104.622 164.4 103.961C164.378 103.3 164.162 102.661 163.779 102.122C163.395 101.583 162.862 101.168 162.245 100.93C161.628 100.692 160.954 100.64 160.308 100.781H160.183Z"
                  fill="#292F67"
                />
                <path
                  d="M166.459 104.077L167.329 103.82C167.273 103.645 167.179 103.485 167.053 103.352C166.926 103.218 166.771 103.115 166.6 103.05C166.215 102.945 165.813 102.925 165.421 102.992C165.028 103.06 164.655 103.212 164.328 103.439L164.759 104.268C165.646 103.787 166.077 103.837 166.251 103.912C166.339 103.938 166.413 103.997 166.459 104.077Z"
                  fill="#292F67"
                />
                <path
                  d="M157.241 103.837L157.208 102.934L152.035 103.083L152.077 103.986L157.241 103.837Z"
                  fill="#292F67"
                />
                <path
                  d="M177.235 128.652C177.235 128.652 182.963 144.605 186.527 157.534C190.092 170.463 200.619 157.758 200.619 157.758C200.619 157.758 206.422 157.534 206.637 161.071C206.853 164.607 203.322 175.98 193.258 176.228C183.195 176.477 172.535 163.299 172.535 163.299L177.235 128.652Z"
                  fill="#0A76E5"
                />
                <path
                  d="M192.645 184.08L172.178 183.782C171.648 183.812 171.118 183.717 170.632 183.505C170.145 183.293 169.715 182.969 169.376 182.561C169.037 182.152 168.799 181.67 168.681 181.153C168.563 180.635 168.569 180.098 168.697 179.583L176.514 143.429C176.819 142.265 177.5 141.234 178.452 140.497C179.404 139.76 180.573 139.358 181.777 139.354L202.244 139.652C202.775 139.62 203.305 139.714 203.793 139.925C204.28 140.137 204.711 140.46 205.05 140.869C205.39 141.278 205.627 141.761 205.745 142.279C205.862 142.798 205.855 143.336 205.725 143.851L197.917 180.005C197.61 181.17 196.927 182.201 195.974 182.937C195.02 183.674 193.85 184.076 192.645 184.08Z"
                  fill="#0A76E5"
                />
                <path
                  d="M192.645 184.08L172.178 183.782C171.648 183.812 171.118 183.717 170.632 183.505C170.145 183.293 169.715 182.969 169.376 182.561C169.037 182.152 168.799 181.67 168.681 181.153C168.563 180.635 168.569 180.098 168.697 179.583L176.514 143.429C176.819 142.265 177.5 141.234 178.452 140.497C179.404 139.76 180.573 139.358 181.777 139.354L202.244 139.652C202.775 139.62 203.305 139.714 203.793 139.925C204.28 140.137 204.711 140.46 205.05 140.869C205.39 141.278 205.627 141.761 205.745 142.279C205.862 142.798 205.855 143.336 205.725 143.851L197.917 180.005C197.61 181.17 196.927 182.201 195.974 182.937C195.02 183.674 193.85 184.076 192.645 184.08Z"
                  fill="url(#paint5_linear_2500_950)"
                />
                <path
                  d="M192.786 184.296L173.206 184.006C172.7 184.031 172.194 183.937 171.73 183.733C171.267 183.528 170.857 183.217 170.535 182.826C170.213 182.435 169.987 181.974 169.875 181.48C169.763 180.986 169.768 180.472 169.89 179.98L177.351 145.383C177.646 144.269 178.301 143.283 179.213 142.578C180.126 141.873 181.245 141.487 182.399 141.482L201.987 141.772C202.494 141.745 203 141.837 203.465 142.042C203.93 142.246 204.34 142.556 204.662 142.948C204.985 143.34 205.211 143.802 205.322 144.297C205.433 144.791 205.427 145.306 205.303 145.797L197.842 180.394C197.547 181.51 196.891 182.497 195.977 183.202C195.062 183.908 193.941 184.292 192.786 184.296Z"
                  fill="#2267AD"
                />
                <path
                  d="M205.974 159.422C205.959 158.621 205.787 157.83 205.468 157.095C205.25 156.348 204.811 155.684 204.208 155.19C203.542 154.815 202.784 154.631 202.02 154.66C201.249 154.66 200.47 154.66 199.699 154.66C198.849 154.646 198.004 154.798 197.212 155.107C196.08 155.723 195.199 156.717 194.725 157.915C193.664 160.176 193.44 163.05 194.957 165.03C195.627 165.816 196.416 166.492 197.295 167.034C198.248 167.689 199.367 168.376 200.486 168.07C201.019 167.882 201.505 167.583 201.912 167.192L203.57 165.817C204.136 165.396 204.614 164.87 204.979 164.268C205.283 163.49 205.43 162.659 205.41 161.824C205.638 161.034 205.826 160.232 205.974 159.422Z"
                  fill="#C8A59C"
                />
                <path
                  d="M170.819 88.274C169.755 85.7534 168.2 83.4699 166.243 81.5567L166.085 83.0724C162.979 81.6547 159.625 80.8557 156.213 80.7201L156.511 81.7803C155.27 81.4704 154.079 80.9881 152.972 80.3474L151.902 82.2524C151.176 81.6764 150.379 81.1949 149.532 80.8195L148.147 85.7892C147.756 85.5801 147.394 85.3212 147.07 85.0189C146.705 84.7704 146.116 84.6958 145.884 85.0686C145.795 85.2479 145.757 85.4488 145.776 85.6484V87.7853L143.737 87.0564C143.65 87.0157 143.556 86.9947 143.46 86.9947C143.364 86.9947 143.269 87.0157 143.182 87.0564C143.114 87.1126 143.059 87.1819 143.019 87.2603C142.979 87.3386 142.955 87.4243 142.95 87.512C141.466 94.9167 144.608 104.55 149.49 110.306C149.678 109.419 149.585 108.496 149.225 107.664C148.819 106.604 147.567 106.007 147.782 104.889C147.84 104.324 148.104 103.799 148.525 103.417C148.946 103.035 149.493 102.822 150.062 102.818C151.645 103.001 151.057 103.58 152.184 104.707C152.582 102.512 151.629 98.909 152.317 96.7969C152.545 96.2411 152.899 95.7463 153.353 95.352C153.806 94.9577 154.346 94.6748 154.928 94.5259C155.51 94.377 156.119 94.3663 156.707 94.4945C157.294 94.6228 157.843 94.8865 158.31 95.2646C158.26 93.8565 159.918 92.9537 161.327 93.0034C162.737 93.0531 164.336 93.5915 165.829 93.7737C167.097 93.9228 168.398 94.809 169.617 94.7925C172.75 94.7428 171.49 90.0382 170.819 88.274Z"
                  fill="#606161"
                />
                <path
                  opacity="0.24"
                  d="M300.623 284.79C313.227 284.79 323.444 283.547 323.444 282.015C323.444 280.483 313.227 279.24 300.623 279.24C288.019 279.24 277.802 280.483 277.802 282.015C277.802 283.547 288.019 284.79 300.623 284.79Z"
                  fill="#0A76E5"
                />
                <path
                  opacity="0.24"
                  d="M299.238 302.887C319.68 302.887 336.25 300.874 336.25 298.39C336.25 295.906 319.68 293.892 299.238 293.892C278.797 293.892 262.226 295.906 262.226 298.39C262.226 300.874 278.797 302.887 299.238 302.887Z"
                  fill="#0A76E5"
                />
                <path
                  d="M299.926 271.04C331.945 271.04 357.902 267.885 357.902 263.992C357.902 260.099 331.945 256.943 299.926 256.943C267.907 256.943 241.95 260.099 241.95 263.992C241.95 267.885 267.907 271.04 299.926 271.04Z"
                  stroke="white"
                  strokeWidth="4.36952"
                  stroke-miterlimit="10"
                />
                <path
                  d="M301.22 46.1812C301.22 46.1812 238.925 82.7328 275.523 196.728H326.304C326.304 196.728 364.004 106.016 301.22 46.1812Z"
                  fill="#0A76E5"
                />
                <path
                  d="M301.22 46.1812C301.22 46.1812 238.925 82.7328 275.523 196.728H326.304C326.304 196.728 364.004 106.016 301.22 46.1812Z"
                  fill="url(#paint6_linear_2500_950)"
                />
                <path
                  d="M300.158 137.382C309.576 137.382 317.21 129.754 317.21 120.345C317.21 110.935 309.576 103.307 300.158 103.307C290.741 103.307 283.107 110.935 283.107 120.345C283.107 129.754 290.741 137.382 300.158 137.382Z"
                  fill="#0A76E5"
                />
                <path
                  d="M279.783 236.775L286.05 225.369C287.158 239.37 290.599 253.087 296.229 265.955C306.351 255.891 308.887 240.701 310.844 226.57C313.717 233.506 316.284 240.554 318.544 247.716C323.138 238.613 324.637 228.261 322.814 218.23L326.71 224.856C329.372 215.244 328.223 204.976 323.502 196.189C315.455 196.786 307.392 197.181 299.313 197.374C295.445 197.473 291.56 197.523 287.658 197.523C285.097 197.523 280.38 196.521 278.042 197.821C273.55 200.306 275.191 211.016 275.473 215.414C275.706 219.05 276.185 222.667 276.907 226.239C277.247 227.921 280.421 235.615 279.783 236.775Z"
                  fill="#0A76E5"
                />
                <path
                  d="M279.783 236.775L286.05 225.369C287.158 239.37 290.599 253.087 296.229 265.955C306.351 255.891 308.887 240.701 310.844 226.57C313.717 233.506 316.284 240.554 318.544 247.716C323.138 238.613 324.637 228.261 322.814 218.23L326.71 224.856C329.372 215.244 328.223 204.976 323.502 196.189C315.455 196.786 307.392 197.181 299.313 197.374C295.445 197.473 291.56 197.523 287.658 197.523C285.097 197.523 280.38 196.521 278.042 197.821C273.55 200.306 275.191 211.016 275.473 215.414C275.706 219.05 276.185 222.667 276.907 226.239C277.247 227.921 280.421 235.615 279.783 236.775Z"
                  fill="url(#paint7_linear_2500_950)"
                />
                <path
                  d="M288.404 222.454L292.217 215.497C292.898 224.034 294.999 232.398 298.434 240.245C304.601 234.108 306.152 224.839 307.345 216.225C309.103 220.461 310.669 224.762 312.045 229.13C314.846 223.575 315.76 217.26 314.648 211.14L317.019 215.198C318.656 209.323 317.955 203.043 315.063 197.672C310.155 198.037 305.24 198.28 300.316 198.401C297.945 198.456 295.574 198.484 293.203 198.484C291.645 198.484 288.769 197.871 287.343 198.666C284.599 200.198 285.594 206.717 285.768 209.434C285.914 211.659 286.208 213.873 286.647 216.06C286.854 217.054 288.785 221.75 288.404 222.454Z"
                  fill="url(#paint8_linear_2500_950)"
                />
                <path
                  d="M288.487 57.8183C288.487 57.8183 301.402 62.1667 311.905 57.8183L301.477 46.4875C301.228 46.2173 300.924 46.0038 300.586 45.8613C300.247 45.7188 299.882 45.6508 299.515 45.6618C299.148 45.6728 298.787 45.7626 298.458 45.9251C298.128 46.0875 297.838 46.3189 297.606 46.6035L288.487 57.8183Z"
                  fill="#0A76E5"
                />
                <path
                  d="M288.487 57.8183C288.487 57.8183 301.402 62.1668 311.905 57.8183L301.352 46.355C301.119 46.1018 300.834 45.9016 300.517 45.7681C300.199 45.6345 299.857 45.5707 299.512 45.5809C299.168 45.5911 298.83 45.6751 298.521 45.8273C298.212 45.9794 297.94 46.1961 297.722 46.4627L288.487 57.8183Z"
                  fill="url(#paint9_linear_2500_950)"
                />
                <path
                  d="M322.25 238.257C330.937 239.086 336.475 240.436 336.475 241.91C336.475 244.527 319.067 246.648 297.514 246.648C275.962 246.648 258.554 244.527 258.554 241.91C258.554 239.748 270.524 237.918 286.862 237.354"
                  stroke="white"
                  strokeWidth="2.93412"
                  stroke-miterlimit="10"
                />
                <g filter="url(#filter0_d_2500_950)">
                  <path
                    d="M525.5 18.4683H377.5C369.958 18.4683 366.186 18.4683 363.843 20.8114C361.5 23.1546 361.5 26.9258 361.5 34.4683V107.93C361.5 115.472 361.5 119.244 363.843 121.587C366.186 123.93 369.958 123.93 377.5 123.93H525.5C533.042 123.93 536.814 123.93 539.157 121.587C541.5 119.244 541.5 115.472 541.5 107.93V34.4683C541.5 26.9258 541.5 23.1546 539.157 20.8114C536.814 18.4683 533.042 18.4683 525.5 18.4683Z"
                    fill="#FAFAFA"
                  />
                  <path
                    d="M406.918 110.346C402.316 110.347 397.816 108.985 393.989 106.431C390.162 103.877 387.179 100.246 385.417 95.9976C383.655 91.7493 383.194 87.0743 384.091 82.564C384.989 78.0537 387.205 73.9107 390.459 70.659C393.713 67.4073 397.86 65.193 402.374 64.2962C406.888 63.3994 411.566 63.8604 415.818 65.6209C420.07 67.3813 423.703 70.3622 426.259 74.1863C428.816 78.0105 430.179 82.5063 430.178 87.1049C430.17 93.2663 427.717 99.1733 423.357 103.53C418.996 107.887 413.085 110.338 406.918 110.346ZM406.918 70.1207C403.556 70.1207 400.27 71.1168 397.475 72.9831C394.679 74.8493 392.501 77.5019 391.214 80.6053C389.928 83.7087 389.591 87.1237 390.247 90.4183C390.903 93.7129 392.522 96.7392 394.899 99.1144C397.276 101.49 400.305 103.107 403.602 103.763C406.899 104.418 410.317 104.082 413.423 102.796C416.529 101.511 419.184 99.3338 421.051 96.5407C422.919 93.7477 423.916 90.464 423.916 87.1049C423.912 82.6015 422.12 78.2837 418.933 75.0994C415.746 71.9151 411.425 70.1245 406.918 70.1207Z"
                    fill="#0A76E5"
                  />
                  <path
                    d="M406.918 110.346C401.231 110.349 395.74 108.268 391.486 104.496L395.646 99.8108C398.754 102.57 402.768 104.095 406.926 104.096L406.918 110.346Z"
                    fill="#0A76E5"
                  />
                  <path
                    d="M430.178 87.1048H423.916C423.912 82.6015 422.12 78.2837 418.933 75.0994C415.746 71.915 411.425 70.1244 406.918 70.1206V63.8569C413.086 63.8645 418.999 66.3165 423.359 70.6749C427.72 75.0332 430.172 80.942 430.178 87.1048Z"
                    fill="#24285B"
                  />
                  <path
                    d="M406.918 110.345V104.089C411.425 104.083 415.745 102.292 418.931 99.1081C422.118 95.9242 423.91 91.6075 423.916 87.1047H430.178C430.17 93.2662 427.717 99.1732 423.357 103.53C418.996 107.887 413.085 110.338 406.918 110.345Z"
                    fill="#FFD200"
                  />
                  <path
                    d="M407.426 79.584C407.84 79.584 407.969 79.7268 407.969 80.1411V81.0196C408.695 81.095 409.386 81.367 409.968 81.8063C410.55 82.2456 411.001 82.8355 411.271 83.5122C411.486 83.9407 411.4 84.1764 410.914 84.3907L410.035 84.7835C409.62 84.9835 409.42 84.8906 409.191 84.4621C409.007 84.016 408.683 83.6411 408.269 83.3929C407.854 83.1446 407.371 83.0362 406.89 83.0837C405.36 83.0837 404.66 83.5265 404.66 84.555C404.695 84.8682 404.839 85.1592 405.066 85.3782C405.293 85.5971 405.589 85.7303 405.903 85.7548C406.33 85.8478 406.762 85.9146 407.197 85.9548C408.012 85.9899 408.816 86.1464 409.585 86.4191C409.969 86.5438 410.327 86.7374 410.642 86.9904C410.961 87.3249 411.209 87.7196 411.372 88.1514C411.536 88.5832 411.611 89.0433 411.593 89.5045C411.593 91.4615 410.285 92.7899 407.969 93.1327V94.0684C407.969 94.4755 407.84 94.6254 407.426 94.6254H406.439C406.025 94.6254 405.882 94.4755 405.882 94.0684V93.147C405.079 93.0911 404.311 92.7987 403.675 92.3067C403.039 91.8147 402.563 91.1452 402.308 90.383C402.269 90.3029 402.249 90.215 402.25 90.1259C402.25 90.0369 402.272 89.9493 402.312 89.8698C402.352 89.7903 402.41 89.7212 402.481 89.6677C402.552 89.6143 402.635 89.578 402.723 89.5616L403.602 89.2402C404.045 89.076 404.245 89.1831 404.445 89.6331C404.626 90.1164 404.961 90.5264 405.4 90.799C405.838 91.0717 406.355 91.1916 406.868 91.1401C408.52 91.1401 409.349 90.6187 409.349 89.5616C409.363 89.3165 409.295 89.0736 409.155 88.8716C409.015 88.6697 408.811 88.5204 408.577 88.4474C408.004 88.2443 407.404 88.1287 406.797 88.1046C405.971 88.0605 405.158 87.8845 404.388 87.5832C404.008 87.4526 403.657 87.2515 403.352 86.9904C403.028 86.6748 402.775 86.295 402.607 85.8755C402.44 85.456 402.362 85.0062 402.379 84.555C402.379 82.6123 403.602 81.3195 405.896 81.0196V80.1696C405.896 79.7554 406.039 79.6126 406.454 79.6126L407.426 79.584Z"
                    fill="#085EB6"
                  />
                  <path
                    d="M457.69 76.8271H446.761V110.545H457.69V76.8271Z"
                    fill="#085EB6"
                  />
                  <path
                    d="M505.567 69.135H494.638V110.545H505.567V69.135Z"
                    fill="#0A76E5"
                  />
                  <path
                    d="M473.788 49.9082H462.858V110.538H473.788V49.9082Z"
                    fill="#0A76E5"
                  />
                  <path
                    d="M490.035 30.3887H479.105V110.538H490.035V30.3887Z"
                    fill="#085EB6"
                  />
                  <path
                    opacity="0.46"
                    d="M430.671 50.4583H383.166V53.5937H430.671V50.4583Z"
                    fill="#6DB5FF"
                  />
                  <path
                    opacity="0.46"
                    d="M429.206 30.7742H383.166V37.045H429.206V30.7742Z"
                    fill="#6DB5FF"
                  />
                  <path
                    opacity="0.46"
                    d="M448.169 41.002H383.166V44.1374H448.169V41.002Z"
                    fill="#6DB5FF"
                  />
                </g>
                <g filter="url(#filter1_d_2500_950)">
                  <rect
                    x="29.5"
                    y="329"
                    width="136"
                    height="103"
                    rx="8"
                    fill="#FAFAFA"
                  />
                </g>
                <path
                  d="M55.5 404L66.5 389H78.5L86.5 382H96.5L109.5 375L123.5 370L133.5 382L139.5 363"
                  stroke="#0A76E5"
                  strokeWidth="2"
                />
                <path
                  opacity="0.46"
                  d="M85.54 348H39.5V354.271H85.54V348Z"
                  fill="#6DB5FF"
                />
                <defs>
                  <filter
                    id="filter0_d_2500_950"
                    x="351.5"
                    y="16.4683"
                    width="200"
                    height="125.462"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="8" />
                    <feGaussianBlur stdDeviation="5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_2500_950"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_2500_950"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter1_d_2500_950"
                    x="19.5"
                    y="327"
                    width="156"
                    height="123"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="8" />
                    <feGaussianBlur stdDeviation="5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_2500_950"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_2500_950"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_2500_950"
                    x1="266.387"
                    y1="151.024"
                    x2="248.304"
                    y2="329.08"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#010101" stop-opacity="0" />
                    <stop offset="0.95" stop-color="#010101" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_2500_950"
                    x1="16835.9"
                    y1="10409.5"
                    x2="15279"
                    y2="21777.7"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#010101" stop-opacity="0" />
                    <stop offset="0.95" stop-color="#010101" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_2500_950"
                    x1="6552.4"
                    y1="34353.3"
                    x2="177.429"
                    y2="32626.1"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#010101" stop-opacity="0" />
                    <stop offset="0.95" stop-color="#010101" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_2500_950"
                    x1="5827.57"
                    y1="35415.4"
                    x2="2283.31"
                    y2="35133.1"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#010101" stop-opacity="0" />
                    <stop offset="0.95" stop-color="#010101" />
                  </linearGradient>
                  <linearGradient
                    id="paint4_linear_2500_950"
                    x1="8634.03"
                    y1="14815.5"
                    x2="6706.77"
                    y2="28865.4"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#010101" stop-opacity="0" />
                    <stop offset="0.95" stop-color="#010101" />
                  </linearGradient>
                  <linearGradient
                    id="paint5_linear_2500_950"
                    x1="8976.45"
                    y1="7693.25"
                    x2="9284.69"
                    y2="14861.1"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#010101" stop-opacity="0" />
                    <stop offset="0.95" stop-color="#010101" />
                  </linearGradient>
                  <linearGradient
                    id="paint6_linear_2500_950"
                    x1="255.52"
                    y1="124.469"
                    x2="325.425"
                    y2="120.844"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white" stop-opacity="0" />
                    <stop offset="0.95" stop-color="white" />
                  </linearGradient>
                  <linearGradient
                    id="paint7_linear_2500_950"
                    x1="20186.6"
                    y1="23035.3"
                    x2="20667"
                    y2="10789.6"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#010101" stop-opacity="0" />
                    <stop offset="0.95" stop-color="#010101" />
                  </linearGradient>
                  <linearGradient
                    id="paint8_linear_2500_950"
                    x1="12458.9"
                    y1="13030.9"
                    x2="12637"
                    y2="8472.99"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#010101" stop-opacity="0" />
                    <stop offset="0.95" stop-color="#010101" />
                  </linearGradient>
                  <linearGradient
                    id="paint9_linear_2500_950"
                    x1="9231.65"
                    y1="1243.46"
                    x2="8336.02"
                    y2="986.052"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#010101" stop-opacity="0" />
                    <stop offset="0.95" stop-color="#010101" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          <div className="row align-items-center justify-content-center g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-4 g-4 py-3 mt-3 ">
            <BluePills
              className="col-12 col-md-4"
              to="/"
              title="SEO Enterprise"
            />
            <BluePills
              className="col-12 col-md-4"
              to="/"
              title="Google Ads Enterprise"
            />
            <BluePills
              className="col-12 col-md-4"
              to="/"
              title="Social Media Enterprise"
            />
          </div>
          <div className="mt-4 m-auto col-md-3 col-lg-2 col-7">
            <BlueBtn to="/creation" title="Get Started" />
          </div>
        </Container>
      </Container>

      <Container className="py-3 mt-3">
        <div className="row align-items-center py-3 g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-4 g-4">
          <div className="col-12 col-md-12 col-lg-6">
            <img
              width="100%"
              src={dashboardagency}
              className=""
              alt="dasboard agency"
            />
          </div>
          <div className="col-12 col-md-12 col-lg-6">
            <h2 className="all_h1_title">
              Easily track your projects through <span>client dashborad</span>
            </h2>
            <p className="all_h1_title_p">
              Whether you’re just getting started or are an established brand,
              our powerful platform helps your business grow.
            </p>
          </div>
        </div>

        <div className="row align-items-center py-3 g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-4 g-4">
          <div className="col-12 col-md-12 col-lg-6">
            <h2 className="all_h1_title">
              <span>Pellentesque</span> morbi
            </h2>
            <p className="all_h1_title_p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique
              feugiat ut blandit nam eget ornare senectus ut. Ultrices
              pellentesque eleifend vehicula volutpat rhoncus metus hendrerit
              est habitant. Nam ut at elementum enim. In tempor, lorem faucibus
              tincidunt convallis turpis ipsum. Porttitor eu fusce in non
              porttitor commodo. Fusce ullamcorper urna, amet donec aliquet ut.
            </p>
            <p className="all_h1_title_p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique
              feugiat ut blandit nam eget ornare senectus ut. Ultrices
              pellentesque eleifend vehicula volutpat rhoncus metus hendrerit
              est habitant.
            </p>
          </div>
          <div className="col-12 col-md-12 col-lg-6">
            <video
              loop
              autoPlay
              muted
              width="100%"
              src={demovideo}
              className=""
              alt="dasboard agency"
              type="video/mp4"
            />
          </div>
        </div>

        <div className="counters my-sm-1 my-4">
          <div
            className="row justify-content-between align-items-center"
            id="counter"
          >
            <div className="col-md-2 col-sm-4 col-4 ">
              <div className="counter1">
                <div className="d-flex justify-content-center align-items-start">
                  <div>
                    <h2 className="counter-value" data-count="98">
                      98
                    </h2>
                  </div>
                  <div>
                    <img className="" src={arrowup} alt="demo" />
                  </div>
                </div>
                <div>
                  <p className="text-white">Customers</p>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-4 col-4 ">
              <div className="counter1">
                <div className="d-flex justify-content-center align-items-start">
                  <div>
                    <h2 className="counter-value" data-count="98">
                      98
                    </h2>
                  </div>
                  <div>
                    <img className="" src={arrowup} alt="demo" />
                  </div>
                </div>
                <div>
                  <p className="text-white">Customers</p>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-4 col-4 ">
              <div className="counter1">
                <div className="d-flex justify-content-center align-items-start">
                  <div>
                    <h2 className="counter-value" data-count="98">
                      98
                    </h2>
                  </div>
                  <div>
                    <img className="" src={arrowup} alt="demo" />
                  </div>
                </div>
                <div>
                  <p className="text-white">Customers</p>
                </div>
              </div>
            </div>

            <div className="col-md-6 text-center col-sm-12  col-12">
              <div className="col-md-6 mt-md-0 mt-4 col-7 mr-0 m-auto">
                <OutlineLinkBtn
                  icon={<AiOutlineArrowRight />}
                  title="View Case Study"
                  link="/casestudies"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>

      <MainSlider
        data={testimonial}
        SliderCard={TestimonialCard}
        titleClass="all_h1_title"
        SliderTitle={
          <>
            <span>Thanks</span> for your
            <span> sweet</span> words
          </>
        }
      />

      <Container className="py-3 mt-3">
        <div className="text-center my-2">
          <h2 className="all_h1_title">
            Our <span>Partners</span>
          </h2>
        </div>
        <div className="row align-items-center justify-content-center g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-4 g-4">
          <PartnersList />
        </div>
      </Container>

      <Cta
        bgcolor="greengradient"
        ctasubheading="With our Digital Solutions"
        ctaheading="Search your digital solution here"
        btntype="out_line_btn"
        btntext="Get In Touch"
      >
        <div className="mt-3">
          <OutlineBtn title="Get Started" />
        </div>
      </Cta>

      <MainSlider
        data={portfolio}
        SliderCard={VideoCard}
        titleclassName="text-md-start text-center"
        SliderTitle={
          <>
            A<span> Glance </span> at Our <span>Projects</span>
          </>
        }
      />

      <Faqs catId={1} />
    </>
  );
};
