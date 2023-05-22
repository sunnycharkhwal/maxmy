import { Nav, Tab } from "react-bootstrap";
import { OutlineBtnWithIcon } from "../../../../common/ManagementComponents/Btn/Btn";
import { FaFilter } from "react-icons/fa";
import { PageAllTopTitle } from "../../../../common/ManagementComponents/PageAllTopTitle";
import { FullBtn } from "../../../../common/ManagementComponents/Btn/Btn";
import { IoSearchOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import { BiDotsHorizontalRounded } from "react-icons/bi";
// mui
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { NavLink } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
// tabs
export const Approvals = () => {
  return (
    <>
      <div className="custom_container">
        <div className="row g-3 header_my">
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-1 col-sm-12 col-12 order-md-1 order-2">
            <PageAllTopTitle title="Approvals" />
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
              <FullBtn link="/" name="Request Approval" />
            </div>
          </div>
        </div>
        <div className="project_list_tabs_main_div">
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <div className="project_tab_mb">
              <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
                <div className="col-xxl-10 col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                  <Nav variant="pills" className="flex">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Received</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="Sent">Sent</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
                <div className="col-xxl-2 col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 filter_btn_top_new ">
                  <OutlineBtnWithIcon name="All Filters" icon={<FaFilter />} />
                </div>
              </div>
            </div>

            <Tab.Content>
              <Tab.Pane eventKey="first">
                <ReceivedList />
              </Tab.Pane>
              <Tab.Pane eventKey="Sent">
                <SentList />
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </div>
    </>
  );
};
// tabs end
//ReceivedList
const ReceivedList = () => {
  const ReceivedListData = [
    {
      RequestTitle: "Merchant Offers Discussion",
      Priority: "High",
      PrioritybackgroundColor: "#FF3E48",
      Status: "Requested",
      StatusColor: "#0054B7",
      ProjectName: "Luno Electrical Website Design",
      Milestone: "Research",
      link: "/",
      RequestedBy: "sunny",
      cat1: [
        {
          img: "https://source.unsplash.com/random/500x500/?girl",
        },
      ],
    },
  ];
  const ReceivedListApp = (props) => {
    const ReceivedListDropDown = () => {
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
        { link: "/", name: "Approve" },
        { link: "/", name: "Reject" },
        { link: "/", name: "Follow Up" },
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
              {options.map((option, i) => (
                <div key={i} onClick={() => navigate(option.link)}>
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
            <div className="Participants_main_div_tr">
              <input className="form-check-input" type="checkbox" />
            </div>
          </td>
          <td>
            <div className="Participants_main_div_tr">{props.RequestTitle}</div>
          </td>
          <td className="project_list_name">
            <div
              className="project_list_priority_div"
              style={{ backgroundColor: props.PrioritybackgroundColor }}
            >
              <span className="project_list_priority">{props.Priority}</span>
            </div>
          </td>
          <td>
            <div
              className="Participants_main_div_tr"
              style={{ color: props.StatusColor }}
            >
              {props.Status}
            </div>
          </td>
          <td>
            <div className="Participants_main_div_tr">
              <NavLink to={props.link}>{props.ProjectName}</NavLink>
            </div>
          </td>
          <td className="Participants_main_div">
            <div className="Participants_main_div_inner">
              <AvatarGroup max={4}>
                {props.arr.cat1.map((val, i) => {
                  return (
                    <Avatar
                      key={i}
                      alt="Remy Sharp"
                      src={val.img}
                      sx={{ width: 24, height: 24 }}
                    />
                  );
                })}
              </AvatarGroup>
              <span> {props.RequestedBy}</span>
            </div>
          </td>
          <td>
            <div className="Participants_main_div_tr">{props.Milestone}</div>
          </td>
          <td>
            <div className="mt-1">
              <div className="progress_all_option_icon">
                <ReceivedListDropDown />
              </div>
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
                <th scope="col">Request Title</th>
                <th scope="col">Priority</th>
                <th scope="col">Status</th>
                <th scope="col">Project Name</th>
                <th scope="col">Requested By</th>
                <th scope="col">Milestone</th>
                <th scope="col">action</th>
              </tr>
            </thead>
            <tbody>
              {ReceivedListData.map((val, i) => {
                return <ReceivedListApp key={i} {...val} arr={val} />;
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
// ReceivedList end

//ReceivedList
const SentList = () => {
  const SentListData = [
    {
      RequestTitle: "Merchant Offers Discussion",
      Priority: "High",
      PrioritybackgroundColor: "#FF3E48",
      Status: "Requested",
      StatusColor: "#0054B7",
      ProjectName: "Luno Electrical Website Design",
      Milestone: "Research",
      link: "/",
      cat1: [
        {
          img: "https://source.unsplash.com/random/500x500/?girl",
        },
        {
          img: "https://source.unsplash.com/random/500x500/?girl",
        },
        {
          img: "https://source.unsplash.com/random/500x500/?girl",
        },
        {
          img: "https://source.unsplash.com/random/500x500/?girl",
        },
        {
          img: "https://source.unsplash.com/random/500x500/?girl",
        },
        {
          img: "https://source.unsplash.com/random/500x500/?girl",
        },
      ],
    },
  ];
  const SentListApp = (props) => {
    const SentListDropDown = () => {
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
        { link: "/", name: "Approve" },
        { link: "/", name: "Reject" },
        { link: "/", name: "Follow Up" },
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
              {options.map((option, i) => (
                <div key={i} onClick={() => navigate(option.link)}>
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
            <div className="Participants_main_div_tr">
              <input className="form-check-input" type="checkbox" />
            </div>
          </td>
          <td>
            <div className="Participants_main_div_tr">{props.RequestTitle}</div>
          </td>
          <td className="project_list_name">
            <div
              className="project_list_priority_div"
              style={{ backgroundColor: props.PrioritybackgroundColor }}
            >
              <span className="project_list_priority">{props.Priority}</span>
            </div>
          </td>
          <td>
            <div
              className="Participants_main_div_tr"
              style={{ color: props.StatusColor }}
            >
              {props.Status}
            </div>
          </td>
          <td>
            <div className="Participants_main_div_tr">
              <NavLink to={props.link}>{props.ProjectName}</NavLink>
            </div>
          </td>
          <td className="Participants_main_div Participants_main_div_Approvals">
            <div className="Participants_main_div_inner">
              <AvatarGroup max={4}>
                {props.arr.cat1.map((val, i) => {
                  return (
                    <Avatar
                      key={i}
                      alt="icon"
                      src={val.img}
                      sx={{ width: 24, height: 24 }}
                    />
                  );
                })}
              </AvatarGroup>
            </div>
          </td>
          <td>
            <div className="Participants_main_div_tr">{props.Milestone}</div>
          </td>
          <td>
            <div className="mt-1">
              <div className="progress_all_option_icon">
                <SentListDropDown />
              </div>
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
                <th scope="col">Request Title</th>
                <th scope="col">Priority</th>
                <th scope="col">Status</th>
                <th scope="col">Project Name</th>
                <th scope="col">Requested By</th>
                <th scope="col">Milestone</th>
                <th scope="col">action</th>
              </tr>
            </thead>
            <tbody>
              {SentListData.map((val, i) => {
                return <SentListApp key={i} {...val} arr={val} />;
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
// ReceivedList end
