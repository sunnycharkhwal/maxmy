import { NavLink } from "react-router-dom";
import { DrawerLeft } from "../components/DrawerLeft";
import Seotoolwhamen from "../assests/seotoolwhamen.png";
import { FooterContact } from "../components/FooterContact";
export const Growth = () => {
  return (
    <>
      <div className="container-fluid position-relative py-3 bgproperty growthhero">
        <div className="container py-0 my-0">
          <DrawerLeft data="growth_page" />
          <div className="row mt-n4 mb-4 justify-content-center align-items-center text-left">
            <div className="col-sm-6 col-12 my-5 ">
              <h1 className="font-weight-bold my-sm-4">
                Complete <span> SEO </span>Tools To Boost Your Ranking
              </h1>
              <p>
                A place to help a brand to grow up in <br />
                global environment
              </p>
              <NavLink to="/Questionare_Page" className="getstartbtn fontpop">
                Create Now
              </NavLink>
            </div>
            <div className="col-sm-6 wow animate__animated animate__fadeInUp">
              <img className="w-100" src={Seotoolwhamen} alt="img" />
            </div>
          </div>
        </div>
      </div>
      <FooterContact />
    </>
  );
};
