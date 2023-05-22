import { Nav, Tab } from "react-bootstrap";
import { OutlineBtnWithIcon } from "../../../../../common/ManagementComponents/Btn/Btn";
import { FaFilter } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { PageAllTopTitle } from "../../../../../common/ManagementComponents/PageAllTopTitle";
// mui
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { ExistingClientModal } from "../ExistingClientModal";
// import * as React from "react";
import {
  OutlineBtn,
  FullBtn,
} from "../../../../../common/ManagementComponents/Btn/Btn";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Accordion from "react-bootstrap/Accordion";
import { IoCloseSharp } from "react-icons/io5";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
export const ProjectList = () => {
  return (
    <>
      <div className="custom_container">
        <div className="row g-3 header_my">
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-1 col-sm-12 col-12 order-md-1 order-2">
            <PageAllTopTitle title="Project" />
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-5 col-sm-12 col-12 order-md-2 order-1">
            <div className="header_input_div">
              <IoSearchOutline />
              <input
                type="text"
                className="form-control"
                placeholder="Search by Project Name"
              />
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-3 col-sm-12 col-12 header_btn order-md-3 order-3">
            <div>
              <ExistingClientModal />
            </div>
          </div>
        </div>
        <div className="project_list_tabs_main_div">
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <div className="project_list_tabs_inner_div">
              <div className=" mb-4">
                <Nav variant="pills" className="flex">
                  <Nav.Item>
                    <Nav.Link eventKey="first">All</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="Assigned">To Be Assigned</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="Completed">Completed</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="Progress">In Progress</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="Hold">On Hold</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="Drafts">drafts</Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
              <div className="project_list_tabs_inner_btn">
                <PageRightFilters />
              </div>
            </div>

            <Tab.Content>
              <Tab.Pane eventKey="first">
                <ProjecTabeltList />
              </Tab.Pane>
              <Tab.Pane eventKey="Assigned">
                <ProjecTabeltList />
              </Tab.Pane>
              <Tab.Pane eventKey="Completed">
                <ProjecTabeltList />
              </Tab.Pane>
              <Tab.Pane eventKey="Progress">
                <ProjecTabeltList />
              </Tab.Pane>
              <Tab.Pane eventKey="Hold">
                <ProjecTabeltList />
              </Tab.Pane>
              <Tab.Pane eventKey="Drafts">
                <ProjecTabeltList />
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </div>
    </>
  );
};
const ProjecTabeltList = () => {
  const ProjectListData = [
    {
      RefID: "Ref012",
      ProjectName: "Luno Electrical Website design",
      PrioritybackgroundColor: "#FF3E48",
      PriorityName: "high",
      Status: "TBA",
      ProgressBar: "50",
      date: "29-10-2022",
      Link: "/Management/project_details",
    },
    {
      RefID: "Ref012",
      ProjectName: "Luno Electrical Website design",
      PrioritybackgroundColor: "#31C971",
      PriorityName: "low",
      Status: "On Track",
      ProgressBar: "80",
      date: "29-10-2022",
      Link: "/Management/project_details",
    },
    {
      RefID: "Ref012",
      ProjectName: "Luno Electrical Website design",
      PrioritybackgroundColor: "#F3D32C",
      PriorityName: "Medium",
      Status: "On Track",
      ProgressBar: "70",
      date: "29-10-2022",
      Link: "/Management/project_details",
    },
  ];
  const ProjectListApp = (props) => {
    const ProjectListDropDown = () => {
      const [anchorEl, setAnchorEl] = React.useState(null);
      const open = Boolean(anchorEl);
      const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
      const handleClose = () => {
        setAnchorEl(null);
      };
      const navigate = useNavigate();
      const options = [
        { link: "/Management/project_details", name: "View Project Details" },
        { link: "/Management/assign_project", name: "Assign Project" },
        { link: "/Management/create_task", name: "Create Task" },
        { link: "/Management/meeting_notes", name: "View Notes" },
      ];

      const ITEM_HEIGHT = 30;
      return (
        <>
          <div className="chat_option">
            <IconButton
              aria-label="more"
              id="long-button"
              aria-controls={open ? "long-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleClick}
              className=" m-0 p-0"
            >
              <BiDotsHorizontalRounded />
            </IconButton>
            <Menu
              id="long-menu"
              MenuListProps={{
                "aria-labelledby": "long-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: "15ch",
                },
              }}
            >
              {options.map((option) => (
                <div key={option.name} onClick={() => navigate(option.link)}>
                  <MenuItem selected={option === "Pyxis"} onClick={handleClose}>
                    <div className="chat_option_name_div">{option.name}</div>
                  </MenuItem>
                </div>
              ))}
            </Menu>
          </div>
        </>
      );
    };
    return (
      <>
        <tr className="progress_all_tabel_tr_mor">
          <td>
            <input className="form-check-input" type="checkbox" />
          </td>
          <td>{props.RefID}</td>
          <td className="project_list_name">
            <NavLink className="link_a" to={props.Link}>
              {props.ProjectName}
            </NavLink>
          </td>
          <td>
            <div
              className="project_list_priority_div"
              style={{ backgroundColor: props.PrioritybackgroundColor }}
            >
              <span className="project_list_priority">
                {props.PriorityName}
              </span>
            </div>
          </td>
          <td>
            <span style={{ color: props.PrioritybackgroundColor }}>
              {props.Status}
            </span>
          </td>
          <td className="progress_all_tabel_td">
            <div className="progress_all_tabel">
              <div className="row align-items-center">
                <div className="col-2">
                  <span>{props.ProgressBar}%</span>
                </div>
                <div className="col-10">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{
                        width: props.ProgressBar + "%",
                      }}
                      aria-valuenow="0"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </td>
          <td>{props.date}</td>
          <td>
            <div className="progress_all_option_icon">
              <ProjectListDropDown />
            </div>
          </td>
        </tr>
      </>
    );
  };

  return (
    <>
      <div className="dashbaord_white_card ">
        <div>
          <table className="table table-hover text-capitalize progress_all_tabel_tabel">
            <thead>
              <tr className="progress_all_tabel_tr">
                <th scope="col">
                  <input className="form-check-input" type="checkbox" />
                </th>
                <th scope="col">RefID</th>
                <th scope="col">Project Name</th>
                <th scope="col">Priority</th>
                <th scope="col">Status</th>

                <th scope="col">Progress</th>
                <th scope="col">Due Date</th>
                <th scope="col">action</th>
              </tr>
            </thead>
            <tbody>
              {ProjectListData.map((val, i) => {
                return <ProjectListApp key={i} {...val} />;
              })}
            </tbody>
          </table>
        </div>
        <div className="projec_tabelt_list_pagination_div">
          <Stack spacing={2}>
            <Pagination count={10} />
          </Stack>
        </div>
      </div>
    </>
  );
};

