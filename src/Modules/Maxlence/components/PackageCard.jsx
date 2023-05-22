import { NavLink } from "react-router-dom";
import { Tab, Nav } from "react-bootstrap";
import * as React from "react";
import { MdDone } from "react-icons/md";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import {
  AiOutlineQuestionCircle,
  AiTwotoneStar,
  AiOutlineCheckCircle,
} from "react-icons/ai";
import LikeIcon from "../../../img/like.svg";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
export const PackageCard = (props) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      <div className="package_card_top_main">
        <div className="row">
          <div className="col-xxl-9 col-xl-9 col-lg-12 col-md-12 col-sm-12 col-12">
            <div>
              <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <div className="mobile_tab_div">
                  <Nav
                    variant="pills"
                    className="d-flex justify-content-center"
                  >
                    <Nav.Item>
                      <Nav.Link eventKey="first">low</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">medium</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="mobile">high</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
                <Tab.Content className="mt-3">
                  <Tab.Pane eventKey="first">
                    <div className=" d-none d-xxl-block d-xl-block d-lg-block d-md-block">
                      <DesktopTab
                        PackageOneData={props.PackageOneData}
                        PackagetwoData={props.PackagetwoData}
                        PackagethreeData={props.PackagethreeData}
                      />
                    </div>
                    <div className="d-block d-xxl-none d-xl-none d-lg-none d-md-none">
                      <PackageMobileUi PackageOneData={props.PackageOneData} />
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <div className="d-none d-xxl-block d-xl-block d-lg-block d-md-block">
                      <DesktopTab
                        PackageOneData={props.PackageOneData}
                        PackagetwoData={props.PackagetwoData}
                        PackagethreeData={props.PackagethreeData}
                      />
                    </div>
                    <div className="d-block d-xxl-none d-xl-none d-lg-none d-md-none">
                      <PackageMobileUi PackageOneData={props.PackagetwoData} />
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="mobile">
                    <div className=" d-none d-xxl-block d-xl-block d-lg-block d-md-block">
                      <DesktopTab
                        PackageOneData={props.PackageOneData}
                        PackagetwoData={props.PackagetwoData}
                        PackagethreeData={props.PackagethreeData}
                      />
                    </div>
                    <div className="d-block d-xxl-none d-xl-none d-lg-none d-md-none">
                      <PackageMobileUi
                        PackageOneData={props.PackagethreeData}
                      />
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className=" d-block d-xxl-none d-xl-none mt-3">
              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography sx={{ width: "80%", flexShrink: 0 }}>
                    More Information
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div className="package_card_top_right_inner_scroll">
                      <div className="package_card_top_right_inner_data">
                        <PackageRightCardUi
                          PackageRightCardUiData={props.PackageRightCardUiData}
                        />
                      </div>
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className=" d-none d-xxl-block d-xl-block ">
              <div className="package_card_top_right">
                <div className="package_card_top_right_inner_scroll">
                  <div className="package_card_top_right_inner_data">
                    <PackageRightCardUi
                      PackageRightCardUiData={props.PackageRightCardUiData}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const DesktopTab = (props) => {
  return (
    <>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <div className="desktop_tab_div">
          <div className="desktop_tab_div_title">
            <h3>
              Pick the perfect <span>pricing plan</span>
            </h3>
            <p>We have the right plans for you</p>
          </div>
          <Nav variant="pills" className="d-flex justify-content-center">
            <Nav.Item className="nav_start">
              <Nav.Link eventKey="first">Monthly</Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav_middle">
              <Nav.Link eventKey="second">Quarterly</Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav_last">
              <Nav.Link eventKey="Desktop">Yearly</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
        <Tab.Content className="mt-5">
          <Tab.Pane eventKey="first">
            <PackageCardUi
              PackageOneData={props.PackageOneData}
              PackagetwoData={props.PackagetwoData}
              PackagethreeData={props.PackagethreeData}
            />
          </Tab.Pane>
          <Tab.Pane eventKey="second">
            <PackageCardUi
              PackageOneData={props.PackageOneData}
              PackagetwoData={props.PackagetwoData}
              PackagethreeData={props.PackagethreeData}
            />
          </Tab.Pane>
          <Tab.Pane eventKey="Desktop">
            <PackageCardUi
              PackageOneData={props.PackageOneData}
              PackagetwoData={props.PackagetwoData}
              PackagethreeData={props.PackagethreeData}
            />
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </>
  );
};
const PackageCardUi = (props) => {
  const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.black,
    },
  }));
  return (
    <div className="package_card_top_1">
      <div className="package_card_top_2">
        <div className="row m-0">
          <div className="col-3 p-0 package_card_top_4"></div>
          {/* Package One up  */}
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12 package_card_col">
            {/* Package One up  */}
            {props.PackageOneData.map((packageOne, i) => (
              <div key={i} className="package_card package_card_up">
                <div
                  className="package_card_recommended_div"
                  style={{ display: packageOne.recommendedDisplay }}
                >
                  <p>{packageOne.recommendedText}</p>
                </div>
                <div className="package_card_header">
                  <h3 style={{ color: packageOne.packageNameColor }}>
                    {packageOne.packageName}
                  </h3>
                  <h4>{packageOne.price}</h4>
                  <div>
                    <p>Overview:</p>
                    {packageOne.overview}
                  </div>
                  <NavLink to={packageOne.packageLink}>Buy now</NavLink>
                </div>
              </div>
            ))}
            {/* Package One end up */}
          </div>
          {/* Package One end up */}
          {/* Package two up  */}
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12 package_card_col">
            {props.PackagetwoData.map((packageTwo, i) => (
              <div key={i} className="package_card package_card_up">
                <div
                  className="package_card_recommended_div"
                  style={{ display: packageTwo.recommendedDisplay }}
                >
                  <p>{packageTwo.recommendedText}</p>
                </div>
                <div className="package_card_header">
                  <h3 style={{ color: packageTwo.packageNameColor }}>
                    {packageTwo.packageName}
                  </h3>
                  <h4>{packageTwo.price}</h4>
                  <div>
                    <p>Overview:</p>
                    {packageTwo.overview}
                  </div>
                  <NavLink to={packageTwo.packageLink}>Buy now</NavLink>
                </div>
              </div>
            ))}
          </div>
          {/* Package two end up */}
          {/* Package three up  */}
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12 package_card_col">
            {props.PackagethreeData.map((packageThree, i) => (
              <div key={i} className="package_card package_card_up">
                <div
                  className="package_card_recommended_div"
                  style={{ display: packageThree.recommendedDisplay }}
                >
                  <p>{packageThree.recommendedText}</p>
                </div>
                <div className="package_card_header">
                  <h3 style={{ color: packageThree.packageNameColor }}>
                    {packageThree.packageName}
                  </h3>
                  <h4>{packageThree.price}</h4>
                  <div>
                    <p>Overview:</p>
                    {packageThree.overview}
                  </div>
                  <NavLink to={packageThree.packageLink}>Buy now</NavLink>
                </div>
              </div>
            ))}
          </div>
          {/* Package three end up */}
        </div>
      </div>
      <div className="package_card_top_3">
        <div className="row m-0">
          <div className="col-3 p-0 package_card_top_4"></div>
          {/* Package One dowm */}
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12 package_card_col">
            {props.PackageOneData.map((packageOne, i) => (
              <div key={i} className="package_card package_card_bottom">
                <div className="package_card_recommended_div2">
                  <div
                    className="package_card_recommended_div"
                    style={{ display: packageOne.recommendedDisplay }}
                  >
                    <p>{packageOne.recommendedText}</p>
                  </div>
                </div>
                <div className="package_card_header">
                  <h3 style={{ color: packageOne.packageNameColor }}>
                    {packageOne.packageName}
                  </h3>
                  <h4>{packageOne.price}</h4>
                  <div>
                    <p>Overview:</p>
                    {packageOne.overview}
                  </div>
                  <NavLink to={packageOne.packageLink}>Buy now</NavLink>
                </div>
                {packageOne.boxData.map((val, i) => (
                  <div
                    key={i}
                    className="package_card_box"
                    style={{
                      backgroundColor: val.boxbackgroundColor,
                    }}
                  >
                    <div>
                      <h3>{val.boxTitle}</h3>
                    </div>
                    {val.boxPointsData.map((val, i) => (
                      <ul key={i}>
                        <li>
                          <MdDone />
                        </li>
                        <li>
                          {val.boxPoint}
                          <BootstrapTooltip
                            title={val.boxPointTooltipText}
                            placement={val.boxPointTooltipPlacement}
                          >
                            <span style={{ display: val.boxPointTooltip }}>
                              <AiOutlineQuestionCircle />
                            </span>
                          </BootstrapTooltip>
                        </li>
                      </ul>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
          {/* Package One dowm end */}
          {/* Package two dowm */}
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12 package_card_col">
            {props.PackagetwoData.map((packageTwo, i) => (
              <div key={i} className="package_card package_card_bottom">
                <div className="package_card_recommended_div2">
                  <div
                    className="package_card_recommended_div"
                    style={{ display: packageTwo.recommendedDisplay }}
                  >
                    <p>{packageTwo.recommendedText}</p>
                  </div>
                </div>
                <div className="package_card_header ">
                  <h3 style={{ color: packageTwo.packageNameColor }}>
                    {packageTwo.packageName}
                  </h3>
                  <h4>{packageTwo.price}</h4>
                  <div>
                    <p>Overview:</p>
                    {packageTwo.overview}
                  </div>
                  <NavLink to={packageTwo.packageLink}>Buy now</NavLink>
                </div>
                {packageTwo.boxData.map((val, i) => (
                  <div
                    key={i}
                    className="package_card_box package_two_box_title"
                    style={{
                      backgroundColor: val.boxbackgroundColor,
                    }}
                  >
                    <div>
                      <h3>{val.boxTitle}</h3>
                    </div>
                    {val.boxPointsData.map((val, i) => (
                      <ul key={i}>
                        <li>
                          <MdDone />
                        </li>
                        <li>
                          {val.boxPoint}
                          <BootstrapTooltip
                            title={val.boxPointTooltipText}
                            placement={val.boxPointTooltipPlacement}
                          >
                            <span style={{ display: val.boxPointTooltip }}>
                              <AiOutlineQuestionCircle />
                            </span>
                          </BootstrapTooltip>
                        </li>
                      </ul>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
          {/* Package two dowm end */}
          {/* Package three dowm */}
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12 package_card_col">
            {props.PackagethreeData.map((packageThree, i) => (
              <div key={i} className="package_card package_card_bottom">
                <div className="package_card_recommended_div2">
                  <div
                    className="package_card_recommended_div"
                    style={{ display: packageThree.recommendedDisplay }}
                  >
                    <p>{packageThree.recommendedText}</p>
                  </div>
                </div>
                <div className="package_card_header ">
                  <h3 style={{ color: packageThree.packageNameColor }}>
                    {packageThree.packageName}
                  </h3>
                  <h4>{packageThree.price}</h4>
                  <div>
                    <p>Overview:</p>
                    {packageThree.overview}
                  </div>
                  <NavLink to={packageThree.packageLink}>Buy now</NavLink>
                </div>
                {packageThree.boxData.map((val, i) => (
                  <div
                    key={i}
                    className="package_card_box package_two_box_title"
                    style={{
                      backgroundColor: val.boxbackgroundColor,
                    }}
                  >
                    <div>
                      <h3>{val.boxTitle}</h3>
                    </div>
                    {val.boxPointsData.map((val, i) => (
                      <ul key={i}>
                        <li>
                          <MdDone />
                        </li>
                        <li>
                          {val.boxPoint}
                          <BootstrapTooltip
                            title={val.boxPointTooltipText}
                            placement={val.boxPointTooltipPlacement}
                          >
                            <span style={{ display: val.boxPointTooltip }}>
                              <AiOutlineQuestionCircle />
                            </span>
                          </BootstrapTooltip>
                        </li>
                      </ul>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
          {/* Package three dowm end */}
        </div>
      </div>
    </div>
  );
};

const PackageRightCardUi = (props) => {
  return props.PackageRightCardUiData.map((val, i) => (
    <div key={i}>
      <div className="package_card_top_right_top_title">
        <p>{val.title}</p>
        <span>
          {val.rating} <AiTwotoneStar />
        </span>
      </div>
      <div className="row g-2 mt-1">
        {val.ResultsData.map((val, i) => (
          <div
            key={i}
            className="col-xxl-6 col-xl-6 col-lg-3 col-md-6 col-sm-12 col-12"
          >
            <div className="package_card_top_right_like_div">
              <img src={LikeIcon} alt="like" />
              <p>{val.resultsTitle} </p>
            </div>
          </div>
        ))}
        <div className="col-12">
          <hr />
        </div>
      </div>
      <div className="package_card_top_right_highlights_div">
        <h3>Highlights</h3>
        <div className="package_card_box p-0">
          {val.HighlightsData.map((val, i) => (
            <ul key={i}>
              <li>
                <AiOutlineCheckCircle />
              </li>
              <li>{val.points}</li>
            </ul>
          ))}
        </div>
        <hr />
      </div>
      <div className="package_card_top_right_highlights_div">
        <h3>Definitions</h3>
        <div className="row g-3">
          {val.DefinitionsData.map((val, i) => (
            <div key={i} className="col-12">
              <p>
                <b>{val.title} :</b> {val.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  ));
};
const PackageMobileUi = (props) => {
  const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.black,
    },
  }));
  return (
    <>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <div className="desktop_tab_div">
          <div className="desktop_tab_div_title">
            <h3>
              Pick the perfect <span>pricing plan</span>
            </h3>
            <p>We have the right plans for you</p>
          </div>
          <Nav variant="pills" className="d-flex justify-content-center">
            <Nav.Item className="nav_start">
              <Nav.Link eventKey="first">Monthly</Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav_middle">
              <Nav.Link eventKey="second">Quarterly</Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav_last">
              <Nav.Link eventKey="Desktop">Yearly</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
        <Tab.Content className="mt-5">
          <Tab.Pane eventKey="first">
            {props.PackageOneData.map((packageOne, i) => (
              <div key={i} className="package_card package_card_bottom">
                <div className="package_card_recommended_div2">
                  <div
                    className="package_card_recommended_div"
                    style={{ display: packageOne.recommendedDisplay }}
                  >
                    <p>{packageOne.recommendedText}</p>
                  </div>
                </div>
                <div className="package_card_header">
                  <h3 style={{ color: packageOne.packageNameColor }}>
                    {packageOne.packageName}
                  </h3>
                  <h4>{packageOne.price}</h4>
                  <div>
                    <p>Overview:</p>
                    {packageOne.overview}
                  </div>
                  <NavLink to={packageOne.packageLink}>Buy now</NavLink>
                </div>
                {packageOne.boxData.map((val, i) => (
                  <div
                    key={i}
                    className="package_card_box"
                    style={{
                      backgroundColor: val.boxbackgroundColor,
                    }}
                  >
                    <div>
                      <h3>{val.boxTitle}</h3>
                    </div>
                    {val.boxPointsData.map((val, i) => (
                      <ul key={i}>
                        <li>
                          <MdDone />
                        </li>
                        <li>
                          {val.boxPoint}
                          <BootstrapTooltip
                            title={val.boxPointTooltipText}
                            placement={val.boxPointTooltipPlacement}
                          >
                            <span style={{ display: val.boxPointTooltip }}>
                              <AiOutlineQuestionCircle />
                            </span>
                          </BootstrapTooltip>
                        </li>
                      </ul>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </Tab.Pane>
          <Tab.Pane eventKey="second">
            {props.PackageOneData.map((packageOne, i) => (
              <div key={i} className="package_card package_card_bottom">
                <div className="package_card_recommended_div2">
                  <div
                    className="package_card_recommended_div"
                    style={{ display: packageOne.recommendedDisplay }}
                  >
                    <p>{packageOne.recommendedText}</p>
                  </div>
                </div>
                <div className="package_card_header">
                  <h3 style={{ color: packageOne.packageNameColor }}>
                    {packageOne.packageName}
                  </h3>
                  <h4>{packageOne.price}</h4>
                  <div>
                    <p>Overview:</p>
                    {packageOne.overview}
                  </div>
                  <NavLink to={packageOne.packageLink}>Buy now</NavLink>
                </div>
                {packageOne.boxData.map((val, i) => (
                  <div
                    key={i}
                    className="package_card_box"
                    style={{
                      backgroundColor: val.boxbackgroundColor,
                    }}
                  >
                    <div>
                      <h3>{val.boxTitle}</h3>
                    </div>
                    {val.boxPointsData.map((val, i) => (
                      <ul key={i}>
                        <li>
                          <MdDone />
                        </li>
                        <li>
                          {val.boxPoint}
                          <BootstrapTooltip
                            title={val.boxPointTooltipText}
                            placement={val.boxPointTooltipPlacement}
                          >
                            <span style={{ display: val.boxPointTooltip }}>
                              <AiOutlineQuestionCircle />
                            </span>
                          </BootstrapTooltip>
                        </li>
                      </ul>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </Tab.Pane>
          <Tab.Pane eventKey="Desktop">
            {props.PackageOneData.map((packageOne, i) => (
              <div key={i} className="package_card package_card_bottom">
                <div className="package_card_recommended_div2">
                  <div
                    className="package_card_recommended_div"
                    style={{ display: packageOne.recommendedDisplay }}
                  >
                    <p>{packageOne.recommendedText}</p>
                  </div>
                </div>
                <div className="package_card_header">
                  <h3 style={{ color: packageOne.packageNameColor }}>
                    {packageOne.packageName}
                  </h3>
                  <h4>{packageOne.price}</h4>
                  <div>
                    <p>Overview:</p>
                    {packageOne.overview}
                  </div>
                  <NavLink to={packageOne.packageLink}>Buy now</NavLink>
                </div>
                {packageOne.boxData.map((val, i) => (
                  <div
                    key={i}
                    className="package_card_box"
                    style={{
                      backgroundColor: val.boxbackgroundColor,
                    }}
                  >
                    <div>
                      <h3>{val.boxTitle}</h3>
                    </div>
                    {val.boxPointsData.map((val, i) => (
                      <ul key={i}>
                        <li>
                          <MdDone />
                        </li>
                        <li>
                          {val.boxPoint}
                          <BootstrapTooltip
                            title={val.boxPointTooltipText}
                            placement={val.boxPointTooltipPlacement}
                          >
                            <span style={{ display: val.boxPointTooltip }}>
                              <AiOutlineQuestionCircle />
                            </span>
                          </BootstrapTooltip>
                        </li>
                      </ul>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </>
  );
};
