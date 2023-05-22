import { NavLink } from "react-router-dom";
import Emailcamp from "../assests/emailcamp.png";
import Emailautomation from "../assests/emailautomation.png";
import Emaildelivery from "../assests/emaildelivery.png";
import Intmigrate from "../assests/intmigrate.png";
import Fullcamp from "../assests/fullcamp.png";

import Techintergarte from "../assests/techintergarte.png";
import Servicemng from "../assests/servicemng.png";
import Emailaudit from "../assests/emailaudit.png";
import Subonboard from "../assests/subonboard.png";
import Maildeliver from "../assests/maildeliver.jpg";
import { FooterContact } from "../components/FooterContact";
import { DrawerLeft } from "../components/DrawerLeft";
export const EmailMarketing = () => {
  return (
    <>
      <div
        className="container-fluid py-sm-5 py-3 "
        style={{ background: "#F5F5F5" }}
      >
        <div className="container py-5 services_modal_page_div2">
          <div className="services_modal_page_inner">
            <DrawerLeft data="growth_page" />
          </div>
          <div className="row  justify-content-between align-items-center">
            <div className="col-12 col-md-12 col-lg-5 my-2 my-sm-0 my-3 rounded text-center ">
              <img className="w-100" src={Emailcamp} alt="f" />
            </div>
            <div className="col-12 col-md-12 col-lg-5 my-3 text-end ">
              <h1 className="my-4 all_h1_title">
                Everybody is doing it.
                <span>Email Marketing Drives Sales. Period!</span>
              </h1>
              <p className="all_h1_title_p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed leo
                amet mauris amet, nulla auctor ipsum. Cursus in arcu integer
                pellentesque sed in mattis.
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
          </div>
        </div>
      </div>
      <div className="container seoservices" style={{ marginTop: "-3rem" }}>
        <div className="row justify-content-between text-center align-items-top ">
          <div className="col-sm-2 col-6 ">
            <img src={Emaildelivery} className="m-2 " alt="d" />
            <h6 style={{ lineHeight: "20px" }}>
              <b>Full Email Campaign Management</b>
            </h6>
          </div>
          <div className="col-sm-2 col-6">
            <img src={Emailautomation} className="m-2 " alt="ew" />
            <h6 style={{ lineHeight: "20px" }}>
              <b>Email Automation Management</b>
            </h6>
          </div>
          <div className="col-sm-2 col-6">
            <img src={Intmigrate} className="m-2 " alt="e" />
            <h6 style={{ lineHeight: "20px" }}>
              <b>Data Integration & Migration</b>
            </h6>
          </div>
          <div className="col-sm-2 col-6">
            <img src={Fullcamp} className="m-2 " alt="e" />
            <h6 style={{ lineHeight: "20px" }}>
              <b>Fast E-mail Deliveries</b>
            </h6>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row  justify-content-around align-items-center">
          <div className="col-12  my-3 text-center ">
            <h2 className="my-4 all_h1_title">
              Email Marketing Management & Strategy
            </h2>
            <p className="all_h1_title_p" style={{ color: "#212529B2" }}>
              DMi Partners is an email marketing agency that understands the
              value of our clients’ investment. Our clients routinely tell us
              that their 1st party owned database of email subscribers is their
              most valuable investment. Additionally, our clients understand
              that the success of nearly all of their marketing campaigns rely
              on email to achieve positive ROI for those additional channels.
              Executing through email to persuade a conversion, retain
              customers, re-engage cold conversations and drive
              additional/repeat purchases are crucial to our customers’
              businesses. Optimizations to these initiatives funnels additional
              dollars to future marketing and makes additional channels viable.
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid" style={{ background: "#E2F0FF" }}>
        <div className="container my-3 py-4">
          <div className="row">
            <div className="col-md-6 my-3">
              <div className="my-2">
                <div className="mb-3 d-flex justify-content-start align-items-center">
                  <img className="me-4" src={Techintergarte} alt="dd" />
                  <h5>Technical Integration</h5>
                </div>
                <div>
                  <p className="all_h1_title_p">
                    Our clients invest a ton of money into email before they
                    even considering the marketing dollars they spent to acquire
                    their database of subscribers. Routinely our clients are
                    paying for tools and services form their Email Service
                    Provider (ESP) that they are not taking full advantage of.
                    DMi understands that the integrations require expertise and
                    a commitment to getting everything configured correctly. DMi
                    takes away the worry and hassle of managing the technical
                    set-up process to ensure that everything is wired to enable
                    a truly personalized cross-channel marketing experience that
                    is optimized at every step of the customer lifecycle
                    journey.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 my-3">
              <div className="my-2">
                <div className="mb-3 d-flex justify-content-start align-items-center">
                  <img className="me-4" src={Servicemng} alt="dd" />
                  <h5>Full Service Email Management</h5>
                </div>
                <div>
                  <p className="all_h1_title_p">
                    With our Full-Service email management, our clients step out
                    of everything required for their email marketing initiatives
                    except for the pieces they want to provide guidance. DMi is
                    responsible for end-to-end strategy, deploying all email
                    sends, testing, reporting, tracking & optimizations. The
                    first step is conducting a comprehensive email audit that we
                    use to develop a prioritized roadmap of optimizations to
                    begin implementing as quickly as possible. With ongoing
                    insights and guidance from our clients we execute on the
                    tireless efforts of optimizing each component of your email
                    campaigns with the knowledge of decades of experience and an
                    undying hunger to keep improving and the creativity to keep
                    trying new and innovative strategies.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 my-3">
              <div className="my-2">
                <div className="mb-3 d-flex justify-content-start align-items-center">
                  <img className="me-4" src={Emailaudit} alt="dd" />
                  <h5>Comprehensive Email Audit</h5>
                </div>
                <div>
                  <p className="all_h1_title_p">
                    Our clients invest a ton of money into email before they
                    even considering the marketing dollars they spent to acquire
                    their database of subscribers. Routinely our clients are
                    paying for tools and services form their Email Service
                    Provider (ESP) that they are not taking full advantage of.
                    DMi understands that the integrations require expertise and
                    a commitment to getting everything configured correctly. DMi
                    takes away the worry and hassle of managing the technical
                    set-up process to ensure that everything is wired to enable
                    a truly personalized cross-channel marketing experience that
                    is optimized at every step of the customer lifecycle
                    journey.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 my-3">
              <div className="my-2">
                <div className="mb-3 d-flex justify-content-start align-items-center">
                  <img className="me-4" src={Subonboard} alt="dd" />
                  <h5>Subscriber Onboarding & Welcome Series</h5>
                </div>
                <div>
                  <p className="all_h1_title_p">
                    Our clients invest a ton of money into email before they
                    even considering the marketing dollars they spent to acquire
                    their database of subscribers. Routinely our clients are
                    paying for tools and services form their Email Service
                    Provider (ESP) that they are not taking full advantage of.
                    DMi understands that the integrations require expertise and
                    a commitment to getting everything configured correctly. DMi
                    takes away the worry and hassle of managing the technical
                    set-up process to ensure that everything is wired to enable
                    a truly personalized cross-channel marketing experience that
                    is optimized at every step of the customer lifecycle
                    journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-3 my-2">
        <div className="row justify-content-between align-items-center">
          <div className="col-12 col-md-12 col-lg-7 my-3 text-sm-left">
            <h2 className="my-4 all_h1_title">
              Email Deliverability <br />
              Diagnosis & Repair
            </h2>
            <p className="all_h1_title_p" style={{ color: "#212529b2" }}>
              The perfectly timed personalized email is worthless if it doesn’t
              reach your subscriber’s inbox. While all of DMi’s marketing
              efforts are designed to prevent inboxing concerns across the
              board, many of our clients have initially come to us looking for
              assistance resolving various levels of deliverability concerns.{" "}
              <br />
              <br />
              We audit each impactful factor in deliverability:
            </p>
            <br />

            <ul style={{ listStyleType: "disc", color: "#212529b2" }}>
              <li>Subject line optimizations</li>
              <li>Preview text analysis</li>
              <li>Link and tracking diagnostics</li>
              <li>Loading speed</li>
              <li>DMARC Implementation</li>
              <li>Email rendering across email clients and devices</li>
              <li>(mobile and desktop)</li>
            </ul>
          </div>
          <div className="col-12 col-md-12 col-lg-5 my-2 my-sm-0 my-3 rounded text-center">
            <img className="w-100" src={Maildeliver} alt="gy" />
          </div>
        </div>
      </div>
      <FooterContact />
    </>
  );
};