const PageRightFilters = () => {
  const [showFilters, setShowFilters] = React.useState(false);
  let UserIcon = "https://source.unsplash.com/random/500x500/?user,face";
  const PriorityInner = (props) => {
    return (
      <div
        className="Priority_filter_inner"
        style={{ backgroundColor: props.backgroundColor }}
      >
        {props.title}
      </div>
    );
  };
  const RequestedAndRejected = (props) => {
    return <div style={{ color: props.color }}>{props.title}</div>;
  };
  const RequestedBy = (props) => {
    return (
      <div className="Requested_by_div">
        <img src={props.UserPhoto} alt="icon" />
        {props.title}
      </div>
    );
  };
  return (
    <>
      <div>
        <OutlineBtnWithIcon
          onClick={() => setShowFilters(true)}
          name="All Filters"
          icon={<FaFilter />}
        />

        <Drawer anchor="right" open={showFilters}>
          <Box role="presentation" className="filter_new_top_div">
            <IoCloseSharp onClick={() => setShowFilters(false)} />
            <div className="row mt-3 mb-4">
              <div className="col-6">
                <p className="filter_title_1">All Filters</p>
              </div>
              <div className="col-6 text-end">
                <p className="filter_title_2">Clear All</p>
              </div>
            </div>
            <div className="filter_new_top_div_inner">
              <div className="header_input_div">
                <IoSearchOutline />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Filter"
                />
              </div>
              <Accordion alwaysOpen>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Request</Accordion.Header>
                  <Accordion.Body>
                    <div>
                      <FormGroup>
                        <FormControlLabel
                          control={<Checkbox />}
                          label="Website Hompeage Design Review"
                        />
                        <FormControlLabel
                          control={<Checkbox />}
                          label="Website Hompeage Design Review"
                        />
                      </FormGroup>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Priority</Accordion.Header>
                  <Accordion.Body>
                    <div>
                      <FormGroup>
                        <FormControlLabel
                          control={<Checkbox />}
                          label={
                            <PriorityInner
                              backgroundColor="#FF3E48"
                              title="high"
                            />
                          }
                        />
                        <FormControlLabel
                          control={<Checkbox />}
                          label={
                            <PriorityInner
                              backgroundColor="#31C971"
                              title="Low"
                            />
                          }
                        />
                        <FormControlLabel
                          control={<Checkbox />}
                          label={
                            <PriorityInner
                              backgroundColor="#F3D32C"
                              title="Medium"
                            />
                          }
                        />
                      </FormGroup>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Status</Accordion.Header>
                  <Accordion.Body>
                    <div>
                      <FormGroup>
                        <FormControlLabel
                          control={<Checkbox />}
                          label={
                            <RequestedAndRejected
                              title="Requested"
                              color="#0054B7"
                            />
                          }
                        />
                        <FormControlLabel
                          control={<Checkbox />}
                          label={
                            <RequestedAndRejected
                              title="Rejected"
                              color="#FF3E48"
                            />
                          }
                        />
                      </FormGroup>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>Requested By</Accordion.Header>
                  <Accordion.Body>
                    <div>
                      <FormGroup>
                        <FormControlLabel
                          control={<Checkbox />}
                          label={
                            <RequestedBy
                              title="Sunny Chakrawal"
                              UserPhoto={UserIcon}
                            />
                          }
                        />
                        <FormControlLabel
                          control={<Checkbox />}
                          label={
                            <RequestedBy
                              title="Sunny Chakrawal"
                              UserPhoto={UserIcon}
                            />
                          }
                        />
                      </FormGroup>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className=" mt-4 d-flex justify-content-center align-items-center">
              <div className=" me-3">
                <FullBtn name="Apply" />
              </div>
              <div className="add_project_modal_btn_one">
                <OutlineBtn
                  onClick={() => setShowFilters(false)}
                  name="Close"
                />
              </div>
            </div>
          </Box>
        </Drawer>
      </div>
    </>
  );
};
