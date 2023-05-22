import { NavLink } from "react-router-dom";
import Eurotechlogo from "../assests/partners/eurotechlogo.png";
import Gasonelogo from "../assests/partners/gasonelogo.png";
import Levelheadlogo from "../assests/partners/Levelheadlogo.png";
import Velaqualogo from "../assests/partners/velaqualogo.png";
import Roasformula from "../assests/roasformula.png";
import Gadsoptimise from "../assests/gadsoptimise.png";
import Gadsvideo from "../assests/gadsvideo.png";
import Slider from "react-slick";
import React from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";
import Videocamptool1 from "../assests/videocamptool1.png";
import Videocamptool2 from "../assests/videocamptool2.png";
import Videocamptool3 from "../assests/videocamptool3.png";
import Videocamptool4 from "../assests/videocamptool4.png";
import Videocamptool5 from "../assests/videocamptool5.png";
import Videocamptool6 from "../assests/videocamptool6.png";
import { Faqs } from "../components/Faqs";

import Facebookcard from "../assests/facebookcard.png";
import Instagramcard from "../assests/instagramcard.png";
import Linkedincard from "../assests/linkedincard.png";
import Pinterestcard from "../assests/pinterestcard.png";
import Twittercard from "../assests/twittercard.png";
import Youtubecard from "../assests/youtubecard.png";
import { AiFillCloseCircle } from "react-icons/ai";
import Modal from "react-bootstrap/Modal";
export const SocialMediaService = () => {
  const [showVideoModal, setShowVideoModal] = React.useState(false);
  return (
    <>
      <div
        className="container-fluid  py-3 "
        style={{ backgroundColor: "#fafafa" }}
      >
        <div className="container my-sm-4 py-0 my-0">
          <div className="row my-4 justify-content-center align-items-center text-sm-start text-center">
            <div className="col-sm-7 col-12 my-3 ">
              <h1 className="font-weight-bold my-sm-4 all_h1_title">
                Enterprise <span> Social Media </span> <br /> Service
              </h1>
              <p className="">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem
                architecto, inventore placeat est porro atque tempore nobis
                harum minima. Eum?
              </p>
              <div className="mt-5">
                <NavLink
                  to="/getintouch"
                  className="getstartbtn fontpop mx-2 my-2"
                >
                  Send Me A Proposal
                </NavLink>
                <a
                  className="ctabtn viewjectbtn fontpop mx-2 my-2 "
                  href="tel:+496170961709"
                >
                  123-456-7890
                </a>
              </div>
            </div>
            <div className="col-sm-5 wow animate__animated animate__fadeInUp">
              <img
                className="w-100"
                src="https://wewakedev.github.io/Maxlence-Official-Website/assests/enterprisesocialhero.png"
                alt="sd"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid  py-3 ">
        <div className="container my-sm-4 py-0 my-0">
          <div className="row my-4 justify-content-center align-items-center text-sm-start text-center">
            <div className="col-sm-6   order-md-1 order-sm-2 order-2">
              <img
                className="w-100"
                src="https://wewakedev.github.io/Maxlence-Official-Website/assests/enterprisesocial2.png"
                alt="jf"
              />
            </div>

            <div className="col-sm-6 col-12 my-3 order-md-2 order-sm-1 order-1  ">
              <h2 className="font-weight-bold my-sm-4 all_h1_title">
                <b>
                  <span> Expand </span> your business with our
                  <span> Enterprise Social Media</span> Service
                </b>
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem
                architecto, inventore placeat est porro atque tempore nobis
                harum minima. Eum?
              </p>
              <div className="mt-4">
                <NavLink
                  to="/getintouch"
                  className="getstartbtn fontpop mx-2 my-2"
                >
                  Request A Demo
                </NavLink>

                <a
                  className="ctabtn viewjectbtn fontpop mx-2 my-2 "
                  href="tel:+496170961709"
                >
                  View Case Studies
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-3 homepartners">
        <div className="container">
          <div className="row text-center align-items-center">
            <div className="col-sm-3 col-6 my-sm-3  s">
              <img src={Eurotechlogo} alt="f" />
            </div>
            <div className="col-sm-3 col-6 my-sm-3 ">
              <img src={Gasonelogo} alt="f" />
            </div>
            <div className="col-sm-3 col-6 my-sm-3 ">
              <img src={Levelheadlogo} alt="f" />
            </div>
            <div className="col-sm-3 col-6 my-sm-3 ">
              <img src={Velaqualogo} alt="f" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid py-3"
        style={{ backgroundColor: "#fafafa" }}
      >
        <div className="container my-sm-4 py-0 my-0">
          <div className="row my-4 justify-content-center align-items-center text-sm-start text-center">
            <div className="col-md-6 col-12 my-3 ">
              <h2 className="font-weight-bold my-sm-4 all_h1_title">
                Lorem ipsum <span>dolor</span> sit.
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem
                architecto, inventore placeat est porro atque tempore nobis
                harum minima. Eum?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Numquam, sit!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam iusto id, repellat accusamus iste omnis nesciunt minus,
                dignissimos nobis dicta quos pariatur accusantium! Ipsa aliquam
                delectus neque eveniet, doloribus quia?
              </p>
            </div>
            <div className="col-md-5 ">
              <SliderBottom />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid  py-5" style={{ background: "#fff" }}>
        <div className="container seoservices">
          <div
            className=" text-center my-3 "
            style={{ visibility: "visible", animationName: "fadeInDown" }}
          >
            <h2 className="font-weight-bold my-sm-4 all_h1_title">
              What services are covered in <span> Enterprise Social Media</span>
            </h2>
          </div>

          <div
            className="row py-2 justify-content-around align-items-centerwow animate__ animate__fadeInDown animate__slow animated"
            style={{ visibility: "visible", animationName: "fadeInDown" }}
          >
            <div className="col-md-3 my-3 col-6">
              <div>
                <img className="w-100" src={Facebookcard} alt="d" />
              </div>
            </div>
            <div className="col-md-3 my-3 col-6">
              <div>
                <img className="w-100" src={Instagramcard} alt="d" />
              </div>
            </div>
            <div className="col-md-3 my-3 col-6">
              <div>
                <img className="w-100" src={Linkedincard} alt="d" />
              </div>
            </div>
          </div>

          <div
            className="row justify-content-around wow animate__ animate__fadeInDown animate__slow animated"
            style={{ visibility: "visible", animationName: "fadeInDown" }}
          >
            <div className="col-md-3 my-3 col-6">
              <div>
                <img className="w-100" src={Pinterestcard} alt="d" />
              </div>
            </div>
            <div className="col-md-3 my-3 col-6">
              <div>
                <img className="w-100" src={Twittercard} alt="d" />
              </div>
            </div>
            <div className="col-md-3 my-3 col-6">
              <div>
                <img className="w-100" src={Youtubecard} alt="d" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid mt-5 mystyle">
        <div className="row justify-content-center py-5">
          <div className="col-12 text-center wow animate__animated animate__fadeInDown">
            <h2 className="text-white all_h1_title">
              We’d love to be your partner
            </h2>
          </div>
          <div className="text-center mt-4  ">
            <a
              className="ctabtn viewjectbtn border-white text-white fontpop  mx-2 my-2"
              href="tel:+496170961709"
            >
              Send Me a Proposal
            </a>

            <NavLink
              to="/getintouch"
              className="ctabtn bg-white border-none fontpop  mx-2 my-2"
            >
              Get In Touch &#10230;
            </NavLink>
          </div>
        </div>
      </div>
      <div className="container py-2 mt-5">
        <div className="gadsservicehead py-3 text-center wow animate__animated animate__fadeInDown">
          <h2 className="all_h1_title">
            <b>
              What <span> different</span> we do for
              <span> Enterprise Social Media</span>
            </b>
          </h2>
        </div>
        <div className="row my-3 justify-content-center">
          <div className="col-sm-5 m-3">
            <div className="h4">
              <span>
                <b>Remarketing</b>
              </span>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                blanditiis porro saepe, officia natus cumque commodi. Officia
                illum maxime aut!
              </p>
            </div>
          </div>
          <div className="col-sm-5 m-3">
            <div className="h4">
              <span>
                <b>Specialized media buys on website</b>
              </span>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                blanditiis porro saepe, officia natus cumque commodi. Officia
                illum maxime aut!
              </p>
            </div>
          </div>
          <div className="col-sm-5 m-3">
            <div className="h4">
              <span>
                <b>Development of ad creatives and landing pages</b>
              </span>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                blanditiis porro saepe, officia natus cumque commodi. Officia
                illum maxime aut!
              </p>
            </div>
          </div>
          <div className="col-sm-5 m-3">
            <div className="h4">
              <span>
                <b>Geofencing.</b>
              </span>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                blanditiis porro saepe, officia natus cumque commodi. Officia
                illum maxime aut!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container table-responsive my-2 py-2">
        <div className="my-5 py-2 text-center ">
          <h2 className="all_h1_title">
            <span>Social Media Enterprise</span> Services
          </h2>
        </div>

        <table className="table  table-bordered planpricetable   table-striped">
          <thead>
            <tr>
              <th className="base" colSpan="15">
                <h3>Features</h3>
              </th>
              <th className=" text-center base" colSpan="2">
                <h3>Enterprise</h3>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="smediarow">
              <td colSpan="15">Facebook Ads</td>
              <td className=" text-center ">
                <b>Yes</b>
              </td>
            </tr>
            <tr className="smediarow">
              <td colSpan="15">Facebook cataloge for ecommerce</td>
              <td className=" text-center ">
                <b>Yes</b>
              </td>
            </tr>
            <tr className="smediarow">
              <td colSpan="15">Facebook shop</td>
              <td className=" text-center ">
                <b>Yes</b>
              </td>
            </tr>
            <tr className="smediarow">
              <td colSpan="15">Instagram shop</td>
              <td className=" text-center ">
                <b>Yes</b>
              </td>
            </tr>
            <tr className="smediarow">
              <td colSpan="15">Facebook conversion API</td>
              <td className=" text-center ">
                <b>Yes</b>
              </td>
            </tr>
            <tr className="smediarow">
              <td colSpan="15">Increasing ROI through bid optimization</td>
              <td className=" text-center ">
                <b>Yes</b>
              </td>
            </tr>
            <tr className="smediarow">
              <td colSpan="15">Instagram reel ads</td>
              <td className=" text-center ">
                <b>Yes</b>
              </td>
            </tr>
            <tr className="smediarow">
              <td colSpan="15">Remarketing</td>
              <td className=" text-center ">
                <b>Yes</b>
              </td>
            </tr>
            <tr className="smediarow">
              <td colSpan="15">
                {" "}
                Retargeting & targeting different types of audiences (Hot & Cold
                Audience)
              </td>
              <td className=" text-center ">
                <b>Yes</b>
              </td>
            </tr>
            <tr className="smediarow">
              <td colSpan="15">Linkedin ads</td>
              <td className=" text-center ">
                <b>Yes</b>
              </td>
            </tr>
            <tr className="smediarow">
              <td colSpan="15">Linkedin sales navigator for lead generation</td>
              <td className=" text-center ">
                <b>Yes</b>
              </td>
            </tr>
            <tr className="smediarow">
              <td colSpan="20" className=" py-4 text-center ">
                <b>
                  <NavLink
                    className="getstartbtn fontpop"
                    to="/Questionare_Page"
                  >
                    Get Started
                  </NavLink>
                </b>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        className="container-fluid  py-3 "
        style={{ backgroundColor: "#EEF6FF" }}
      >
        <div className="container my-sm-4 py-0 my-0">
          <div className="gadsoptimisehead text-center py-3">
            <h2 className="font-weight-bold my-sm-4 all_h1_title">
              Optimize your <span> Google Ads </span> account for
              <span>ROAS</span>
            </h2>
          </div>
          <div className="row my-4 justify-content-center align-items-center text-sm-start text-center">
            <div className="col-sm-7 col-12 my-3  wow animate__animated animate__fadeInUp">
              <h3 className="font-weight-bold my-sm-4 ">
                What is <span> ROAS </span>
              </h3>
              <p className="">
                ROAS stands for return on ad spend—a marketing metric that
                measures the amount of revenue your business earns for each
                dollar it spends on advertising. For all intents and purposes,
                ROAS is practically the same as another metric you’re probably
                familiar with: return on investment, or ROI. In this case, the
                money you’re spending on digital advertising is the investment
                on which you’re tracking returns.
                <br />
                <br /> At the most basic level, ROAS measures the effectiveness
                of your advertising efforts; the more effectively your
                advertising messages connect with your prospects, the more
                revenue you’ll earn from each dollar of ad spend. The higher
                your ROAS, the better.
                <br />
                <br /> If you’re so inclined, you can measure ROAS at a variety
                of levels within your Google Ads account: the account level, the
                campaign level, the ad group level, and so on. As long as you
                know how much you’re spending and earning at that particular
                level, you can calculate ROAS.
              </p>

              <div>
                <img className="w-100" src={Roasformula} alt="d" />
              </div>
            </div>
            <div className="col-sm-5 wow animate__animated animate__fadeInUp">
              <img className="w-100" src={Gadsoptimise} alt="d" />
            </div>

            <div className="row my-4 justify-content-center align-items-center text-sm-start text-center">
              <div className="col-sm-7 col-12 my-3  wow animate__animated animate__fadeInUp">
                <h3 className="font-weight-bold text-center my-sm-4 ">
                  <b>
                    Maximize <span>ROAS</span>
                  </b>
                </h3>
                <p className="">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Provident facere repellat blanditiis magnam accusantium
                    perspiciatis, repudiandae ullam tempora delectus vitae.
                  </p>
                  <br />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Provident facere repellat blanditiis magnam accusantium
                    perspiciatis, repudiandae ullam tempora delectus vitae.
                  </p>
                  <br />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Provident facere repellat blanditiis magnam accusantium
                    perspiciatis, repudiandae ullam tempora delectus vitae.
                  </p>
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid gadsvideo px-0">
        <img
          className="w-100"
          style={{ cursor: "pointer" }}
          src={Gadsvideo}
          alt="hfd"
          onClick={() => setShowVideoModal(true)}
        />
        <VideoModal
          show={showVideoModal}
          onHide={() => setShowVideoModal(false)}
        />
      </div>
      <div className="container my-sm-4 py-sm-3 py-3 my-3 ">
        <div className="campworkhead py-3 my-3 text-center">
          <h2 className="all_h1_title">Why Our Campaigns Work</h2>
          <p>We use the best tools</p>
        </div>

        <div className="row justify-content-around">
          <div className="col-sm-3 m-3 text-center campaignwork wow animate__animated animate__fadeInUp animate__delay-1s">
            <div className="videocamptoolicon campworkicon">
              <img src={Videocamptool1} alt="ś" />
            </div>
            <div className="videocamptooltitle campworktitle my-3">
              <h6>
                <b>Seo</b>
              </h6>
            </div>
            <div className="videocamptooltext campworktext ">
              <small>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Corrupti expedita dolor quam laborum nostrum placeat!.
              </small>
            </div>
          </div>

          <div className="col-sm-3 m-3 my-sm-3 p-sm-0 text-center campaignwork wow animate__animated animate__fadeInUp animate__delay-1s">
            <div className="videocamptoolicon campworkicon">
              <img src={Videocamptool2} alt="sd" />
            </div>
            <div className="videocamptooltitle campworktitle my-3">
              <h6>
                <b>Competitive Research</b>
              </h6>
            </div>
            <div className="videocamptooltext campworktext ">
              <small>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Corrupti expedita dolor quam laborum nostrum placeat!.
              </small>
            </div>
          </div>

          <div className="col-sm-3 m-3 my-sm-3 p-sm-0 text-center campaignwork wow animate__animated animate__fadeInUp animate__delay-1s">
            <div className="videocamptoolicon campworkicon">
              <img src={Videocamptool3} alt="s" />
            </div>
            <div className="videocamptooltitle campworktitle my-3">
              <h6>
                <b>Site Audit</b>
              </h6>
            </div>
            <div className="videocamptooltext campworktext ">
              <small>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Corrupti expedita dolor quam laborum nostrum placeat!.
              </small>
            </div>
          </div>

          <div className="col-sm-3 m-3 my-sm-3 p-sm-0 text-center campaignwork wow animate__animated animate__fadeInUp animate__delay-1s">
            <div className="videocamptoolicon campworkicon">
              <img src={Videocamptool4} alt="d" />
            </div>
            <div className="videocamptooltitle campworktitle my-3">
              <h6>
                <b>Keywords</b>
              </h6>
            </div>
            <div className="videocamptooltext campworktext ">
              <small>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Corrupti expedita dolor quam laborum nostrum placeat!.
              </small>
            </div>
          </div>

          <div className="col-sm-3 m-3 my-sm-3 p-sm-0 text-center campaignwork wow animate__animated animate__fadeInUp animate__delay-1s">
            <div className="videocamptoolicon campworkicon">
              <img src={Videocamptool5} alt="sd" />
            </div>
            <div className="videocamptooltitle campworktitle my-3">
              <h6>
                <b>Ads</b>
              </h6>
            </div>
            <div className="videocamptooltext campworktext ">
              <small>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Corrupti expedita dolor quam laborum nostrum placeat!.
              </small>
            </div>
          </div>

          <div className="col-sm-3 m-3 my-sm-3 p-sm-0 text-center campaignwork wow animate__animated animate__fadeInUp animate__delay-1s">
            <div className="videocamptoolicon campworkicon">
              <img src={Videocamptool6} alt="d" />
            </div>
            <div className="videocamptooltitle campworktitle my-3">
              <h6>
                <b>Analysis</b>
              </h6>
            </div>
            <div className="videocamptooltext campworktext ">
              <small>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Corrupti expedita dolor quam laborum nostrum placeat!.
              </small>
            </div>
          </div>
        </div>
      </div>
      <Faqs />
    </>
  );
};
const SliderBottom = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
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
      name: "sunny charkhwal",
      img: "https://wewakedev.github.io/Maxlence-Official-Website/assests/navicons/testiprofile.jpg",
      text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, cum itaque ipsa magni dolor vero.",
    },
    {
      name: "sunny charkhwal",
      img: "https://wewakedev.github.io/Maxlence-Official-Website/assests/navicons/testiprofile.jpg",
      text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, cum itaque ipsa magni dolor vero.",
    },
    {
      name: "sunny charkhwal",
      img: "https://wewakedev.github.io/Maxlence-Official-Website/assests/navicons/testiprofile.jpg",
      text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, cum itaque ipsa magni dolor vero.",
    },
    {
      name: "sunny charkhwal",
      img: "https://wewakedev.github.io/Maxlence-Official-Website/assests/navicons/testiprofile.jpg",
      text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, cum itaque ipsa magni dolor vero.",
    },
  ];
  const SliderApp = (props) => {
    return (
      <>
        <div>
          <div className="seo_service_rating_div">
            <div className="seo_service_rating_inner_div">
              <img src={props.img} alt="img" />
              <p>{props.name}</p>
            </div>
            <h6>{props.text}</h6>
            <div className="seo_service_rating_star_div">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalf />
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <Slider className="slidebluearrows my_slick_slider py-2" {...settings}>
        {SliderData.map((val, i) => {
          return <SliderApp key={i} {...val} />;
        })}
      </Slider>
    </>
  );
};
const VideoModal = (props) => (
  <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    className="video_div_top"
  >
    <Modal.Body className="video_div_body">
      <iframe
        className="video_div"
        src="https://www.youtube.com/embed/mq508HXzccI"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <AiFillCloseCircle
        className="video_modal_close_btn"
        onClick={props.onHide}
      />
    </Modal.Body>
  </Modal>
);
