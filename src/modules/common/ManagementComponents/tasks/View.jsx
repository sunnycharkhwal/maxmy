import React from "react";
import { useState } from "react";
import Select from "react-select";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { OutlineBtn, FullBtn, FullBtnWithIcon } from "../Btn/Btn";
import { DocumentsAttachments } from "../../ManagementComponents/DocumentsAttachments";
import PdfIcon from "../../../../pics/Management/new.jpg";
import { UserParticipants } from "../Participants";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { BiDotsHorizontal } from "react-icons/bi";
import { FiChevronRight } from "react-icons/fi";
import { TbFileDescription } from "react-icons/tb";
import { ImAttachment } from "react-icons/im";
import { TbSubtask } from "react-icons/tb";
import { RiDeleteBinLine } from "react-icons/ri";
import { GoIssueOpened } from "react-icons/go";
import Accordion from "react-bootstrap/Accordion";
import {
  IconButton,
  Avatar,
  Pagination,
  Stack,
  Menu,
  MenuItem,
  Backdrop,
  Box,
  Modal,
  Fade,
  Drawer,
  FormGroup,
  FormControlLabel,
  Checkbox,
  ListItemIcon,
} from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import Groups3Icon from "@mui/icons-material/Groups3";
// TasksListView
export const TasksListView = ({ link }) => {
  const [taskRightDrawer, setTaskRightDrawer] = useState(false);
  const ProjectListData = [
    {
      TaskTitle: "Merchant Offers Discussion",
      Priority: "High",
      PrioritybackgroundColor: "#FF3E48",
      Status: "On Track",
      ProjectName: "Luno Electrical Website Design",
      date: "29-10-2022",
      Progress: "50",
      Assignee: [
        {
          Designation: "react js devloper",
          name: "sunny charkhwal",
          img: "https://source.unsplash.com/random/500x500/?girl",
        },
        {
          Designation: "react js devloper",
          name: "sunny charkhwal",
          img: "https://source.unsplash.com/random/500x500/?girl,new",
        },
        {
          Designation: "react js devloper",
          name: "sunny charkhwal",
          img: "https://source.unsplash.com/random/500x500/?girl,two",
        },
        {
          Designation: "react js devloper",
          name: "sunny charkhwal",
          img: "https://source.unsplash.com/random/500x500/?women",
        },
        {
          Designation: "react js devloper",
          name: "sunny charkhwal",
          img: "https://source.unsplash.com/random/500x500/?girl,two",
        },
        {
          Designation: "react js devloper",
          name: "sunny charkhwal",
          img: "https://source.unsplash.com/random/500x500/?women",
        },
      ],
    },
  ];

  const ProjectListApp = (props) => {
    const [visible, setVisible] = useState(true);
    const [open, setOpen] = useState(false);
    // team
    const [openn, setOpenn] = useState(false);
    const handleOpenn = () => setOpenn(true);
    const handleClosen = () => setOpenn(false);
    // team end
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const removeElement = () => {
      setVisible((prev) => !prev);
    };
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
        { link: "/Management/create_task", name: "Edit" },
        { onClick: handleOpen, name: "delete" },
        { onClick: handleOpenn, name: "Team Members" },
      ];
      const ITEM_HEIGHT = 30;
      // teme
      const TransitionsModal = ({ assignee }) => {
        const ParticipantsApp = (props) => {
          return (
            <div className="col-12">
              <div className="user_card_div_inner">
                <Avatar
                  alt={props.name}
                  src={props.img}
                  sx={{ width: 15, height: 15 }}
                />
                <p className=" ms-2">{props.name}</p>
                <h6>{props.Designation}</h6>
              </div>
            </div>
          );
        };
        const style = {
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          p: 4,
        };
        return (
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openn}
            onClose={handleClosen}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={openn}>
              <Box className="team_list_box" sx={style}>
                <div className="user_card_div_title">
                  <h3>Team Members</h3>
                </div>
                <div className="user_card_div">
                  <div className="row g-2 ">
                    {assignee.map((val, i) => {
                      return <ParticipantsApp key={i} {...val} />;
                    })}
                  </div>
                </div>
              </Box>
            </Fade>
          </Modal>
        );
      };
      return (
        <>
          <TransitionsModal assignee={props.Assignee} />
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
          open={open}
          onClose={handleClose}
          closeAfterTransition
        >
          <Fade in={open}>
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
    const ProjectName = (props) => {
      const Link = () => {
        return (
          <div className="Participants_main_div_tr">
            <NavLink className="link_a" to={link}>
              {props.ProjectName}
            </NavLink>
          </div>
        );
      };
      const Text = () => {
        return (
          <div className="Participants_main_div_tr">{props.ProjectName}</div>
        );
      };
      return props.link ? <Link /> : <Text />;
    };
    return (
      <>
        <DeleteModal />
        {visible && (
          <tr className="progress_all_tabel_tr_mor">
            <td>
              <div className="Participants_main_div_tr">
                <input className="form-check-input" type="checkbox" />
              </div>
            </td>
            <td onClick={() => setTaskRightDrawer(true)}>
              <div className="Participants_main_div_tr link_a">
                {props.TaskTitle}
              </div>
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
                style={{ color: props.PrioritybackgroundColor }}
              >
                {props.Status}
              </div>
            </td>
            <td>
              <ProjectName link={link} ProjectName={props.ProjectName} />
            </td>
            <td>
              <div className="Participants_main_div_tr">{props.Progress}%</div>
            </td>
            <td className="Participants_main_div">
              <div className="Participants_main_div_inner">
                <UserParticipants data={props.Assignee} />
              </div>
            </td>
            <td>
              <div className="Participants_main_div_tr">{props.date}</div>
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
      <Drawer
        anchor="right"
        open={taskRightDrawer}
        onClose={() => setTaskRightDrawer(false)}
      >
        <Box role="presentation">
          <TaskRightDrawerUi onClickHeader={() => setTaskRightDrawer(false)} />
        </Box>
      </Drawer>
      <div className="dashbaord_white_card ">
        <div>
          <table className="table table-hover text-capitalize progress_all_tabel_tabel">
            <thead>
              <tr className="progress_all_tabel_tr">
                <th scope="col">
                  <input className="form-check-input" type="checkbox" />
                </th>
                <th scope="col">Task Title</th>
                <th scope="col">Priority</th>
                <th scope="col">Status</th>
                <th scope="col">Project Name</th>
                <th scope="col">Progress</th>
                <th scope="col">Assignee</th>
                <th scope="col">Due Date</th>
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
// TasksListView end
// ClassicView
export const ClassicView = () => {
  const ClassicViewData = [
    {
      projectName: "max mover",
      projectKey: "0",
      DepartmentCategory: [
        {
          departmentName: "react js Development",
          departmentKey: "0",
          TasksCategory: [
            {
              tasksName: "Research",
              tasksKey: "0",
              TasksTabel: [
                {
                  RefID: "Ref012",
                  tasksName: "Luno Electrical Website design",
                  PrioritybackgroundColor: "#FF3E48",
                  PriorityName: "high",
                  Status: "TBA",
                  ProgressBar: "50",
                  date: "29-10-2022",
                  labelRowImgData: [
                    {
                      name: "sunny charkhwal",
                      Designation: "react js devloper",
                      img: "https://source.unsplash.com/random/500x500/?girl",
                    },
                    {
                      name: "sunny charkhwal",
                      Designation: "react js devloper",
                      img: "https://source.unsplash.com/random/500x500/?face",
                    },
                    {
                      name: "sunny charkhwal",
                      Designation: "react js devloper",
                      img: "https://source.unsplash.com/random/500x500/?girl",
                    },
                    {
                      name: "sunny charkhwal",
                      Designation: "react js devloper",
                      img: "https://source.unsplash.com/random/500x500/?face",
                    },
                    {
                      name: "sunny charkhwal",
                      Designation: "react js devloper",
                      img: "https://source.unsplash.com/random/500x500/?girl",
                    },
                    {
                      name: "sunny charkhwal",
                      Designation: "react js devloper",
                      img: "https://source.unsplash.com/random/500x500/?face",
                    },
                  ],
                },
              ],
            },
            {
              tasksName: "Research",
              tasksKey: "1",
              TasksTabel: [
                {
                  RefID: "Ref012",
                  tasksName: "Luno Electrical Website design",
                  PrioritybackgroundColor: "#FF3E48",
                  PriorityName: "high",
                  Status: "TBA",
                  ProgressBar: "50",
                  date: "29-10-2022",
                  labelRowImgData: [
                    {
                      img: "https://source.unsplash.com/random/500x500/?girl",
                    },
                    {
                      img: "https://source.unsplash.com/random/500x500/?boy",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          departmentName: "Backend",
          departmentKey: "1",
          TasksCategory: [
            {
              tasksName: "Research",
              tasksKey: "0",
              TasksTabel: [
                {
                  RefID: "Ref012",
                  tasksName: "Luno Electrical Website design",
                  PrioritybackgroundColor: "#FF3E48",
                  PriorityName: "high",
                  Status: "TBA",
                  ProgressBar: "50",
                  date: "29-10-2022",
                  labelRowImgData: [
                    {
                      img: "https://source.unsplash.com/random/500x500/?girl",
                    },
                    {
                      img: "https://source.unsplash.com/random/500x500/?face",
                    },
                  ],
                },
                {
                  RefID: "Ref012",
                  tasksName: "Luno Electrical Website design",
                  PrioritybackgroundColor: "#FF3E48",
                  PriorityName: "high",
                  Status: "TBA",
                  ProgressBar: "50",
                  date: "29-10-2022",
                  labelRowImgData: [
                    {
                      img: "https://source.unsplash.com/random/500x500/?girl",
                    },
                    {
                      img: "https://source.unsplash.com/random/500x500/?face",
                    },
                  ],
                },
                {
                  RefID: "Ref012",
                  tasksName: "Luno Electrical Website design",
                  PrioritybackgroundColor: "#FF3E48",
                  PriorityName: "high",
                  Status: "TBA",
                  ProgressBar: "50",
                  date: "29-10-2022",
                  labelRowImgData: [
                    {
                      img: "https://source.unsplash.com/random/500x500/?girl",
                    },
                    {
                      img: "https://source.unsplash.com/random/500x500/?face",
                    },
                  ],
                },
              ],
            },
            {
              tasksName: "Research",
              tasksKey: "1",
              TasksTabel: [
                {
                  RefID: "Ref012",
                  tasksName: "Luno Electrical Website design",
                  PrioritybackgroundColor: "#FF3E48",
                  PriorityName: "high",
                  Status: "TBA",
                  ProgressBar: "50",
                  date: "29-10-2022",
                  labelRowImgData: [
                    {
                      img: "https://source.unsplash.com/random/500x500/?girl",
                    },
                    {
                      img: "https://source.unsplash.com/random/500x500/?boy",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ];
  const ClassicViewApp = (props) => {
    const TaskLabel = ({ labelRowData }) => {
      const [showDrawer, setShowDrawer] = useState(false);
      const [showDelete, setShowDelete] = useState(false);
      // team
      const [openn, setOpenn] = useState(false);
      const handleOpenn = () => setOpenn(true);
      const handleClosen = () => setOpenn(false);
      // team
      // Delete Modal
      const handleOpen = () => setShowDelete(true);
      const handleClose = () => setShowDelete(false);
      // Delete Modal
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
                        <FullBtn name="Delete" />
                      </li>
                    </ul>
                  </div>
                </div>
              </Box>
            </Fade>
          </Modal>
        );
      };
      const ProjectListDropDown = ({ data }) => {
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
          { link: "/Management/create_task", name: "Edit" },
          { onClick: handleOpen, name: "delete" },
          { onClick: handleOpenn, name: "Team Members" },
        ];
        const ITEM_HEIGHT = 30;
        // teme
        const TransitionsModal = () => {
          const ParticipantsApp = (props) => {
            return (
              <div className="col-12">
                <div className="user_card_div_inner">
                  <Avatar
                    alt={props.name}
                    src={props.img}
                    sx={{ width: 15, height: 15 }}
                  />
                  <p className=" ms-2">{props.name}</p>
                  <h6>{props.Designation}</h6>
                </div>
              </div>
            );
          };
          const style = {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            p: 4,
          };
          return (
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              open={openn}
              onClose={handleClosen}
              closeAfterTransition
            >
              <Fade in={openn}>
                <Box className="team_list_box" sx={style}>
                  <div className="user_card_div_title">
                    <h3>Team Members</h3>
                  </div>
                  <div className="user_card_div">
                    <div className="row g-2 ">
                      {data.map((val, i) => {
                        return <ParticipantsApp key={i} {...val} />;
                      })}
                    </div>
                  </div>
                </Box>
              </Fade>
            </Modal>
          );
        };
        return (
          <>
            <TransitionsModal />
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
                    <MenuItem
                      selected={option === "Pyxis"}
                      onClick={handleClose}
                    >
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
        <div>
          <div className="dashbaord_white_card pt-3 px-2 ">
            <div>
              <table className="table table-hover text-capitalize progress_all_tabel_tabel">
                <thead>
                  <tr className="progress_all_tabel_tr">
                    <th scope="col">
                      <input className="form-check-input" type="checkbox" />
                    </th>
                    <th scope="col">RefID</th>
                    <th scope="col">tasks Name</th>
                    <th scope="col">Priority</th>
                    <th scope="col">Status</th>
                    <th scope="col">Progress</th>
                    <th scope="col">Assignee</th>
                    <th scope="col">Due Date</th>
                    <th scope="col">action</th>
                  </tr>
                </thead>
                <tbody>
                  <Drawer
                    anchor="right"
                    open={showDrawer}
                    onClick={() => setShowDrawer(false)}
                  >
                    <Box role="presentation">
                      Lorem ipsum dolor sit amet consectetur
                    </Box>
                  </Drawer>
                  <DeleteModal />
                  {labelRowData.map((labelRowData, i) => {
                    return (
                      <tr key={i} className="progress_all_tabel_tr_mor">
                        <td>
                          <input className="form-check-input" type="checkbox" />
                        </td>
                        <td>{labelRowData.RefID}</td>
                        <td className="project_list_name ">
                          <span
                            className="link_a"
                            onClick={() => setShowDrawer(true)}
                          >
                            {labelRowData.tasksName}
                          </span>
                        </td>
                        <td>
                          <div
                            className="project_list_priority_div"
                            style={{
                              backgroundColor:
                                labelRowData.PrioritybackgroundColor,
                            }}
                          >
                            <span className="project_list_priority">
                              {labelRowData.PriorityName}
                            </span>
                          </div>
                        </td>
                        <td>
                          <span
                            style={{
                              color: labelRowData.PrioritybackgroundColor,
                            }}
                          >
                            {labelRowData.Status}
                          </span>
                        </td>
                        <td className="progress_all_tabel_td">
                          <div className="progress_all_tabel">
                            <div className="row align-items-center">
                              <div className="col-2">
                                <span>{labelRowData.ProgressBar}%</span>
                              </div>
                              <div className="col-10">
                                <div className="progress">
                                  <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{
                                      width: labelRowData.ProgressBar + "20%",
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
                        <td>
                          <div
                            className="Participants_main_div_inner"
                            style={{ marginTop: "-3px" }}
                          >
                            <UserParticipants
                              data={labelRowData.labelRowImgData}
                            />
                          </div>
                        </td>
                        <td>{labelRowData.date}</td>
                        <td>
                          <div className="progress_all_option_icon">
                            <ProjectListDropDown
                              data={labelRowData.labelRowImgData}
                            />
                          </div>
                        </td>
                      </tr>
                    );
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
        </div>
      );
    };
    const TasksCategory = (TasksCategoryData) => {
      return (
        <Accordion.Item eventKey={TasksCategoryData.tasksKey}>
          <Accordion.Header className="classic_view_tabel_heder">
            <span>{TasksCategoryData.tasksName}</span>
          </Accordion.Header>
          <Accordion.Body className="classic_view_tabel_body">
            <TaskLabel labelRowData={TasksCategoryData.TasksTabel} />
          </Accordion.Body>
        </Accordion.Item>
      );
    };
    const DepartmentCategory = ({ DepartmentCategoryData }) => {
      return (
        <Accordion.Item eventKey={DepartmentCategoryData.departmentKey}>
          <Accordion.Header className="classic_view_inner_header">
            <span>{DepartmentCategoryData.departmentName}</span>
          </Accordion.Header>
          <Accordion.Body className="classic_view_inner_body">
            <Accordion alwaysOpen>
              {DepartmentCategoryData.TasksCategory.map(
                (DepartmentCategoryData, w) => {
                  return <TasksCategory key={w} {...DepartmentCategoryData} />;
                }
              )}
            </Accordion>
          </Accordion.Body>
        </Accordion.Item>
      );
    };

    return (
      <>
        <Accordion.Item className=" mb-2" eventKey={props.projectKey}>
          <Accordion.Header>{props.projectName}</Accordion.Header>
          <Accordion.Body className="classic_view_outer_body pt-0">
            <Accordion alwaysOpen>
              {props.DepartmentCategory.map((val, e) => {
                return (
                  <DepartmentCategory key={e} DepartmentCategoryData={val} />
                );
              })}
            </Accordion>
          </Accordion.Body>
        </Accordion.Item>
      </>
    );
  };
  return (
    <>
      <div className="classic_view_outer">
        <Accordion alwaysOpen>
          {ClassicViewData.map((val, i) => {
            return <ClassicViewApp key={i} {...val} />;
          })}
        </Accordion>
      </div>
      <div className="projec_tabelt_list_pagination_div mt-4">
        <Stack spacing={2}>
          <Pagination count={10} />
        </Stack>
      </div>
    </>
  );
};
// ClassicView end
// Kanban
export const Kanban = () => {
  return (
    <>
      <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3 ">
        <div className="col-xxl- col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
          <OpenTasks />
        </div>
        <div className="col-xxl- col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
          <OnTrack />
        </div>
        <div className="col-xxl- col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
          <Delayed />
        </div>
        <div className="col-xxl- col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
          <OnHold />
        </div>
      </div>
    </>
  );
};
const OpenTasks = () => {
  const TasksData = [
    {
      TaskTitle: "Create Navigation Menu and Search Bar",
      Priority: "High",
      PrioritybackgroundColor: "#FF3E48",
      AssigneeData: [
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
      TaskTitle: "Create Navigation Menu and Search Bar",
      Priority: "Medium",
      PrioritybackgroundColor: "#F3D32C",
      AssigneeData: [
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
      TaskTitle: "Create Navigation Menu and Search Bar",
      Priority: "low",
      PrioritybackgroundColor: "#32C971",
      AssigneeData: [
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
  const TasksApp = (props) => {
    const [state, setState] = useState(false);
    return (
      <>
        <Drawer anchor="right" open={state} onClick={() => setState(false)}>
          <Box role="presentation">Lorem ipsum dolor sit amet consectetur</Box>
        </Drawer>
        <div className="col-12">
          <div className="open_tasks_card">
            <h3 onClick={() => setState(true)} className="link_a">
              {props.TaskTitle}
            </h3>
            <div className="open_tasks_img_div">
              <UserParticipants data={props.AssigneeData} />
            </div>
            <div
              className="project_list_priority_div"
              style={{ backgroundColor: props.PrioritybackgroundColor }}
            >
              <span className="project_list_priority">{props.Priority}</span>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="inner_taska_div_main">
        <div className="inner_taska_title_div_main">
          <h3>Open Tasks</h3>
          <div className="inner_taska_title_btn_div_main">
            <FullBtnWithIcon
              link="/Management/create_task"
              name="Add Task"
              icon={<AiOutlinePlus />}
            />
          </div>

          <div className="row g-3 mt-2">
            {TasksData.map((val, i) => {
              return <TasksApp key={i} {...val} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};
const OnTrack = () => {
  const TasksData = [
    {
      TaskTitle: "Create Navigation Menu and Search Bar",
      Priority: "High",
      PrioritybackgroundColor: "#FF3E48",
      AssigneeData: [
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
      TaskTitle: "Create Navigation Menu and Search Bar",
      Priority: "Medium",
      PrioritybackgroundColor: "#F3D32C",
      AssigneeData: [
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
      TaskTitle: "Create Navigation Menu and Search Bar",
      Priority: "low",
      PrioritybackgroundColor: "#32C971",
      AssigneeData: [
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
  const TasksApp = (props) => {
    const [state, setState] = useState(false);
    return (
      <>
        <Drawer anchor="right" open={state} onClick={() => setState(false)}>
          <Box role="presentation">Lorem ipsum dolor sit amet consectetur</Box>
        </Drawer>
        <div className="col-12">
          <div className="open_tasks_card open_tasks_card2">
            <h3 onClick={() => setState(true)} className="link_a">
              {props.TaskTitle}
            </h3>
            <div className="open_tasks_img_div">
              <UserParticipants data={props.AssigneeData} />
            </div>
            <div
              className="project_list_priority_div"
              style={{ backgroundColor: props.PrioritybackgroundColor }}
            >
              <span className="project_list_priority">{props.Priority}</span>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="inner_taska_div_main">
        <div className="inner_taska_title_div_main">
          <h3>On Tasks</h3>

          <div className="row g-3 mt-2">
            {TasksData.map((val, i) => {
              return <TasksApp key={i} {...val} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};
const Delayed = () => {
  const TasksData = [
    {
      TaskTitle: "Create Navigation Menu and Search Bar",
      Priority: "High",
      PrioritybackgroundColor: "#FF3E48",
      AssigneeData: [
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
      TaskTitle: "Create Navigation Menu and Search Bar",
      Priority: "Medium",
      PrioritybackgroundColor: "#F3D32C",
      AssigneeData: [
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
      TaskTitle: "Create Navigation Menu and Search Bar",
      Priority: "low",
      PrioritybackgroundColor: "#32C971",
      AssigneeData: [
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
  const TasksApp = (props) => {
    const [state, setState] = useState(false);
    return (
      <>
        <Drawer anchor="right" open={state} onClick={() => setState(false)}>
          <Box role="presentation">Lorem ipsum dolor sit amet consectetur</Box>
        </Drawer>
        <div className="col-12">
          <div className="open_tasks_card open_tasks_card2">
            <h3 onClick={() => setState(true)} className="link_a">
              {props.TaskTitle}
            </h3>
            <div className="open_tasks_img_div">
              <UserParticipants data={props.AssigneeData} />
            </div>
            <div
              className="project_list_priority_div"
              style={{ backgroundColor: props.PrioritybackgroundColor }}
            >
              <span className="project_list_priority">{props.Priority}</span>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="inner_taska_div_main">
        <div className="inner_taska_title_div_main">
          <h3>Delayed</h3>

          <div className="row g-3 mt-2">
            {TasksData.map((val, i) => {
              return <TasksApp key={i} {...val} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};
const OnHold = () => {
  const TasksData = [
    {
      TaskTitle: "Create Navigation Menu and Search Bar",
      Priority: "High",
      PrioritybackgroundColor: "#FF3E48",
      AssigneeData: [
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
      TaskTitle: "Create Navigation Menu and Search Bar",
      Priority: "Medium",
      PrioritybackgroundColor: "#F3D32C",
      AssigneeData: [
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
      TaskTitle: "Create Navigation Menu and Search Bar",
      Priority: "low",
      PrioritybackgroundColor: "#32C971",
      AssigneeData: [
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
  const TasksApp = (props) => {
    const [state, setState] = useState(false);
    return (
      <>
        <Drawer anchor="right" open={state} onClick={() => setState(false)}>
          <Box role="presentation">Lorem ipsum dolor sit amet consectetur</Box>
        </Drawer>
        <div className="col-12">
          <div className="open_tasks_card ">
            <h3 onClick={() => setState(true)} className="link_a">
              {props.TaskTitle}
            </h3>
            <div className="open_tasks_img_div">
              <UserParticipants data={props.AssigneeData} />
            </div>
            <div
              className="project_list_priority_div"
              style={{ backgroundColor: props.PrioritybackgroundColor }}
            >
              <span className="project_list_priority">{props.Priority}</span>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="inner_taska_div_main">
        <div className="inner_taska_title_div_main">
          <h3>On Hold</h3>

          <div className="row g-3 mt-2">
            {TasksData.map((val, i) => {
              return <TasksApp key={i} {...val} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};
// Kanban end
const TaskRightDrawerUi = (props) => {
  const [showDependency, setDependency] = useState(false);
  // Team Members Ui Modal state
  const [showTeamModal, setShowTeamModal] = useState(false);
  const handleOpenTeamModal = () => setShowTeamModal(true);
  const handleCloseTeamModal = () => setShowTeamModal(false);

  // Team Members Ui Modal state end
  // Team Members Ui Modal
  const TeamMembersUiModal = () => {
    const style = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      bgcolor: "background.paper",
      border: "0px solid #000",
      boxShadow: 24,
      p: 0,
    };
    const TeamMembersDataUi = (props) => (
      <div className="team_members_data_ui_div">
        <img
          src={
            props.userIcon ||
            "https://source.unsplash.com/random/500x500/?user,icon"
          }
          alt="img"
        />
        {props.name}
      </div>
    );
    const TeamMembersData = [
      {
        value: "1",
        label: <TeamMembersDataUi name="sunny charkhwal" />,
      },
      {
        value: "2",
        label: (
          <TeamMembersDataUi
            name="sunny charkhwal"
            userIcon="https://source.unsplash.com/random/500x500/?user,face2"
          />
        ),
      },
      {
        value: "3",
        label: (
          <TeamMembersDataUi
            name="sunny charkhwal"
            userIcon="https://source.unsplash.com/random/500x500/?user,face3"
          />
        ),
      },
      {
        value: "4",
        label: (
          <TeamMembersDataUi
            name="sunny charkhwal"
            userIcon="https://source.unsplash.com/random/500x500/?user,face4"
          />
        ),
      },
      {
        value: "5",
        label: (
          <TeamMembersDataUi
            name="sunny charkhwal"
            userIcon="https://source.unsplash.com/random/500x500/?user,face5"
          />
        ),
      },
      {
        value: "6",
        label: (
          <TeamMembersDataUi
            name="sunny charkhwal"
            userIcon="https://source.unsplash.com/random/500x500/?user,face6"
          />
        ),
      },
      {
        value: "7",
        label: (
          <TeamMembersDataUi
            name="sunny charkhwal"
            userIcon="https://source.unsplash.com/random/500x500/?user,face7"
          />
        ),
      },
      {
        value: "8",
        label: (
          <TeamMembersDataUi
            name="sunny charkhwal"
            userIcon="https://source.unsplash.com/random/500x500/?user,face8"
          />
        ),
      },
      {
        value: "9",
        label: (
          <TeamMembersDataUi
            name="sunny charkhwal"
            userIcon="https://source.unsplash.com/random/500x500/?user,face9"
          />
        ),
      },
      {
        value: "10",
        label: (
          <TeamMembersDataUi
            name="sunny charkhwal"
            userIcon="https://source.unsplash.com/random/500x500/?user,face10"
          />
        ),
      },
    ];
    const TeamMembersShowSearchResultData = [
      {
        Img: "",
        userName: "kamal",
      },
      {
        Img: "https://source.unsplash.com/random/500x500/?face,photo",
        userName: "sunny charkhwal",
      },
      {
        Img: "https://source.unsplash.com/random/500x500/?face,photo",
        userName: "sunny charkhwal",
      },
    ];
    return (
      <Modal
        open={showTeamModal}
        onClose={handleCloseTeamModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="team_members_ui_modal">
          <div className="team_members_ui_modal_title">
            <h3>Team Members</h3>
            <IoClose onClick={handleCloseTeamModal} />
          </div>
          <div className="team_members_ui_modal_body">
            <div className=" mb-4">
              <Select
                // menuIsOpen={true}
                options={TeamMembersData}
                placeholder="Team Members"
                isMulti
              />
            </div>
            <div className="team_members_data_ui_div_scorll">
              <div className="row g-3">
                {TeamMembersShowSearchResultData.map((val, i) => (
                  <div className="col-12" key={i}>
                    <div className="team_members_data_ui_div">
                      <img
                        src={
                          val.Img ||
                          "https://source.unsplash.com/random/500x500/?girl"
                        }
                        alt="img"
                      />
                      {val.userName}
                      <span>Remove</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    );
  };
  // Team Members Ui Modal end
  // Header Menu
  const HeaderMenu = () => {
    const [taskRightDrawerUiHeaderMenu, setTaskRightDrawerUiHeaderMenu] =
      useState(null);
    const open = Boolean(taskRightDrawerUiHeaderMenu);
    const handleClick = (event) => {
      setTaskRightDrawerUiHeaderMenu(event.currentTarget);
    };
    const handleClose = () => {
      setTaskRightDrawerUiHeaderMenu(null);
    };
    const navigate = useNavigate();

    return (
      <React.Fragment>
        <Box onClick={handleClick}>
          <BiDotsHorizontal className="menu_svg" />
        </Box>
        <Menu
          anchorEl={taskRightDrawerUiHeaderMenu}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem onClick={() => navigate("/Management/create_task")}>
            <ListItemIcon>
              <EditOutlinedIcon fontSize="small" />
            </ListItemIcon>
            Edit
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <DeleteOutlineIcon fontSize="small" />
            </ListItemIcon>
            Delete
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <AttachFileIcon fontSize="small" />
            </ListItemIcon>
            Attach Document
          </MenuItem>
          <MenuItem onClick={handleOpenTeamModal}>
            <ListItemIcon>
              <Groups3Icon fontSize="small" />
            </ListItemIcon>
            Team Members
          </MenuItem>
        </Menu>
        <TeamMembersUiModal />
      </React.Fragment>
    );
  };
  // Header Menu end
  const Assignee = [
    {
      Designation: "react js devloper",
      name: "sunny charkhwal",
      img: "https://source.unsplash.com/random/500x500/?girl",
    },
    {
      Designation: "react js devloper",
      name: "sunny charkhwal",
      img: "https://source.unsplash.com/random/500x500/?girl,new",
    },
    {
      Designation: "react js devloper",
      name: "sunny charkhwal",
      img: "https://source.unsplash.com/random/500x500/?girl,two",
    },
    {
      Designation: "react js devloper",
      name: "sunny charkhwal",
      img: "https://source.unsplash.com/random/500x500/?women",
    },
    {
      Designation: "react js devloper",
      name: "sunny charkhwal",
      img: "https://source.unsplash.com/random/500x500/?girl,two",
    },
    {
      Designation: "react js devloper",
      name: "sunny charkhwal",
      img: "https://source.unsplash.com/random/500x500/?women",
    },
  ];
  const DependencyShow = () => {
    setDependency(!showDependency);
  };
  const DocumentsAttachmentsData = [
    {
      DocumentImg: PdfIcon,
      name: "homepage",
    },
    {
      DocumentImg: PdfIcon,
      name: "homepage",
    },
    {
      DocumentImg: PdfIcon,
      name: "homepage",
    },
    {
      DocumentImg: PdfIcon,
      name: "homepage",
    },
  ];
  return (
    <div className="task_right_drawer_ui_main_div">
      <div className="task_right_drawer_ui_header_div">
        <IoClose className="close_svg" onClick={props.onClickHeader} />
        <div className="task_right_drawer_ui_inner_div">
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Complete Task" />
          </FormGroup>
          <NavLink to="/Management/create_task">
            <MdOutlineModeEditOutline />
          </NavLink>
          <HeaderMenu />
        </div>
      </div>
      <div className="task_right_drawer_ui_body_div">
        <div className="task_right_drawer_ui_body_nav_div">
          <p>Website Development</p>
          <span>
            <FiChevronRight />
          </span>
          <p>Front End</p>
          <span>
            <FiChevronRight />
          </span>
          <p>reasearch</p>
        </div>
        <div className="task_right_drawer_ui_body_project_title">
          <p>Create Navigation Menu and Search Bar</p>
          <div className="task_right_drawer_ui_body_user">
            <UserParticipants data={Assignee} />
          </div>
          <div className=" d-flex mt-1">
            <div className="task_right_drawer_ui_body_user_add">
              Added by <span>Akhilesh Soni</span>
            </div>
            <div className="task_right_drawer_ui_body_user_add_date">
              On 20th Nov 2022
            </div>
          </div>
        </div>
        <ul className="task_right_drawer_ui_body_created">
          <li>
            <p>Created By</p>
            <div className="team_members_data_ui_div">
              <img
                src="https://source.unsplash.com/random/500x500/?girl"
                alt="img"
              />
              sunny charkhwal
            </div>
          </li>
          <li className=" ms-md-3 ms-0 mt-md-0 mt-3">
            <p>Assigned To</p>
            <div className="team_members_data_ui_div">
              <img
                src="https://source.unsplash.com/random/500x500/?girl"
                alt="img"
              />
              sunny charkhwal
            </div>
          </li>
        </ul>
        <ul className="task_right_drawer_ui_body_created2">
          <li>
            <p>Start Date</p>
            <span>21st Nov</span>
          </li>
          <li className=" ms-md-5 ms-0 mt-md-0 mt-3">
            <p>Due Date</p>
            <span>30st Nov</span>
          </li>
          <li className=" ms-md-5 ms-0 mt-md-0 mt-3">
            <p>Progress</p>
            <span className="task_right_drawer_ui_body_Progress">
              50% Complete
            </span>
          </li>
          <li className=" ms-md-5 ms-0 mt-md-0 mt-3">
            <p>Priority</p>
            <p
              style={{ backgroundColor: "#ff3e48" }}
              className="task_right_drawer_ui_body_Priority "
            >
              <span>High</span>
            </p>
          </li>
        </ul>
        <div className="profile_switch_top">
          <div className="task_right_drawer_ui_body_Dependency">
            <p>Dependency</p>
            <div>
              <label className="switch">
                <input
                  type="checkbox"
                  className="switch_input"
                  onClick={DependencyShow}
                ></input>
                <span className="slider round"></span>
              </label>
            </div>
          </div>
        </div>
        {showDependency ? (
          <div className="task_right_drawer_ui_body_Dependency_show">
            <FullBtn
              name="Create Dependent Task "
              link="/Management/create_task"
            />
            <div className="task_right_drawer_ui_body_Dependency_show_text">
              <div className="task_right_drawer_ui_body_Dependency_select">
                <p>Blocked By</p>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Select Task</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="task_right_drawer_ui_body_Dependency_select">
                <p>Blocking</p>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Select Task</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
          </div>
        ) : null}
        <hr />
        <div className="task_right_drawer_ui_body_description">
          <h3>
            <TbFileDescription /> Description
          </h3>
          <div className="task_right_drawer_ui_body_description_text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
            excepturi molestias ipsa explicabo dolores at dolore sint, veniam
            consequatur, quo consectetur aut maxime mollitia quisquam odit
            dignissimos! Maiores, quaerat id.
          </div>
          <hr />
        </div>
        <div className="task_right_drawer_ui_body_description">
          <h3>
            <ImAttachment /> Attachments
          </h3>
          <div className="row g-2">
            {DocumentsAttachmentsData.map((val, i) => (
              <DocumentsAttachments
                cols="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-6 col-6"
                key={i}
                {...val}
              />
            ))}
          </div>
          <hr />
        </div>
        <div className="task_right_drawer_ui_body_description">
          <h3>
            <TbSubtask /> Subtasks
          </h3>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Define" />
            <FormControlLabel control={<Checkbox />} label="User Interview" />
            <FormControlLabel control={<Checkbox />} label="User Persona" />
          </FormGroup>
          <div className="task_right_drawer_ui_body_Subtasks_input_div">
            <input
              className="form-control intput_box"
              type="text"
              placeholder="Enter Subtask"
            ></input>
            <RiDeleteBinLine />
          </div>
          <button className="text_button mt-3">
            <AiOutlinePlus />
            Add Subtask
          </button>
          <hr />
        </div>
        <div className="task_right_drawer_ui_body_description">
          <h3>
            <GoIssueOpened /> Issues
          </h3>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox />}
              label="Issue in homepage"
            />
          </FormGroup>
          <div className="task_right_drawer_ui_body_Subtasks_input_div">
            <input
              className="form-control intput_box"
              type="text"
              placeholder="Enter Issues"
            ></input>
            <RiDeleteBinLine />
          </div>
          <button className="text_button mt-3">
            <AiOutlinePlus />
            Add Subtask
          </button>
          <hr />
        </div>
      </div>
    </div>
  );
};
