import { NavLink } from "react-router-dom";
import Reviewhead from "../assests/reviewhead.png";
import Reviewstar from "../assests/reviewstar.png";
import Getreviews from "../assests/getreviews.png";
import Monitorreview from "../assests/monitorreview.png";
import Showcasereview from "../assests/showcasereview.png";
import Home from "../assests/homegif.gif";
import { InlineWidget } from "react-calendly";
export const ReviewTracker = () => {
  return (
    <>
      <div className="container-fluid py-md-5 py-3 bgproperty">
        <div className="container my-sm-4 py-0 my-0">
          <div className="row my-4 text-sm-start text-center">
            <div
              className="col-sm-8 col-12 my-3"
              style={{ visibility: "visible " }}
            >
              <div className="row py-4 align-items-start">
                <div className="col-3 mt-3 text-right d-md-block d-none">
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
                <div className="col-md-9 mt-n5 col-12">
                  <div className=" col-12 text-md-start text-center">
                    <p
                      className="font-weight-light"
                      style={{ color: "#85C1FF" }}
                    >
                      REVIEW TRACKER
                    </p>
                  </div>
                  <h1
                    className="font-weight-bold mb-sm-4 mt-0"
                    style={{ fontSize: "48px" }}
                  >
                    The <span>all-in-one</span> review management
                  </h1>
                  <p>
                    Get more reviews, monitor and respond to them quicker, and
                    showcase your success with style.
                  </p>
                  <NavLink
                    to="/getintouch"
                    className="whitebgbtn mt-2"
                    style={{ visibility: "visible " }}
                  >
                    Start Free Trial
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <img className="w-100" src={Reviewhead} alt="sd" />
            </div>
          </div>
        </div>
      </div>
      <div className="container my-2 py-3 mb-1 ">
        <div className="latestprojecttitle text-center">
          <h1
            className="font-weight-bold my-4"
            style={{ visibility: "visible", animationName: "fadeInDown" }}
          >
            Every part of the review lifecycle covered
          </h1>
        </div>
        <div className="row justify-content-around align-items-start">
          <div className="col-md-4 col-12 my-2">
            <div className="reviewbox">
              <div className="my-2">
                <img src={Reviewstar} alt="ds" />
                <sup>
                  <img src={Getreviews} alt="sd" />
                </sup>
              </div>
              <div className="mt-5">
                <h5>Get Reviews</h5>
                <small>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed,
                  obcaecati. Nihil amet unde molestiae blanditiis quam, ipsa qui
                  dicta cum, totam iste id veniam ratione commodi modi
                </small>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 my-2">
            <div className="reviewbox">
              <div className="my-2">
                <img src={Reviewstar} alt="ds" />
                <sup>
                  <img src={Monitorreview} alt="ds" />
                </sup>
              </div>
              <div className="mt-5">
                <h5>Monitor Reviews</h5>
                <small>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique vel doloribus autem aperiam, omnis corporis et
                  soluta natus quas reprehenderit.
                </small>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 my-2">
            <div className="reviewbox">
              <div className="my-2">
                <img src={Reviewstar} alt="ds" />
                <sup>
                  <img src={Showcasereview} alt="dc" />
                </sup>
              </div>
              <div className="mt-5">
                <h5>Showcase Reviews</h5>
                <small>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed,
                  obcaecati. Nihil amet unde molestiae blanditiis quam, ipsa qui
                  dicta cum, totam iste id veniam ratione commodi modi
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-3 mb-1 secoservices">
        <div className="row mt-md-5 mt-3 justify-content-around align-items-center">
          <div className="col-md-6 my-3">
            <h1>
              Lorem ipsum dolor sit amet <span>consectetur</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              quia iusto voluptate maiores unde ex illo inventore nostrum
              officia tempora eveniet quos, est illum quam molestiae veritatis,
              error quae vitae deleniti beatae? Nisi praesentium iste quisquam
              totam harum. Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Commodi in, eveniet voluptates veritatis minima ipsa
              pariatur modi hic adipisci magnam sed veniam fuga repellendus
              officia asperiores porro natus minus. Iste, quam. Rem velit est
              placeat.
            </p>
          </div>
          <div className="col-md-6">
            <img className="w-100" src={Home} alt="c" />
          </div>
        </div>

        <div className="row mt-5 justify-content-around align-items-center">
          <div className="col-md-6 order-md-1 order-sm-2 order-2">
            <img className="w-100" src={Home} alt="ds" />
          </div>
          <div className="col-md-6 my-3 order-md-2 order-sm-1 order-1">
            <h1>
              Lorem ipsum dolor sit amet <span>consectetur</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              quia iusto voluptate maiores unde ex illo inventore nostrum
              officia tempora eveniet quos, est illum quam molestiae veritatis,
              error quae vitae deleniti beatae? Nisi praesentium iste quisquam
              totam harum. Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Commodi in, eveniet voluptates veritatis minima ipsa
              pariatur modi hic adipisci magnam sed veniam fuga repellendus
              officia asperiores porro natus minus. Iste, quam. Rem velit est
              placeat.
            </p>
          </div>
        </div>
      </div>
      <InlineWidget url="https://calendly.com/maxlence/appointment" />
    </>
  );
};
