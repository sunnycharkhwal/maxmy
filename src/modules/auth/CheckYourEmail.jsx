import { NavLink } from "react-router-dom";
import { LoginInput } from "../common/LoginComponents";
import LoginImg from "../../pics/loginImg.svg";
import React from "react";
import Slider from "react-slick";
export const CheckYourEmail = () => {
  return (
    <>
      <div className="login_top_div">
        <div className="login_top_div_inner">
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 p-0">
              <div className="login_slider_col_div">
                <div>
                  <SliderBottom />
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12  p-0">
              <div className="login_input_col_div">
                <div className="login_input_div_top">
                  <div className="login_input_div">
                    <h3>Maxlence</h3>
                    <h4>Check Your Email</h4>
                    <p>
                      We sent a password reset link to akhilesh@maxlence.com.au
                    </p>
                  </div>
                </div>
                <div className="login_form_div_top">
                  <div className="login_div_div">
                    <div className="row g-3 mt-3">
                      <div className="col-12">
                        <NavLink
                          to="/set_new_passoword"
                          title="true"
                          className="btn login_btn"
                        >
                          Open Email
                        </NavLink>
                      </div>
                      <div className="col-12">
                        <div className="check_your_email">
                          <p>
                            Did not receive an email?{" "}
                            <NavLink to="/check_your_email">Resend</NavLink>
                          </p>
                        </div>
                        <div className="login_forgot_btn justify-content-center">
                          <NavLink to="/">Back to login</NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <SliderBottom /> */}
    </>
  );
};
const SliderBottom = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 6000,
    autoplaySpeed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  const SliderData = [
    {
      img: LoginImg,
      title: "Simplify project management with our tool",
      subTitle:
        "Lorem ipsum dolor sit amet consectetur. Gravida imperdiet tristique mauris sed quam lectus semper nunc. Ultrices orci in gravida maecenas faucibus ut.",
    },
    {
      img: LoginImg,
      title: "Simplify project management with our tool",
      subTitle:
        "Lorem ipsum dolor sit amet consectetur. Gravida imperdiet tristique mauris sed quam lectus semper nunc. Ultrices orci in gravida maecenas faucibus ut.",
    },
    {
      img: LoginImg,
      title: "Simplify project management with our tool",
      subTitle:
        "Lorem ipsum dolor sit amet consectetur. Gravida imperdiet tristique mauris sed quam lectus semper nunc. Ultrices orci in gravida maecenas faucibus ut.",
    },
  ];
  const SliderApp = (props) => {
    return (
      <>
        <div>
          <div className="slider_text_my_top">
            <img className="login_img" src={props.img} alt="login photo" />
            <div className="slider_text_my_inner">
              <div className="slider_text_my">
                <h3>{props.title}</h3>
                <p>{props.subTitle}</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <Slider {...settings}>
        {SliderData.map((val, i) => {
          return <SliderApp key={i} {...val} />;
        })}
      </Slider>
    </>
  );
};
