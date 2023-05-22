import { Nav, Tab } from "react-bootstrap";
import { OutlineBtnWithIcon } from "../../../../common/ManagementComponents/Btn/Btn";
import { FaFilter } from "react-icons/fa";
import { PageAllTopTitle } from "../../../../common/ManagementComponents/PageAllTopTitle";
import { FullBtn } from "../../../../common/ManagementComponents/Btn/Btn";
import { IoSearchOutline } from "react-icons/io5";
import Select from "react-select";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { VscListSelection } from "react-icons/vsc";
import { useState } from "react";
import { BsListNested, BsListCheck } from "react-icons/bs";
import {
  TasksListView,
  ClassicView,
} from "../../../../common/ManagementComponents/tasks/View";

// tabs
export const TasksList = () => {
  const [userType, setUserType] = useState("MyTasks");
  const UserChangeLabel = (props) => {
    return (
      <div className="view_change_label">
        {props.icon}
        <span>{props.title}</span>
      </div>
    );
  };
  const UserChange = [
    {
      value: "MyTasks",
      label: <UserChangeLabel title="My Tasks" icon={<BsListNested />} />,
    },
    {
      value: "AllTasks",
      label: <UserChangeLabel title="All Tasks" icon={<BsListCheck />} />,
    },
  ];
  //

  return (
    <>
      <div className=" position-relative">
        <div className="row g-3 header_my">
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-1 col-sm-6 col-6 order-md-1 order-2">
            <PageAllTopTitle title="Tasks" />
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-8 col-sm-12 col-12 order-md-2 order-1">
            <div className="header_input_div">
              <IoSearchOutline />
              <input
                type="text"
                className="form-control"
                placeholder="Search by Project Name"
              />
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-3 col-sm-6 col-6 header_btn order-md-3 order-3">
            <div>
              <FullBtn link="/Management/create_task" name="Create New task" />
            </div>
          </div>
        </div>
        <div className="all_user_page">
          <Select
            options={UserChange}
            defaultValue={UserChange[0]}
            isSearchable={false}
            onChange={({ value }) => {
              setUserType(value);
            }}
          />
        </div>
        {
          {
            MyTasks: <ViewChangeAll />,
            AllTasks: <ViewChangeAll />,
          }[userType]
        }
      </div>
    </>
  );
};
// tabs end
const ViewChangeAll = () => {
  const [viewType, setViewType] = useState("plain");
  const ViewChangeLabel = (props) => {
    return (
      <div className="view_change_label">
        {props.icon} <span>{props.title}</span>
      </div>
    );
  };
  const ViewChange = [
    {
      value: "plain",
      label: (
        <ViewChangeLabel title="Plain" icon={<AiOutlineUnorderedList />} />
      ),
    },
    {
      value: "classic",
      label: <ViewChangeLabel title="classic" icon={<VscListSelection />} />,
    },
  ];
  return (
    <>
      <div className="project_list_tabs_main_div">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <div className="project_list_tabs_inner_div">
            <div className=" mb-4">
              <Nav variant="pills" className="flex">
                <Nav.Item>
                  <Nav.Link eventKey="first">All Tasks</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Completed">Completed</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="OnTrack">On Track</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Delayed">Delayed</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="OnHold">On Hold</Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
            <div className="view_change_main_div">
              <Select
                options={ViewChange}
                defaultValue={ViewChange[0]}
                isSearchable={false}
                onChange={({ value }) => {
                  setViewType(value);
                }}
              />
            </div>
            <div className="project_list_tabs_inner_btn">
              <OutlineBtnWithIcon name="All Filters" icon={<FaFilter />} />
            </div>
          </div>

          <Tab.Content>
            <Tab.Pane eventKey="first">
              {
                {
                  classic: <ClassicView />,
                  plain: <TasksListView link="/Management/view_all_tasks" />,
                }[viewType]
              }
            </Tab.Pane>
            <Tab.Pane eventKey="Completed">
              {
                {
                  classic: <ClassicView />,
                  plain: <TasksListView link="/Management/view_all_tasks" />,
                }[viewType]
              }
            </Tab.Pane>
            <Tab.Pane eventKey="OnTrack">
              {
                {
                  classic: <ClassicView />,
                  plain: <TasksListView link="/Management/view_all_tasks" />,
                }[viewType]
              }
            </Tab.Pane>
            <Tab.Pane eventKey="Delayed">
              {
                {
                  classic: <ClassicView />,
                  plain: <TasksListView link="/Management/view_all_tasks" />,
                }[viewType]
              }
            </Tab.Pane>
            <Tab.Pane eventKey="OnHold">
              {
                {
                  classic: <ClassicView />,
                  plain: <TasksListView link="/Management/view_all_tasks" />,
                }[viewType]
              }
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </>
  );
};
