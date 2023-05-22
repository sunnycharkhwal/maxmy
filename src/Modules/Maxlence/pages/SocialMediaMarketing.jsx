import { NavLink } from "react-router-dom";
import Maxlenceintroimg from "../assests/maxlenceintroimg.png";
import Facebookcard from "../assests/facebookcard.png";
import Linkedincard from "../assests/linkedincard.png";
import Instagramcard from "../assests/instagramcard.png";
import Pinterestcard from "../assests/pinterestcard.png";
import Twittercard from "../assests/twittercard.png";
import Youtubecard from "../assests/youtubecard.png";
import Socialimpact from "../assests/socialimpact.jpg";
import Socialeffect from "../assests/socialeffect.jpg";
import Grsocialpng from "../assests/grsocialpng.png";
//
import { FooterContact } from "../components/FooterContact";
import Gadsclient from "../assests/gadsclient.png";
import Bottomfadestroke from "../assests/bottomfadestroke.png";
import { DrawerLeft } from "../components/DrawerLeft";

export const SocialMediaMarketing = () => {
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
            <div className="col-12 col-md-12 col-lg-6 my-3 text-sm-left ">
              <h1 className="my-4 all_h1_title">
                Combining the <span>Power of Paid</span> and
                <span> Organic Social</span>
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
            <div className="col-12 col-md-12 col-lg-6 my-2 my-sm-0 my-3 rounded text-center ">
              <img className="w-100" src={Maxlenceintroimg} alt="i" />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid py-5" style={{ background: "#fff" }}>
        <div className="container seoservices">
          <div
            className="text-center my-3"
            style={{ visibility: "visible", animationName: "fadeInDown" }}
          >
            <h2 className="font-weight-bold my-sm-4 all_h1_title">
              What services are covered in
              <span> Enterprise Social Media </span>
            </h2>
          </div>

          <div
            className="row py-2 justify-content-around align-items-centerwow"
            style={{ visibility: "visible", animationName: "fadeInDown" }}
          >
            <div className="col-md-3 my-3 col-6">
              <div>
                <img src={Facebookcard} alt="d" />
              </div>
            </div>
            <div className="col-md-3 my-3 col-6">
              <div>
                <img src={Instagramcard} alt="d" />
              </div>
            </div>
            <div className="col-md-3 my-3 col-6">
              <div>
                <img src={Linkedincard} alt="d" />
              </div>
            </div>
          </div>

          <div
            className="row justify-content-around wow animate__ animate__fadeInDown animate__slow animated"
            style={{ visibility: "visible", animationName: "fadeInDown" }}
          >
            <div className="col-md-3 my-3 col-6">
              <div>
                <img src={Pinterestcard} alt="e" />
              </div>
            </div>
            <div className="col-md-3 my-3 col-6">
              <div>
                <img src={Twittercard} alt="e" />
              </div>
            </div>
            <div className="col-md-3 my-3 col-6">
              <div>
                <img src={Youtubecard} alt="e" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-4">
        <div className="row justify-content-around align-items-center">
          <div className="col-12 col-md-12 col-lg-6 my-3  text-sm-left">
            <h2 className="my-4 all_h1_title">
              Experience the full <span>impact</span> of
              <span> Social Media</span>
            </h2>
            <p className="all_h1_title_p">
              With more social media channels in existence than ever before,
              it’s easy to get overwhelmed and overlook its potential. With the
              help of our team, our team can help you create and implement a
              strong, intelligence-based social media strategy that has proven
              results in boosting brand awareness, generating leads, and most
              importantly generating revenue.
            </p>
          </div>
          <div className="col-12 col-md-12 col-lg-6 my-2 my-sm-0 my-3 rounded text-center">
            <img className="w-100" src={Socialimpact} alt="i" />
          </div>
        </div>
      </div>
      <div
        className="container-fluid py-3 latestprojects"
        style={{ backgroundColor: "#0a76e5" }}
      >
        <div className="container py-4">
          <div className="row justify-content-around align-items-center">
            <div className="col-md-6">
              <img className="w-100" src={Socialeffect} alt="cd" />
            </div>
            <div className="col-md-6 text-white text-md-right text-center">
              <h2 className="mb-5 all_h1_title">
                Is Social Media Marketing Effective?
              </h2>
              <p
                className="all_h1_title_p"
                style={{ color: "rgba(255, 255, 255, 0.7)" }}
              >
                Social media marketing is essential to every company’s growth
                and maturity. As a business, you must always be present where
                your customers are to inform them of deals and news, but also to
                be there when they have questions or concerns. Being present and
                accounted for is critical for customer relations and having a
                social media presence enables this. Here are some key
                considerations: Social media; enables collaboration with other
                industry experts, fosters a sense of community for current
                customers and drives new and reoccurring business to your
                doorstep, funnel, or website.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row justify-content-around align-items-center">
          <div className="col-12 my-3 text-center">
            <h2 className="my-4 all_h1_title">
              Don’t let non-experts touch your social media platform!
            </h2>
            <p className="all_h1_title_p" style={{ color: "#212529b2" }}>
              Posting consistent, accurate, and on-brand content is critical to
              always being in your audience’s feeds and is something best left
              to an expert. Don’t feel forced to purchase PPC or social ads in
              order to be seen. Use our organic marketing to naturally rank and
              be seen by current and potential customers.
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid bg grsocialmedia bgproperty">
        <div className="container p-sm-5">
          <h2 className="text-center all_h1_title">How it works</h2>
          <div className="row my-4 justify-content-between align-items-center">
            <div className="col-sm-6 order-2 order-sm-0 text-center">
              <img className="w-100" src={Grsocialpng} alt="df" />
            </div>
            <div className="col-sm-6 col-12 my-3">
              <div className="maxpoint mb-4 wow animate__animated animate__fadeInLeft animate__slow">
                <h4 className="fontrobo" style={{ color: "#0a76e5" }}>
                  Analytics
                </h4>
                <p>
                  Analyze your social media interactions and those of the
                  competitiors in real time.
                </p>
              </div>

              <div className="maxpoint mb-4 wow animate__animated animate__fadeInLeft animate__slow">
                <h4 className="fontrobo" style={{ color: "#0a76e5" }}>
                  Engage
                </h4>
                <p>
                  Communicate with fans and customers quickly and efficiently on
                  all channels.
                </p>
              </div>

              <div className="maxpoint mb-4 wow animate__animated animate__fadeInLeft animate__slow">
                <h4 className="fontrobo" style={{ color: "#0a76e5" }}>
                  Publish
                </h4>
                <p>
                  Composing, planning and publishing posts is now super easy,
                  also in team.
                </p>
              </div>

              <div className="maxpoint mb-4 wow animate__animated animate__fadeInLeft animate__slow">
                <h4 className="fontrobo" style={{ color: "#0a76e5" }}>
                  Discovery
                </h4>
                <p>
                  Discover trends, topics & influencers from around the world
                  and up to date.
                </p>
              </div>

              <div className="py-4">
                <NavLink
                  to="/Questionare_Page"
                  className="getstartbtn fontrale my-5"
                >
                  Get Started
                </NavLink>
              </div>
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
