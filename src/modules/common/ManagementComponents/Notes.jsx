import { OutlineBtn, FullBtn } from "./Btn/Btn";
import Img from "../components/img/Img";
import NotesImg from "../../../pics/Management/notes.png";
import SendIcon from "../../../pics/Management/send.svg";
import { GrAttachment } from "react-icons/gr";
import { IoChatbubblesOutline } from "react-icons/io5";
import { ImHeadphones } from "react-icons/im";
import React from "react";
import { useState } from "react";
import { BsFillInfoCircleFill, BsArrowLeft } from "react-icons/bs";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { GrFormClose } from "react-icons/gr";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { NavLink, useNavigate } from "react-router-dom";
import Select from "react-select";
import { AiOutlineSetting, AiOutlinePlus } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";
import TextField from "@mui/material/TextField";
import {
  MdOutlineRadioButtonChecked,
  MdOutlineRadioButtonUnchecked,
} from "react-icons/md";
export const Notes = (props) => {
  // notes map app
  const NotesListApp = (props) => {
    // removeElement state
    const [visible, setVisible] = useState(true);
    // Delete State
    const [openDelete, setOpenDelete] = useState(false);
    // Poll Settings State
    const [openPollSettings, setOpenPollSettings] = useState(false);

    // Create Poll State
    const [openCreatePoll, setOpenCreatePoll] = useState(false);
    // Create Poll function
    const handleOpenCreatePoll = () => setOpenCreatePoll(true);
    const closeCreatePoll = () => setOpenCreatePoll(false);
    // Delete function
    const handleOpenDelete = () => setOpenDelete(true);
    const closeDelete = () => setOpenDelete(false);
    // Poll Settings function
    // const handleOpenPollSettings = () => setOpenPollSettings(true);
    const closePollSettings = () => setOpenPollSettings(false);
    // removeElement function
    const removeElement = () => {
      setVisible((prev) => !prev);
    };
    // DropDown modal
    const ProjectListDropDown = () => {
      const [anchorEl, setAnchorEl] = useState(null);
      const open = Boolean(anchorEl);
      const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
      const handleClose = () => {
        setAnchorEl(null);
      };
      const navigate = useNavigate();
      const options = [
        { link: "/Management/edit_notes", name: "Edit" },
        { link: "/Management/create_task", name: "Create Task" },
        { onClick: handleOpenCreatePoll, name: "Create Poll" },
        { onClick: handleOpenDelete, name: "Delete" },
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
    // DropDown modal end
    // delete modal
    const DeleteModal = () => {
      return (
        <div>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openDelete}
            onClose={closeDelete}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={openDelete}>
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
                        <OutlineBtn onClick={closeDelete} name="Cancel" />
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
        </div>
      );
    };
    // delete modal end
    // Create Poll modal
    const CreatePollModal = () => {
      // removeElement state
      const [visible, setVisible] = useState(true);
      // removeElement function
      const removeElement = () => {
        setVisible((prev) => !prev);
      };
      const options = [
        { value: "demo 1", label: "demo 1" },
        { value: "demo 2", label: "demo 2" },
        { value: "demo 3", label: "demo 3" },
      ];
      const style2 = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        bgcolor: "background.paper",
        boxShadow: 24,
        p: 4,
      };
      return (
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={openCreatePoll}
          onClose={closeCreatePoll}
          closeAfterTransition
        >
          <Fade in={openCreatePoll}>
            <Box sx={style2} className="create_poll_modal">
              <div className="create_poll_modal_main_div">
                <GrFormClose
                  onClick={closeCreatePoll}
                  className="create_poll_modal_close_icon"
                />
                <div className="row ">
                  <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12 create_poll_modal_top_div">
                    <h3>Poll</h3>
                    <div className="row align-items-center ">
                      <div className="col-xxl-11 col-xl-11 col-lg-11 col-md-11 col-md-11 col-10 ">
                        <div className="dashboard_top_week_Select drop_box">
                          <Select
                            // menuIsOpen={true}
                            isMulti
                            options={options}
                            placeholder="Multiple Choice"
                          />
                        </div>
                      </div>
                      <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-md-1 col-2">
                        <AiOutlineSetting
                          className="create_poll_modal_icon"
                          onClick={() => {
                            setOpenCreatePoll(false);
                            setOpenPollSettings(true);
                          }}
                        />
                      </div>
                    </div>
                    <div className="row mt-1 g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
                      <div className="col-12">
                        <input
                          className="create_poll_modal_input form-control"
                          type="text"
                          placeholder="Enter Question"
                        />
                        {visible && (
                          <div className="create_poll_modal_input_data_div">
                            <TextField
                              id="outlined-size-small"
                              label="Choice "
                              placeholder="Choice "
                              size="small"
                              multiline
                              className="create_poll_modal_input_data"
                            />

                            <span>
                              <RiDeleteBin5Line onClick={removeElement} />
                            </span>
                          </div>
                        )}
                        {visible && (
                          <div className="create_poll_modal_input_data_div">
                            <TextField
                              id="outlined-size-small"
                              label="Choice "
                              placeholder="Choice "
                              size="small"
                              multiline
                              className="create_poll_modal_input_data"
                            />

                            <span>
                              <RiDeleteBin5Line onClick={removeElement} />
                            </span>
                          </div>
                        )}{" "}
                        {visible && (
                          <div className="create_poll_modal_input_data_div">
                            <TextField
                              id="outlined-size-small"
                              label="Choice "
                              placeholder="Choice "
                              size="small"
                              multiline
                              className="create_poll_modal_input_data"
                            />

                            <span>
                              <RiDeleteBin5Line onClick={removeElement} />
                            </span>
                          </div>
                        )}
                        <button className="create_poll_modal_input_btn btn">
                          <span>
                            <AiOutlinePlus />
                          </span>
                          Add description
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <div className="create_poll_modal_preview_title">
                      <h5>Preview</h5>
                      <div className="create_poll_modal_preview_box_div">
                        <p>Sunny Created Poll</p>
                        <span>11:31 am</span>
                        <h3>Enter Question ?</h3>
                        <div className="create_poll_modal_preview_box_inner_div icon_color_div2">
                          <MdOutlineRadioButtonChecked />
                          Choice 1
                        </div>
                        <div className="create_poll_modal_preview_box_inner_div">
                          <MdOutlineRadioButtonUnchecked />
                          Choice 2
                        </div>
                        <div className="create_poll_modal_preview_box_inner_div">
                          <MdOutlineRadioButtonUnchecked />
                          Choice 3
                        </div>
                        <div className="create_poll_modal_preview_box_btn">
                          <p>submit</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="create_poll_modal_send_btn">
                      <button className="btn">
                        Send <img src={SendIcon} alt="Send Icon" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Box>
          </Fade>
        </Modal>
      );
    };
    // Create Poll modal end
    // Poll Settings modal
    const PollSettingsModal = () => {
      const PollSettingsData = [
        {
          SettingTitle: "Deliver Poll",
          SettingOptionTitle: "In Chat",
          OptionData: [
            {
              optionValue: "1",
              option: "one",
            },
          ],
        },
        {
          SettingTitle: "Visibility Privacy",
          SettingOptionTitle: "Everyone",
          OptionData: [
            {
              optionValue: "1",
              option: "one",
            },
          ],
        },
        {
          SettingTitle: "Voters’ Identity",
          SettingOptionTitle: "Anonymous",
          OptionData: [
            {
              optionValue: "1",
              option: "one",
            },
          ],
        },
        {
          SettingTitle: "Close",
          SettingOptionTitle: "Manual",
          OptionData: [
            {
              optionValue: "1",
              option: "one",
            },
          ],
        },
      ];
      const PollSettingsApp = (props) => {
        return (
          <div className="poll_settings_div_list">
            <p>{props.SettingTitle}</p>
            <select class="form-select" aria-label="Default select example">
              <option selected>{props.SettingOptionTitle}</option>
              {props.OptionData.map((val, i) => {
                return (
                  <option key={i} value={val.optionValue}>
                    {val.option}
                  </option>
                );
              })}
            </select>
          </div>
        );
      };
      return (
        <div>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openPollSettings}
            onClose={closePollSettings}
            closeAfterTransition
          >
            <Fade in={openPollSettings}>
              <Box sx={style} className="poll_settings_div_modal">
                <div className="create_poll_modal_main_div">
                  <GrFormClose
                    onClick={closePollSettings}
                    className="create_poll_modal_close_icon"
                  />
                  <div className="poll_settings_div">
                    <p
                      onClick={() => {
                        setOpenPollSettings(false);
                        setOpenCreatePoll(true);
                      }}
                    >
                      <BsArrowLeft /> Back
                    </p>
                    <h3>Poll Settings</h3>
                  </div>
                  {PollSettingsData.map((val, i) => {
                    return <PollSettingsApp key={i} {...val} />;
                  })}
                </div>
                <div className="poll_settings_btn_div">
                  <FullBtn
                    onClick={() => {
                      setOpenPollSettings(false);
                      setOpenCreatePoll(true);
                    }}
                    name="Save"
                  />
                </div>
              </Box>
            </Fade>
          </Modal>
        </div>
      );
    };
    // Poll Settings modal end
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
      <>
        {visible && (
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
            <DeleteModal />
            <div className="notes_card_top_div">
              <div className="notes_card_top_opsiton">
                <ProjectListDropDown />
                <CreatePollModal />
                <PollSettingsModal />
              </div>
              <NavLink to={props.link}>
                <h3>
                  {props.name} <span>Created this</span>
                </h3>
                <p>
                  {props.date} at {props.time}
                </p>
                <div className="notes_card_img_div">
                  <Img className="notes_card_img" backgroundImage={NotesImg} />
                </div>
                <h5>{props.title}</h5>

                <ul>
                  <li className=" ms-1">
                    <span>
                      <GrAttachment />
                    </span>
                    {props.fileNumber}
                  </li>
                  <li>
                    <span>
                      <IoChatbubblesOutline />
                    </span>
                    {props.comments}
                  </li>
                  <li>
                    <span>
                      <ImHeadphones />
                    </span>
                    {props.audioClips}
                  </li>
                </ul>
              </NavLink>
            </div>
          </div>
        )}
      </>
    );
  };
  // notes map app end
  return (
    <>
      <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3 ">
        {props.data.map((val, i) => {
          return <NotesListApp key={i} {...val} />;
        })}
      </div>
    </>
  );
};
