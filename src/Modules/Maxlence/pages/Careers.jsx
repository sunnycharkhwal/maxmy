import Whymaxtemp from "../assests/whymaxtemp.jpg";
import { Tab, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
export const Careers = () => {
  return (
    <>
      <div className="careerslider1 sliderimgcare bgproperty py-5">
        <div className="row careerslidecontent py-5 justify-content-center">
          <div className="text-center col-md-8 col-10">
            <h4 className="text-white my-3">Search Jobs</h4>
            <div className="career_search w-100">
              <input
                type="search"
                placeholder="Search Here"
                aria-describedby="button-addon1"
                className="form-control rounded-pill fontrale border-0 bg-light"
              />
            </div>
            <div className="applybtn mt-5 text-center">
              <h4 className="text-white mt-5">
                Exceed your potential… come join us!
              </h4>
              <div className="my-4 d-flex justify-content-center">
                <NavLink to="#section1" className="getstartbtn fontpop">
                  Apply Now
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row justify-content-around">
          <div className="whymax col-sm-7 my-3 text-sm-left">
            <div
              className="m-0 p-0 wow animate__ animate__fadeInUp animated"
              style={{ visibility: "visible", animationName: "fadeInUp" }}
            >
              <h1>
                Why{" "}
                <span>
                  <b> Maxlence ?</b>
                </span>
              </h1>
            </div>

            <div className="row my-1 px-3">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                accusamus ullam, vero quis quo a cupiditate ipsum autem et, quod
                nemo iste, possimus corporis molestias eaque. Distinctio
                recusandae, mollitia eius, natus fugit minus totam fuga nihil
                reprehenderit nesciunt quidem id sed, maxime temporibus
                voluptatibus doloremque iste et odio amet. Reprehenderit.
              </p>
            </div>
          </div>

          <div
            className="col-sm-5 mt-2 wow animate__ animate__fadeInDown animated"
            style={{ visibility: "visible", animationName: "fadeInDown" }}
          >
            <img className="w-100" src={Whymaxtemp} alt="alt" />
          </div>
        </div>
      </div>
      <LifeAtMaxlence />
      <FiledsOfWork />
      <div>
        <div className="container c1 perksbenefits d-flex align-items-center my-3 py-5">
          <div className="row my-4 justify-content-center align-items-center">
            <div className="col-md-8 col-12 text-center">
              <h1 className="text-white py-3">Perks & Benefits</h1>
              <p className="text-white py-3">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur placeat itaque amet sequi in fugiat voluptate nihil
                facere id tempore!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="section1">
        <JobeList />
      </div>
    </>
  );
};
const LifeAtMaxlence = () => {
  const PaneData = [
    {
      eventKey: "first",
      img: "https://source.unsplash.com/random/500x500/?girl",
      imgTitle: "White & Laura Jehansan",
      imgSubTitle: "SEO, India",
      text: "Testimonial 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt ut non felis consectetur in commodo viverra eget. Ut elementum aliquam pretium quam. Eros nisi, condimentum faucibus mauris eu facilisi turpis. Nisl quis scelerisque donec tellus eu donec. Consectetur varius vitae in viverra et ante enim purus dolor arcu posuere eu erat.",
    },
    {
      eventKey: "2",
      img: "https://source.unsplash.com/random/500x500/?boy",
      imgTitle: "White & Laura Jehansan",
      imgSubTitle: "SEO, India",
      text: "Testimonial 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt ut non felis consectetur in commodo viverra eget. Ut elementum aliquam pretium quam. Eros nisi, condimentum faucibus mauris eu facilisi turpis. Nisl quis scelerisque donec tellus eu donec. Consectetur varius vitae in viverra et ante enim purus dolor arcu posuere eu erat.",
    },
    {
      eventKey: "3",
      img: "https://source.unsplash.com/random/500x500/?face",
      imgTitle: "White & Laura Jehansan",
      imgSubTitle: "SEO, India",
      text: "Testimonial 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt ut non felis consectetur in commodo viverra eget. Ut elementum aliquam pretium quam. Eros nisi, condimentum faucibus mauris eu facilisi turpis. Nisl quis scelerisque donec tellus eu donec. Consectetur varius vitae in viverra et ante enim purus dolor arcu posuere eu erat.",
    },
    {
      eventKey: "4",
      img: "https://source.unsplash.com/random/500x500/?woman",
      imgTitle: "White & Laura Jehansan",
      imgSubTitle: "SEO, India",
      text: "Testimonial 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt ut non felis consectetur in commodo viverra eget. Ut elementum aliquam pretium quam. Eros nisi, condimentum faucibus mauris eu facilisi turpis. Nisl quis scelerisque donec tellus eu donec. Consectetur varius vitae in viverra et ante enim purus dolor arcu posuere eu erat.",
    },
  ];
  const ItemData = [
    {
      img: "https://source.unsplash.com/random/500x500/?girl",
      eventKey: "first",
    },
    {
      img: "https://source.unsplash.com/random/500x500/?boy",
      eventKey: "2",
    },
    {
      img: "https://source.unsplash.com/random/500x500/?face",
      eventKey: "3",
    },
    {
      img: "https://source.unsplash.com/random/500x500/?woman",
      eventKey: "4",
    },
  ];
  const PaneApp = (props) => {
    return (
      <>
        <Tab.Pane eventKey={props.eventKey}>
          <div className="row">
            <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-5">
              <div className="careers_profile_div">
                <img src={props.img} alt="profile" />
                <div className="careers_profile_text_div">
                  <h3>{props.imgTitle}</h3>
                  <p>{props.imgSubTitle}</p>
                </div>
              </div>
            </div>
            <div className="col-xxl-9 col-xl-9 col-lg-8 col-md-7">
              <div className="careers_profile_text_left">
                <p>
                  <i>“{props.text}”</i>
                </p>
              </div>
            </div>
          </div>
        </Tab.Pane>
      </>
    );
  };
  const ItemApp = (props) => {
    return (
      <>
        <Nav.Item>
          <Nav.Link eventKey={props.eventKey}>
            <div className="tab_main_div">
              <img src={props.img} alt="profile" />
            </div>
          </Nav.Link>
        </Nav.Item>
      </>
    );
  };
  return (
    <>
      <div className="container mb-5">
        <div className=" mb-4">
          <h1>
            <span>Life</span> at Maxlence
          </h1>
        </div>
        <div className="tab_main_top_div">
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Tab.Content className="mb-4">
              {PaneData.map((val, i) => {
                return <PaneApp key={i} {...val} />;
              })}
            </Tab.Content>
            <div>
              <Nav variant="pills">
                {ItemData.map((val, i) => {
                  return <ItemApp key={i} {...val} />;
                })}
              </Nav>
            </div>
          </Tab.Container>
        </div>
      </div>
    </>
  );
};
const FiledsOfWork = () => {
  const PaneData = [
    {
      eventKey: "first",
      img: "https://source.unsplash.com/random/500x500/?girl",
      imgTitle: "White & Laura Jehansan",
      imgSubTitle: "SEO, India",
      text: "Testimonial 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt ut non felis consectetur in commodo viverra eget. Ut elementum aliquam pretium quam. Eros nisi, condimentum faucibus mauris eu facilisi turpis. Nisl quis scelerisque donec tellus eu donec. Consectetur varius vitae in viverra et ante enim purus dolor arcu posuere eu erat.",
    },
    {
      eventKey: "2",
      img: "https://source.unsplash.com/random/500x500/?boy",
      imgTitle: "White & Laura Jehansan",
      imgSubTitle: "SEO, India",
      text: "Testimonial 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt ut non felis consectetur in commodo viverra eget. Ut elementum aliquam pretium quam. Eros nisi, condimentum faucibus mauris eu facilisi turpis. Nisl quis scelerisque donec tellus eu donec. Consectetur varius vitae in viverra et ante enim purus dolor arcu posuere eu erat.",
    },
    {
      eventKey: "3",
      img: "https://source.unsplash.com/random/500x500/?face",
      imgTitle: "White & Laura Jehansan",
      imgSubTitle: "SEO, India",
      text: "Testimonial 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt ut non felis consectetur in commodo viverra eget. Ut elementum aliquam pretium quam. Eros nisi, condimentum faucibus mauris eu facilisi turpis. Nisl quis scelerisque donec tellus eu donec. Consectetur varius vitae in viverra et ante enim purus dolor arcu posuere eu erat.",
    },
    {
      eventKey: "4",
      img: "https://source.unsplash.com/random/500x500/?woman",
      imgTitle: "White & Laura Jehansan",
      imgSubTitle: "SEO, India",
      text: "Testimonial 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt ut non felis consectetur in commodo viverra eget. Ut elementum aliquam pretium quam. Eros nisi, condimentum faucibus mauris eu facilisi turpis. Nisl quis scelerisque donec tellus eu donec. Consectetur varius vitae in viverra et ante enim purus dolor arcu posuere eu erat.",
    },
  ];
  const ItemData = [
    {
      img: "https://source.unsplash.com/random/500x500/?girl",
      eventKey: "first",
    },
    {
      img: "https://source.unsplash.com/random/500x500/?boy",
      eventKey: "2",
    },
    {
      img: "https://source.unsplash.com/random/500x500/?face",
      eventKey: "3",
    },
    {
      img: "https://source.unsplash.com/random/500x500/?woman",
      eventKey: "4",
    },
  ];
  const PaneApp = (props) => {
    return (
      <>
        <Tab.Pane eventKey={props.eventKey}>
          <div className="row">
            <div className="col-xxl-9 col-xl-9 col-lg-8 col-md-7">
              <div className="careers_profile_text_left">
                <p>
                  <i>“{props.text}”</i>
                </p>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-5">
              <div className="careers_profile_div">
                <img src={props.img} alt="profile" />
                <div className="careers_profile_text_div">
                  <h3>{props.imgTitle}</h3>
                  <p>{props.imgSubTitle}</p>
                </div>
              </div>
            </div>
          </div>
        </Tab.Pane>
      </>
    );
  };
  const ItemApp = (props) => {
    return (
      <>
        <Nav.Item>
          <Nav.Link eventKey={props.eventKey}>
            <div className="tab_main_div">
              <img src={props.img} alt="profile" />
            </div>
          </Nav.Link>
        </Nav.Item>
      </>
    );
  };
  return (
    <>
      <div className="container mb-5">
        <div className=" mb-4">
          <h1>
            <span>Fileds</span> of work
          </h1>
        </div>
        <div className="tab_main_top_div">
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Tab.Content className="mb-4">
              {PaneData.map((val, i) => {
                return <PaneApp key={i} {...val} />;
              })}
            </Tab.Content>
            <div>
              <Nav variant="pills" className=" justify-content-start">
                {ItemData.map((val, i) => {
                  return <ItemApp key={i} {...val} />;
                })}
              </Nav>
            </div>
          </Tab.Container>
        </div>
      </div>
    </>
  );
};
const JobeList = () => {
  const JobListData = [
    {
      jobTitle: "React js Developer ",
      location: "Gurgoan HR, IN	",
      experienceLevel: "0-4 Years	",
      datePosted: "Oct-20-2022",
    },
    {
      jobTitle: "SEO",
      location: "Gurgoan HR, IN	",
      experienceLevel: "0-4 Years	",
      datePosted: "Oct-20-2022",
    },
    {
      jobTitle: "Front End Developer	",
      location: "Gurgoan HR, IN	",
      experienceLevel: "0-4 Years	",
      datePosted: "Oct-20-2022",
    },
    {
      jobTitle: "Social Media Marketing	",
      location: "Gurgoan HR, IN	",
      experienceLevel: "0-4 Years	",
      datePosted: "Oct-20-2022",
    },
  ];
  const JobListApp = (props) => {
    return (
      <>
        <tr id="jobvacrow1">
          <td className="text-blue">
            <NavLink to="/careersjd">{props.jobTitle}</NavLink>
          </td>
          <td>{props.location}</td>
          <td>{props.experienceLevel}</td>
          <td>{props.datePosted}</td>
        </tr>
      </>
    );
  };
  return (
    <>
      <div className="container job_vac_table">
        <div className="table_head text-center job_vac_head my-5">
          <h1>
            <span>Current Openings</span>
          </h1>
        </div>

        <div className="table-responsive my-5 text-left">
          <table className="table text-capitalize">
            <thead>
              <tr>
                <th className="">Job Title</th>
                <th>Location</th>
                <th>Experience Level</th>
                <th>Date Posted</th>
              </tr>
            </thead>
            <tbody>
              {JobListData.map((val, i) => {
                return <JobListApp key={i} {...val} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
