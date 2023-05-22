import Whitetriangle from "../assests/whitetriangle.png";
import Timelinefadeline from "../assests/timelinefadeline.png";
import Slider from "react-slick";
import { GoPrimitiveDot } from "react-icons/go";
import Clientmv2 from "../assests/clientmv/clientmv2.jpg";
import Clientmv1 from "../assests/clientmv/clientmv1.jpg";
import Identity1 from "../assests/identity1.png";
import Identity2 from "../assests/identity2.png";
import Identity3 from "../assests/identity3.png";
import Dawkinslogo from "../assests/partners/dawkinslogo.png";

import Eurotechlogo from "../assests/partners/eurotechlogo.png";
import Gasonelogo from "../assests/partners/gasonelogo.png";
import Levelheadlogo from "../assests/partners/Levelheadlogo.png";
import Melblagerslogo from "../assests/partners/melblagerslogo.png";
import Melblogo from "../assests/partners/melblogo.png";
import Pstylinglogo from "../assests/partners/pstylinglogo.png";
import Tylerlogo from "../assests/partners/tylerlogo.png";
import Logo1 from "../assests/partners/logo 1.png";
import LogoGekko11 from "../assests/partners/logo_gekko-1 1.png";
import Velaqualogo from "../assests/partners/velaqualogo.png";
import Baysidelogo from "../assests/partners/baysidelogo.png";

