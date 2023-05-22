import React from "react";
import homehero2 from "../assests/homehero2.png";
import { BlueBtn, OutlineLinkBtn } from "../components/Btn";
import velaqualogo from "../assests/partners/velaqualogo.png";
import flooring from "../assests/partners/logo 1.png";
import latestproj1 from "../assests/latestproj1.png";
import latestproj2 from "../assests/latestproj1.1.png";
import gekkologo from "../assests/partners/logo_gekko-1 1.png";
import tylerlogo from "../assests/partners/tylerlogo.png";
import creatweb1 from "../assests/creatweb1.svg";
import palette from "../assests/palette 1.svg";
import desktop from "../assests/desktop.svg";
import stats from "../assests/stats 1.svg";
import creatimg2 from "../assests/creatimg2.jpg";
import creatopti from "../assests/creatopti.jpg";
import aligncenter from "../assests/01 align center.svg";
import lightbulb from "../assests/lightbulb-dollar 1.svg";
import questioncheck from "../assests/comments-question-check 1.svg";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Faqs } from "../components/Faqs";
import { DrawerLeft } from "../components/DrawerLeft";
import { FooterContact } from "../components/FooterContact";

export const Website = () => {
  const navigate = useNavigate();
  let { id } = useParams();

  return (
    // <Getintouch />
    <>
      <div className="container-fluid" style={{ backgroundColor: "#fafafa" }}>
        <div className="container py-3">
          <div className="row py-3">
            <div>
              <DrawerLeft data="creation_page" />
              <div className="row d-flex align-items-center justify-content-around g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-4 g-4">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                  <h1 className="all_h1_title">
                    We pour our heart into every design,
                    <span>Mobile Apps</span>
                  </h1>
                  <p className="all_h1_title_p">
                    This is a Dummy text This is a Dummy text This is a Dummy
                    text This is a Dummy textThis is a Dummy text This is a
                    Dummy text.This is a Dummy text This is a Dummy text This is
                    a Dummy text This is a Dummy textThis is a Dummy text This
                    is a Dummy text This is a Dummy text This is a Dummy text
                    This is a Dummy text This is a Dummy textThis is a Dummy
                    text This is a Dummy text
                  </p>
                  <div className="col-md-4 col-7">
                    <BlueBtn
                      onClick={() => navigate(`/Questionare_Page`)}
                      title="Get Started"
                    />
                  </div>
                </div>
                <div className="col-xxl-6 d-flex justify-content-end col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                  <img className="w-md-80 w-100" alt="f" src={homehero2} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5 homepartners">
        <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-4 g-4 text-center align-items-center ">
          <div className="partnerName col-sm-3 col-6">
            <img src={flooring} alt="f" />
          </div>
          <div className=" partnerName col-sm-3 col-6 ">
            <img src={gekkologo} alt="f" />
          </div>
          <div className="partnerName col-sm-3 col-6">
            <img src={tylerlogo} alt="f" />
          </div>
          <div className=" partnerName col-sm-3 col-6 ">
            <img src={velaqualogo} alt="f" />
          </div>
        </div>
      </div>

      <div
        className="container-fluid py-3 crtwebsec1"
        style={{ backgroundColor: "#E2F0FF" }}
      >
        <div className="container">
          <div className="row py-3">
            <div className="col-md-6">
              <h2 className="all_h1_title">A website you can be proud of</h2>{" "}
              <br />
              <p className="all_h1_title_P">
                It’s more competitive out there than ever for businesses. Your
                current website design might be ok, but you need better than ok
                to meet your business goals. Whether you have an ecommerce store
                or a B2B website, our redesign goals target key performance
                metrics and connect with your customer journey. Your redesigned
                website will be easy to navigate and designed to take visitors
                through the buyer's journey to convert to customers. It will be
                a Brand asset you can be proud of.
              </p>
              <p>
                <b>A site design is perfect for companies because :</b>
                <br />
                <br />
                - It sets the first impression <br />
                – It aids your search engine optimization (SEO) strategy
                <br />
                – It sets the impression for customer service
                <br />
                – It builds trust with your audience
                <br />
                – Your competitors are doing it
                <br />
                – It creates consistency
                <br />
                – Makes you seem credible and approachable
                <br />
                – Helps to get leads and convert sales
                <br />– You can measure up to competitors
              </p>
              <p>
                <b>
                  A site redesign is perfect for companies whose existing
                  website is :
                </b>
                <br />
                <br />
                - Not engaging their buyer personas <br />
                – Not attracting top talent <br />
                – Not fully communicating the value of their products or
                services <br />
                – Not serving as a lead generation driver <br />
                – Not performing well on mobile devices <br />– Not meeting key
                performance indicators such as conversions <br />– Full of poor
                UX design for a suboptimal customer experience <br />
                – Not connecting with their target audiences <br />
                – Not optimized for search engines <br />
              </p>
            </div>
            <div className="col-md-6">
              <img className="w-100" src={creatweb1} alt="f" />
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5 py-3">
        <div className="text-center">
          <h2 className="all_h1_title">Our Approach To Websites</h2>
        </div>
        <div className="row my-5 justify-content-around">
          <div className="col-md-3 my-2">
            <div className="my-4">
              <span className="numpink">1</span>
            </div>
            <div>
              <p className="text-left mb-0 all_h1_title_p">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
                voluptatibus mollitia iusto voluptas esse, dolores tempore vero
                cumque ea nihil.
              </p>
            </div>
          </div>
          <div className="col-md-3 my-2">
            <div className="my-4">
              <span className="numpink">2</span>
            </div>
            <div>
              <p className="text-left mb-0 all_h1_title_p">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
                voluptatibus mollitia iusto voluptas esse, dolores tempore vero
                cumque ea nihil.
              </p>
            </div>
          </div>
          <div className="col-md-3 my-2">
            <div className="my-4">
              <span className="numpink">3</span>
            </div>
            <div>
              <p className="text-left mb-0 all_h1_title_p">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
                voluptatibus mollitia iusto voluptas esse, dolores tempore vero
                cumque ea nihil.
              </p>
            </div>
          </div>
        </div>
        <div className="my-3 col-12 px-0">
          <img className="w-100" src={creatimg2} alt="f" />
        </div>

        <div className="row my-md-5 py-md-5 my-2 py-2 justify-content-between">
          <div className="col-md-5 order-md-1 order-sm-2 order-2 my-2">
            <img className="w-100 mb-4" src={creatopti} alt="f" />
          </div>
          <div className="col-md-6 order-md-2 order-sm-1 order-1 my-2">
            <h2 className="all_h1_title">
              Optimize your website to turn target audiences into paying
              customers
            </h2>
            <p className="all_h1_title_p">
              Turning a website visitor into a paying customer is no easy task.
              Redesigning your site to improve user experience and clarity of
              messaging needs to be your next step.
            </p>

            <div className="d-flex my-4 flex-wrap my-4">
              <div className="col-md-6 pl-0">
                <div className="my-4">
                  <img src={palette} alt="f" />
                </div>
                <div>
                  <p>
                    <b>A Transparent Design Process</b>
                  </p>
                </div>
                <div>
                  <small className="text-left mb-0">
                    Work side-by-side with our creative team to ensure your
                    website aligns with your brand guidelines.
                  </small>
                </div>
              </div>

              <div className="col-md-6 pl-0">
                <div className="my-4">
                  <img src={stats} alt="f" />
                </div>
                <div>
                  <p>
                    <b>Data Backed Decisions</b>
                  </p>
                </div>
                <div>
                  <small className="text-left mb-0">
                    All website development and design choices made are backed
                    by real data that comes directly from your customers. No
                    more guessing.
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row my-md-5 py-md-5 my-2 py-2 justify-content-between">
          <div className="col-md-6">
            <h2 className="all_h1_title">
              Responsive web design that differentiates you in a competitive
              marketplace
            </h2>
            <p className="all_h1_title_p">
              You need a professional website with a look and feel that
              showcases your brand personality. Your redesigned site will be all
              that and more. Whether you're on WordPress, Drupal, HubSpot, or
              Shopify, our web redesign services cover all major platforms.
            </p>

            <div className="d-flex my-4 flex-wrap my-4">
              <div className="col-md-6 pl-0">
                <div className="my-4">
                  <img src={aligncenter} alt="f" />
                </div>
                <div>
                  <p>
                    <b>Visual Elements That Work Together</b>
                  </p>
                </div>
                <div>
                  <small className="text-left mb-0">
                    Our style guides ensure design consistency from top to
                    bottom. Every visual aspect compounds to create a work of
                    art that drives revenue.
                  </small>
                </div>
              </div>

              <div className="col-md-6 pl-0">
                <div className="my-4">
                  <img src={questioncheck} alt="f" />
                </div>
                <div>
                  <p>
                    <b>Directing Users’ Behavior</b>
                  </p>
                </div>
                <div>
                  <small className="text-left mb-0">
                    We focus on micro-interactions throughout your site to
                    improve the user experience and keep site visitors engaged.
                  </small>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-5 my-2">
            <img className="w-100 mb-4" src={creatopti} alt="f" />
          </div>
        </div>

        <div className="row my-md-5 py-md-5 my-2 py-2 justify-content-between">
          <div className="col-md-5 order-md-1 order-sm-2 order-2 my-2">
            <img className="w-100 mb-4" src={creatopti} alt="f" />
          </div>
          <div className="col-md-6 order-md-2 order-sm-1 order-1">
            <h2 className="all_h1_title">
              Professional website redesign to meet the demands of your growing
              company
            </h2>
            <p className="all_h1_title_p">
              Your company is rapidly growing and your industry is constantly
              changing. Our custom themes are built to grow with the demands of
              your business.
            </p>

            <div className="d-flex my-4 flex-wrap">
              <div className="col-md-6 pl-0">
                <div className="my-4">
                  <img src={lightbulb} alt="f" />
                </div>
                <div>
                  <p>
                    <b>A Website That Grows With You</b>
                  </p>
                </div>
                <div>
                  <small className="text-left mb-0">
                    With more than 100 website designs implemented over 10
                    years, we predict and incorporate future needs into your web
                    redesign project. Our full-stack web development team, user
                    experience experts, and design team work seamlessly together
                    to ensure your site is a success.
                  </small>
                </div>
              </div>

              <div className="col-md-6 pl-0">
                <div className="my-4">
                  <img src={desktop} alt="f" />
                </div>
                <div>
                  <p>
                    <b>Customizable Website Themes</b>
                  </p>
                </div>
                <div>
                  <small className="text-left mb-0">
                    You deserve the ultimate website. Our custom website themes
                    for WooCommerce, Shopify, HubSpot, WordPress, and Drupal
                    allow you to edit, update, and expand your site as your
                    company grows and changes. It’s all part of our redesign
                    strategy.
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container-fluid py-3 latestprojects "
        style={{ backgroundColor: "#FFD429F2" }}
      >
        <div className="latestprojecttitle text-center">
          <h2 className=" all_h1_title font-weight-bold my-sm-5 my-2">
            Our
            <span style={{ color: "#FF4365" }}>
              <b> Latest Projects</b>
            </span>
          </h2>
        </div>
        <div className="row justify-content-around ">
          <div className="col-md-5 mb-3 mt-0 text-sm-end text-center">
            <h3 className="font-weight-bold my-4" style={{ color: "#36413E" }}>
              <b>Crafting trust and integrity</b>
            </h3>
            <p>
              Level Headed Carpentry Is A Sydney-Based Company Carrying Out
              Works Across Sydney And Surrounding Areas. We provide 100% client
              satisfaction on every project undertaken, catering to all aspects
              of carpentry, ranging from residential to commercial works.
            </p>
            <OutlineLinkBtn title="View Project" to="" />

            <div className="my-3 d-none d-sm-block">
              <img className="w-100" src={latestproj1} alt="f" />
            </div>
          </div>

          <div className="col-md-5 rounded text-center">
            <img className="w-100" src={latestproj2} alt="f" />
            <div className="py-4">
              <div className="col-md-5 col-7 m-auto">
                <BlueBtn link="/Questionare_Page" title="View Case Studies" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Faqs catId={2} />
      <FooterContact />
    </>
  );
};
