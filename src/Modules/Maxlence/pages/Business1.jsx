import React from "react";
import { NavLink } from "react-router-dom";
import Businesshero from "../assests/businesshero.png";
import Business1second from "../assests/business1second.png";

export const Businessone = () => {
  return (
    <>
      <div className="container-fluid m-0 py-3">
        <div className="container my-sm-4 py-0 my-0">
          <div className="row my-4 justify-content-center align-items-center text-sm-left text-center">
            <div className="col-sm-8 col-12 my-3 text-center  wow animate__animated animate__fadeInUp">
              <h1 className="my-sm-4 all_h1_title">
                Create an <span>Online Store</span> for your
                <span>ecommerce business</span>
              </h1>
              <small className="font-weight-bold">
                Let's craft a website that gives your business an online
                presence
              </small>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid px-5 my-sm-4 py-sm-5 py-0 my-0 homehero">
        <div className="row justify-content-between align-items-center">
          <div className="col-sm-6 my-2 my-sm-0 my-3 rounded text-center wow animate__animated animate__fadeIn animate__slow ">
            <img className="w-100" src={Businesshero} alt="f" />
          </div>
          <div className="col-sm-6 mb-4">
            <h2 className="my-4 all_h1_title wow animate__animated animate__fadeInUp animate__slow">
              <span>
                <b>Lorem, ipsum dolor </b>
              </span>
              amet consectetur adipisicing elit.
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
              nulla!
            </p>
            <div className="py-3">
              <NavLink
                to="/Questionare_Page"
                className="getstartbtn fontrale my-2"
              >
                Create Now
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container-fluid px-5 mt-sm-4 py-sm-5 py-3 my-0 homesec3"
        style={{ background: "rgba(0, 201, 156, 0.12)" }}
      >
        <div className="row justify-content-around align-items-center">
          <div className="homesec3info col-sm-6 my-3">
            <div className="m-0 p-0">
              <h2 className="all_h1_title">
                Lorem ipsum dolor sit amet
                <span>
                  <b> consectetur, adipisicing </b>
                </span>
                elit.
              </h2>
              <br />
              <small>Lorem ipsum dolor sit amet consectetur.</small>
            </div>

            <div className="row my-1 ">
              <div className="col-sm-6 mt-4 mb-2 ">
                <p className="mb-1">
                  <b>Lorem, ipsum dolor.</b>
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia inventore dolore ducimus rem nisi velit accusantium
                  nostrum iure ut harum?
                </p>
              </div>
              <div className="col-sm-6 mt-4 mb-2   ">
                <p className="mb-1">
                  <b>Lorem, ipsum dolor.</b>
                </p>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus recusandae, repudiandae reprehenderit perferendis
                  minima sapiente.
                </p>
              </div>
              <div className="col-sm-6 mt-4 mb-2   ">
                <p className="mb-1">
                  <b>Lorem, ipsum.</b>
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Animi incidunt praesentium aperiam aut tenetur minus doloribus
                  fugit sequi consectetur!
                </p>
              </div>
              <div className="col-sm-6 mt-4 mb-2  ">
                <p className="mb-1">
                  <b>Lorem, ipsum dolor.</b>
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique culpa nobis explicabo molestias veniam corrupti
                  quisquam dignissimos reprehenderit iste, doloremque,
                  necessitatibus iure..
                </p>
              </div>
            </div>
            <div className="col-sm-12 px-0 pt-3 ">
              <NavLink
                to="/"
                className="whitebgbtn fontrale"
                title="Create Now"
              >
                Create Now
              </NavLink>
            </div>
          </div>

          <div className="col-sm-6 mt-4 wow animate__animated animate__fadeInDown ">
            <img className="w-100" src={Business1second} alt="fdf" />
          </div>
        </div>
      </div>
    </>
  );
};
