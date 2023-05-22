import { DrawerLeft } from "../components/DrawerLeft";
import Doubleclicks from "../assests/doubleclicks.png";
import Seosersearch from "../assests/seosersearch.png";
import Seoserdisplay from "../assests/seoserdisplay.png";
import Seoservideo from "../assests/seoservideo.png";
import Seosershop from "../assests/seosershop.png";
import Gadspaidsearch from "../assests/gadspaidsearch.png";
import { NavLink } from "react-router-dom";
import Gadsdisplayad from "../assests/gadsdisplayad.jpg";
import Gadsvideoad from "../assests/gadsvideoad.jpg";
import Gadsshop from "../assests/gadsshop.jpg";
import Gadsclient from "../assests/gadsclient.png";
import Bottomfadestroke from "../assests/bottomfadestroke.png";
import { FooterContact } from "../components/FooterContact";
export const GoogleAds = () => {
  return (
    <>
      <div className="container-fluid py-sm-5 py-3 mb-5 grleads bgproperty services_modal_page_div">
        <div className="services_modal_page_inner">
          <DrawerLeft data="growth_page" />
        </div>
        <div className="container py-sm-5">
          <div
            className="row py-sm-3 my-2 justify-content-end align-items-center"
            style={{ position: "relative" }}
          >
            <div className="col-sm-6 col-12 my-3">
              <h1 className=" all_h1_title font-weight-bold my-4 text-md-right text-center wow animate__animated animate__fadeInDown">
                Get <span>10x more leads</span> and <span>double</span> the
                conversion rate
              </h1>
              <div className="pt-4 text-right wow animate__animated animate__fadeInUp">
                <div className="d-flex justify-content-between">
                  <div>
                    <img src={Doubleclicks} alt="icon" />
                  </div>
                  <div>
                    <p className="font-weight-bold">
                      We do
                      <span style={{ color: "#088b43" }}>
                        Solid & Expansive Keyword Research
                      </span>
                    </p>
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <div>
                    <img src={Doubleclicks} alt="icon" />
                  </div>
                  <div>
                    <p className="font-weight-bold">
                      We Deliver
                      <span style={{ color: "rgb(202, 199, 3" }}>
                        Compelling Adverts
                      </span>
                      that
                      <span style={{ color: "rgb(235, 1, 1" }}>
                        Cause Click-Through (CTR)
                      </span>
                    </p>
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <div>
                    <img src={Doubleclicks} alt="icon" />
                  </div>
                  <div>
                    <p className="font-weight-bold">
                      We Create
                      <span style={{ color: "#0a76e5" }}>
                        Effective Landing Pages
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-4 ml-n4 d-none d-md-block position-absolute"
              style={{ bottom: "-45%", right: "15%" }}
            >
              <div
                className="py-sm-5 py-3 px-1 px-sm-2 text-center"
                style={{
                  backgroundColor: "#f5f5f5",
                  border: "5px solid white",
                }}
              >
                <h2>Specialised In</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container seoservices my-5 py-sm-5">
        <div className="row justify-content-center text-center wow animate__animated animate__fadeIn animate__slow">
          <div className="col-sm-3 col-6 my-2">
            <img src={Seosersearch} className="m-2" alt="icon" />
            <h6>
              <b>Search Campaigns</b>
            </h6>
          </div>
          <div className="col-sm-3 col-6 my-2">
            <img src={Seoserdisplay} className="m-2" alt="icon" />
            <h6>
              <b>Display Campaigns</b>
            </h6>
          </div>
          <div className="col-sm-3 col-6 my-2">
            <img src={Seoservideo} className="m-2" alt="icon" />
            <h6>
              <b>Video Campaigns</b>
            </h6>
          </div>
          <div className="col-sm-3 col-6 my-2">
            <img src={Seosershop} className="m-2" alt="icon" />
            <h6>
              <b>Shopping</b>
            </h6>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row justify-content-around align-items-center">
          <div className="col-12 my-3 text-center">
            <h2 className="my-4 all_h1_title">
              Add an Experienced AdWords Management Company to Your Team
            </h2>
            <p className="all_h1_title_p" style={{ color: "#212529b2" }}>
              Not every business has the resources to hire a team of AdWords
              experts. If you’re not seeing results from your paid campaign
              efforts and you feel like you’re just washing money down the
              drain, it’s time to call us. Our AdWords management company has
              worked with clients in all industries, helping them reboot their
              paid campaigns and turn them into profit-making machines.
            </p>
          </div>
        </div>
      </div>
      <div
        className="container-fluid py-3 latestprojects"
        style={{ backgroundColor: "#0a76e5" }}
      >
        <div className="container py-4">
          <div className="row justify-content-around align-items-center">
            <div className="col-md-6 text-white">
              <h2 className="mb-5 all_h1_title">Paid Search Marketing</h2>
              <p
                className="all_h1_title_p"
                style={{ color: "rgba(255, 255, 255, 0.7)" }}
              >
                Paid Search Marketing can be an incredibly valuable tool—but
                only if the person manning the campaigns has had their fair
                share of experience. That’s where our AdWords management agency
                comes in handy.
                <br />
                <br />
                Our team will work with you to determine the best strategy that
                will lower your CTR and increase conversions. Plus, we’re also
                monitoring your campaigns for new areas of improvement so that
                you never hit a standstill. Whether it’s giving current
                campaigns a facelift or creating something from the ground up,
                we’ve got you.
              </p>
              <div className="getstarted my-3 pt-4 border-0 wow animate__animated animate__fadeInUp">
                <NavLink
                  to="/Questionare_Page"
                  className="whitebgbtn bg-white fontrale"
                >
                  Get In Touch ⟶
                </NavLink>
              </div>
            </div>
            <div className="col-md-6">
              <img className="w-100" src={Gadspaidsearch} alt="icon" />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row my-md-5 py-md-5 my-2 py-2 justify-content-between">
          <div className="col-md-6 order-md-1 order-sm-2 order-2 my-2">
            <img className="w-100 mb-4" src={Gadsdisplayad} alt="i" />
          </div>
          <div className="col-md-6 text-right order-md-2 order-sm-1 order-1 my-2">
            <h2 className="mb-4 all_h1_title">Display Advertising</h2>
            <p className="all_h1_title_p">
              Most people have become oblivious to the ads that they see when
              browsing a website. In order to make sure that your display ads
              actually get noticed, you need a great design and a compelling
              CTA. Our AdWords management company knows how to design display
              ads that are irresistible. And you never have to worry about
              wasting ad spend on uninterested consumers—we make sure that your
              ads are only displayed on the sites that your target audience
              frequents.
            </p>
          </div>
        </div>

        <div className="row my-md-5 py-md-5 my-2 py-2 justify-content-between">
          <div className="col-md-6 text-left">
            <h2 className="mb-4 all_h1_title">Video Advertising</h2>
            <p className="all_h1_title_p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra
              nam sit adipiscing orci eget ac, nunc. Consequat, enim,
              pellentesque ornare gravida ultrices. Lobortis mauris malesuada
              quis ipsum neque. Dignissim vitae, egestas porta suspendisse in
              interdum nullam facilisis vestibulum. Aenean lectus egestas urna,
              nibh nec. Nisl dignissim bibendum eget molestie sapien dictumst
              consequat euismod. Imperdiet eget volutpat nulla sed at aliquet
              maecenas. Mollis auctor varius elit eget massa. Quis semper arcu
              fusce laoreet porta suspendisse eget quam non. Neque sodales
              blandit egestas non magna arcu diam lacus cursus.
            </p>
          </div>

          <div className="col-md-5">
            <img className="w-100 mb-4" src={Gadsvideoad} alt="i" />
          </div>
        </div>

        <div className="row my-md-5 py-md-5 my-2 py-2 justify-content-between">
          <div className="col-md-5 order-md-1 order-sm-2 order-2">
            <img className="w-100 mb-4" src={Gadsshop} alt="i" />
          </div>
          <div className="col-md-6 text-right order-md-2 order-sm-1 order-1 my-2">
            <h2 className="mb-4 all_h1_title">Shopping Campaigns</h2>
            <p className="all_h1_title_p">
              Using Google Shopping campaigns, you can put your products right
              under the noses of potential consumers. In other words, when a
              user searches for something in Google, your product feed will be
              displayed at the top of the page. This gives you a great advantage
              over competitors since it eliminates the need for the consumer to
              search through a handful of sites to find what they want.
              <br />
              <br />
              Our Google AdWords agency can set up Google Shopping campaigns for
              your ecommerce company with high-quality photos, enticing copy,
              and more so that consumers will be immediately motivated to make a
              purchase.
            </p>

            <div className="text-right py-4">
              <NavLink
                className="getstartbtn fontrale my-2"
                to="/Questionare_Page"
              >
                Get Started
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-3 py-3 gads_clientquote">
        <div
          className="row justify-content-around my-4 p-5"
          style={{ backgroundColor: "#000" }}
        >
          <div className="row">
            <div className="text-center">
              <div>
                <h2 className="text-white">Our Clients Love The Results</h2>
              </div>
              <div className="my-3">
                <img src={Gadsclient} alt="i" />
              </div>
              <div className="client_compname">
                <p className="text-white mb-0">John Doe, Lorem Pvt Ltd</p>
                <img src={Bottomfadestroke} alt="i" />
              </div>
              <div>
                <h3 className="my-4" style={{ color: "#0a76e5" }}>
                  217% Increase in Targeted Traffic
                </h3>
              </div>
              <div>
                <p style={{ color: "rgba(255, 255, 255, 0.7) " }}>
                  It is very clear the impact your team is making. You guys are
                  doing a great job on targeted leads. In fact, we closed a lead
                  directly through your marketing efforts last year that has
                  resulted in over half a million dollars in revenue!”
                </p>
                <div className="text-center py-4">
                  <NavLink
                    to="/Questionare_Page"
                    className="getstartbtn fontrale my-2"
                  >
                    Get Started
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterContact />
    </>
  );
};
