import { Nav, Tab } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Casestudy1 from "../assests/casestudy1.png";
import Bepecase from "../assests/bepecase.png";
import Casestudy3 from "../assests/casestudy3.png";
import Casestudy4 from "../assests/casestudy4.png";
import Casestudy5 from "../assests/casestudy5.png";
import Casestudy6 from "../assests/casestudy6.png";
import Casestudy2 from "../assests/casestudy2.png";

export const CaseStudy = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 ">
            <h1 className="mt-5">
              <span>Redefining</span> Industries
            </h1>
          </div>
          <div className="col-12">
            <Tabs />
          </div>
        </div>
      </div>
    </>
  );
};
const Tabs = () => {
  return (
    <div className="mobile_app_tab">
      <div>
        <Tab.Container id="top-tabs-example" defaultActiveKey="first">
          <Nav variant="pills" className="flex-row mb-3 mt-5">
            <Nav.Item>
              <Nav.Link eventKey="first">ALL</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">SEO</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">GOOGLE ADS</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="4">SOCIAL MEDIA MARKETING</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="5">EMAIL MARKETING</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="6">Design</Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content className=" mt-4">
            <Tab.Pane eventKey="first">
              <AllList />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <Seo />
            </Tab.Pane>
            <Tab.Pane eventKey="third">
              <GOOGLEADS />
            </Tab.Pane>
            <Tab.Pane eventKey="4">
              <SocialMediaMarketing />
            </Tab.Pane>
            <Tab.Pane eventKey="5">
              <EmailMarketing />
            </Tab.Pane>
            <Tab.Pane eventKey="6">
              <Design />
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </div>
  );
};
const AllList = () => {
  const CaseStudyCard = [
    {
      img: Casestudy1,
      title: "Leonie Dawkins",
      position: "UX / UI",
      link: "/",
    },
    {
      img: Bepecase,
      title: "BEPE",
      position: "SEO",
      link: "/bepeseo",
    },
    {
      img: Casestudy3,
      title: "Concept Electrical",
      position: "Social Media Marketing",
      link: "/",
    },
    {
      img: Casestudy4,
      title: "Level Headed Carpentry",
      position: "UI/UX",
      link: "/",
    },
    {
      img: Casestudy5,
      title: "Kitchen Design Academy",
      position: "UI/UX",
      link: "/",
    },
    {
      img: Casestudy6,
      title: "Casone Electrical",
      position: "UX/UI Social Media Marketing",
      link: "/",
    },
  ];
  const CaseStudyApp = (props) => {
    return (
      <>
        <div className="div featcamp col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
          <div className="seoshop shopfeat ">
            <NavLink to={props.link}>
              <img className="case_study_card_img" src={props.img} alt="img" />
            </NavLink>
          </div>
          <NavLink to={props.link}>
            <p className="mt-2 mt-sm-3 mb-1">
              <b>{props.title}</b>
            </p>
            <p>
              <span>
                <b>{props.position}</b>
              </span>
            </p>
          </NavLink>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="row g-4 mb-5">
        {CaseStudyCard.map((val, i) => {
          return <CaseStudyApp key={i} {...val} />;
        })}
      </div>
    </>
  );
};
const Seo = () => {
  const CaseStudyCard = [
    {
      img: Bepecase,
      title: "BEPE",
      position: "SEO",
      link: "/bepeseo",
    },
  ];
  const CaseStudyApp = (props) => {
    return (
      <>
        <div className="div featcamp col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
          <div className="seoshop shopfeat ">
            <NavLink to={props.link}>
              <img className="case_study_card_img" src={props.img} alt="img" />
            </NavLink>
          </div>
          <NavLink to={props.link}>
            <p className="mt-2 mt-sm-3 mb-1">
              <b>{props.title}</b>
            </p>
            <p>
              <span>
                <b>{props.position}</b>
              </span>
            </p>
          </NavLink>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="row g-4 mb-5">
        {CaseStudyCard.map((val, i) => {
          return <CaseStudyApp key={i} {...val} />;
        })}
      </div>
    </>
  );
};
const GOOGLEADS = () => {
  const CaseStudyCard = [
    {
      img: Bepecase,
      title: "BEPE",
      position: "SEO",
      link: "/bepeseo",
    },
  ];
  const CaseStudyApp = (props) => {
    return (
      <>
        <div className="div featcamp col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
          <div className="seoshop shopfeat ">
            <NavLink to={props.link}>
              <img className="case_study_card_img" src={props.img} alt="img" />
            </NavLink>
          </div>
          <NavLink to={props.link}>
            <p className="mt-2 mt-sm-3 mb-1">
              <b>{props.title}</b>
            </p>
            <p>
              <span>
                <b>{props.position}</b>
              </span>
            </p>
          </NavLink>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="row g-4 mb-5">
        {CaseStudyCard.map((val, i) => {
          return <CaseStudyApp key={i} {...val} />;
        })}
      </div>
    </>
  );
};
const SocialMediaMarketing = () => {
  const CaseStudyCard = [
    {
      img: Casestudy2,
      title: "Search Campaign",
      position: "Social Media Marketing",
      link: "/",
    },
  ];
  const CaseStudyApp = (props) => {
    return (
      <>
        <div className="div featcamp col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
          <div className="seoshop shopfeat ">
            <NavLink to={props.link}>
              <img className="case_study_card_img" src={props.img} alt="img" />
            </NavLink>
          </div>
          <NavLink to={props.link}>
            <p className="mt-2 mt-sm-3 mb-1">
              <b>{props.title}</b>
            </p>
            <p>
              <span>
                <b>{props.position}</b>
              </span>
            </p>
          </NavLink>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="row g-4 mb-5">
        {CaseStudyCard.map((val, i) => {
          return <CaseStudyApp key={i} {...val} />;
        })}
      </div>
    </>
  );
};
const EmailMarketing = () => {
  const CaseStudyCard = [
    {
      img: Casestudy2,
      title: "Email Case Studies",
      position: "Social Media Marketing",
      link: "/",
    },
  ];
  const CaseStudyApp = (props) => {
    return (
      <>
        <div className="div featcamp col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
          <div className="seoshop shopfeat ">
            <NavLink to={props.link}>
              <img className="case_study_card_img" src={props.img} alt="img" />
            </NavLink>
          </div>
          <NavLink to={props.link}>
            <p className="mt-2 mt-sm-3 mb-1">
              <b>{props.title}</b>
            </p>
            <p>
              <span>
                <b>{props.position}</b>
              </span>
            </p>
          </NavLink>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="row g-4 mb-5">
        {CaseStudyCard.map((val, i) => {
          return <CaseStudyApp key={i} {...val} />;
        })}
      </div>
    </>
  );
};
const Design = () => {
  const CaseStudyCard = [
    {
      img: Casestudy2,
      title: "TPR",
      position: "UI UX",
      link: "/tpruiux",
    },
  ];
  const CaseStudyApp = (props) => {
    return (
      <>
        <div className="div featcamp col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
          <div className="seoshop shopfeat ">
            <NavLink to={props.link}>
              <img className="case_study_card_img" src={props.img} alt="img" />
            </NavLink>
          </div>
          <NavLink to={props.link}>
            <p className="mt-2 mt-sm-3 mb-1">
              <b>{props.title}</b>
            </p>
            <p>
              <span>
                <b>{props.position}</b>
              </span>
            </p>
          </NavLink>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="row g-4 mb-5">
        {CaseStudyCard.map((val, i) => {
          return <CaseStudyApp key={i} {...val} />;
        })}
      </div>
    </>
  );
};
