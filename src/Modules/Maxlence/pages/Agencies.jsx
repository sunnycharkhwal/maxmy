import { NavLink } from "react-router-dom";
import Agencyhead from "../assests/agencyhead.png";
import Agencyrevenue from "../assests/agencyrevenue.png";
import Dashboardagency from "../assests/dashboardagency.png";

export const Agencies = () => {
  const OurAreaData = [
    [
      {
        text: "Content Marketing",
        link: "/",
      },
      {
        text: "Social Media Marketing",
        link: "/",
      },
      {
        text: "Website Design",
        link: "/",
      },
      {
        text: "Mobile Application",
        link: "/",
      },
      {
        text: "SaaS Application",
        link: "/",
      },
      {
        text: "Responsive Web App",
        link: "/",
      },
    ],
    [
      {
        text: "GMB",
        link: "/",
      },
      {
        text: "Web Maintenance",
        link: "/",
      },
      {
        text: "Web Hosting",
        link: "/",
      },
    ],
  ];
  const OurAreaApp = (props) => {
    const OurAreaInnerApp = (val) => {
      return (
        <div className="my-2">
          <NavLink to={val.link}>{val.text}</NavLink>
        </div>
      );
    };
    return (
      <div className="col-md-3">
        {props.val.map((val, i) => {
          return <OurAreaInnerApp key="i" {...val} />;
        })}
      </div>
    );
  };
  const BrandingProcessData = [
    {
      title: "Google Ads",
      BrandingProcessInnerData: [
        {
          name: "Website Analysis",
          link: "/",
        },
        {
          name: "Keyword Research",
          link: "/",
        },
        {
          name: "Forecast Report",
          link: "/",
        },
        {
          name: "Google Adword Setup",
          link: "/",
        },
        {
          name: "Sanitisation Report",
          link: "/",
        },
        {
          name: "Google Tag Manager Setup",
          link: "/",
        },
        {
          name: "Google Analytics Setup",
          link: "/",
        },
        {
          name: "Ad Campaign Setup",
          link: "/",
        },
        {
          name: "Goal Setup",
          link: "/",
        },
        {
          name: "Campaign Optimisation",
          link: "/",
        },
        {
          name: "Remarketing",
          link: "/",
        },
      ],
    },
    {
      title: "SEO",
      BrandingProcessInnerData: [
        {
          name: "Website Analysis",
          link: "/",
        },
        {
          name: "Keyword Research",
          link: "/",
        },
        {
          name: "GMB Setup",
          link: "/",
        },
        {
          name: "Google Search Console Setup",
          link: "/",
        },
        {
          name: "On Page Optimisation",
          link: "/",
        },
        {
          name: "Off Page Optimisation",
          link: "/",
        },
      ],
    },
    {
      title: "Social Media",
      BrandingProcessInnerData: [
        {
          name: "Website Analysis",
          link: "/",
        },
        {
          name: "Interest Targeting Analysis",
          link: "/",
        },
        {
          name: "Forecast Of The Ads",
          link: "/",
        },
        {
          name: "Facebook Business Manager Setup",
          link: "/",
        },
        {
          name: "Facebook Page Setup",
          link: "/",
        },
        {
          name: "Facebook Ads Account Setup",
          link: "/",
        },
        {
          name: "Instagram Page Attachment To The Facebook",
          link: "/",
        },
        {
          name: "Domain Verification",
          link: "/",
        },
        {
          name: "Facebook Pixel Setup",
          link: "/",
        },
        {
          name: "Events Setup For Tracking The Ads",
          link: "/",
        },
      ],
    },
  ];
  const BrandingProcessApp = (props) => {
    return (
      <div className="col-md-3 my-2">
        <h4>{props.title}</h4>
        {props.BrandingProcessInnerData.map((val, i) => {
          return (
            <div className="my-1" key={i}>
              <NavLink to={val.link}>{val.name}</NavLink>
            </div>
          );
        })}
      </div>
    );
  };
  return (
    <>
      <div className="container-fluid  py-5 bgproperty growthhero">
        <div className="container my-sm-4 py-0 my-0">
          <div className="row my-4 justify-content-around align-items-center text-sm-start text-center">
            <div className="col-sm-6 col-12 my-3 ">
              <h1 className="font-weight-bold my-sm-4 ">
                Our business is <span>taking care</span> of your business
              </h1>
              <p>A place to help an agency to grow up in global environment</p>

              <div className="py-sm-3">
                <NavLink to="/getintouch" className="getstartbtn fontpop">
                  Create Now
                </NavLink>
              </div>
            </div>
            <div className="col-sm-5 my-2 wow animate__animated animate__fadeInUp">
              <img className="w-100" src={Agencyhead} alt="fd" />
            </div>
          </div>
        </div>
      </div>
      <div className="container py-3 mb-1 secoservices">
        <div>
          <h1
            className="font-weight-bold my-4 text-center "
            style={{ visibility: "visible", animationName: "fadeInDown" }}
          >
            Get more done with less staff
          </h1>
          <small className="text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            consequuntur architecto neque maxime, autem cupiditate, laborum sunt
            et repudiandae ad sequi eius ipsa at! Mollitia atque dicta
            consectetur quibusdam totam ad, provident tenetur excepturi
            recusandae fugiat nihil. Enim, delectus ea eos, voluptatem quod
            nostrum dolor, quis nulla modi quas perspiciatis! Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Molestiae atque maxime saepe
            possimus minus natus mollitia autem, eaque asperiores ad laudantium!
            Ea repudiandae illo quibusdam iusto dolore omnis dicta magnam magni
            tenetur incidunt aspernatur officia aperiam impedit quo vero maxime
            ullam sit unde ipsam perspiciatis, assumenda eius error quis? Quae!
          </small>
        </div>
        <div className="my-4">
          <h5>Our area of expertise</h5>
        </div>
        <div className="row">
          {OurAreaData.map((val, i) => {
            return <OurAreaApp key={i} val={val} />;
          })}
        </div>
        <div className="container">
          <div className="row justify-content-around align-items-center">
            <div
              className="col-md-5 mt-4"
              style={{ visibility: "visible", animationName: "fadeInUp" }}
            >
              <img className="w-100" src={Agencyrevenue} alt="d" />
            </div>
            <div className="homesec3info col-sm-7 mt-3 py-3 text-sm-start">
              <div
                className="m-0 p-0"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                <h1>
                  Generate more monthly <span>recurring revenue</span>
                </h1>
                <br />
                <small className="text-start">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
                  tempora suscipit excepturi nihil porro temporibus cumque
                  autem, minus quae soluta iusto dicta ex non facere totam culpa
                  reprehenderit repellendus adipisci?
                </small>
              </div>

              <div className="row mt-4 ">
                <div
                  className="col-12 col-md-6 text-start mb-2 wow animate__ animate__fadeInUp animate__slow animated"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  <p>Lorem ipsum dolor sit amet.</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam voluptatem voluptas perspiciatis sequi. Animi
                    mollitia quisquam iste vel, commodi amet?
                  </p>
                </div>
                <div
                  className="col-12 col-md-6 text-start mb-2 "
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  <p> Lorem ipsum dolor sit amet. </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Porro impedit dicta voluptas itaque expedita fugit officiis
                    eum. Magnam, corrupti deserunt?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container py-3 mb-1 secoservices">
          <div className="row mt-md-5 mt-2 justify-content-around align-items-center">
            <div className="col-md-6 my-3">
              <h1>
                Easily track your projects through <span>client dashborad</span>
              </h1>
              <p>
                Whether you’re just getting started or are an established brand,
                our powerful platform helps your business grow.
              </p>
            </div>
            <div className="col-md-6">
              <img className="w-100" src={Dashboardagency} alt="df" />
            </div>
          </div>
        </div>
        <div className="container py-4 mb-1 secoservices">
          <div className="my-3">
            <h1
              className="font-weight-bold my-4 text-md-center text-left"
              style={{ visibility: "visible", animationName: "fadeInDown" }}
            >
              Our unique branding process to build a future-proof brand
            </h1>
          </div>
          <div className="row mt-5">
            {BrandingProcessData.map((val, i) => {
              return <BrandingProcessApp key={i} {...val} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};
