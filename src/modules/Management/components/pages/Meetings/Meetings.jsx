import { OutlineBtnWithIcon } from "../../../../common/ManagementComponents/Btn/Btn";
import { FaFilter } from "react-icons/fa";
import { PageAllTopTitle } from "../../../../common/ManagementComponents/PageAllTopTitle";
import {
  FullBtn,
  OutlineBtn,
} from "../../../../common/ManagementComponents/Btn/Btn";
import { IoSearchOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { UserParticipants } from "../../../../common/ManagementComponents/Participants";
import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { BsFillInfoCircleFill } from "react-icons/bs";
// mui
import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { NavLink } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
// tabs
export const Meetings = () => {
  return (
    <>
      <div className="custom_container">
        <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3 header_my">
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-3 col-sm-12 col-12 order-md-1 order-2">
            <PageAllTopTitle title="meetings" />
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
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-3 col-sm-6 col-6 d-flex  justify-content-end  order-md-3 order-3">
            <div className="blue_btn_top_div">
              <FullBtn link="/" name="Schedule Meeting" />
            </div>
          </div>
          <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-6 col-6 filter_btn_top_div order-4">
            <OutlineBtnWithIcon name="All Filters" icon={<FaFilter />} />
          </div>
        </div>
        <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3 ">
          <div className="col-12 ">
            <MeetingsList />
          </div>
        </div>
      </div>
    </>
  );
};
// tabs end
// All Tasks list
const MeetingsList = () => {
  const ProjectListData = [
    {
      MeetingTitle: "Merchant Offers Discussion",
      ProjectName: "Luno Electrical Website Design ",
      Organiser: "Akhilesh Soni",
      ScheduledDate: "29-10-2022",

      link: "/Management/meeting_notes",
      Participants: [
        {
          name: "sunny charkhwal",
          Designation: "react js devloper",
          img: "https://source.unsplash.com/random/500x500/?girl",
        },
        {
          name: "sunny charkhwal",
          Designation: "react js devloper",
          img: "https://source.unsplash.com/random/500x500/?girl,new",
        },
        {
          name: "sunny charkhwal",
          Designation: "react js devloper",
          img: "https://source.unsplash.com/random/500x500/?girl,two",
        },
        {
          name: "sunny charkhwal",
          Designation: "react js devloper",
          img: "https://source.unsplash.com/random/500x500/?women",
        },
        {
          name: "sunny charkhwal",
          Designation: "react js devloper",
          img: "https://source.unsplash.com/random/500x500/?women",
        },
        {
          name: "sunny charkhwal",
          Designation: "react js devloper",
          img: "https://source.unsplash.com/random/500x500/?women",
        },
      ],
    },
    {
      MeetingTitle: "Merchant Offers Discussion",
      ProjectName: "Luno Electrical Website Design ",
      Organiser: "Akhilesh Soni",
      ScheduledDate: "29-10-2022",

      link: "/Management/meeting_notes",
      Participants: [
        {
          name: "sunny charkhwal",
          Designation: "react js devloper",
          img: "https://source.unsplash.com/random/500x500/?girl",
        },
        {
          name: "sunny charkhwal",
          Designation: "react js devloper",
          img: "https://source.unsplash.com/random/500x500/?girl,new",
        },
        {
          name: "sunny charkhwal",
          Designation: "react js devloper",
          img: "https://source.unsplash.com/random/500x500/?girl,two",
        },
        {
          name: "sunny charkhwal",
          Designation: "react js devloper",
          img: "https://source.unsplash.com/random/500x500/?women",
        },
        {
          name: "sunny charkhwal",
          Designation: "react js devloper",
          img: "https://source.unsplash.com/random/500x500/?women",
        },
        {
          name: "sunny charkhwal",
          Designation: "react js devloper",
          img: "https://source.unsplash.com/random/500x500/?women",
        },
      ],
    },
    {
      MeetingTitle: "Merchant Offers Discussion",
      ProjectName: "Luno Electrical Website Design ",
      Organiser: "Akhilesh Soni",
      ScheduledDate: "29-10-2022",

      link: "/Management/meeting_notes",
      Participants: [
        {
          name: "sunny charkhwal",
          Designation: "react js devloper",
          img: "https://source.unsplash.com/random/500x500/?girl",
        },
        {
          name: "sunny charkhwal",
          Designation: "react js devloper",
          img: "https://source.unsplash.com/random/500x500/?girl,new",
        },
        {
          name: "sunny charkhwal",
          Designation: "react js devloper",
          img: "https://source.unsplash.com/random/500x500/?girl,two",
        },
        {
          name: "sunny charkhwal",
          Designation: "react js devloper",
          img: "https://source.unsplash.com/random/500x500/?women",
        },
        {
          name: "sunny charkhwal",
          Designation: "react js devloper",
          img: "https://source.unsplash.com/random/500x500/?women",
        },
        {
          name: "sunny charkhwal",
          Designation: "react js devloper",
          img: "https://source.unsplash.com/random/500x500/?women",
        },
      ],
    },
    {
      MeetingTitle: "Merchant Offers Discussion",
      ProjectName: "Luno Electrical Website Design ",
      Organiser: "Akhilesh Soni",
      ScheduledDate: "29-10-2022",

      link: "/Management/meeting_notes",
      Participants: [
        {
          name: "sunny charkhwal",
          Designation: "react js devloper",
          img: "https://source.unsplash.com/random/500x500/?girl",
        },
        {
          name: "sunny charkhwal",
          Designation: "react js devloper",
          img: "https://source.unsplash.com/random/500x500/?girl,new",
        },
        {
          name: "sunny charkhwal",
          Designation: "react js devloper",
          img: "https://source.unsplash.com/random/500x500/?girl,two",
        },
        {
          name: "sunny charkhwal",
          Designation: "react js devloper",
          img: "https://source.unsplash.com/random/500x500/?women",
        },
        {
          name: "sunny charkhwal",
          Designation: "react js devloper",
          img: "https://source.unsplash.com/random/500x500/?women",
        },
        {
          name: "sunny charkhwal",
          Designation: "react js devloper",
          img: "https://source.unsplash.com/random/500x500/?women",
        },
      ],
    },
  ];
  const ProjectListApp = (props) => {
    const [showDelete, setShowDelete] = React.useState(false);
    const [visible, setVisible] = useState(true);
    // Delete Modal
    const handleOpen = () => setShowDelete(true);
    const handleClose = () => setShowDelete(false);
    // Delete Modal
    const removeElement = () => {
      setVisible((prev) => !prev);
    };
    const DeleteModal = () => {
      const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        boxShadow: 24,
        p: 4,
      };
      return (
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={showDelete}
          onClose={handleClose}
          closeAfterTransition
        >
          <Fade in={showDelete}>
            <Box sx={style}>
              <div className="delete_modal">
                <ul>
                  <li>
                    <BsFillInfoCircleFill />
                  </li>
                  <li>
                    <h3>Delete {props.title}?</h3>
                    <p>
                      {props.name} will be deleted permanently and cannot be
                      recovered.
                    </p>
                  </li>
                </ul>
                <div className="delete_modal_btn_div">
                  <ul>
                    <li className="btn_one">
                      <OutlineBtn onClick={handleClose} name="Cancel" />
                    </li>
                    <li className="btn_two">
                      <FullBtn onClick={removeElement} name="Delete" />
                    </li>
                  </ul>
                </div>
              </div>
            </Box>
          </Fade>
        </Modal>
      );
    };
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
        { link: "/Management/join_meeting", name: "Join Meeting" },
        { link: "/", name: "Modify Event" },
        { link: "/Management/meeting_notes", name: "Notes" },
        { onClick: handleOpen, name: "Delete Meeting" },
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
                    <div
                      onClick={option.onClick}
                      className="chat_option_name_div"
                    >
                      {option.name}
                    </div>
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
        {visible && (
          <tr className="progress_all_tabel_tr_mor">
            <td>
              <DeleteModal />
              <div className="Participants_main_div_tr">
                <input className="form-check-input" type="checkbox" />
              </div>
            </td>
            <td>
              <div className="Participants_main_div_tr">
                <NavLink to={props.link} className="link_a">
                  {props.MeetingTitle}
                </NavLink>
              </div>
            </td>
            <td>
              <div className="Participants_main_div_tr">
                {props.ProjectName}
              </div>
            </td>
            <td className="Participants_main_div">
              <div className="Participants_main_div_inner">
                <UserParticipants data={props.Participants} />
              </div>
            </td>
            <td>
              <div className="Participants_main_div_tr">{props.Organiser}</div>
            </td>

            <td>
              <div className="Participants_main_div_tr">
                {props.ScheduledDate}
              </div>
            </td>
            <td>
              <div className="mt-1">
                <div className="progress_all_option_icon">
                  <ProjectListDropDown />
                </div>
              </div>
            </td>
          </tr>
        )}
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
                <th scope="col">Meeting Title</th>
                <th scope="col">Project Name</th>
                <th scope="col">Participants</th>
                <th scope="col">Organiser</th>

                <th scope="col">Scheduled date</th>
                <th scope="col">action</th>
              </tr>
            </thead>
            <tbody>
              {ProjectListData.map((val, i) => {
                return <ProjectListApp key={i} {...val} arr={val} />;
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
// All Tasks list end
