import { BiEdit } from "react-icons/bi";
import React from "react";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import {
  InputBox,
  SelectBox,
} from "../../../../../common/ManagementComponents/form/Form";
import Select from "react-select";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Editor } from "react-draft-wysiwyg";
export const OverviewEditModalApp = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const OverviewEditModal = (props) => {
    const navigate = useNavigate();
    const LeadSource = [
      { value: "Website", label: "Website" },
      { value: "Austria", label: "Austria" },
      { value: "Belgium", label: "Belgium" },
      { value: "Denmark", label: "Denmark" },
      { value: "Finland", label: "Finland" },
      { value: "Germany", label: "Germany" },
    ];
    const CountryData = [
      {
        optionValue: "1",
        option: "INR",
      },
      {
        optionValue: "2",
        option: "USD",
      },
    ];
    const ProjectIndustry = [
      { value: "High", label: "High" },
      { value: "Low", label: "Low" },
    ];
    const Benchmark = [
      { value: "Standard", label: "Standard" },
      {
        value: "Set new Benchmark",
        label: "Set new Benchmark",
        url: "/Management/benchmark",
      },
    ];
    const EditorCustomToolbarOption = () => (
      <Editor
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
        placeholder="Congratulations, You are qualified for your next round of interview. We are inviting you..Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker Congratulations, You are qualified for your next round of interview. We are inviting you..Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker "
      />
    );
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <InputBox
                type="text"
                label="Project  Name*"
                placeholder=" Project Name"
              />
              <small className="error_message">error message</small>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <label className="all_page_my_label_new">Lead Source</label>
              <div className="dashboard_top_week_Select drop_box">
                <Select options={LeadSource} placeholder="Lead Source" />
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <InputBox
                type="date"
                placeholder="Project Name"
                label="OnBoarding Date"
              />
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
                <div className="col-xxl-4 col-xl-4 col-lg-5 col-md-6 col-sm-12 col-12">
                  <SelectBox
                    label="Select Currency*"
                    SelectBoxData={CountryData}
                  />
                </div>
                <div className="col-xxl-8 col-xl-8 col-lg-7 col-md-6 col-sm-12 col-12">
                  <InputBox
                    type="number"
                    placeholder="Service Charge*"
                    label="Service Charge*"
                  />
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <InputBox
                type="date"
                placeholder="Project Name"
                label="Start Date"
              />
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <InputBox
                type="date"
                placeholder="Project Name"
                label="due Date"
              />
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <label className="all_page_my_label_new">Priority*</label>
              <div className="dashboard_top_week_Select drop_box">
                <Select options={ProjectIndustry} placeholder="Priority" />
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <label className="all_page_my_label_new">Benchmark*</label>
              <div className="dashboard_top_week_Select drop_box">
                <Select
                  options={Benchmark}
                  onChange={(t) => {
                    if (t.url) navigate(t.url);
                  }}
                  placeholder="Select Bench Mark"
                />
              </div>
            </div>
            <div className="col-12">
              <label className="breff_label_add_project">Brief</label>
              <div className="Hire_editer">
                <EditorCustomToolbarOption />
              </div>
            </div>
            <div className="col-12">
              <label className="breff_label_add_project">Objectives</label>
              <div className="Hire_editer">
                <EditorCustomToolbarOption />
              </div>
            </div>
            <div className="col-12">
              <label className="breff_label_add_project">Scope</label>
              <div className="Hire_editer">
                <EditorCustomToolbarOption />
              </div>
            </div>
            <div className="col-12">
              <div className=" d-flex justify-content-center mt-4">
                <button
                  className="management_btn_outline w-auto me-3"
                  onClick={props.onHide}
                >
                  Close
                </button>
                <button className="management_btn_full">Save</button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    );
  };
  return (
    <>
      <div className="all_edit_icon_inner">
        <BiEdit onClick={() => setModalShow(true)} />
      </div>
      <OverviewEditModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};
