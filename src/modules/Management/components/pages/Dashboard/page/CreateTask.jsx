import { PageAllTopTitle } from "../../../../../common/ManagementComponents/PageAllTopTitle";
import { BsArrowLeft } from "react-icons/bs";
import {
  InputBox,
  SelectBox,
} from "../../../../../common/ManagementComponents/form/Form";
import Select from "react-select";
import { useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Editor } from "react-draft-wysiwyg";
import {
  OutlineBtn,
  FullBtn,
} from "../../../../../common/ManagementComponents/Btn/Btn";
import * as React from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
export const CreateTask = () => {
  const [userType, setUserType] = useState("InternalEmployee");
  const UserChange = [
    {
      value: "InternalEmployee",
      label: "Internal Employee",
    },
    {
      value: "Client",
      label: "Client",
    },
  ];
  return (
    <>
      <div className="custom_container">
        <PageAllTopTitle link={-1} icon={<BsArrowLeft />} title="back" />
        <div className="custom_container_iner">
          <div className="CompanySetup_main_div">
            <div className="CompanySetup_inner_main_div">
              <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
                <div className="col-12">
                  <div className="create_task_title">
                    <h3>Create task</h3>
                  </div>
                </div>
                <div className="col-12">
                  <label className="all_page_my_label_new">
                    Create Task For*
                  </label>
                  <div className="dashboard_top_week_Select drop_box">
                    <Select
                      options={UserChange}
                      defaultValue={UserChange[0]}
                      isSearchable={false}
                      onChange={({ value }) => {
                        setUserType(value);
                      }}
                    />
                  </div>
                </div>
                <div className="col-12">
                  {
                    {
                      InternalEmployee: <InternalEmployeeForm />,
                      Client: <Client />,
                    }[userType]
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const InternalEmployeeForm = () => {
  // alert
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const CustomizedSnackbars = () => {
    return (
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            This is a success message!
          </Alert>
        </Snackbar>
      </Stack>
    );
  };
  // alert end
  const Leads = [
    { value: "Demo 1", label: "Demo 1" },
    { value: "demo 2", label: "demo 2" },
    { value: "demo 3", label: "demo 3" },
    { value: "demo 4", label: "demo 4" },
  ];
  const CountryData = [
    {
      optionValue: "1",
      option: "Monthly",
    },
    {
      optionValue: "2",
      option: "January",
    },
    {
      optionValue: "3",
      option: "February",
    },
    {
      optionValue: "4",
      option: "March",
    },
    {
      optionValue: "5",
      option: "April",
    },
    {
      optionValue: "6",
      option: "May",
    },
    {
      optionValue: "7",
      option: "June",
    },
    {
      optionValue: "8",
      option: "July",
    },
    {
      optionValue: "9",
      option: "August",
    },
    {
      optionValue: "10",
      option: "September",
    },
    {
      optionValue: "11",
      option: "October",
    },
    {
      optionValue: "12",
      option: "November",
    },
    {
      optionValue: "13",
      option: "December",
    },
  ];
  return (
    <>
      <CustomizedSnackbars />
      <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3 ">
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <InputBox type="text" label="Task Name*" placeholder="Task Name" />
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <label className="all_page_my_label_new">Project*</label>
          <div className="dashboard_top_week_Select drop_box">
            <Select options={Leads} placeholder="Project" />
          </div>
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <label className="all_page_my_label_new">Department*</label>
          <div className="dashboard_top_week_Select drop_box">
            <Select options={Leads} placeholder="Development" />
          </div>
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <label className="all_page_my_label_new">Services*</label>
          <div className="dashboard_top_week_Select drop_box">
            <Select options={Leads} placeholder="Services" />
          </div>
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <label className="all_page_my_label_new">Milestone*</label>
          <div className="dashboard_top_week_Select drop_box">
            <Select options={Leads} placeholder="Milestone" />
          </div>
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <label className="all_page_my_label_new">Assign To*</label>
          <div className="dashboard_top_week_Select drop_box">
            <Select options={Leads} placeholder="Assign To" />
          </div>
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <InputBox type="date" label="Start Date*" />
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <InputBox type="date" label="end Date*" />
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <label className="all_page_my_label_new">Priority*</label>
          <div className="dashboard_top_week_Select drop_box">
            <Select options={Leads} placeholder="Priority" />
          </div>
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <SelectBox label="Frequency" SelectBoxData={CountryData} />
        </div>
        <div className="col-12">
          <label className="all_page_my_label_new">Description</label>
          <div className="Hire_editer">
            <Editor
              wrapperClassName="wrapper-class"
              editorClassName="editor-class"
              toolbarClassName="toolbar-class"
              placeholder="Congratulations, You are qualified for your next round of interview. We are inviting you..Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker Congratulations, You are qualified for your next round of interview. We are inviting you..Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker "
            />
          </div>
        </div>
        <div className="col-12 mb-3 mt-5">
          <div className=" d-flex align-items-center justify-content-center">
            <div className="me-2">
              <OutlineBtn link={-1} name="Cancel" />
            </div>
            <div className=" ms-2">
              <FullBtn onClick={handleClick} name="Save" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Client = () => {
  // alert
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const CustomizedSnackbars = () => {
    return (
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            This is a success message!
          </Alert>
        </Snackbar>
      </Stack>
    );
  };
  // alert end
  const Leads = [
    { value: "Demo 1", label: "Demo 1" },
    { value: "demo 2", label: "demo 2" },
    { value: "demo 3", label: "demo 3" },
    { value: "demo 4", label: "demo 4" },
  ];

  const CountryData = [
    {
      optionValue: "1",
      option: "Monthly",
    },
    {
      optionValue: "2",
      option: "January",
    },
    {
      optionValue: "3",
      option: "February",
    },
    {
      optionValue: "4",
      option: "March",
    },
    {
      optionValue: "5",
      option: "April",
    },
    {
      optionValue: "6",
      option: "May",
    },
    {
      optionValue: "7",
      option: "June",
    },
    {
      optionValue: "8",
      option: "July",
    },
    {
      optionValue: "9",
      option: "August",
    },
    {
      optionValue: "10",
      option: "September",
    },
    {
      optionValue: "11",
      option: "October",
    },
    {
      optionValue: "12",
      option: "November",
    },
    {
      optionValue: "13",
      option: "December",
    },
  ];
  return (
    <>
      <CustomizedSnackbars />
      <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3 ">
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <InputBox type="text" label="Task Name*" placeholder="Task Name" />
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <label className="all_page_my_label_new">Project*</label>
          <div className="dashboard_top_week_Select drop_box">
            <Select options={Leads} placeholder="Project" />
          </div>
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <InputBox type="date" label="Start Date*" />
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <InputBox type="date" label="end Date*" />
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <label className="all_page_my_label_new">Priority*</label>
          <div className="dashboard_top_week_Select drop_box">
            <Select options={Leads} placeholder="Priority" />
          </div>
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <SelectBox label="Frequency" SelectBoxData={CountryData} />
        </div>
        <div className="col-12">
          <label className="all_page_my_label_new">Description</label>
          <div className="Hire_editer">
            <Editor
              wrapperClassName="wrapper-class"
              editorClassName="editor-class"
              toolbarClassName="toolbar-class"
              placeholder="Congratulations, You are qualified for your next round of interview. We are inviting you..Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker Congratulations, You are qualified for your next round of interview. We are inviting you..Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker "
            />
          </div>
        </div>
        <div className="col-12 mb-3 mt-5">
          <div className=" d-flex align-items-center justify-content-center">
            <div className=" me-2">
              <OutlineBtn link={-1} name="Cancel" />
            </div>
            <div className=" ms-2">
              <FullBtn onClick={handleClick} name="Save" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
