import Business2hero from "../assests/business2hero.png";
import Business2second from "../assests/business2second.png";
import Business2third from "../assests/business2third.png";

import { NavLink } from "react-router-dom";
export const Business2 = () => {
  return (
    <>
      <div className="container-fluid m-0 py-3">
        <div className="container my-sm-4 py-0 my-0">
          <div className="row my-4 justify-content-center align-items-center text-sm-left text-center">
            <div className="col-sm-8 col-12 my-3 text-center  wow animate__animated animate__fadeInUp">
              <h1 className="font-weight-bold my-sm-4 all_h1_title">
                <span>
                  <b>Create, Advertise, Analyse and Optimise !</b>
                </span>
                We do it all for you.
              </h1>
              <small className="font-weight-bold">
                Let's craft a website that gives your business an online
                presence
              </small>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid  mt-sm-4 py-sm-5 py-4 my-0"
        style={{ backgroundColor: "#FBE6E9" }}
      >
        <div className="container">
          <div className="row justify-content-around align-items-center">
            <div className="homesec3info col-sm-6 my-3 ">
              <div className="m-0 p-0 ">
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
                  <p>Lorem, ipsum dolor.</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia inventore dolore ducimus rem nisi velit accusantium
                    nostrum iure ut harum?
                  </p>
                </div>
                <div className="col-sm-6 mt-4 mb-2   ">
                  <p>Lorem, ipsum dolor.</p>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatibus recusandae, repudiandae reprehenderit
                    perferendis minima sapiente.
                  </p>
                </div>
                <div className="col-sm-6 mt-4 mb-2   ">
                  <p>Lorem, ipsum.</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Animi incidunt praesentium aperiam aut tenetur minus
                    doloribus fugit sequi consectetur!
                  </p>
                </div>
                <div className="col-sm-6 mt-4 mb-2  ">
                  <p>Lorem, ipsum dolor.</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Similique culpa nobis explicabo molestias veniam corrupti
                    quisquam dignissimos reprehenderit iste, doloremque,
                    necessitatibus iure..
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 mt-4 wow animate__animated animate__fadeInDown ">
              <img className="w-100" src={Business2hero} alt="df" />
            </div>
          </div>
        </div>
      </div>
      <div className="container my-sm-4 py-sm-5 py-0 my-0">
        <div className="row justify-content-around align-items-center">
          <div className="col-sm-4 my-sm-0 my-0  rounded text-center wow animate__animated animate__fadeIn animate__slow ">
            <img
              className="w-100 d-none d-sm-block"
              src={Business2second}
              alt="dfd"
            />
          </div>
          <div className="col-sm-5 my-4 pb-3 ">
            <h2 className="my-4 all_h1_title">
              <span>
                <b>Lorem, ipsum dolor</b>
              </span>
              amet consectetur adipisicing elit.
            </h2>
            <p className="all_h1_title_p">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              nulla dolorem nostrum placeat rem reprehenderit quia ex, facere
              harum doloribus eaque, velit voluptate error provident dolorum
              culpa consectetur optio alias iure necessitatibus odit quod
              voluptatum. Necessitatibus consectetur, omnis natus expedita,
              officiis, culpa tenetur aliquam veniam ad voluptates illo
              dignissimos ipsam!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ipsam
              consequuntur ipsa voluptate, odio dolores. Veritatis, porro
              officiis? Quae, rem.
            </p>

            <div className="py-3">
              <NavLink to="/Questionare_Page" className="getstartbtn my-2 ">
                Create Now
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid  mt-sm-4 py-sm-5 py-4 my-0 "
        style={{ backgroundColor: "#EFF4FB" }}
      >
        <div className="container">
          <div className="row justify-content-around align-items-center">
            <div className=" col-sm-5 my-3 ">
              <div className="m-0 p-0 ">
                <h2 className="all_h1_title">
                  <span>Eleifend</span> pulvinar ut non orci
                  <span>venenatis in.</span>
                </h2>
                <br />
              </div>
              <div>
                <p className="all_h1_title_p">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
                  necessitatibus nemo, recusandae assumenda labore cupiditate
                  aperiam tempore inventore cum officiis perferendis optio
                  quidem iure! Tempore dicta sed animi nemo distinctio, quaerat
                  adipisci hic alias? Distinctio exercitationem ut perspiciatis
                  esse repellat?
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                  error accusamus vitae corporis, obcaecati cumque officiis
                  perferendis! Consectetur, illo inventore.
                </p>
              </div>

              <div className="col-sm-12 px-0 pt-3 text-sm-left ">
                <NavLink to="/Questionare_Page" className="whitebgbtn fontrale">
                  Get Started
                </NavLink>
              </div>
            </div>

            <div className="col-sm-7 mt-4  ">
              <img className="w-100" src={Business2third} alt="jv" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
