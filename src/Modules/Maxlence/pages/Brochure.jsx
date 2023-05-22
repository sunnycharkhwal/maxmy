import { NavLink } from "react-bootstrap";
import Downloadicon2 from "../assests/downloadicon2.png";
export const Brochure = () => {
  const CardData = [
    {
      title: "Google Ads",
      pdfLink: "pdfdemo.pdf",
      List: [
        {
          name: "Search campaign",
        },
        {
          name: "Display Campaign",
        },
        {
          name: "Video Campaign",
        },
        {
          name: "Shopping",
        },
      ],
    },
    {
      title: "Social Media",
      pdfLink: "pdfdemo.pdf",
      List: [
        {
          name: "Facebook",
        },
        {
          name: "Instagram",
        },
        {
          name: "Twitter",
        },
        {
          name: "Youtube",
        },
      ],
    },
    {
      title: "SEO",
      pdfLink: "pdfdemo.pdf",
      List: [
        {
          name: "On Page",
        },
        {
          name: "Off Page",
        },
        {
          name: "Link Building",
        },
        {
          name: "Video SEO",
        },
      ],
    },
  ];
  const CardApp = (props) => {
    return (
      <>
        <div
          className="container my-4 py-3"
          style={{ borderBottom: "1px solid #3f3f3f" }}
        >
          <h5 className="my-3 text-sm-start text-center">{props.title}</h5>
          <div className="row mx-3 mx-sm-1 rowshadow justify-content-between align-items-center">
            <div className="col-md-10">
              <div className="row mx-2 my-2 d-flex brochurecontent text-center justify-content-center align-items-center">
                {props.List.map((val, i) => {
                  return (
                    <div
                      key={i}
                      className="col-sm-3 my-3 border-none text-capitalize"
                    >
                      {val.name}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-md-2 my-3 brochuredownload text-md-right text-center">
              <NavLink to={props.pdfLink} download="GoogleAdsBrochure">
                <img src={Downloadicon2} alt="DownloadIcon" />
              </NavLink>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="container-fluid m-0 py-3 bgproperty brochurehero">
        <div className="container my-sm-4 py-0 my-0">
          <div className="row my-4 justify-content-start align-items-center text-sm-start text-center">
            <div className="col-sm-6 col-12 my-3 ">
              <h1 className="font-weight-bold text-dark my-sm-4">
                <span>Lorem</span> Ipsum
              </h1>
              <p className="text-dark font-weight-bold">
                Get easy access to our brochure. Learn what you can get.
              </p>
              <NavLink to="/" className="getstartbtn fontpop">
                {" "}
                Shop Now
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {CardData.map((val, i) => {
        return <CardApp key={i} {...val} />;
      })}
    </>
  );
};
