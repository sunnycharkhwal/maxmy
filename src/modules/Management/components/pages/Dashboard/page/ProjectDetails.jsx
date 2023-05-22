import { PageAllTopTitle } from "../../../../../common/ManagementComponents/PageAllTopTitle";
import { BsArrowLeft } from "react-icons/bs";
import { Nav, Tab } from "react-bootstrap";
import {
  OutlineBtn,
  FullBtn,
} from "../../../../../common/ManagementComponents/Btn/Btn";
import { ProfileImg } from "../../../../../common/ManagementComponents/ProfileImg";
import React from "react";
import { BiEdit, BiDotsHorizontalRounded, BiTask } from "react-icons/bi";
import { BsUpload } from "react-icons/bs";
import { useState } from "react";
import { PageInnerTitle } from "../../../../../common/ManagementComponents/pageInnerTitle/Title";
import Drag from "../../../../../../pics/Management/drag.png";
import Down from "../../../../../../pics/Management/down.png";
import ReactApexChart from "react-apexcharts";
import { Dropdown, ButtonToolbar } from "rsuite";
import { MdOutlineWidgets } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";

// mui
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { CircularStatic } from "./CircularStatic";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import { NavLink, useNavigate } from "react-router-dom";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import PdfIcon from "../../../../../../pics/Management/new.jpg";
import { DocumentsAttachments } from "../../../../../common/ManagementComponents/DocumentsAttachments";
import { UserParticipants } from "../../../../../common/ManagementComponents/Participants";
import { OverviewEditModalApp } from "./OverviewEditModalApp";
import { Notes } from "../../../../../common/ManagementComponents/Notes";
// img link
let Photo = "https://source.unsplash.com/random/500x500/?girl";
let Photo2 = "https://source.unsplash.com/random/500x500/?girl,face";
let charts = [
  {
    title: "Task Status",
    data: {
      series: [10, 30],
      options: {
        colors: ["#5AE1E2", "#0878FF"],
        chart: {
          type: "pie",
          stacked: false,
          toolbar: {
            show: false,
          },
        },
        dataLabels: {
          enabled: true,
          position: "top",
          textAnchor: "start",
          style: {
            colors: ["#fff"],
          },
        },
        legend: {
          show: false,
        },
        bar: {
          barWidth: "10%",
        },
      },
    },
  },

  {
    title: "Issue Status",
    data: {
      series: [100],
      options: {
        colors: ["#0878FF"],
        chart: {
          type: "pie",
          stacked: false,
          toolbar: {
            show: false,
          },
        },
        dataLabels: {
          enabled: true,
          position: "top",
          textAnchor: "start",
          style: {
            colors: ["#fff"],
          },
        },
        legend: {
          show: false,
        },
        bar: {
          barWidth: "10%",
        },
      },
    },
  },
  {
    title: "Milestone Status",
    data: {
      series: [56, 22, 22],
      options: {
        colors: ["#0878FF", "#5AE1E2", "#E6ECF6"],
        chart: {
          type: "pie",
          stacked: false,
          toolbar: {
            show: false,
          },
        },
        dataLabels: {
          enabled: true,
          position: "top",
          textAnchor: "start",
          style: {
            colors: ["#fff"],
          },
        },
        legend: {
          show: false,
        },
        bar: {
          barWidth: "10%",
        },
      },
    },
  },
  {
    title: "Bugs/Issues",
    data: {
      series: [56, 22, 22],
      options: {
        colors: ["#0878FF", "#5AE1E2", "#E6ECF6"],
        chart: {
          type: "pie",
          stacked: false,
          toolbar: {
            show: false,
          },
        },
        dataLabels: {
          enabled: true,
          position: "top",
          textAnchor: "start",
          style: {
            colors: ["#fff"],
          },
        },
        legend: {
          show: false,
        },
        bar: {
          barWidth: "10%",
        },
      },
    },
  },
];
// index
export const ProjectDetails = () => {
  return (
    <>
      <div className="custom_container">
        <PageAllTopTitle link={-1} icon={<BsArrowLeft />} title="Project" />
        <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3 ">
          <div className="col-12">
            <ProjectDetailsCard />
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
// top card
const ProjectDetailsCard = () => {
  const UserParticipantsData = [
    {
      Designation: "react js devloper",
      name: "shived",
      img: "https://source.unsplash.com/random/500x500/?girl,new",
    },
    {
      Designation: "react js devloper",
      name: "shived",
      img: "https://source.unsplash.com/random/500x500/?girl,new",
    },
    {
      Designation: "react js devloper",
      name: "shived",
      img: "https://source.unsplash.com/random/500x500/?girl,new",
    },
    {
      Designation: "react js devloper",
      name: "shived",
      img: "https://source.unsplash.com/random/500x500/?girl,new",
    },
    {
      Designation: "react js devloper",
      name: "shived",
      img: "https://source.unsplash.com/random/500x500/?girl,new",
    },
    {
      Designation: "react js devloper",
      name: "shived",
      img: "https://source.unsplash.com/random/500x500/?girl,new",
    },
  ];
  return (
    <>
      <div className="dashbaord_white_card dashbaord_white_card_new">
        <div className="row">
          <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-12 col-12 img_dashbaord_white_card_new">
            <ProfileImg className="ProjectDetailsCard_img" />
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-7 col-md-9 col-sm-12 col-12">
            <div className="project_details_card_name">
              <h3>sunny charkhwal</h3>
              <p>info@lunoelectrical.com.au</p>
            </div>

            <div className="project_details_card_box_main_div">
              <div className="project_details_card_box">
                <p>27 Dec 2022</p>
                <span>Due Date</span>
              </div>
              <div className="project_details_card_box project_details_card_box_inner">
                <p>124/200</p>
                <span>Open Tasks</span>
              </div>
              <div className="project_details_card_box project_details_card_box_inner">
                <p>124/200</p>
                <span>Open Tasks</span>
              </div>
              <div className="card_user_img">
                <UserParticipants data={UserParticipantsData} />
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-3 col-md-6 col-sm-12 col-12">
            <div className="circular_static_div_main_div">
              <div className="circular_static_div">
                <CircularStatic />
              </div>
              <div className="circular_static_div_text">
                <h3>Project Completion</h3>
                <p>Project is running on track as per stated due date.</p>
                <FullBtn link="/Management/tasks" name="View My Tasks" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
// top card end
// tab
const MyTab = () => {
  return (
    <>
      <div className="project_list_tabs_main_div">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <div className="project_tab_mb">
            <Nav variant="pills" className="flex">
              <Nav.Item>
                <Nav.Link eventKey="first">Project Dashboard</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="Overview">Overview</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="Team">Team & Work Progress</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="comment">comments</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="Meetings">Meetings & Notes</Nav.Link>
              </Nav.Item>
            </Nav>
          </div>

          <Tab.Content>
            <Tab.Pane eventKey="first">
              <div className="Dashboard_menu_right">
                <TabsMenu WidgetsControl={<WidgetsControl />} />
              </div>
              <ProjectDashboard />
            </Tab.Pane>
            <Tab.Pane eventKey="Overview">
              <div className="Dashboard_menu_right">
                <TabsMenu />
              </div>
              <Overview />
            </Tab.Pane>
            <Tab.Pane eventKey="Team">
              <div className="Dashboard_menu_right">
                <TabsMenu />
              </div>
              <TeamWorkProgress />
            </Tab.Pane>
            <Tab.Pane eventKey="comment">
              <div className="Dashboard_menu_right">
                <TabsMenu />
              </div>
              <h1>comments</h1>
            </Tab.Pane>
            <Tab.Pane eventKey="Meetings">
              <div className="Dashboard_menu_right">
                <TabsMenu />
              </div>
              <Meetings />
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </>
  );
};
// tab end
// Meetings & Notes
const Meetings = () => {
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
      <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3 ">
        <div className="col-12">
          <div className="row d-flex align-items-baseline">
            <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-9 col-sm-6 col-6">
              <PageAllTopTitle title="Scheduled Meetings" />
            </div>
            <div className="ol-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-6 col-6 text-end">
              <NavLink to="/Management/meetings" className="text_btn">
                View All Meetings
              </NavLink>
            </div>
          </div>
        </div>
        <div className="col-12">
          <MeetingsTabeltList />
        </div>
        <div className="col-12">
          <div className="row d-flex align-items-baseline">
            <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-9 col-sm-6 col-6">
              <PageAllTopTitle title="Recent Notes" />
            </div>
            <div className="ol-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-6 col-6 text-end">
              <NavLink to="/Management/meeting_notes" className="text_btn">
                View All Notes
              </NavLink>
            </div>
          </div>
        </div>
        <div className="col-12">
          <Notes data={NotesListData} />
        </div>
      </div>
    </>
  );
};
const MeetingsTabeltList = () => {
  const ProjectListData = [
    {
      MeetingTitle: "Merchant Offers Discussion",
      ProjectName: "Luno Electrical Website design",
      PrioritybackgroundColor: "#FF3E48",
      Organiser: "Organiser",
      ProgressBar: "50",
      date: "29-10-2022",
      link: "/Management/join_meeting",
      Participants: [
        {
          Designation: "react js devloper",
          name: "sunny charkhwal fbjvbd",
          img: "https://source.unsplash.com/random/500x500/?girl",
        },
        {
          Designation: "react js devloper",
          name: "shived",
          img: "https://source.unsplash.com/random/500x500/?girl,new",
        },
        {
          Designation: "react js devloper",
          name: "sunny charkhwal",
          img: "https://source.unsplash.com/random/500x500/?girl,two",
        },
        {
          Designation: "react js devloper",
          name: "shived",
          img: "https://source.unsplash.com/random/500x500/?women",
        },
        {
          Designation: "react js devloper",
          name: "shived",
          img: "https://source.unsplash.com/random/500x500/?girl",
        },
        {
          Designation: "react js devloper",
          name: "sunny charkhwal",
          img: "https://source.unsplash.com/random/500x500/?girl,new",
        },
        {
          Designation: "react js devloper",
          name: "shived",
          img: "https://source.unsplash.com/random/500x500/?girl,two",
        },
        {
          Designation: "react js devloper",
          name: "sunny charkhwal fbjvbd",
          img: "https://source.unsplash.com/random/500x500/?women",
        },
        {
          Designation: "react js devloper",
          name: "sunny charkhwal",
          img: "https://source.unsplash.com/random/500x500/?girl,new",
        },
        {
          Designation: "react js devloper",
          name: "shived",
          img: "https://source.unsplash.com/random/500x500/?girl,two",
        },
        {
          Designation: "react js devloper",
          name: "sunny charkhwal fbjvbd",
          img: "https://source.unsplash.com/random/500x500/?women",
        },
      ],
    },
  ];
  const ProjectListApp = (props) => {
    return (
      <>
        <tr className="progress_all_tabel_tr_mor">
          <td>
            <div className="Participants_main_div_tr">
              <input className="form-check-input" type="checkbox" />
            </div>
          </td>
          <td>
            <div className="Participants_main_div_tr">
              <NavLink className="link_a" to={props.link}>
                {props.MeetingTitle}
              </NavLink>
            </div>
          </td>
          <td className="project_list_name">
            <div className="Participants_main_div_tr">{props.ProjectName}</div>
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
            <div className="Participants_main_div_tr">{props.date}</div>
          </td>
          <td>
            <div className=" Participants_main_div_tr_btn ">
              <OutlineBtn link={props.link} name="Join" />
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
// Meetings & Notes end
// Team & Work Progress
const TeamWorkProgress = () => {
  const ProjectListData = [
    {
      TeamMember: "Shived Bansal",
      Role: "Project management",
      Tasks: "44/100",
      Progress: "50",
      Status: "Delayed",

      link: "/Management/view_all_tasks",
      img: "https://source.unsplash.com/random/500x500/?girl",
    },
    {
      TeamMember: "Shived Bansal",
      Role: "Project management",
      Tasks: "44/100",
      Progress: "70",
      Status: "Delayed",

      link: "/Management/view_all_tasks",

      img: "https://source.unsplash.com/random/500x500/?girl",
    },
  ];
  const ProjectListApp = (props) => {
    return (
      <>
        <tr className="progress_all_tabel_tr_mor">
          <td className="Participants_main_div">
            <NavLink className="link_a" to={props.link}>
              <div className="Participants_main_div_inner">
                <AvatarGroup>
                  <Avatar
                    alt="Remy Sharp"
                    src={props.img}
                    sx={{ width: 24, height: 24 }}
                  />
                </AvatarGroup>
                <span> {props.TeamMember}</span>
              </div>
            </NavLink>
          </td>
          <td>
            <div className="Participants_main_div_tr">{props.Role}</div>
          </td>
          <td>
            <div className="Participants_main_div_tr">{props.Tasks}</div>
          </td>
          <td className="project_list_name project_details_bar_div">
            <div className="Participants_main_div_tr">
              <div className="row align-items-center">
                <div className="col-2">
                  <span>{props.Progress}%</span>
                </div>
                <div className="col-10">
                  <div className="d-none d-xxl-block d-xl-block d-lg-block d-md-block">
                    <div className="progress ">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{
                          width: props.Progress + "%",
                        }}
                        aria-valuenow="0"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </td>

          <td>
            <div className="Participants_main_div_tr">
              <span className="project_details_status_text">
                {props.Status}
              </span>
            </div>
          </td>
          <td>
            <div className=" Participants_main_div_tr_btn ">
              <OutlineBtn link={props.link} name="View" />
            </div>
          </td>
        </tr>
      </>
    );
  };

  return (
    <>
      <div className="dashbaord_white_card ">
        <PageAllTopTitle title="Team & Work Progress" />
        <div>
          <table className="table table-hover text-capitalize team_work_progress">
            <thead>
              <tr className="progress_all_tabel_tr">
                <th scope="col">Team Member</th>
                <th scope="col">Role</th>
                <th scope="col">Tasks</th>
                <th scope="col">Progress</th>
                <th scope="col">Status</th>
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
// Team & Work Progress end
// Overview

const Overview = () => {
  return (
    <>
      <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3 ">
        <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
          <div className="dashbaord_white_card">
            <PageAllTopTitle title="Details" />
            <BasicOverviewDetails />
          </div>
        </div>
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
          <div className="dashbaord_white_card">
            <PageAllTopTitle title="Service Overview" />
            <ServiceOverview />
          </div>
        </div>
      </div>
    </>
  );
};
const BasicOverviewDetails = () => {
  const handleFileUpload = (event) => {
    console.log(event.target.files[0].name);
  };
  const BasicOverviewDetailsData = [
    {
      title: "Project Name",
      data: "Luno Electrical Website & Marketing",
    },
    {
      title: "Lead Source",
      data: "Website",
    },
    {
      title: "Onboarding Date",
      data: "29/10/2022",
    },
    {
      title: "Start Date",
      data: "29/10/2022",
    },
    {
      title: "Due Date",
      data: "01/01/2023",
    },
    {
      title: "Benchmark",
      data: "Standard",
    },
  ];
  const BasicOverviewDetailsApp = (props) => {
    return (
      <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
        <div className="overview_basic_details_div">
          <ul>
            <li className="overview_basic_details_inner_div position-relative">
              {props.title}
              <label>:</label>
            </li>
            <li>
              <p>{props.data}</p>
            </li>
          </ul>
        </div>
      </div>
    );
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
  // modal

  return (
    <>
      <div className="row g-2 all_edit_icon">
        {BasicOverviewDetailsData.map((val, i) => {
          return <BasicOverviewDetailsApp key={i} {...val} />;
        })}
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <div className="overview_basic_details_div ">
            <ul>
              <li className="overview_basic_details_inner_div position-relative">
                Priority
                <label>:</label>
              </li>
              <li>
                <p
                  className="project_list_priority_div"
                  style={{ background: "#FF3E48", color: "white" }}
                >
                  <span>High</span>
                </p>
              </li>
            </ul>
            <OverviewEditModalApp />
          </div>
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <div className="overview_basic_details_div">
            <ul>
              <li className="overview_basic_details_inner_div position-relative">
                Amount
                <label>:</label>
              </li>
              <li>
                <p style={{ color: "#3786EE" }}>₹ 20,438</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-12">
          <div className=" brief_summery_div all_edit_icon">
            <h3>Brief:</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. At nibh lacus pellentesque
              dui vitae turpis eu. Magna nunc mollis tincidunt aenean auctor
              pharetra lectus ligula. Quis rhoncus purus volutpat rutrum turpis.
              Eu scelerisque fermentum dolor ultrices. Convallis ut viverra
              aliquam magna nunc magna.
            </p>
          </div>
        </div>
        <div className="col-12">
          <div className=" brief_summery_div all_edit_icon">
            <h3>Objective:</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. At nibh lacus pellentesque
              dui vitae turpis eu. Magna nunc mollis tincidunt aenean auctor
              pharetra lectus ligula. Quis rhoncus purus volutpat rutrum turpis.
              Eu scelerisque fermentum dolor ultrices. Convallis ut viverra
              aliquam magna nunc magna.
            </p>
          </div>
        </div>
        <div className="col-12">
          <div className=" brief_summery_div all_edit_icon">
            <h3>Scope:</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. At nibh lacus pellentesque
              dui vitae turpis eu. Magna nunc mollis tincidunt aenean auctor
              pharetra lectus ligula. Quis rhoncus purus volutpat rutrum turpis.
              Eu scelerisque fermentum dolor ultrices. Convallis ut viverra
              aliquam magna nunc magna.
            </p>
          </div>
        </div>
        <div className="col-12">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-9 col-9">
              <div className="brief_summery_div ">
                <h3>Attachments:</h3>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-3 col-3">
              <div className="documents_app_btn">
                <input
                  onChange={handleFileUpload}
                  type="file"
                  style={{ display: "none" }}
                  id="dd"
                  hidden
                />
                <label className="management_btn_full2" htmlFor="dd">
                  <span> Upload Document</span>
                  <BsUpload />
                </label>
              </div>
            </div>
          </div>
          <div className="doc_img_main_div">
            <div className="row g-3 mt-2">
              {DocumentsAttachmentsData.map((val, i) => {
                return (
                  <DocumentsAttachments
                    cols="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-6 col-6"
                    key={i}
                    {...val}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const ServiceOverview = () => {
  const ServiceOverviewData = [
    {
      name: "Design",
      Department: "Website Front End Development",
      status: "On Track",
      progress: "50",
    },
    {
      name: "Development",
      Department: "Website Front End Development",
      status: "On Track",
      progress: "40",
    },
    {
      name: "Design",
      Department: "Website Front End Development",
      status: "On Track",
      progress: "50",
    },
    {
      name: "Development",
      Department: "Website Front End Development",
      status: "On Track",
      progress: "70",
    },
  ];
  const ServiceOverviewApp = (props) => {
    return (
      <>
        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-6 col-12 col-12">
          <div className="service_overview_details_div">
            <div className="service_overview_details">
              <h3>{props.name}</h3>
              <div className="row">
                <div className="col-9">
                  <h4>{props.Department}</h4>
                </div>
                <div className="col-3 text-end">
                  <h5>{props.status}</h5>
                </div>
              </div>
              <div className="text-center">
                <p>{props.progress}%</p>
              </div>
            </div>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{
                  width: props.progress + "%",
                }}
                aria-valuenow="0"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="row g-3">
        {ServiceOverviewData.map((val, i) => {
          return <ServiceOverviewApp key={i} {...val} />;
        })}
      </div>
    </>
  );
};
// Overview end
// Project Dashboard
const ProjectDashboard = () => {
  return (
    <>
      <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3 ">
        <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
          <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
            <div className="col-12">
              <Progress />
            </div>
            <div className="col-12">
              <TeamStatus />
            </div>
            <div className="col-12">
              <WeeklyDigest />
            </div>
            <div className="col-12">
              <ProjectCostChart />
            </div>
          </div>
        </div>

        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
          <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
            {charts.map((chart, i) => (
              <div className="col-12" key={i}>
                <TaskStatusChart {...chart} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const Progress = () => {
  const ProjectListData = [
    {
      link: "/",
      ProjectName: "Luno Electrical Website design",
      PrioritybackgroundColor: "#FF3E48",
      PriorityName: "Delayed",
      ProgressBar: "80",
    },
    {
      link: "/",
      ProjectName: "Luno Electrical Website design",
      PrioritybackgroundColor: "#FF3E48",
      PriorityName: "On Track",
      ProgressBar: "60",
    },
    {
      link: "/",
      ProjectName: "Luno Electrical Website design",
      PrioritybackgroundColor: "#FF3E48",
      PriorityName: "Delayed",
      ProgressBar: "45",
    },
    {
      link: "/",
      ProjectName: "Luno Electrical Website design",
      PrioritybackgroundColor: "#FF3E48",
      PriorityName: "On Track",
      ProgressBar: "23",
    },
    {
      link: "/",
      ProjectName: "Luno Electrical Website design",
      PrioritybackgroundColor: "#FF3E48",
      PriorityName: "Delayed",
      ProgressBar: "30",
    },
  ];
  const ProjectListApp = (props) => {
    return (
      <>
        <tr>
          <td className="project_list_name">{props.ProjectName}</td>
          <td className="project_list_name Progress_title_details_midel">
            {props.PriorityName}
          </td>
          <td className="project_list_name project_details_bar_div ">
            <div className="Participants_main_div_tr Progress_title_details_top">
              <div className="row align-items-center">
                <div className="col-12 Progress_title_details">
                  <span>{props.ProgressBar}%</span>
                </div>
                <div className="col-12">
                  <div className="d-none d-xxl-block d-xl-block d-lg-block d-md-block">
                    <div className="progress ">
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
            </div>
          </td>
        </tr>
      </>
    );
  };

  return (
    <>
      <div className="dashbaord_white_card Progress_title_details_white">
        <img className="drag_img" src={Drag} alt="drag.img" />
        <div className="row">
          <div className="col-12 ms-2">
            <PageInnerTitle name="Projects" />
          </div>
        </div>
        <div>
          <table className="table project_tabel table-borderless text-capitalize">
            <thead>
              <tr className="project_list_title">
                <th scope="col">Service Name</th>
                <th scope="col">Status</th>
                <th scope="col">Progress</th>
              </tr>
            </thead>
            <tbody className="project_list_name_tr">
              {ProjectListData.map((val, i) => {
                return <ProjectListApp key={i} {...val} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
const TeamStatus = () => {
  const TasksData = [
    {
      Photo: Photo,
      Today: "12",
      Overdue: "00",
      AllOpen: "12",
    },
    {
      Photo: Photo,
      Today: "12",
      Overdue: "00",
      AllOpen: "12",
    },
    {
      Photo: Photo,
      Today: "12",
      Overdue: "00",
      AllOpen: "12",
    },
    {
      Photo: Photo,
      Today: "12",
      Overdue: "00",
      AllOpen: "12",
    },
  ];
  const TasksApp = (props) => {
    return (
      <TeamStatusTabelUi
        Photo={props.Photo}
        Today={props.Today}
        Overdue={props.Overdue}
        AllOpen={props.AllOpen}
      />
    );
  };
  const IssuesData = [
    {
      Photo: Photo2,
      Today: "12",
      Overdue: "00",
      AllOpen: "12",
    },
    {
      Photo: Photo2,
      Today: "12",
      Overdue: "00",
      AllOpen: "12",
    },
    {
      Photo: Photo2,
      Today: "12",
      Overdue: "00",
      AllOpen: "12",
    },
    {
      Photo: Photo2,
      Today: "12",
      Overdue: "00",
      AllOpen: "12",
    },
  ];
  const IssuesApp = (props) => {
    return (
      <>
        <TeamStatusTabelUi
          Photo={props.Photo}
          Today={props.Today}
          Overdue={props.Overdue}
          AllOpen={props.AllOpen}
        />
      </>
    );
  };
  const TeamStatusTabelUi = (props) => {
    return (
      <>
        <div className="col-12">
          <div className="row team_status_uper_div">
            <div className="col-2">
              <Stack direction="row" spacing={2}>
                <Avatar
                  alt="user"
                  src={props.Photo}
                  sx={{ width: 24, height: 24 }}
                />
              </Stack>
            </div>
            <div className="col-10">
              <ul className="team_status_inner_title2">
                <li>{props.Today}</li>
                <li className="team_status_inner_color">{props.Overdue}</li>
                <li>{props.AllOpen}</li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="dashbaord_white_card Progress_title_details_white">
        <img className="drag_img" src={Drag} alt="drag.img" />
        <div className="row">
          <div className="col-12 ms-2">
            <PageInnerTitle name="Team Status" />
          </div>
        </div>
        <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="row g-4">
              <div className="col-12">
                <div className="row">
                  <div className="col-2"></div>
                  <div className="col-10">
                    <div className="team_status_title">
                      <h3>tasks</h3>
                    </div>
                    <ul className="team_status_inner_title">
                      <li>Today’s</li>
                      <li className="team_status_inner_color">Overdue</li>
                      <li>All Open</li>
                    </ul>
                  </div>
                </div>
              </div>
              {TasksData.map((val, i) => {
                return <TasksApp key={i} {...val} />;
              })}
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="row g-4">
              <div className="col-12">
                <div className="row">
                  <div className="col-2"></div>
                  <div className="col-10">
                    <div className="team_status_title">
                      <h3>Issues</h3>
                    </div>
                    <ul className="team_status_inner_title">
                      <li>Today’s</li>
                      <li className="team_status_inner_color">Overdue</li>
                      <li>All Open</li>
                    </ul>
                  </div>
                </div>
              </div>
              {IssuesData.map((val, i) => {
                return <IssuesApp key={i} {...val} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const WeeklyDigest = () => {
  return (
    <>
      <div className="dashbaord_white_card Progress_title_details_white">
        <img className="drag_img" src={Drag} alt="drag.img" />
        <div className="row">
          <div className="col-12 ms-2">
            <div className="weekly_digest_title">
              <PageInnerTitle name="Weekly Digest" />
              <p>From 04/12/2022 to 10/12/2022</p>
              <img src={Down} alt="jfv" />
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option defaultValue>Week 22</option>
                <option value="1">Week 2</option>
                <option value="2">Week 21</option>
                <option value="3">Week 20</option>
              </select>
            </div>
          </div>
          <div className="col-12">
            <WeeklyDigestChart />
          </div>
        </div>
      </div>
    </>
  );
};
const WeeklyDigestChart = () => {
  const [state] = useState({
    series: [
      {
        name: "sales",
        data: [
          {
            x: "2019/01/01",
            y: 400,
          },
          {
            x: "2019/01/01",
            y: 500,
          },
          {
            x: "2019/01/01",
            y: 400,
          },
          {
            x: "2019/01/01",
            y: 500,
          },
          {
            x: "2019/01/01",
            y: 400,
          },
          {
            x: "2019/01/01",
            y: 500,
          },
          {
            x: "2019/01/01",
            y: 400,
          },
        ],
      },
    ],
    options: {
      chart: {
        type: "bar",
        stacked: false,
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
      },
      legend: {
        show: false,
      },
      bar: {
        barWidth: "10%",
      },
    },
  });
  return (
    <>
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="bar"
          height={250}
        />
      </div>
    </>
  );
};
const ProjectCostChart = () => {
  const [state] = useState({
    series: [
      {
        name: "Overtime",
        data: [50, 90, 71, 10, 11, 19, 15],
      },
      {
        name: "Working Time",
        data: [20, 29, 37, 36, 44, 45, 70],
      },
    ],
    options: {
      colors: ["#4318FF", "#6AD2FF"],
      chart: {
        type: "line",
        stacked: false,
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: ["SEP", "OCT", "NOV", "DEC", "JAN", "FEB"],
      },
      legend: {
        show: false,
      },
      bar: {
        barWidth: "10%",
      },
    },
  });

  return (
    <>
      <div className="dashbaord_white_card Progress_title_details_white">
        <img className="drag_img" src={Drag} alt="drag.img" />
        <div className="row">
          <div className="col-12 ms-2">
            <PageInnerTitle name="Team Status" />
          </div>
        </div>
        <div id="chart">
          <ReactApexChart
            options={state.options}
            series={state.series}
            type="line"
            height={250}
          />
        </div>
      </div>
    </>
  );
};
const TaskStatusChart = (props) => {
  return (
    <>
      <div className="dashbaord_white_card Progress_title_details_white">
        <img className="drag_img" src={Drag} alt="drag.img" />
        <div className="row">
          <div className="col-12 ms-2">
            <PageInnerTitle name={props.title} />
          </div>
        </div>
        <div id="chart">
          <ReactApexChart {...props.data} type="pie" height={250} />
        </div>
      </div>
    </>
  );
};
// Project Dashboard end
// Widgets Control
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
const TabsMenu = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const DeleteModal = () => {
    return (
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <div className="delete_modal">
                <ul>
                  <li>
                    <BsFillInfoCircleFill />
                  </li>
                  <li>
                    <h3>Delete ?</h3>
                    <p>will be deleted permanently and cannot be recovered.</p>
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
      </div>
    );
  };
  const navigate = useNavigate();
  return (
    <>
      <div className="chat_div_dropdown chat_div_dropdown_right">
        <ButtonToolbar>
          <Dropdown
            title={<BiDotsHorizontalRounded />}
            activeKey="e-2 "
            placement="leftStart"
          >
            <Dropdown.Item
              onClick={handleOpen}
              className="chat_div_dropdown_inner"
              eventKey="a"
            >
              Edit Project
              <span>
                <BiEdit />
              </span>
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => navigate("/Management/tasks")}
              className="chat_div_dropdown_inner"
              eventKey="c"
            >
              View My Tasks
              <span>
                <BiTask />
              </span>
            </Dropdown.Item>
            <Dropdown.Item
              onClick={handleOpen}
              className="chat_div_dropdown_inner"
              eventKey="b"
            >
              Delete Project
              <span>
                <AiOutlineDelete />
              </span>
            </Dropdown.Item>
            <span onClick={handleClose}>{props.WidgetsControl}</span>
          </Dropdown>
        </ButtonToolbar>
      </div>
      <DeleteModal />
    </>
  );
};
const WidgetsControl = () => {
  const CustomDropdownInner = () => (
    <div className="custom_dropdown_inner">
      Widgets Control
      <span>
        <MdOutlineWidgets />
      </span>
    </div>
  );
  const CustomDropdown = ({ ...props }) => {
    const InnerItemData = [
      {
        InnerItemName: "Progress",
      },
      {
        InnerItemName: "Task Status",
      },
      {
        InnerItemName: "Team Status",
      },
      {
        InnerItemName: "Issue Status",
      },
      {
        InnerItemName: "Weekly Digest",
      },
      {
        InnerItemName: "Milestone Status",
      },
      {
        InnerItemName: "Project Cost",
      },
      {
        InnerItemName: "Bugs/Issues",
      },
    ];
    const InnerItemApp = (props) => {
      const [state, setState] = useState({
        gilad: false,
        jason: false,
        antoine: false,
      });

      const handleChange = (event) => {
        setState({
          ...state,
          [event.target.name]: event.target.checked,
        });
      };
      return (
        <Dropdown.Item className="Dashboard_menu_right_innwr_item">
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={state.gilad}
                  onChange={handleChange}
                  name="gilad"
                  size="small"
                  color="warning"
                />
              }
              label={props.InnerItemName}
            />
          </FormGroup>
        </Dropdown.Item>
      );
    };
    return (
      <div className="Dashboard_menu_right_innwr">
        <Dropdown {...props}>
          {InnerItemData.map((val, i) => {
            return <InnerItemApp key={i} {...val} />;
          })}
        </Dropdown>
      </div>
    );
  };
  return (
    <div className="custom_dropdown_last">
      <CustomDropdown
        title={<CustomDropdownInner />}
        trigger="click"
        placement="topEnd"
      />
    </div>
  );
};
// Widgets Control end