export const AboutUs = () => {
  return (
    <>
      <div className="container-fluid p-sm-5 abouthero new1">
        <div className="container py-sm-5 py-0 my-0">
          <div className="row my-4 justify-content-center align-items-end">
            <div className="col-12 text-center">
              <h1 className="font-weight-bold text-white my-4">
                Video Sample Here
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-0 my-0">
        <div className="row my-4 justify-content-center align-items-end">
          <div className="col-12 text-center">
            <h2 className="font-weight-bold text-dark my-4">
              Discover Our <span>History</span>
            </h2>
          </div>
        </div>
      </div>
      <div>
        <div
          className="wrapper position-relative container-fluid"
          style={{
            zIndex: "0",
            background: "linear-gradient(180deg, #00C99C 0%, #035946 100%)",
            height: "12rem",
          }}
        >
          <div className="CenterMode_top">
            <MultipleItems />
          </div>
          <div className="timetri new2 ">
            <img src={Whitetriangle} alt="k" />
          </div>

          <div className="new3">
            <img src={Timelinefadeline} alt="ds" />
          </div>
        </div>
        <div className="container-fluid d-flex align-items-center new4">
          <div className="container py-5">
            <div className="row justify-content-center align-items-center">
              <div>
                <p className="text-white text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                  vero cum iusto aliquid odit praesentium minus expedita, et nam
                  reiciendis explicabo ea esse dignissimos, corporis blanditiis
                  illo? Ullam iusto asperiores iste veniam velit accusantium quo
                  perferendis mollitia quos. Atque, iusto recusandae repudiandae
                  necessitatibus at asperiores.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ceosection container-fluid bg-light  ">
        <div className="container mb-sm-4 py-sm-3 py-4 ">
          <div className="ceotitle text-center my-sm-4 py-sm-4 py-3  wow animate__animated animate__fadeInDown">
            <h1>
              <span>
                <b>CEO</b>
              </span>
              Speaks
            </h1>
          </div>
          <div className="row justify-content-around ">
            <div className="col-sm-4 wow animate__animated animate__fadeInUp">
              <img className="w-100 my-3" src={Clientmv2} alt="f" />
            </div>
            <div className="col-sm-6  wow animate__animated animate__fadeInUp">
              <p>
                With ruthless competition in the digital industry, momentous
                skills are the saviour. At Maxlence Consulting, qualified
                professionals of distinct interests collaborate to treat the
                clients with instant and unswerving digital solutions. We rely
                on both experience and knowledge and always encourage fresh and
                unorthodox ideas. We strive to be the kingpin of digital
                marketing on an international level, aiming to help accelerate
                the growth of businesses using our meticulous digital services
                which are infallible at all extent. Maxlence Consulting is
                building on its expertise to bring the power of artificial
                intelligence to meet the needs of real world organizations.
              </p>

              <p>
                <span>Our mission:</span> To bring value to the customers at an
                affordable cost & to help businesses expand by increasing their
                sales and recognition. We help organizations to reach their true
                potential by leveraging the power of creativity and technology
                and we leave them with a lasting impression.
              </p>
              <p>
                <span>Our vision:</span> To make AI embedded alternatives for
                all working sectors, these automated services will help humans
                balance their work and life.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="identities container my-sm-4 py-sm-5 py-0 my-3">
        <div className="identitestitle text-center my-3 py-3 wow animate__animated animate__fadeInDown">
          <h1>
            Our
            <span>
              <b>Identity</b>
            </span>
          </h1>
        </div>
        <div className="row justify-content-around align-items-center">
          <div className="col-sm-4 text-center wow animate__animated animate__fadeInUp animate__fast">
            <div className="id1icon my-3">
              <img src={Identity1} alt="e" />
            </div>
            <div className="id1content my-3">
              <h4 className="text-black">
                <b>Integrity</b>
              </h4>
              <small>
                We promote and practice transparency to build a strong
                relationship with our workforce and clientele. With an honest
                and confident stance we stay put to our commitments; and we are
                capable of any demanding project that comes our way.
              </small>
            </div>
          </div>

          <div className="col-sm-4 text-center wow animate__animated animate__fadeInUp animate__fast">
            <div className="id1icon my-3">
              <img src={Identity2} alt="d" />
            </div>
            <div className="id1content my-3">
              <h4 className="text-black">
                <b>Professionalism</b>
              </h4>
              <small>
                We exercise professionalism at all levels, every individual at
                Maxlence possess values of accountability, responsibility and
                excellence. The ethical conduct of our employees represents our
                strong foundation.
              </small>
            </div>
          </div>

          <div className="col-sm-4 text-center  wow animate__animated animate__fadeInUp animate__fast">
            <div className="id1icon my-3">
              <img src={Identity3} alt="d" />
            </div>
            <div className="id1content my-3">
              <h4 className="text-black">
                <b>Teamwork</b>
              </h4>
              <small>
                Working together is extremely necessary for any organization’s
                success. Our strength lies in our combined experience and
                expertise, with which we are competent to accomplish great
                things.
              </small>
            </div>
          </div>
        </div>
      </div>
      <div
        className="teamsection container-fluid "
        style={{ background: "#0A76E5" }}
      >
        <div className="container py-5">
          <div className="row justify-content-around">
            <div className="col-sm-4 text-light text-sm-start text-center wow animate__animated animate__fadeInDown">
              <h1>
                <span style={{ color: "#AAD4FF" }}>
                  <b> Maxlence's</b>
                </span>
                Team
              </h1>
            </div>
            <div className="col-sm-6">
              <div className="row">
                <div className="col-sm-6 my-2">
                  <img className="w-100" src={Clientmv1} alt="s" />
                  <small style={{ color: "#fff" }}>Lorem, ipsum.</small>
                  <br />
                  <small>
                    <span style={{ color: "#AAD4FF" }}>
                      Chief Executive Officer
                    </span>
                  </small>
                </div>
                <div className="col-sm-6 my-2">
                  <img className="w-100" src={Clientmv1} alt="s" />
                  <small style={{ color: "#fff" }}>Lorem, ipsum.</small>
                  <br />
                  <small>
                    <span style={{ color: "#AAD4FF" }}>
                      Chief Executive Officer
                    </span>
                  </small>
                </div>
                <div className="col-sm-6 my-2">
                  <img className="w-100" src={Clientmv1} alt="s" />
                  <small style={{ color: "#fff" }}>Lorem, ipsum.</small>
                  <br />
                  <small>
                    <span style={{ color: "#AAD4FF" }}>
                      Chief Executive Officer
                    </span>
                  </small>
                </div>
                <div className="col-sm-6 my-2">
                  <img className="w-100" src={Clientmv1} alt="s" />
                  <small style={{ color: "#fff" }}>Lorem, ipsum.</small>
                  <br />
                  <small>
                    <span style={{ color: "#AAD4FF" }}>
                      Chief Executive Officer
                    </span>
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5 homepartners">
        <div className="partnershead text-center wow animate__animated animate__fadeInDown ">
          <h1>
            Our <span>Partners</span>
          </h1>
        </div>
        <div className="row text-center align-items-center ">
          <div className="col-sm-4 col-6 my-sm-3 wow animate__animated animate__fadeInUp ">
            <img src={Baysidelogo} alt="d" />
          </div>
          <div className="col-sm-4 col-6 my-sm-3 wow animate__animated animate__fadeInUp ">
            <img src={Dawkinslogo} alt="d" />
          </div>
          <div className="col-sm-4 col-6 my-sm-3 wow animate__animated animate__fadeInUp s">
            <img src={Eurotechlogo} alt="d" />
          </div>
          <div className="col-sm-4 col-6 my-sm-3 wow animate__animated animate__fadeInUp ">
            <img src={Gasonelogo} alt="d" />
          </div>
          <div className="col-sm-4 col-6 my-sm-3 wow animate__animated animate__fadeInUp">
            <img src={Levelheadlogo} alt="d" />
          </div>
          <div className="col-sm-4 col-6 my-sm-3 wow animate__animated animate__fadeInUp ">
            <img src={Melblagerslogo} alt="d" />
          </div>
          <div className="col-sm-4 col-6 my-sm-3 wow animate__animated animate__fadeInUp">
            <img src={Melblogo} alt="d" />
          </div>
          <div className="col-sm-4 col-6 my-sm-3 wow animate__animated animate__fadeInUp">
            <img src={Pstylinglogo} alt="d" />
          </div>
          <div className="col-sm-4 col-6 my-sm-3 wow animate__animated animate__fadeInUp ">
            <img src={Tylerlogo} alt="d" />
          </div>
          <div className="col-sm-4 col-6 my-sm-3 wow animate__animated animate__fadeInUp ">
            <img src={Velaqualogo} alt="d" />
          </div>
          <div className="col-sm-4 col-6 my-sm-3 wow animate__animated animate__fadeInUp">
            <img src={Logo1} alt="d" />
          </div>
          <div className="col-sm-4 col-6 my-sm-3 wow animate__animated animate__fadeInUp ">
            <img src={LogoGekko11} alt="d" />
          </div>
        </div>
      </div>
    </>
  );
};
const MultipleItems = () => {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: true,
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: false,
    speed: 2000,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
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
    <>
      <div>
        <Slider {...settings}>
          <div>
            <span>
              2014
              <span>
                <GoPrimitiveDot />
              </span>
            </span>
          </div>
          <span>
            2015
            <span>
              <GoPrimitiveDot />
            </span>
          </span>
          <span>
            2016
            <span>
              <GoPrimitiveDot />
            </span>
          </span>
          <span>
            2017
            <span>
              <GoPrimitiveDot />
            </span>
          </span>
          <span>
            2018
            <span>
              <GoPrimitiveDot />
            </span>
          </span>
          <span>
            2019
            <span>
              <GoPrimitiveDot />
            </span>
          </span>
          <span>
            2020
            <span>
              <GoPrimitiveDot />
            </span>
          </span>
          <span>
            2021
            <span>
              <GoPrimitiveDot />
            </span>
          </span>
          <span>
            2022
            <span>
              <GoPrimitiveDot />
            </span>
          </span>
          <span>
            2023
            <span>
              <GoPrimitiveDot />
            </span>
          </span>
        </Slider>
      </div>
    </>
  );
};
