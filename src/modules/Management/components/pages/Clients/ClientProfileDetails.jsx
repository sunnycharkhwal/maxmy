import { PageAllTopTitle } from "../../../../common/ManagementComponents/PageAllTopTitle";
import { ProfileImg } from "../../../../common/ManagementComponents/ProfileImg";
import { BiPhoneCall } from "react-icons/bi";
import { MdAlternateEmail } from "react-icons/md";
import Owner from "../../../../../pics/Management/Owner.png";
import { FiMapPin } from "react-icons/fi";
import { AiOutlinePlus, AiOutlineFieldTime } from "react-icons/ai";
import { FullBtnWithIcon } from "../../../../common/ManagementComponents/Btn/Btn";
import { UserParticipants } from "../../../../common/ManagementComponents/Participants";
// mui
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
// index
export const ClientProfileDetails = () => {
  return (
    <>
      <div className="custom_container">
        <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
          <div className="col-12 ">
            <PageAllTopTitle title="Client Profile Details" />
          </div>
          <div className="col-12">
            <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
              <div className="col-xxl-6 col-xl-6 col-lg-7 col-md-12 col-sm-12 col-12">
                <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
                  <div className="col-12">
                    <ProfileCard />
                  </div>
                  <div className="col-12">
                    <ProjectList />
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-5 col-md-12 col-sm-12 col-12">
                <ClientTasks />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
// index end
// Profile Card
const ProfileCard = () => {
  return (
    <>
      <div className="dashbaord_white_card">
        <div className="row">
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 clint_profile_card_img">
            <ProfileImg className="ProjectDetailsCard_img" />
          </div>
          <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
            <div className="row">
              <div className="col-12">
                <div className="clint_profile_card_text">
                  <h3>Ryan Ogden</h3>
                  <p>Agilsoft</p>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                <div className="clint_profile_card_poits clint_profile_card_poits_mob">
                  <span>
                    <BiPhoneCall />
                  </span>
                  <p>+61 98745 63210</p>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 ">
                <div className="clint_profile_card_poits ">
                  <span>
                    <MdAlternateEmail />
                  </span>
                  <p>ryanogden@gmail.com</p>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                <div className="clint_profile_card_poits clint_profile_card_poits_mob">
                  <span>
                    <img src={Owner} alt="icon" />
                  </span>
                  <p>Owner</p>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                <div className="clint_profile_card_poits">
                  <span>
                    <FiMapPin />
                  </span>
                  <p>Melbourne, Australia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
// Profile Card end

// Client Tasks
const ClientTasks = () => {
  const ClientData = [
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
          img: "https://source.unsplash.com/random/500x500/?girl",
        },
        {
          name: "sunny charkhwal",
          Designation: "react js devloper",
          img: "https://source.unsplash.com/random/500x500/?girl,new",
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
          img: "https://source.unsplash.com/random/500x500/?girl",
        },
        {
          name: "sunny charkhwal",
          Designation: "react js devloper",
          img: "https://source.unsplash.com/random/500x500/?girl,new",
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
          img: "https://source.unsplash.com/random/500x500/?girl",
        },
        {
          name: "sunny charkhwal",
          Designation: "react js devloper",
          img: "https://source.unsplash.com/random/500x500/?girl,new",
        },
      ],
    },
  ];
  const ClientApp = (props) => {
    const [state, setState] = React.useState(false);
    return (
      <>
        <Drawer anchor="right" open={state} onClick={() => setState(false)}>
          <Box role="presentation">Lorem ipsum dolor sit amet consectetur</Box>
        </Drawer>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <div className="open_tasks_card">
            <h3 onClick={() => setState(true)} className="link_a">
              {props.TaskTitle}
            </h3>
            <div className="row">
              <div className="col-12">
                <div className="open_tasks_img_div">
                  <UserParticipants data={props.AssigneeData} />
                </div>
              </div>
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
      <div className="inner_taska_div_main client_tasks_div">
        <div className="inner_taska_title_div_main">
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-5 col-md-6 col-sm-12 col-12">
              <h3>Client Tasks</h3>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-7 col-md-6 col-sm-12 col-12 text-end">
              <div>
                <FullBtnWithIcon
                  link="/Management/create_task"
                  name="Create Client Task"
                  icon={<AiOutlinePlus />}
                />
              </div>
            </div>
          </div>
          <div className="clints_list_scroll">
            <div className="row g-3 mt-2">
              {ClientData.map((val, i) => {
                return <ClientApp key={i} {...val} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
// Client Tasks end
// project list
const ProjectList = () => {
  let Photo = "https://source.unsplash.com/random/500x500/?beautiful,girl";
  const ProjectListAppData = [
    {
      time: "15 Days left",
      profilePhoto: Photo,
      projectName: "Luno Electrical",
      tasksName: "Website design",
      DueDate: "27 Dec 2022",
      OpenTasks: "100",
      totleOpenTasks: "200",
      progress: "50",
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
          img: "https://source.unsplash.com/random/500x500/?girl",
        },
        {
          name: "sunny charkhwal",
          Designation: "react js devloper",
          img: "https://source.unsplash.com/random/500x500/?girl,new",
        },
      ],
    },
    {
      time: "15 Days left",
      profilePhoto: Photo,
      projectName: "Luno Electrical",
      tasksName: "Website design",
      DueDate: "27 Dec 2022",
      OpenTasks: "100",
      totleOpenTasks: "200",
      progress: "60",
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
          img: "https://source.unsplash.com/random/500x500/?girl",
        },
        {
          name: "sunny charkhwal",
          Designation: "react js devloper",
          img: "https://source.unsplash.com/random/500x500/?girl,new",
        },
      ],
    },
    {
      time: "15 Days left",
      profilePhoto: Photo,
      projectName: "Luno Electrical",
      tasksName: "Website design",
      DueDate: "27 Dec 2022",
      OpenTasks: "100",
      totleOpenTasks: "200",
      progress: "30",
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
          img: "https://source.unsplash.com/random/500x500/?girl",
        },
        {
          name: "sunny charkhwal",
          Designation: "react js devloper",
          img: "https://source.unsplash.com/random/500x500/?girl,new",
        },
      ],
    },
  ];
  const ProjectListApp = (props) => {
    return (
      <>
        <div className="col-12">
          <div className="Project_list_card">
            <div className="Project_list_card_time">
              <span>
                <AiOutlineFieldTime />
              </span>
              {props.time}
            </div>
            <div className="Project_list_card_img_div">
              <ProfileImg
                Photo={props.profilePhoto}
                className="Project_list_card_img"
              />
              <p>{props.projectName}</p>
              <div className="Project_list_card_title">
                <h3>{props.tasksName} </h3>
              </div>
            </div>
            <div className="Project_list_card_inner_img_top_div">
              <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 Project_list_card_inner_img_div">
                  <div className="Project_list_card_inner_img">
                    <UserParticipants data={props.AssigneeData} />
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 Project_list_card_inner_card_div">
                  <div className="project_details_card_box">
                    <p>{props.DueDate} </p>
                    <span>Due Date</span>
                  </div>
                  <div className="project_details_card_box project_details_card_box_inner">
                    <p>
                      {props.OpenTasks}/{props.totleOpenTasks}
                    </p>
                    <span>Open Tasks</span>
                  </div>
                </div>
                <div className="col-12">
                  <div className="Project_list_card_progress">
                    <p>{props.progress}%</p>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: props.progress + "%" }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
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
  return (
    <>
      <div className="dashbaord_white_card">
        <div className="inner_taska_title_div_main">
          <h3>Projects</h3>
        </div>
        <div className="project_list_scroll">
          <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
            {ProjectListAppData.map((val, i) => {
              return <ProjectListApp key={i} {...val} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};
// project list end
