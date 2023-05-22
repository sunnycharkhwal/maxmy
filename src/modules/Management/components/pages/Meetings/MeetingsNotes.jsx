import { PageAllTopTitle } from "../../../../common/ManagementComponents/PageAllTopTitle";
import { BsArrowLeft } from "react-icons/bs";
import { Nav, Tab } from "react-bootstrap";
import { OutlineBtnWithIcon } from "../../../../common/ManagementComponents/Btn/Btn";
import { FaFilter } from "react-icons/fa";
import NotesImg from "../../../../../pics/Management/notes.png";
import CommentedIcon from "../../../../../pics/Management/com.png";
import CommentedIcon2 from "../../../../../pics/Management/com2.png";
import React from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { IoSearchOutline } from "react-icons/io5";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { Notes } from "../../../../common/ManagementComponents/Notes";

// index

export const MeetingsNotes = () => {
  // notes map data
  const NotesListData = [
    {
      name: "Akhilesh Soni",
      date: "31/10/2022",
      time: "9:11 AM",
      title: "Merchant Offers Discussion",
      fileNumber: "05",
      audioClips: "02",
      comments: "04",
      link: "/Management/note_detailed",
    },
    {
      name: "sunny charkhwal",
      date: "31/10/2022",
      time: "9:11 AM",
      title: "Merchant Offers Discussion",
      fileNumber: "05",
      audioClips: "02",
      comments: "04",
      link: "/Management/note_detailed",
    },
    {
      name: "kamal",
      date: "31/10/2022",
      time: "9:11 AM",
      title: "Merchant Offers Discussion",
      fileNumber: "05",
      audioClips: "02",
      comments: "04",
      link: "/Management/note_detailed",
    },
    {
      name: "hacking hunter",
      date: "31/10/2022",
      time: "9:11 AM",
      title: "Merchant Offers Discussion",
      fileNumber: "05",
      audioClips: "02",
      comments: "04",
      link: "/Management/note_detailed",
    },
  ];
  // notes map data end
  return (
    <>
      <div className="custom_container">
        <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3 header_my">
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-3 col-sm-12 col-12 order-md-1 order-2">
            <PageAllTopTitle title="Aftercare" />
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 order-md-2 order-1">
            <div className="header_input_div">
              <IoSearchOutline />
              <input
                type="text"
                className="form-control"
                placeholder="Search by Project Name"
              />
            </div>
          </div>
        </div>
        <PageAllTopTitle link={-1} icon={<BsArrowLeft />} title="Back" />
        <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3 ">
          <div className="col-12">
            <Notes data={NotesListData} />
          </div>
          <div className="col-12">
            <MyTab />
          </div>
        </div>
      </div>
    </>
  );
};
// index end

// tab
const MyTab = () => {
  return (
    <>
      <div className="project_list_tabs_main_div">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <div className="project_tab_mb">
            <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
              <div className="col-xxl-10 col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                <Nav variant="pills" className="flex">
                  <Nav.Item>
                    <Nav.Link eventKey="first">All notes</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="Overview">Recent</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="Team">Important</Nav.Link>
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
              <NotesList />
            </Tab.Pane>
            <Tab.Pane eventKey="Overview">
              <NotesList />
            </Tab.Pane>
            <Tab.Pane eventKey="Team">
              <NotesList />
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </>
  );
};
// tab end
// Meetings & Notes

const NotesList = () => {
  const NotesListData = [
    {
      Title: "Merchant Offers Discussion",
      subTitle: "22/10/2022  Aftercare",
      Mondified: "today",
      CreatedBy: "Akhilesh Soni",
      LastCommented: "Raj Kumar ",
      cat1: [
        {
          img: "https://source.unsplash.com/random/500x500/?girl",
        },
        {
          img: "https://source.unsplash.com/random/500x500/?girl,new",
        },
        {
          img: "https://source.unsplash.com/random/500x500/?girl,two",
        },
        {
          img: "https://source.unsplash.com/random/500x500/?women",
        },
      ],
    },
    {
      Title: "Merchant Offers Discussion",
      subTitle: "22/10/2022  Aftercare",
      Mondified: "today",
      CreatedBy: "Akhilesh Soni",
      LastCommented: "Raj Kumar ",
      cat1: [
        {
          img: "https://source.unsplash.com/random/500x500/?girl",
        },
        {
          img: "https://source.unsplash.com/random/500x500/?girl,new",
        },
        {
          img: "https://source.unsplash.com/random/500x500/?girl,two",
        },
        {
          img: "https://source.unsplash.com/random/500x500/?women",
        },
      ],
    },
    {
      Title: "Merchant Offers Discussion",
      subTitle: "22/10/2022  Aftercare",
      Mondified: "today",
      CreatedBy: "Akhilesh Soni",
      LastCommented: "Raj Kumar ",
      cat1: [
        {
          img: "https://source.unsplash.com/random/500x500/?girl",
        },
        {
          img: "https://source.unsplash.com/random/500x500/?girl,new",
        },
        {
          img: "https://source.unsplash.com/random/500x500/?girl,two",
        },
        {
          img: "https://source.unsplash.com/random/500x500/?women",
        },
      ],
    },
    {
      Title: "Merchant Offers Discussion",
      subTitle: "22/10/2022  Aftercare",
      Mondified: "today",
      CreatedBy: "Akhilesh Soni",
      LastCommented: "Raj Kumar ",
      cat1: [
        {
          img: "https://source.unsplash.com/random/500x500/?girl",
        },
        {
          img: "https://source.unsplash.com/random/500x500/?girl,new",
        },
        {
          img: "https://source.unsplash.com/random/500x500/?girl,two",
        },
        {
          img: "https://source.unsplash.com/random/500x500/?women",
        },
      ],
    },
  ];
  const NotesListApp = (props) => {
    const NotesListDropDown = () => {
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
        { link: "/", name: "Join Meeting" },
        { link: "/", name: "Modify Event" },
        { link: "/", name: "Notes" },
        { link: "/", name: "Delete Meeting" },
        { link: "/", name: "Previous Meetings" },
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
          <td className="Participants_main_div">
            <div className="Participants_main_div_inner">
              <Avatar
                alt="Remy Sharp"
                src={NotesImg}
                sx={{ width: 24, height: 24, borderRadius: "0%" }}
              />
              <div className="notes_list_img_div">
                <p style={{ color: "#525252" }}>{props.Title}</p>
                <p style={{ color: "#000000" }}>{props.subTitle}</p>
              </div>
            </div>
          </td>
          <td>
            <div className="Participants_main_div_tr">{props.Mondified}</div>
          </td>
          <td>
            <div className="Participants_main_div_tr">{props.CreatedBy}</div>
          </td>
          <td className="Participants_main_div">
            <div className="Participants_main_div_inner">
              <div className=" me-1">
                <img src={CommentedIcon} alt="Commented Icon" />
              </div>
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
              <span className=" fw-lighter">
                <span className=" fw-bolder">{props.LastCommented}</span>{" "}
                commented
              </span>
              <div className="notes_warning">
                <img src={CommentedIcon2} alt="Commented Icon" />
              </div>
            </div>
          </td>

          <td>
            <div className="mt-1">
              <div className="progress_all_option_icon">
                <NotesListDropDown />
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
                <th scope="col">Title</th>
                <th scope="col">Mondified</th>
                <th scope="col">Created By</th>
                <th scope="col">Activity</th>
                <th scope="col">action</th>
              </tr>
            </thead>
            <tbody>
              {NotesListData.map((val, i) => {
                return <NotesListApp key={i} {...val} arr={val} />;
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
// Meetings & Notes end
