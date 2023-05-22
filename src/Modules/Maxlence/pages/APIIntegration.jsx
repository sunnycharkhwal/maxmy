import Solusermngtech from "../assests/solusermngtech.jpg";
import Securedicon from "../assests/securedicon.svg";
import Scaleableicon from "../assests/scaleableicon.svg";
import Flexibleicon from "../assests/flexibleicon.svg";

import React, { useState } from "react";
import Slack from "../assests/slack.jpg";
import Dropbox from "../assests/dropbox.jpg";
import Gdrive from "../assests/gdrive.jpg";
import Gmeet from "../assests/gmeet.jpg";
import { InlineWidget } from "react-calendly";
import { NavLink } from "react-router-dom";
export const APIIntegration = () => {
  return (
    <>
      <div
        className="container-fluid  py-5 bgproperty"
        style={{ backgroundColor: "#3599FF" }}
      >
        <div className="container my-sm-4 py-3 my-0">
          <div className="row my-4 text-sm-start text-center">
            <div className="col-md-5 col-12 text-md-end text-left">
              <p
                className="text-white font-weight-light"
                style={{ opacity: "0.5 " }}
              >
                API INTEGRATION
              </p>
            </div>
            <div
              className="col-sm-12 col-12 my-3 "
              style={{ visibility: "visible " }}
            >
              <div className="row align-items-start">
                <div className="col-3 mt-3 text-end d-md-block d-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="121"
                    height="16"
                    viewBox="0 0 121 16"
                    fill="none"
                  >
                    <path
                      d="M120.707 8.70711C121.098 8.31658 121.098 7.68342 120.707 7.29289L114.343 0.928932C113.953 0.538408 113.319 0.538408 112.929 0.928932C112.538 1.31946 112.538 1.95262 112.929 2.34315L118.586 8L112.929 13.6569C112.538 14.0474 112.538 14.6805 112.929 15.0711C113.319 15.4616 113.953 15.4616 114.343 15.0711L120.707 8.70711ZM0 9H120V7H0V9Z"
                      fill="#0B1C3F"
                    />
                  </svg>
                </div>
                <div className="col-md-8 col-12">
                  <h1
                    className="font-weight-bold mb-sm-4 mt-0"
                    style={{ fontSize: "48px" }}
                  >
                    Lorem ipsum dolor sit amet
                    <span className="text-white"> consectetur</span>
                  </h1>
                  <p className="text-white pb-3">
                    sodales lectus, vel tincidunt purus feugiat vitae. Donec at
                    viverra dolor
                  </p>
                  <NavLink
                    className="whitebgbtn mt-5 text-white border-white fontrale "
                    style={{ visibility: "visible" }}
                    to="/getintouch"
                  >
                    Start Free Trial
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5 growthmail">
        <div className="row justify-content-around align-items-center">
          <div
            className="col-sm-6 rounded text-center"
            style={{ visibility: "visible" }}
          >
            <img className="w-100" src={Solusermngtech} alt="ds" />
          </div>
          <div className="col-sm-6 my-3 text-sm-start text-center">
            <h1
              className="font-weight-bold my-4 "
              style={{ visibility: "visible" }}
            >
              Lorem ipsum dolor, sit amet <span>consectetur adipisicing</span>{" "}
              elit.
            </h1>
            <p style={{ visibility: "visible" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed leo
              amet mauris amet, nulla auctor ipsum. Cursus in arcu integer
              pellentesque sed in mattis. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Consectetur, omnis.
            </p>
          </div>
        </div>
      </div>
      <div className="container my-5 usermng_feats">
        <div className="row">
          <div className="col-md-6 col-lg-4 col-12 my-2">
            <div className="card p-3" style={{ boxShadow: "none" }}>
              <div className="row">
                <div className="col-2">
                  <img src={Securedicon} alt="sd" />
                </div>
                <div className="col-10 mt-2">
                  <div>
                    <p>
                      <b>Secured</b>
                    </p>
                    <p>Change your email or password update login info</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-12 my-2">
            <div className="card p-3" style={{ boxShadow: "none" }}>
              <div className="row">
                <div className="col-2">
                  <img src={Scaleableicon} alt="d" />
                </div>
                <div className="col-10 mt-2">
                  <div>
                    <p>
                      <b>Scalable</b>
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-12 my-2">
            <div className="card p-3" style={{ boxShadow: "none" }}>
              <div className="row">
                <div className="col-2">
                  <img src={Flexibleicon} alt="d" />
                </div>
                <div className="col-10 mt-2">
                  <div>
                    <p>
                      <b>Flexible</b>
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Service />
      <InlineWidget url="https://calendly.com/maxlence/appointment" />
    </>
  );
};
const Service = () => {
  const ServiceData = [
    {
      title: "Team favorites",
      subTitle: "Our most popular integrations",
      link: "/",
      linkTitle: "View More Integration",
      ServiceInnerData: [
        {
          icon: Slack,
          title: "Slack",
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, obcaecati. Nihil amet unde molestia blanditiis quam, ipsa qui dicta cum, totam iste id veniam ratione commodi modi",
        },
        {
          icon: Dropbox,
          title: "Dropbox",
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, obcaecati. Nihil amet unde molestia blanditiis quam, ipsa qui dicta cum, totam iste id veniam ratione commodi modi",
        },
        {
          icon: Gdrive,
          title: "Gdrive",
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, obcaecati. Nihil amet unde molestia blanditiis quam, ipsa qui dicta cum, totam iste id veniam ratione commodi modi",
        },
        {
          icon: Gmeet,
          title: "Gmeet",
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, obcaecati. Nihil amet unde molestia blanditiis quam, ipsa qui dicta cum, totam iste id veniam ratione commodi modi",
        },
      ],
    },
    {
      title: "CRM",
      subTitle: "Centralize your entire sales pipeline",
      link: "/",
      linkTitle: "View More Integration",
      ServiceInnerData: [
        {
          icon: Slack,
          title: "Slack",
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, obcaecati. Nihil amet unde molestia blanditiis quam, ipsa qui dicta cum, totam iste id veniam ratione commodi modi",
        },
        {
          icon: Dropbox,
          title: "Dropbox",
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, obcaecati. Nihil amet unde molestia blanditiis quam, ipsa qui dicta cum, totam iste id veniam ratione commodi modi",
        },
        {
          icon: Gdrive,
          title: "Gdrive",
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, obcaecati. Nihil amet unde molestia blanditiis quam, ipsa qui dicta cum, totam iste id veniam ratione commodi modi",
        },
        {
          icon: Gmeet,
          title: "Gmeet",
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, obcaecati. Nihil amet unde molestia blanditiis quam, ipsa qui dicta cum, totam iste id veniam ratione commodi modi",
        },
      ],
    },
    {
      title: "Marketing",
      subTitle: "All your marketing needs in one place",
      link: "/",
      linkTitle: "View More Integration",
      ServiceInnerData: [
        {
          icon: Slack,
          title: "Slack",
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, obcaecati. Nihil amet unde molestia blanditiis quam, ipsa qui dicta cum, totam iste id veniam ratione commodi modi",
        },
        {
          icon: Dropbox,
          title: "Dropbox",
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, obcaecati. Nihil amet unde molestia blanditiis quam, ipsa qui dicta cum, totam iste id veniam ratione commodi modi",
        },
        {
          icon: Gdrive,
          title: "Gdrive",
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, obcaecati. Nihil amet unde molestia blanditiis quam, ipsa qui dicta cum, totam iste id veniam ratione commodi modi",
        },
        {
          icon: Gmeet,
          title: "Gmeet",
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, obcaecati. Nihil amet unde molestia blanditiis quam, ipsa qui dicta cum, totam iste id veniam ratione commodi modi",
        },
      ],
    },
    {
      title: "Project Management",
      subTitle: "Align all your project management tools",
      link: "/",
      linkTitle: "View More Integration",
      ServiceInnerData: [
        {
          icon: Slack,
          title: "Slack",
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, obcaecati. Nihil amet unde molestia blanditiis quam, ipsa qui dicta cum, totam iste id veniam ratione commodi modi",
        },
        {
          icon: Dropbox,
          title: "Dropbox",
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, obcaecati. Nihil amet unde molestia blanditiis quam, ipsa qui dicta cum, totam iste id veniam ratione commodi modi",
        },
        {
          icon: Gdrive,
          title: "Gdrive",
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, obcaecati. Nihil amet unde molestia blanditiis quam, ipsa qui dicta cum, totam iste id veniam ratione commodi modi",
        },
        {
          icon: Gmeet,
          title: "Gmeet",
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, obcaecati. Nihil amet unde molestia blanditiis quam, ipsa qui dicta cum, totam iste id veniam ratione commodi modi",
        },
      ],
    },
  ];
  const ServiceApp = (props) => {
    const ReadMore = ({ children }) => {
      const text = children;
      const [isReadMore, setIsReadMore] = useState(true);
      const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
      };
      return (
        <>
          <p className="text">{isReadMore ? text.slice(0, 0) : text}</p>
          <span onClick={toggleReadMore} className="read-or-hide">
            {isReadMore ? (
              <button class="getstartbtn getstartbtn_new fontpop ">
                View More Integration
              </button>
            ) : (
              <button class="getstartbtn getstartbtn_new fontpop ">
                Less Integration
              </button>
            )}
          </span>
        </>
      );
    };
    return (
      <>
        <div className="container mt-5 py-3 mb-1 ">
          <div className="latestprojecttitle text-center">
            <small style={{ visibility: "visible", animationName: "fadeInUp" }}>
              {props.subTitle}
            </small>
            <h1
              className="font-weight-light my-4  "
              style={{ visibility: "visible", animationName: "fadeInDown" }}
            >
              {props.title}
            </h1>
          </div>
          <div className="row justify-content-around align-items-start">
            {props.ServiceInnerData.map((val, i) => {
              return (
                <div key={i} className="col-md-3 col-6 my-2">
                  <div>
                    <div className="my-2">
                      <img className="w-100" src={val.icon} alt="d" />
                    </div>
                    <div className="my-2">
                      <h6>{val.title}</h6>
                      <p>{val.text}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className=" text-center">
            <ReadMore>more</ReadMore>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      {ServiceData.map((val, i) => {
        return <ServiceApp key={i} {...val} />;
      })}
    </>
  );
};
