import { NavLink } from "react-router-dom";
import Trafficrevenue from "../assests/trafficrevenue.jpg";
import Seosearch from "../assests/seosearch.png";
import Seonoti from "../assests/seonoti.png";
import Seotarget from "../assests/seotarget.png";
import Whatwedo from "../assests/whatwedo.jpg";
import Seoresult from "../assests/seoresult.png";
import Grcomputericon from "../assests/grcomputericon.png";
//
import { FooterContact } from "../components/FooterContact";
import { DrawerLeft } from "../components/DrawerLeft";

export const Seo = () => {
  return (
    <>
      <div
        className="container-fluid services_modal_page_div2"
        style={{ background: "#F5F5F5" }}
      >
        <div className="container py-5">
          <div className="services_modal_page_inner">
            <DrawerLeft data="growth_page" />
          </div>
          <div className="row  justify-content-around align-items-center">
            <div className="col-12 col-md-12 col-lg-7 my-3 text-sm-left ">
              <h1 className="my-4 all_h1_title">
                <span>More Traffic. More Revenue.</span> Boost Your Ranking
              </h1>
              <p className="all_h1_title_p">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Doloremque nostrum quibusdam possimus labore adipisci cum ut,
                soluta consequuntur nemo sapiente quo voluptatum sunt at cumque.
              </p>
              <div className="py-4">
                <NavLink
                  to="/Questionare_Page"
                  className="getstartbtn  fontrale my-5 "
                >
                  Get Started
                </NavLink>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-5 my-2 my-sm-0 my-3 rounded text-center ">
              <img className="w-100" src={Trafficrevenue} alt="dc" />
            </div>
          </div>
        </div>
      </div>
      <div className="container py-5 my-3 secoservices">
        <div className="row justify-content-center">
          <div className="latestprojecttitle col-md-8 text-center">
            <h2 className=" all_h1_title font-weight-bold my-4  wow animate__animated animate__fadeInDown animate__delay-1s">
              How Do You Get <span>Top Ranks</span> In SEO?
            </h2>
            <p className="all_h1_title_p  wow animate__animated animate__fadeInUp animate__delay-1s">
              Well optimized sites get more and more traffic over time, and that
              means more leads and sales. Without SEO, searcher won’t be able to
              find your site, and all your hard work will be for nothing.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-around">
          <div className="col-sm-3 m-3 text-center seofeatures   wow animate__animated animate__fadeInUp animate__delay-1s">
            <div className="seofeatureicon">
              <img src={Seosearch} alt="d" />
            </div>
            <div className="domainsertitle my-3">
              <h6>
                <b>Use Keywords</b>
              </h6>
            </div>
            <div className="domainsertext">
              <small>
                Keywords play major role in this formula. You want to include
                words people will search for throughout your content.
              </small>
            </div>
          </div>

          <div className="col-sm-3 m-3 text-center seofeatures  wow animate__animated animate__fadeInUp animate__delay-1s">
            <div className="domainserviceicon">
              <img src={Seonoti} alt="df" />
            </div>
            <div className="domainsertitle my-3">
              <h6>
                <b>High Quality Content</b>
              </h6>
            </div>
            <div className="domainsertext">
              <small>
                To drive more traffic to your website and to increase its
                popularity, you need to give visitors a reason to keep coming
                back.
              </small>
            </div>
          </div>

          <div className="col-sm-3 m-3 text-center seofeatures  wow animate__animated animate__fadeInUp animate__delay-1s">
            <div className="domainserviceicon">
              <img src={Seotarget} alt="f" />
            </div>
            <div className="domainsertitle my-3">
              <h6>
                <b>Diversify Your Links</b>
              </h6>
            </div>
            <div className="domainsertext">
              <small>
                To drive more traffic to your website and to increase its
                popularity, you need to give visitors a reason to keep coming
                back.
              </small>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid my-5"
        style={{ backgroundColor: "#E2F0FF" }}
      >
        <div className="container py-3 my-2">
          <div className="row  justify-content-between align-items-center">
            <div className="col-12 col-md-12 col-lg-7 my-3 text-sm-left ">
              <h2 className="my-4 all_h1_title">What we do.</h2>
              <p className="all_h1_title_p" style={{ color: "#212529B2" }}>
                Our campaigns build a website's relevance and trust with search
                engines. Every task performed has a specific purpose that
                improves your website's ranking. Some of these tasks include
              </p>
              <br />

              <ul
                className="pl-0"
                style={{
                  listStyleType: "disc",
                  color: "#212529B2",
                  lineHeight: "28px",
                }}
              >
                <div className="wedobullets d-flex flex-column flex-md-row justify-content-start">
                  <div className="col-md-4">
                    <li>Keyword Research</li>
                    <li>Business Directories</li>
                    <li>Onsite Optimizations</li>
                    <li>Tag Implementation</li>
                  </div>
                  <div className="col-md-4">
                    <li>Local Business SEO </li>
                    <li>Content Creation</li>
                    <li>Backlink Building</li>
                    <li>And so much more!</li>
                  </div>
                </div>
              </ul>
            </div>
            <div className="col-12 col-md-12 col-lg-5 my-2 my-sm-0 my-3 rounded text-center ">
              <img className="w-100" src={Whatwedo} alt="df" />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-4">
            <img className="w-100" src={Seoresult} alt="dd" />
          </div>
          <div className="col-md-4 text-md-right text-center">
            <h2 className="all_h1_title">Be found first</h2>
            <h6>93% of online queries start on a search engine.</h6>
            <p>
              If you're not one of the first results, you’re losing traffic to
              your competition.
            </p>
          </div>
        </div>
      </div>
      <div
        className="container-fluid my-sm-5 my-3"
        style={{ background: "#566677" }}
      >
        <div className="container py-3 my-2">
          <div className="row text-center justify-content-between">
            <div className="col-md-4">
              <div className="dataperc my-3">
                <h2 className="fontpop" style={{ color: "#FE8080" }}>
                  50%
                </h2>
                <p className="text-white">
                  of local searches bring a consumer to a real store within 24
                  hours
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="dataperc my-3">
                <h2 className="fontpop" style={{ color: "#FE8080" }}>
                  50%
                </h2>
                <p className="text-white">
                  Of consumers who perform a local search visit a store within 5
                  miles of their current location
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="dataperc my-3">
                <h2 className="fontpop" style={{ color: "#FE8080" }}>
                  50%
                </h2>
                <p className="text-white">
                  of mobile searches are more likely to contact a local business
                  if they have a mobile-friendly site
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-5 my-3 secoservices">
        <div className="row justify-content-center">
          <div className="latestprojecttitle col-md-8 text-center">
            <h2 className="font-weight-bold all_h1_title my-4  wow animate__animated animate__fadeInDown animate__delay-1s">
              How Do SEO Process <span>here's how it works</span>
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 my-3">
            <div>
              <ul style={{ listStyleType: "decimal", lineHeight: "38px" }}>
                <li>Initial campaign setup</li>
                <li>Keyword optimization</li>
                <li>Website optimization </li>
                <li>Business profile development</li>
                <li>Link portfolio development</li>
                <li>Custom content creation </li>
                <li>Ongoing SEO consultation</li>
                <li>Service and performance reporting</li>
              </ul>
            </div>
          </div>

          <div className="col-md-5 my-3">
            <div>
              <div></div>
              <div className="text-right">
                <span className="float-left">
                  <img src={Grcomputericon} alt="fd" />
                </span>
                <h2>Website optimization</h2>
                <p className="mt-5 py-3">
                  Our team of on-site optimization specialists get to work
                  fixing the code and copy on your website to make sure it's
                  user friendly and optimized for Google's algorithm.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterContact />
    </>
  );
};
