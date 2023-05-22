import { NavLink } from "react-router-dom";
import Discover from "../assests/discover.png";
import { DrawerLeft } from "../components/DrawerLeft";
import { FooterContact } from "../components/FooterContact";
import { Helmet } from "react-helmet";
export const Creation = () => {
  return (
    <>
      <div className="container discover position-relative">
        <DrawerLeft data="creation_page" />
        <div className="row justify-content-center">
          <div className="col-md-5 py-5 mt-n4 wow animate__animated animate__fadeIn">
            <img className="w-100" src={Discover} alt="c" />
          </div>
        </div>
      </div>
      <div className="container d4s mt-5 text-center text-sm-left">
        <div className="row justify-content-between">
          <div className="col-md-3 my-2 wow animate__animated animate__fadeInUp">
            <span className="h4 fontrale ">
              <b>Discover</b>
            </span>
            <ul className="my-3">
              <li className="my-2">Understanding Problems </li>
              <li className="my-2">Customer Needs </li>
              <li className="my-2">Unmet Opportunity</li>
              <li className="my-2">New Opportunity</li>
              <li className="my-2">Generative User Research</li>
              <li className="my-2">Ethnographic Research</li>
            </ul>
          </div>

          <div className="col-md-3 my-2 wow animate__animated animate__fadeInUp">
            <span className="h4 fontrale ">
              <b>Define</b>
            </span>
            <ul className="my-3">
              <li className="my-2">Defining Problem and Needs</li>
              <li className="my-2">Stakeholder’s Goals</li>
              <li className="my-2">Usability Goals</li>
              <li className="my-2">Business Goals</li>
              <li className="my-2">Problem Solving Solutions</li>
            </ul>
          </div>

          <div className="col-md-3 my-2 wow animate__animated animate__fadeInUp">
            <span className="h4 fontrale ">
              <b>Design</b>
            </span>
            <ul className="my-3">
              <li className="my-2">Product & Digital Innovation</li>
              <li className="my-2">UX UI Design</li>
              <li className="my-2">Validating Solutions</li>
              <li className="my-2">Prototyping</li>
              <li className="my-2">Usability Testing</li>
            </ul>
          </div>

          <div className="col-md-3 my-2 wow animate__animated animate__fadeInUp">
            <span className="h4 fontrale ">
              <b>Development</b>
            </span>
            <ul className="my-3">
              <li className="my-2">Front End Development </li>
              <li className="my-2">Web Application</li>
              <li className="my-2">SAAS Implementation</li>
              <li className="my-2">Optimization</li>
              <li className="my-2">Backend Support</li>
            </ul>

            <div className="my-4 py-4 text-sm-left text-center">
              <NavLink to="/" className="whitebgbtn fontrale">
                View Case Study &#10230;
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <FooterContact />
    </>
  );
};
