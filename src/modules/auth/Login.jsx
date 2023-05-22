import { NavLink } from "react-router-dom";
import { LoginInput } from "../common/LoginComponents";
import LoginImg from "../../pics/loginImg.svg";
import React from "react";
import Slider from "react-slick";
export const Login = () => {
  return (
    <>
      <div className=" d-flex p-5">
        <NavLink to="/hr/dashboard" className=" btn btn-secondary m-auto">
          hr
        </NavLink>
        <NavLink
          to="/management/dashboard"
          className=" btn  btn-warning m-auto"
        >
          pm
        </NavLink>
      </div>
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
                    <h4>Hello!</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Gravida imperdiet
                      tristique mauris sed quam lectus semper nunc. Ultrices
                      orci in gravida.
                    </p>
                  </div>
                </div>
                <div className="login_form_div_top">
                  <form className="login_form_div">
                    <div className="row g-3">
                      <div className="col-12">
                        <LoginInput
                          label="Login ID/Email"
                          type="email"
                          EyeIcon={false}
                          className="form-control"
                          placeholder="Login ID/Email"
                          errorMessage="error message 1"
                        />
                      </div>
                      <div className="col-12">
                        <LoginInput
                          label="Password"
                          type="password"
                          EyeIcon={true}
                          className="form-control login_password_outer"
                          placeholder="Password"
                          errorMessage="error message 2"
                        />
                        <div className="login_forgot_btn">
                          <NavLink to="/forgot_password">
                            Forgot Password?
                          </NavLink>
                        </div>
                      </div>
                      <div className="col-12">
                        <button type="submit" className="btn login_btn">
                          login
                        </button>
                      </div>
                    </div>
                  </form>
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
            <img className="login_img" src={props.img} alt="new" />
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
