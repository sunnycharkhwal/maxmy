import { PageAllTopTitle } from "../../../../common/ManagementComponents/PageAllTopTitle";
import { BsArrowLeft } from "react-icons/bs";
import {
  InputBox,
  SelectBox,
  TextareaBox,
} from "../../../../common/ManagementComponents/form/Form";
import {
  OutlineBtn,
  FullBtn,
} from "../../../../common/ManagementComponents/Btn/Btn";
export const ClientsProfile = () => {
  return (
    <>
      <div className="custom_container">
        <PageAllTopTitle link={-1} icon={<BsArrowLeft />} title="back" />
        <div className="custom_container_iner">
          <Form />
        </div>
      </div>
    </>
  );
};
const Form = () => {
  const CountryData = [
    {
      optionValue: "1",
      option: "+61",
    },
    {
      optionValue: "2",
      option: "+91",
    },
    {
      optionValue: "3",
      option: "+1",
    },
    {
      optionValue: "3",
      option: "+92",
    },
  ];
  const City = [
    {
      optionValue: "1",
      option: "delhi",
    },
    {
      optionValue: "2",
      option: "gurugram",
    },
  ];
  const CountryName = [
    {
      optionValue: "1",
      option: "india",
    },
    {
      optionValue: "2",
      option: "Australia",
    },
  ];
  return (
    <>
      <div className="CompanySetup_main_div">
        <div className="CompanySetup_inner_main_div">
          <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3 ">
            <div className="col-12">
              <div className="create_task_title">
                <h3>Client Profile</h3>
              </div>
            </div>
            <div className=" col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <InputBox type="text" label="Client Name* (POC/Owner)*" />
            </div>
            <div className=" col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <InputBox type="text" label="Organisation Name*" />
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="row">
                <div className=" pe-0 col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-4 col-4">
                  <SelectBox label="country" SelectBoxData={CountryData} />
                </div>
                <div className="col-xxl-9 col-xl-9 col-lg-8 col-md-8 col-sm-8 col-8">
                  <InputBox type="number" label=" Contact Number*" />
                </div>
              </div>
            </div>
            <div className=" col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <InputBox type="email" label="Email Address*" />
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <TextareaBox label="Address Line 1*" rows="1" />
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <TextareaBox label="Address Line 2*" rows="1" />
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <SelectBox label="City*" SelectBoxData={City} />
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <SelectBox label="Country*" SelectBoxData={CountryName} />
            </div>
            <div className=" col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <InputBox type="text" label="Business ABN Number" />
            </div>
            <div className=" col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <InputBox type="text" label="ZIP/Postcode" />
            </div>
            <div className="col-12 mb-3 mt-5">
              <div className=" d-flex align-items-center justify-content-center">
                <div className=" me-2">
                  <OutlineBtn link={-1} name="Cancel" />
                </div>
                <div className=" ms-2">
                  <FullBtn name="Save" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
