import { NavLink } from "react-router-dom";
import { DrawerLeft } from "../components/DrawerLeft";
import { FooterContact } from "../components/FooterContact";
import Domainsec from "../assests/domainsec.png";

import Tslcerti from "../assests/tslcerti.png";
import Certificateicon from "../assests/certificateicon.png";
import Sslcerti from "../assests/sslcerti.png";
import Freehosting from "../assests/freehosting.png";

export const CreationWebhost = () => {
  return (
    <>
      <div className=" container services_modal_page_div">
        <div className="services_modal_page_inner" style={{ left: "0" }}>
          <DrawerLeft data="creation_page" />
        </div>
      </div>
      <div className="container websitetemp my-md-5 py-md-3 mt-2 pt-5 ">
        <div className="text-center">
          <p>
            <b>Hosting, Maintenance & Support</b>
          </p>
          <h1 className="all_h1_title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
            vitae condimentum risus.
          </h1>
          <div className="py-4">
            <NavLink
              to="/Questionare_Page"
              className="getstartbtn  fontrale my-5"
            >
              Get Started &#10230;
            </NavLink>
          </div>
        </div>
      </div>
      <div
        className="container my-sm-4 py-sm-5 py-0 my-0
         domainsection"
      >
        <div className="row justify-content-between align-items-start">
          <div className="col-md-5 my-3 text-end ">
            <h2 className="font-weight-bold my-3 all_h1_title ">
              <b>
                <span>
                  <b>Domain Name </b>
                </span>
                For Your
                <span>
                  <b> Business</b>
                </span>
              </b>
            </h2>
            <p className="all_h1_title_p">
              The first thing to check out of your list should be finding a
              domain name. Select on a name that is catchy at first look
              therefore imprinting on your client/customer’s mind. And next time
              they search for such a service or product, your name pops-up in
              their head automatically.
            </p>
          </div>

          <div className="col-md-7 rounded text-center wow animate__animated animate__fadeInUp animate__slow ">
            <img className="w-100 w-sm-200" src={Domainsec} alt="img" />
          </div>
        </div>
      </div>
      <div className="container my-3">
        <div className="row justify-content-around align-items-center">
          <div className="col-md-3 my-3 text-center wow animate__animated animate__fadeInUp animate__faster animate__delay-1s">
            <div className="domainserviceicon">
              <img src={Tslcerti} alt="img" />
            </div>
            <div className="domainsertitle my-3">
              <h6>
                <b>TLS 1.2</b>
              </h6>
            </div>
            <div className="domainsertext">
              <small>
                Feel safe knowing that Maxlence adds extra layers of website
                security like TLS 1.2 to keep all transactions on your site
                private.
              </small>
            </div>
          </div>

          <div className="col-md-3 my-3 text-center wow animate__animated animate__fadeInUp animate__faster animate__delay-2s">
            <div className="domainserviceicon">
              <img src={Certificateicon} alt="img" />
            </div>
            <div className="domainsertitle my-3">
              <h6>
                <b>ISO 27001 & 27018 Certificates</b>
              </h6>
            </div>
            <div className="domainsertext">
              <small>
                Maxlence maintains industry best practices for handling personal
                information (PII) and managing website security risks.
              </small>
            </div>
          </div>

          <div className="col-md-3 my-3 text-center wow animate__animated animate__fadeInUp animate__faster animate__delay-3s">
            <div className="domainserviceicon">
              <img src={Sslcerti} alt="img" />
            </div>
            <div className="domainsertitle my-3">
              <h6>
                <b>SSL Certificate</b>
              </h6>
            </div>
            <div className="domainsertext">
              <small>
                Gain your visitors’ trust by having SSL web security to keep
                connections secure and private over an HTTPS connection.
              </small>
            </div>
          </div>
        </div>
      </div>
      <div className="container  my-sm-4 py-sm-5 py-0 my-0 freehost ">
        <div className="row justify-content-around align-items-center">
          <div className="col-md-6 rounded text-center wow animate__animated animate__fadeInUp animate__slow ">
            <img className="w-100" src={Freehosting} alt="img" />
          </div>

          <div className="col-md-4 my-3 text-sm-left">
            <h2 className="font-weight-bold my-4 all_h1_title">
              <b>
                World Class
                <span>
                  <b> Free Hosting</b>
                </span>
              </b>
            </h2>
            <p
              className="bullets d-flex align-items-center mb-1"
              style={{ fontSize: "14px" }}
            >
              <b>Lorem ipsum dolor sit amet.</b>
            </p>
            <p
              className="bullets d-flex align-items-center mb-1"
              style={{ fontSize: "14px" }}
            >
              <b>Lorem ipsum dolor sit.</b>
            </p>
            <p
              className="bullets d-flex align-items-center mb-1"
              style={{ fontSize: "14px" }}
            >
              <b>Lorem, ipsum.</b>
            </p>

            <div className="py-4">
              <NavLink
                to="/Questionare_Page"
                className="getstartbtn  fontrale my-5"
              >
                Create New &#10230;
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-md-5 py-md-3 mt-2 pt-5">
        <div className="row justify-content-center text-center">
          <div className="col-md-10">
            <h2 className="all_h1_title">
              <b>
                We provide ad-hoc and retained support and maintenance for
                websites
              </b>
            </h2>
            <p className="my-5 all_h1_title_p">
              No matter how tight our product cycles are, we never jump straight
              into Sketch too early. We invest time in bringing order to your
              requirements and understanding what we're about to design. This
              results in a simple and coherent product experience.{" "}
            </p>
          </div>
        </div>

        <div className="row justify-content-around text-md-left text-center">
          <div className="col-md-4 my-2">
            <div className="my-4">
              <span className="numpink">1</span>
            </div>
            <div>
              <p className="text-md-left text-center mb-0 font-weight-bold">
                Technical optimisation
              </p>
            </div>
          </div>
          <div className="col-md-4 my-2">
            <div className="my-4">
              <span className="numpink">2</span>
            </div>
            <div>
              <p className="text-md-left text-center mb-0 font-weight-bold">
                Content alterations, additions and planning
              </p>
            </div>
          </div>
          <div className="col-md-4 my-2">
            <div className="my-4">
              <span className="numpink">3</span>
            </div>
            <div>
              <p className="text-md-left text-center mb-0 font-weight-bold">
                Site Structure optimisation
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-around text-md-left text-center">
          <div className="col-md-4 my-2">
            <div className="my-4">
              <span className="numpink">4</span>
            </div>
            <div>
              <p className="text-md-left text-center mb-0 font-weight-bold">
                Plugins
              </p>
            </div>
          </div>

          <div className="col-md-4 my-2">
            <div className="my-4">
              <span className="numpink">5</span>
            </div>
            <div>
              <p className="text-md-left text-center mb-0 font-weight-bold ">
                Themes and templates
              </p>
            </div>
          </div>

          <div className="col-md-4 my-2">
            <div className="my-4">
              <span className="numpink">6</span>
            </div>
            <div>
              <p className="text-md-left text-center mb-0 font-weight-bold">
                WordPress updates
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-12 px-md-5 px-2 my-5 text-center">
          <div>
            <p>
              We’re flexible with our support and understand that sometimes you
              may just need us to get something done for you (like adding a new
              page), and other times you may need something more complex – we
              can help with everything.
            </p>
          </div>
        </div>
      </div>
      <FooterContact />
    </>
  );
};
