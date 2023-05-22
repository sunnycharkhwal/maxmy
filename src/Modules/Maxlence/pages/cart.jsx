import Slider from "react-slick";
import React from "react";
import youtubecamp from "../assests/youtubecamp.jpg";
import pageseo from "../assests/pageseo.jpg";
import socialmediamarketing from "../assests/socialmediamarketing.jpg";
import emailmarketing from "../assests/emailmarketing.jpg";
import DeleteIcon from "../../../img/del.svg";
import ListIcon from "../../../img/serv.svg";
import { NavLink } from "react-router-dom";

export const Cart = () => {
  return (
    <>
      <div className=" container mt-5 mb-5">
        <div className="row g-3">
          <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
            <CartList />
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
            <CartTotal />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="cart_slider_top_div">
            <div className="container">
              <SliderBottom />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const CartList = () => {
  const ListData = [
    {
      ListImg: ListIcon,
      ListTitle: "Luno Electrical - Creation - Website",
      type: "Advanced",
      Frequency: "Monthly",
      price: "$2000",
    },
    {
      ListImg: ListIcon,
      ListTitle: "Luno Electrical - Creation - Website",
      type: "Advanced",
      Frequency: "Monthly",
      price: "$2000",
    },
    {
      ListImg: ListIcon,
      ListTitle: "Luno Electrical - Creation - Website",
      type: "Advanced",
      Frequency: "Monthly",
      price: "$2000",
    },
    {
      ListImg: ListIcon,
      ListTitle: "Luno Electrical - Creation - Website",
      type: "Advanced",
      Frequency: "Monthly",
      price: "$2000",
    },
    {
      ListImg: ListIcon,
      ListTitle: "Luno Electrical - Creation - Website",
      type: "Advanced",
      Frequency: "Monthly",
      price: "$2000",
    },
  ];
  const ListApp = (props) => {
    return (
      <>
        <tr>
          <td>
            <div>
              <ul>
                <li>
                  <img
                    className="list_icon_cart"
                    src={props.ListImg}
                    alt="icon"
                  />
                </li>
                <li className="cart_title_div">{props.ListTitle}</li>
              </ul>
            </div>
          </td>
          <td className="cart_title_div_td cart_title_div_Type">
            {props.type}
          </td>
          <td className="cart_title_div_td cart_title_div_monthly">
            {props.Frequency}
          </td>
          <td className="cart_title_div_td cart_title_div_price">
            {props.price}
          </td>
          <td className="cart_title_div_td cart_title_div_delete_icon">
            <img src={DeleteIcon} alt="icon" />
          </td>
        </tr>
        <div className="td_body_cart_div_mb"></div>
      </>
    );
  };
  return (
    <>
      <table class="table cart_tabel">
        <thead>
          <tr className="cart_title_div_top_tr">
            <th scope="col">Product/Service Title</th>
            <th scope="col">Type</th>
            <th scope="col">Frequency</th>
            <th scope="col">Price</th>
            <th scope="col">action</th>
          </tr>
        </thead>
        <tbody className="td_body_cart_div">
          {ListData.map((val, i) => {
            return <ListApp key={i} {...val} />;
          })}
        </tbody>
      </table>
    </>
  );
};
const CartTotal = () => {
  const PriceData = [
    {
      title: "Sub Total",
      price: "$6000",
    },
    {
      title: "GST 12%",
      price: "$720",
    },
  ];
  const PriceApp = (props) => {
    return (
      <div className="row">
        <div className="col-6">
          <p>{props.title}</p>
        </div>
        <div className="col-6 cart_total_top_inner_color">
          <p>{props.price}</p>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="cart_total_top">
        <div className="row">
          <div className="col-6">
            <p>Sub Total</p>
          </div>
          <div className="col-6 text-end">
            <p>Amount</p>
          </div>
        </div>
      </div>
      <div className="cart_total_top_inner">
        {PriceData.map((val, i) => {
          return <PriceApp key={i} {...val} />;
        })}
        <hr />
        <div className="row">
          <div className="col-6">
            <p>Total</p>
          </div>
          <div className="col-6 cart_total_top_inner_color">
            <p>$6720</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 cart_total_top_btn ">
            <NavLink to="/checkout" className="btn full_btn">
              Checkout
            </NavLink>
          </div>
        </div>
      </div>
      <div className="cart_total_top_call">
        <p>Need Help?</p>
        <a href="tel:+ 877-685-2222">
          <span>Call</span> 877-685-2222
        </a>
      </div>
    </>
  );
};
const SliderBottom = () => {
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
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <>
      <div className="my_slick_slider_title">
        <h2 className="py-2">Frequently purchased</h2>
      </div>
      <Slider className="slidebluearrows my_slick_slider py-2" {...settings}>
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
    </>
  );
};
