import React, { Component, useEffect } from "react";
import { useState, useRef } from "react";
import { AiOutlineCamera } from "react-icons/ai";
import { MdOutlineEdit } from "react-icons/md";
import { useSelector } from "react-redux";
import ENDPOINT from "../config/ENDPOINT";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
//
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { BsFillInfoCircleFill } from "react-icons/bs";

export const YourAccount = () => {
  // delete
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // delete end

  const user = useSelector((state) => state.state.user);
  const [loggedUser, setLoggedUser] = useState([]);
  const inputElement = useRef(null);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [values, setValues] = useState({
    fullname: "",
    phoneNumber: "",
    companyName: "",
    workingAddress: "",
    companyEmail: "",
    designation: "",
    URL: "",
  });
  const [file, setFile] = useState(null);
  const [form1disable, setForm1disable] = useState(true);
  const [form2disable, setForm2disable] = useState(true);

  const fetchUser = async () => {
    let res = await fetch(ENDPOINT + `user/user`, {
      headers: { "x-access-token": token },
    });
    let data = await res.json();
    setValues(data);
    setLoggedUser(data);
  };
  useEffect(() => {
    fetchUser();
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      data.append("pic", file);
      Object.keys(values).forEach((key) => data.append(key, values[key]));

      axios({
        url: ENDPOINT + `user/user/${loggedUser.id}`,
        method: "PUT",
        headers: { "x-access-token": token },
        data: data,
      })
        .then((res) => {
          if (res.status === 200) {
            // Swal.fire({
            //   position: "center",
            //   icon: "success",
            //   title: "success",
            //   text: "User updated Successfully",
            //   showConfirmButton: false,
            //   timer: 1500,
            // });
            navigate("/");
          }
        })
        .catch((err) => {
          // Swal.fire({
          //   icon: "error",
          //   title: "Oops...",
          //   text: "No user updated!",
          // });
        });
    } catch (err) {
      // Swal.fire({
      //   icon: "error",
      //   title: "Oops...",
      //   text: "Server error!",
      // });
      console.log("Update error", err);
    }
  };

  const UploadDocument = () => {
    // const handleFileUpload = (event) => {
    //   console.log(event.target.files[0].name);
    //   setValues((old) => {
    //     return { ...old, file: event.target.files[0] };
    //   });
    // };
    return (
      <>
        <input
          ref={inputElement}
          onChange={(e) => setFile(e.target.files[0])}
          type="file"
          style={{ display: "none" }}
          name="pic"
        />
        <div className="acount_img_inner_btn_div">
          <a
            className="acount_img_inner_btn"
            onClick={() => inputElement.current?.click()}
          >
            <div className="acount_img_inner">
              <AiOutlineCamera />
            </div>
          </a>
        </div>
      </>
    );
  };
  const Form = () => {
    const handleInputChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setValues({
        ...values,
        [name]: value,
      });
    };

    const FormData1 = [
      {
        formTitle: "Personal Information",
        input: [
          {
            label: "Name",
            inputType: "text",
            name: "fullname",
            defaultValue: values.fullname,
            onBlur: handleInputChange,
            disabled: form1disable,
          },
          {
            label: "Contact No.",
            inputType: "number",
            name: "phoneNumber",
            defaultValue: values.phoneNumber,
            onBlur: handleInputChange,
            disabled: form1disable,
          },
          {
            label: "Email ID",
            inputType: "email",
            disabled: true,
            defaultValue: values.email,
          },
          {
            label: "Designation",
            inputType: "text",
            name: "designation",
            defaultValue: values.designation,
            onBlur: handleInputChange,
            disabled: form1disable,
          },
        ],
      },
    ];

    const FormData2 = [
      {
        formTitle: "Business Information",
        input: [
          {
            label: "Company name",
            inputType: "text",
            name: "companyName",
            defaultValue: values.companyName,
            onBlur: handleInputChange,
            disabled: form2disable,
          },
          {
            label: "Address",
            inputType: "text",
            name: "workingAddress",
            defaultValue: values.workingAddress,
            onBlur: handleInputChange,
            disabled: form2disable,
          },
          {
            label: "Email ID",
            inputType: "email",
            name: "companyEmail",
            defaultValue: values.companyEmail,
            onBlur: handleInputChange,
            disabled: form2disable,
          },
          {
            label: "URL",
            inputType: "text",
            name: "URL",
            defaultValue: values.URL,
            onBlur: handleInputChange,
            disabled: form2disable,
          },
        ],
      },
    ];

    const FormApp1 = (props) => {
      return (
        <div className="account_input_title_top">
          <MdOutlineEdit
            title="Edit"
            onClick={() => setForm1disable(!form1disable)}
            className="account_edit_icon"
          />
          <div className="account_input_title">
            <h3>{props.formTitle}</h3>
          </div>
          <div className="account_input_title_top_inner">
            {props.input.map((val, i) => {
              return (
                <div key={i} className="row">
                  <div className="col-12">
                    <div className="form_input_div">
                      <div className="row">
                        <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12">
                          <label>{val.label}</label>
                        </div>
                        <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                          <input
                            type={val.inputType}
                            placeholder={val.placeholder}
                            name={val.name}
                            defaultValue={val.defaultValue}
                            onBlur={val.onBlur}
                            disabled={val.disabled}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 account_input_hr_div">
                    <hr />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    };
    const FormApp2 = (props) => {
      return (
        <div className="account_input_title_top">
          <MdOutlineEdit
            title="Edit"
            onClick={() => setForm2disable(!form2disable)}
            className="account_edit_icon"
          />
          <div className="account_input_title">
            <h3>{props.formTitle}</h3>
          </div>
          <div className="account_input_title_top_inner">
            {props.input.map((val, i) => {
              return (
                <div key={i} className="row">
                  <div className="col-12">
                    <div className="form_input_div">
                      <div className="row">
                        <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12">
                          <label>{val.label}</label>
                        </div>
                        <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                          <input
                            type={val.inputType}
                            placeholder={val.placeholder}
                            name={val.name}
                            defaultValue={val.defaultValue}
                            onBlur={val.onBlur}
                            disabled={val.disabled}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 account_input_hr_div">
                    <hr />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    };

    return (
      <>
        {FormData1.map((val, i) => {
          return <FormApp1 key={i} {...val} />;
        })}
        {FormData2.map((val, i) => {
          return <FormApp2 key={i} {...val} />;
        })}
      </>
    );
  };
  // delete
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
          <Box sx={style} className="delete_modal_my">
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
                    <button onClick={handleClose} className="outline_btn btn">
                      Cancel
                    </button>
                  </li>
                  <li className="btn_two">
                    <button className="btn full_btn ms-1">Delete</button>
                  </li>
                </ul>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    );
  };
  // delete end
  return (
    <>
      <section className=" container mb-5 mt-5">
        <DeleteModal />
        <div className="row g-3">
          <form
            onSubmit={handleUpdate}
            method="put"
            encType="multipart/form-data"
          >
            <div className="col-12">
              <div className="account_btn_div">
                <Link to="/">
                  <a className="btn outline_btn me-1">Cancel</a>
                </Link>
                <button className="btn full_btn ms-1" onClick={handleOpen}>
                  save
                </button>
              </div>
            </div>
            <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-12 col-12">
              <div
                className="acount_img"
                style={{
                  // backgroundImage: `url("https://source.unsplash.com/random/500x500/?girl,face")`,
                  backgroundImage: `url(${user.pic})`,
                }}
              >
                <UploadDocument />
              </div>
            </div>
            <div className="col-xxl-10 col-xl-10 col-lg-9 col-md-8 col-sm-12 col-12  acount_title_div">
              <div className="account_user_name_div">
                <h3>{user.fullname}</h3>
                <p>{user.email}</p>
              </div>
            </div>
            <div className="col-12">
              <Form />
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
