import React, { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import "../../../styles/style.scss";
import ENDPOINT from "../config/ENDPOINT";
import { BlueBtn } from "../components/Btn";

export const Jobform = () => {
  const [values, setValues] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
    city: "",
    state: "",
    email: "",
    phone: "",
    job_profile: "",
    experience: "",
    curr_CTC: "",
    availability: "",
    cover_letter: "",
  });
  const [file, setFile] = useState(null);

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleCreate = (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      data.append("resume", file);
      Object.keys(values).forEach((key) => data.append(key, values[key]));

      axios
        .post(ENDPOINT + "jobApp", data)
        .then((res) => {
          if (res.status === 200) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "success",
              text: "Job Application has been submitted successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
        .catch((err) => {
          if (err.response.status === 400) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Job Application already exists!",
            });
          } else if (err.response.status === 401) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Error while submitting job form. Please try again",
            });
          }
        });
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Server error!",
      });
      console.log("Create error", err);
    }
  };

  return (
    <>
      <div className="container career_com_form">
        <div className="formtitle my-5 border-bottom py-4">
          <h1>Job Application</h1>
          <small>
            Please Complete the form below to apply for a position with us.
          </small>
        </div>

        <form
          onSubmit={handleCreate}
          method="post"
          encType="multipart/form-data"
        >
          <div className="formsecname">
            <h5 className="font-weight-normal">Full Name</h5>
          </div>

          <div className="row my-4">
            <div className="col-md-3">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="firstname"
                  name="firstname"
                  onChange={handleInputChange}
                  value={values.firstname}
                  placeholder=""
                  required
                />
                <label htmlhtmlhtmlFor="firstname">
                  First Name<sup>*</sup>
                </label>
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <input
                  type="text"
                  name="middlename"
                  className="form-control"
                  id="middlename"
                  onChange={handleInputChange}
                  value={values.middlename}
                  placeholder=""
                />
                <label htmlhtmlhtmlFor="middlename">
                  Middle Name <sup>*</sup>
                </label>
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <input
                  type="text"
                  name="lastname"
                  className="form-control"
                  id="lastname"
                  onChange={handleInputChange}
                  value={values.lastname}
                  placeholder=""
                  required
                />
                <label htmlhtmlhtmlFor="lastname">
                  Last Name <sup>*</sup>
                </label>
              </div>
            </div>
          </div>

          <div className="formsecname">
            <h5 className="font-weight-normal">Current Address</h5>
          </div>

          <div className="row my-4">
            <div className="col-md-4">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  name="city"
                  onChange={handleInputChange}
                  value={values.city}
                  placeholder=""
                  required
                />
                <label htmlhtmlhtmlFor="city">
                  City<sup>*</sup>
                </label>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <input
                  type="text"
                  name="state"
                  className="form-control"
                  id="state"
                  onChange={handleInputChange}
                  value={values.state}
                  placeholder=""
                  required
                />
                <label htmlhtmlhtmlFor="state">
                  State/Province <sup>*</sup>
                </label>
              </div>
            </div>
          </div>

          <div className="formsecname">
            <h5 className="font-weight-normal">Email Address</h5>
          </div>

          <div className="row my-4">
            <div className="col-md-4">
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  onChange={handleInputChange}
                  value={values.email}
                  placeholder=""
                  required
                />
                <label htmlhtmlhtmlFor="email">
                  example@example.com<sup>*</sup>
                </label>
              </div>
            </div>
          </div>

          <div className="formsecname">
            <h5 className="font-weight-normal">Phone No</h5>
          </div>

          <div className="row my-4">
            <div className="col-md-4">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  name="phone"
                  onChange={handleInputChange}
                  value={values.phone}
                  placeholder=""
                  required
                />
                <label htmlhtmlhtmlFor="phone">
                  example@example.com<sup>*</sup>
                </label>
              </div>
            </div>
          </div>

          <div className="formsecname">
            <h5 className="font-weight-normal">
              Job Profile <sup>*</sup>
            </h5>
          </div>

          <div className="row my-4">
            <div className="col-md-4">
              <div className="form-group">
                <select
                  name="job_profile"
                  className="form-control"
                  id="job_profile"
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="Content Writer">Content Writer</option>
                  <option value="Front End Developer">
                    Front End Developer
                  </option>
                  <option value="SEO">SEO</option>
                  <option value="Social Media Marketing">
                    Social Media Marketing
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div className="formsecname">
            <h5 className="font-weight-normal">
              Experience <sup>*</sup>
            </h5>
          </div>

          <div className="row my-4">
            <div className="col-md-4">
              <div className="form-group">
                <select
                  name="experience"
                  className="form-control"
                  id="experience"
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="Fresher">Fresher</option>
                  <option value="1-3 years">1-3 years</option>
                  <option value="3-5 years">3-5 years</option>
                  <option value="5+ years">5+ years</option>
                </select>
              </div>
            </div>
          </div>

          <div className="formsecname">
            <h5 className="font-weight-normal">
              Current CTC <sup>*</sup>
            </h5>
          </div>

          <div className="row my-4">
            <div className="col-md-4">
              <div className="form-group">
                <select
                  name="curr_CTC"
                  className="form-control"
                  id="curr_CTC"
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="Nil">Nil</option>
                  <option value="upto 1.20 LPA">upto 1.20 LPA</option>
                  <option value="upto 2.40 LPA">upto 2.40 LPA</option>
                  <option value="upto 6 LPA">upto 6 LPA</option>
                  <option value="6+ years">6+ years</option>
                </select>
              </div>
            </div>
          </div>

          <div className="formsecname">
            <h5 className="font-weight-normal">
              Availability <sup>*</sup>
            </h5>
          </div>

          <div className="row my-4">
            <div className="col-md-4">
              <div className="form-group">
                <select
                  name="availability"
                  className="form-control"
                  id="availability"
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="Less than 15 days">Less than 15 days</option>
                  <option value="1 Month">1 Month</option>
                  <option value="2 Months">2 Months</option>
                  <option value="3 Months">3 Months</option>
                </select>
              </div>
            </div>
          </div>

          <div className="formsecname">
            <h5 className="font-weight-normal">
              Resume <sup>*</sup>
            </h5>
          </div>

          <div className="row my-4">
            <div className="col-md-4">
              <div className="form-group">
                <input
                  type="file"
                  id="file"
                  name="resume"
                  onChange={(e) => setFile(e.target.files[0])}
                  required
                />
              </div>
            </div>
          </div>

          <div className="formsecname">
            <h5 className="font-weight-normal">Cover Letter</h5>
          </div>

          <div className="row my-4">
            <div className="col-md-8">
              <div className="form-group">
                <div className="tab1message">
                  <textarea
                    id="cover_letter"
                    rows="5"
                    cols="80"
                    className=" p-3 w-100"
                    type="text"
                    placeholder="Enter your comment"
                    name="cover_letter"
                    onChange={handleInputChange}
                    value={values.cover_letter}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div className="submitcv mt-5 text-center">
            <div className=" col-md-2 col-7 text-center my-3 ">
              <BlueBtn type="submit" title="Submit"></BlueBtn>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
