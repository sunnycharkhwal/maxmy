import React from "react";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import DropzoneDialogExample from "../components/dragdropfield";
import { Container } from "react-bootstrap";
import { OutlineBtn } from "../components/Btn";
import { TextAreaBox } from "../components/form";
import ENDPOINT from "../config/ENDPOINT";

export const GetintouchForm = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
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

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
    // console.log(e.target.files[0]);
  }

  const handleCreate = (e) => {
    e.preventDefault();
    console.log(file);
    try {
      const data = new FormData();
      data.append("img", file);
      Object.keys(values).forEach((key) => data.append(key, values[key]));

      axios
        .post(ENDPOINT + "contact", data)
        .then((res) => {
          if (res.status === 200) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "success",
              text: "Form Submitted Successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
        .catch((err) => {
          if (err.response.status === 401) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Error while submitted form!",
            });
          }
        });
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Server error!",
      });
      console.log("create contact error", err);
    }
  };
  return (
    <Container fluid style={{ backgroundColor: "#E7F3FF" }}>
      <Container className="py-3">
        <div className="row d-flex flex-column justify-content-center align-items-center ">
          <form
            onSubmit={handleCreate}
            method="post"
            encType="multipart/form-data"
          >
            <div className="col-6 my-4 signformstart text-center">
              <h1 className="signtitle">
                <span>Get In Touch</span>
              </h1>
            </div>
            <div className="col-md-8 col-md-offset-2 m-auto">
              <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                  <TextAreaBox
                    className="bg-white"
                    type="text"
                    label="Name"
                    name="name"
                    value={values.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                  <TextAreaBox
                    className="bg-white"
                    type="tel"
                    label="Phone"
                    name="phone"
                    value={values.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <TextAreaBox
                    className="bg-white"
                    type="email"
                    label="Email"
                    name="email"
                    value={values.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  {/* <div>
                    <DropzoneDialogExample setFile={setFile}/>
                  </div> */}

                    <input
                      type="file"
                      name="img"
                      onChange={handleFileChange}
                    />
                </div>

                <div className="col-xxl-4 mx-auto col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                  <OutlineBtn title="Get In Touch" icon="" type="submit" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </Container>
    </Container>
  );
};
