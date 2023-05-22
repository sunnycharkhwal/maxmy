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
import { useState } from "react";
import { BsFillInfoCircleFill } from "react-icons/bs";
// mui
import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { NavLink } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
// index
export const Clients = () => {
  return (
    <>
      <div className="custom_container">
        <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3  header_my">
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-2 col-sm-12 col-12 ">
            <PageAllTopTitle title="Clients" />
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-7 col-sm-12 col-12 ">
            <div className="header_input_div">
              <IoSearchOutline />
              <input
                type="text"
                className="form-control"
                placeholder="Search by Project Name"
              />
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-3 col-sm-6 col-6 header_btn ">
            <div>
              <FullBtn
                link="/Management/clients_profile"
                name="Add New Client"
              />
            </div>
          </div>
          <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-6 col-6   ">
            <div className="row justify-content-end">
              <div className="col-xxl-2 col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 filter_btn_top_new ">
                <OutlineBtnWithIcon name="All Filters" icon={<FaFilter />} />
              </div>
            </div>
          </div>
          <div className="col-12 ">
            <ClientsList />
          </div>
        </div>
      </div>
    </>
  );
};
// index end
//ClientsList
const ClientsList = () => {
  const ClientsListData = [
    {
      ClientName: "Ryan Ogden",
      Designation: "CEO",
      Organisation: "Agilsoft",
      ContactNo: "+61 9876 54321",
      EmailId: "ryanogden@gmail.com",
      City: "Melbourne",
      Country: "Australia",
      link: "/",
    },
    {
      ClientName: "Ryan Ogden",
      Designation: "CEO",
      Organisation: "Agilsoft",
      ContactNo: "+61 9876 54321",
      EmailId: "ryanogden@gmail.com",
      City: "Melbourne",
      Country: "Australia",
      link: "/",
    },
    {
      ClientName: "Ryan Ogden",
      Designation: "CEO",
      Organisation: "Agilsoft",
      ContactNo: "+61 9876 54321",
      EmailId: "ryanogden@gmail.com",
      City: "Melbourne",
      Country: "Australia",
      link: "/",
    },
    {
      ClientName: "Ryan Ogden",
      Designation: "CEO",
      Organisation: "Agilsoft",
      ContactNo: "+61 9876 54321",
      EmailId: "ryanogden@gmail.com",
      City: "Melbourne",
      Country: "Australia",
      link: "/",
    },
  ];

  const ClientsListApp = (props) => {
    const [showDelete, setShowDelete] = React.useState(false);
    const [visible, setVisible] = useState(true);
    // Delete Modal
    const handleOpen = () => setShowDelete(true);
    const handleClose = () => setShowDelete(false);
    // Delete Modal end
    // removeElement
    const removeElement = () => {
      setVisible((prev) => !prev);
    };
    // removeElement end
    const ClientsListDropDown = () => {
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
        { link: "/Management/client_profile_details", name: "View" },
        { link: "/Management/clients_profile", name: "Edit" },
        { onClick: handleOpen, name: "Delete" },
        { link: "/", name: "E-Mail" },
        { link: "/Management/chats", name: "Chat" },
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
    const DeleteModal = (props) => {
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
    return (
      <>
        {visible && (
          <tr className="progress_all_tabel_tr_mor">
            <td className="fw-normal">
              <DeleteModal />
              <input className="form-check-input" type="checkbox" />
            </td>
            <td className="fw-normal">
              <NavLink
                to="/Management/client_profile_details"
                className="link_a"
              >
                {props.ClientName}
              </NavLink>
            </td>
            <td className="fw-normal">{props.Designation}</td>
            <td className="fw-bold">{props.Organisation}</td>
            <td className="fw-normal">{props.ContactNo}</td>
            <td className="fw-normal">
              <NavLink to={props.link}>{props.EmailId}</NavLink>
            </td>
            <td className="fw-normal">{props.City}</td>
            <td className="fw-normal">{props.Country}</td>
            <td className="fw-normal">
              <div>
                <div className="progress_all_option_icon">
                  <ClientsListDropDown />
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
                <th scope="col">Client Name</th>
                <th scope="col">Designation</th>
                <th scope="col">Organisation</th>
                <th scope="col">Contact No</th>
                <th scope="col">Email Id</th>
                <th scope="col">City</th>
                <th scope="col">Country</th>
                <th scope="col">action</th>
              </tr>
            </thead>
            <tbody>
              {ClientsListData.map((val, i) => {
                return <ClientsListApp key={i} {...val} arr={val} />;
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
// ClientsList end
