import { Faqs } from "../components/Faqs";
import { DrawerLeft } from "../components/DrawerLeft";
import { FooterContact } from "../components/FooterContact";
import { NavLink } from "react-router-dom";
import Homehero3 from "../assests/homehero3.png";
import Melblogo from "../assests/partners/melblogo.png";
import Plumbing_gas from "../assests/plumbing_gas.png";
import Tylerlogo from "../assests/partners/tylerlogo.png";
import Velaqualogo from "../assests/partners/velaqualogo.png";
import Saasdash from "../assests/saas_dash.png";
import Saasmobres from "../assests/saasmobres.png";
import Saasdeskres from "../assests/saasdeskres.png";
import Saasflow from "../assests/saasflow.jpg";
import Saasmmdashr from "../assests/saas_mmdashr.png";
import Saasproductdesign from "../assests/saas_productdesign.jpg";

export const Saas = () => {
  return (
    <>
      <div className="container services_modal_page_div">
        <div className="services_modal_page_inner" style={{ left: "0" }}>
          <DrawerLeft data="creation_page" />
        </div>
        <div className="row  justify-content-around align-items-center">
          <div className="col-12 col-md-12 col-lg-7 my-3  ">
            <p className=" mb-1 fw-bold">SaaS Product Creation</p>
            <h1 className="my-4 all_h1_title">
              Pragmatic UI/UX design agency for SaaS
            </h1>
            <div className="py-4">
              <NavLink
                to="/Questionare_Page"
                className="getstartbtn  fontrale my-5"
              >
                Get Started
              </NavLink>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-5 my-2 my-sm-0 my-3 rounded text-center ">
            <img className="w-100" src={Homehero3} alt="img" />
          </div>
        </div>
      </div>
      <div className="container my-5 homepartners">
        <div className="row text-center align-items-center ">
          <div className="col-sm-3 col-6 my-sm-3 wow animate__animated animate__fadeInUp">
            <img src={Melblogo} alt="icon" />
          </div>
          <div className="col-sm-3 col-6 my-sm-3 wow animate__animated animate__fadeInUp">
            <img src={Plumbing_gas} alt="icon" />
          </div>
          <div className="col-sm-3 col-6 my-sm-3 wow animate__animated animate__fadeInUp ">
            <img src={Tylerlogo} alt="icon" />
          </div>
          <div className="col-sm-3 col-6 my-sm-3 wow animate__animated animate__fadeInUp ">
            <img src={Velaqualogo} alt="icon" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row  justify-content-around align-items-center">
          <div className="col-12 col-md-12 col-lg-5 my-3  ">
            <h2 className="my-4 all_h1_title">
              The UI design must be easy, but your product can be complex
            </h2>
            <p>
              SaaS is a complex product and its complexity can't be solved with
              the beauty of minimalist UI. Making products simple takes proper
              planning.
            </p>
            <p>
              Remember the user interface in Slack or Dropbox? Even a child can
              understand it, it's that easy. Yet both Slack and Dropbox are
              complicated systems that include multiple design layers and
              complicated user flows.
            </p>
          </div>
          <div className="col-12 col-md-12 col-lg-7 d-flex align-content-end my-2 my-sm-0 my-3 rounded text-center ">
            <img className="w-100" src={Saasdash} alt="icon" />
          </div>
        </div>
      </div>
      <div
        className="container-fluid py-3 latestprojects "
        style={{ backgroundColor: "#0A76E5" }}
      >
        <div className="row justify-content-around align-items-center ">
          <div className="col-md-4 position-relative rounded text-center wow animate__animated animate__fadeInUp ">
            <img className="w-50" src={Saasmobres} alt="img" />
            <div className="sidetext sidetextpos1">
              <p className="">
                <span className="text-white">MOBILE RESPONSIVE</span>{" "}
              </p>
            </div>
          </div>

          <div className="col-md-6 mb-3 mt-0 text-md-right text-center wow animate__animated animate__fadeInUp">
            <h2 className="font-weight-bold text-white my-4 all_h1_title">
              <b>It's because designing SaaS apps is a drag</b>
            </h2>
            <p style={{ color: "rgb(255, 255, 255, 0.7) " }}>
              No matter how tight our product cycles are, we never jump straight
              into Sketch too early. We invest time in bringing order to your
              requirements and understanding what we're about to design. This
              results in a simple and coherent product experience.
            </p>

            <div className="my-5  py-3 position-relative">
              <div className="sidetext sidetextpos2">
                <p>
                  <span className="text-white">DESKTOP</span>
                </p>
              </div>
              <img
                className="w-100"
                style={{ marginRight: "-5rem" }}
                src={Saasdeskres}
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container py-3 my-5">
        <div className="row  justify-content-around align-items-center">
          <div className="col-12 col-md-12 col-lg-7 my-3">
            <p className=" mb-1 fw-bold">Design can make or break a SaaS</p>
            <h2 className="my-4 all_h1_title">
              You can still find the right people
            </h2>
            <p style={{ color: "#212529B2" }}>
              When users stop using your product and there’s a new competitor
              luring them away, it's often a design problem.
              <br />
              <br />
              Customers need to experience the value of your product as quickly
              as possible. Otherwise, they won't stick around.
            </p>
          </div>
          <div className="col-12 col-md-12 col-lg-5 my-2 my-sm-0 my-3 rounded text-center ">
            <img className="w-100" src={Saasflow} alt="img" />
          </div>
        </div>
      </div>
      <div
        className="container-fluid mt-1 py-3"
        style={{ background: "#E2F0FF" }}
      >
        <div className="row justify-content-center py-5">
          <div className="col-12 text-center wow animate__animated animate__fadeInDown">
            <h2 className="text-dark all_h1_title">'Hands-on' UX/UI design</h2>
          </div>
          <div className="my-3 text-center col-10">
            <p className="all_h1_title_p">
              We'll work together to improve your SaaS product by prioritising
              areas that will help you retain and engage more users. We do this
              through wireframes and high-fidelity visual design mockups.
            </p>
          </div>
        </div>
      </div>
      <div className="container mmdash">
        <div className="row my-3 py-4">
          <div className="col-lg-5">
            <img className="w-100" src={Saasmmdashr} alt="img" />
          </div>
          <div className="col-lg-6">
            <div className="mmdashbullet my-3">
              <div className="row my-3 justify-content-around align-content-start">
                <div className="col-2">
                  <div>
                    <h2>1</h2>
                  </div>
                </div>
                <div className="col-10">
                  <h3>
                    <b>UX audit</b>
                  </h3>
                  <p>
                    We'll take a deep dive into your SaaS product and determine
                    critical design flaws affecting your growth. You'll get
                    professional advice on how to improve usability of products
                    with simple and quick fixes that will keep customers coming
                    back!
                  </p>
                </div>
              </div>
            </div>
            <div className="mmdashbullet my-3">
              <div className="row my-3 justify-content-around align-content-start">
                <div className="col-2">
                  <div>
                    <h2>2</h2>
                  </div>
                </div>
                <div className="col-10">
                  <h3>
                    <b>'Hands-on' UX/UI design</b>
                  </h3>
                  <p>
                    We'll work together to improve your SaaS product by
                    prioritising areas that will help you retain and engage more
                    users. We do this through wireframes and high-fidelity
                    visual design mockups.
                  </p>
                </div>
              </div>
            </div>
            <div className="mmdashbullet my-3">
              <div className="row my-3 justify-content-around align-content-start">
                <div className="col-2">
                  <div>
                    <h2>3</h2>
                  </div>
                </div>
                <div className="col-10">
                  <h3>
                    <b>Full product design</b>
                  </h3>
                  <p>
                    We'll redesign your entire SaaS product by leading you
                    through a design process tailored to meet your specific
                    needs. Together, we'll enhance the overall experience and
                    generate new revenue. All of this will culminate with a
                    high-fidelity prototype.
                  </p>

                  <div className="py-4">
                    <NavLink
                      to="/Questionare_Page"
                      className="getstartbtn  fontrale my-5"
                    >
                      Get Started
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-3 py-3 saas_prodesign">
        <div className="row">
          <div className="text-center">
            <div>
              <h2 className="all_h1_title">Full Product Design</h2>
            </div>
            <div className="my-3">
              <p>
                We'll redesign your entire SaaS product by leading you through a
                design process tailored to meet your specific needs. Together,
                we'll enhance the overall experience and generate new revenue.
                All of this will culminate with a high-fidelity prototype.
              </p>
            </div>
          </div>
        </div>
        <div
          className="row justify-content-around my-4 p-5"
          style={{ backgroundColor: "#000" }}
        >
          <div className="col-lg-5 my-3">
            <h2 className="text-white">Ready to get started?</h2>
            <p
              className="my-4"
              style={{ color: "rgba(255, 255, 255, 0.704) " }}
            >
              We'll work together to improve your SaaS product by prioritising
              areas that will help you retain and engage more users. We do this
              through wireframes and high-fidelity visual design mockups.{" "}
            </p>
          </div>
          <div className="col-lg-5 my-3">
            <img
              className="w-100"
              src={Saasproductdesign}
              alt="saas_productdesign"
            />
          </div>
        </div>
      </div>
      <Faqs />
      <FooterContact />
    </>
  );
};
