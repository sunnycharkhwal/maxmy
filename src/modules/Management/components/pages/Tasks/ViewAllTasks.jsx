import Select from "react-select";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { useState } from "react";
import { FullBtn } from "../../../../common/ManagementComponents/Btn/Btn";
// mui
import * as React from "react";

import { NavLink } from "react-router-dom";
import { PageAllTopTitle } from "../../../../common/ManagementComponents/PageAllTopTitle";
import { BsArrowLeft } from "react-icons/bs";
import { BsKanban } from "react-icons/bs";
import { Index } from "./Gantt/index";
import { ClassicView } from "../../../../common/ManagementComponents/tasks/View";
import {
  TasksListView,
  Kanban,
} from "../../../../common/ManagementComponents/tasks/View";
import { VscListSelection } from "react-icons/vsc";

// index
export const ViewAllTasks = () => {
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
      value: "Classic",
      label: <ViewChangeLabel title="Classic" icon={<VscListSelection />} />,
    },
    {
      value: "Kanban",
      label: <ViewChangeLabel title="Kanban" icon={<BsKanban />} />,
    },
    {
      value: "GanttChart",
      label: <ViewChangeLabel title="Gantt Chart" icon={<BsKanban />} />,
    },
  ];
  return (
    <>
      <div className="custom_container">
        <div className="back_btn_mb">
          <PageAllTopTitle link={-1} icon={<BsArrowLeft />} title="Back" />
        </div>
        <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3  align-items-center">
          <div className="col-xxl-8 col-xl-8 col-lg-7 col-md-6 col-sm-12 col-12">
            <div className="view_all_tasks_title_div">
              <p>Luno Electrical Website & Marketing</p>
              <NavLink to="/Management/project_details">
                Project Details
              </NavLink>
            </div>
          </div>
          <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-6 col-6 text-end">
            <div className="view_all_tasks_btn">
              <div className="project_list_tabs_main_div">
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
              </div>
            </div>
          </div>
          <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-6 col-6 text-end">
            <div>
              <FullBtn link="/Management/create_task" name="Create New Task" />
            </div>
          </div>
          <div className="col-12">
            {
              {
                plain: <TasksListView />,
                Classic: <ClassicView />,
                Kanban: <Kanban />,
                GanttChart: <GanttChart />,
              }[viewType]
            }
          </div>
        </div>
      </div>
    </>
  );
};
// index end

// Gantt Chart
const GanttChart = () => {
  return (
    <>
      <Index />
    </>
  );
};
// Gantt Chart end
