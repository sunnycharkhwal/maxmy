import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { OutlineBtn, BlueBtn } from "../components/Btn";
import HeaderLogo from "../../../img/HeaderLogo.svg";
import Modal from "react-bootstrap/Modal";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { TextAreaBox } from "../components/form";
import Swal from "sweetalert2";
import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";
import ENDPOINT from "../config/ENDPOINT";
import AccountMenu from "./AccountMenu";
import { handleExpiredUser } from "../HelperFunction/Helpers";
import { useDispatch, useSelector } from "react-redux";
import {
  setShowLoginModal,
  setUser,
  resetUser,
} from "../redux/modalStateSlice";
import { setShowSignUpModal } from "../redux/modalStateSlice";
import { setShowMenuModal } from "../redux/modalStateSlice";
import { setShowForgotModal } from "../redux/modalStateSlice";
import { setShowCheckYourEmailModal } from "../redux/modalStateSlice";
import { setShowPasswordResetModal } from "../redux/modalStateSlice";
import { setNewPasswordModal } from "../redux/modalStateSlice";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const showLoginModal = useSelector((state) => state.state.showLoginModal);
  const showSignUpModal = useSelector((state) => state.state.showSignUpModal);
  const showMenuModal = useSelector((state) => state.state.showMenuModal);
  const showForgotModal = useSelector((state) => state.state.showForgotModal);
  const showCheckYourEmailModal = useSelector(
    (state) => state.state.showCheckYourEmailModal
  );
  const showPasswordResetModal = useSelector(
    (state) => state.state.showPasswordResetModal
  );
  const showNewPasswordModal = useSelector(
    (state) => state.state.showNewPasswordModal
  );

  const user = useSelector((state) => state.state.user);
  const dispatch = useDispatch();

  ////////////////////// Sign Up Modal //////////////////////////////
  let token = localStorage.getItem("token");

  React.useEffect(() => {
    if (token) {
      try {
        axios
          .get(ENDPOINT + "local", {
            headers: {
              "x-access-token": token,
            },
          })
          .then((res) => {
            if (res.status === 200) {
              dispatch(setUser(res.data));
            }
          })
          .catch((err) => {
            if (err.response.status === 401) {
            } else if (err.response.status === 405) {
              handleExpiredUser();
              dispatch(resetUser());
            }
          });
      } catch (err) {
        console.log(err);
      }
    }
  }, [token]);

  const SignUpmodal = () => {
    const [values, setValues] = useState({
      fullname: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    // const templateParams = {
    //   to_name: values.fullname,
    //   from_name: "Maxlence team",
    //   to_email: values.email,
    //   message : "Thanks for registering on our website"
    // };

    // const sendMail = () => {
    //   emailjs
    //     .send(
    //       "service_7j5gb3l",
    //       "template_e1lw4xh",
    //       templateParams,
    //       "N75Wr8f2e4xB17KGn"
    //     )
    //     .then(
    //       (response) => {
    //         console.log("SUCCESS!", response.status, response.text);
    //       },
    //       (err) => {
    //         console.log("FAILED...", err);
    //       }
    //     );
    // };

    const handleCreate = (e) => {
      e.preventDefault();
      try {
        axios
          .post(ENDPOINT + "user/signup", values)
          .then((res) => {
            if (res.status === 200) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "success",
                text: "User created Successfully",
                showConfirmButton: false,
                timer: 1500,
              });
              // sendMail()
              dispatch(setShowLoginModal());
            }
          })
          .catch((err) => {
            if (err.response.status === 400) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Password doesn't match or Email already exists!",
              });
            } else if (err.response.status === 401) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "No User created",
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

    const handleInputChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;

      setValues({
        ...values,
        [name]: value,
      });
    };

    let user = localStorage.getItem("token");

    return (
      <>
        <AccountMenu />

        {token ? (
          <AccountMenu />
        ) : (
          <OutlineBtn
            title="Log In"
            icon=""
            // onClick={() => setShowLoginModal(true)}
            onClick={() => dispatch(setShowLoginModal())}
          />
        )}

        <Modal
          animation={true}
          className="signupmodal fullwidthmodal"
          show={showSignUpModal}
          onHide={() => dispatch(setShowSignUpModal())}
        >
          <Modal.Header closeButton>
            <Link
              to="/home"
              onClick={() => {
                dispatch(setShowSignUpModal());
              }}
            >
              <div className=" ">
                <img width="100" src={HeaderLogo} alt="companylogo" />
              </div>
            </Link>
          </Modal.Header>
          <Modal.Body className="p-0">
            <div className="row h-100">
              <div className="col-md-3 signleft">
                <div className="contact-info">
                  <h1 className="text-light">
                    Let’s Craft <br /> Brilliance
                  </h1>
                </div>
              </div>

              <div className="col-md-9 signright">
                <Container>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="row d-flex flex-column justify-content-center align-items-center ">
                        <div className="col-6 my-4 signformstart text-center">
                          <h1 className="signtitle">Sign Up</h1>
                        </div>
                        <div className="col-md-6">
                          <form onSubmit={handleCreate} method="post">
                            <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
                              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <TextAreaBox
                                  type="text"
                                  label="Full Name"
                                  name="fullname"
                                  value={values.fullname}
                                  onChange={handleInputChange}
                                  required
                                />
                              </div>
                              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <TextAreaBox
                                  type="email"
                                  label="Email"
                                  name="email"
                                  value={values.email}
                                  onChange={handleInputChange}
                                  required
                                />
                              </div>
                              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <TextAreaBox
                                  type="password"
                                  label="Password"
                                  name="password"
                                  value={values.password}
                                  onChange={handleInputChange}
                                  required
                                />
                              </div>
                              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <TextAreaBox
                                  type="password"
                                  label="Confirm Password"
                                  name="confirmPassword"
                                  value={values.confirmPassword}
                                  onChange={handleInputChange}
                                  required
                                />
                              </div>
                              <div className="col-xxl-4 mx-auto col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                <BlueBtn type="submit" title="Submit" />
                              </div>
                            </div>
                          </form>
                        </div>

                        <div className="text-center popuplink my-2">
                          <p>
                            Already have an account ? &nbsp;
                            <span
                              onClick={() => {
                                dispatch(setShowSignUpModal());
                                dispatch(setShowLoginModal());
                              }}
                            >
                              Login
                            </span>
                          </p>
                          <p>
                            <span>*</span> By clicking "Sign In", you agree to
                            Maxlence Consulting’s Terms of Service and Privacy
                            Policy
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Container>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  };
  ////////////////////// Login Modal //////////////////////////////

  const LoginModal = () => {
    const [values, setValues] = useState({
      email: "",
      password: "",
    });

    const handleCreate = (e) => {
      e.preventDefault();
      try {
        axios
          .post(ENDPOINT + "user/login", values)
          .then((res) => {
            if (res.status === 200) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "success",
                text: "Login Successfull",
                showConfirmButton: false,
                timer: 1500,
              });
              dispatch(setShowLoginModal());
              localStorage.setItem("token", res.data.token);
              localStorage.setItem("user", JSON.stringify(res.data.user));
            }
          })
          .catch((err) => {
            if (err.response.status === 400) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Wrong Password!",
              });
            } else if (err.response.status === 404) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "No User found",
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

    const handleInputChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;

      setValues({
        ...values,
        [name]: value,
      });
    };

    const handleCredentialResponse = async (response) => {
      const token = response.credential;

      var urlencoded = new URLSearchParams();
      urlencoded.append("token", token);

      let headers = new Headers();
      headers.append("Content-Type", "application/x-www-form-urlencoded");

      try {
        axios({
          url: ENDPOINT + "auth/google/login",
          method: "POST",
          headers,
          data: urlencoded,
        })
          .then((res) => {
            if (res.status === 200 || res.status === 201) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "success",
                text: "Login Successfull",
                showConfirmButton: false,
                timer: 1500,
              });
              localStorage.setItem("token", res.data.token);
              localStorage.setItem("user", JSON.stringify(res.data.user));
              window.location.reload();
            }
          })
          .catch((err) => {
            if (err.response.status === 401) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Error while creating new User!!",
              });
            } else if (err.response.status === 500) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Server Error!",
              });
            }
          });
      } catch (err) {
        console.log("Error logging in: " + err);
      }
    };

    useEffect(() => {
      window.google?.accounts?.id.initialize({
        client_id:
          "964224499636-4cc1a1pgi20iu1aghba4rk4435m6qfn1.apps.googleusercontent.com",
        callback: handleCredentialResponse,
      });
      window.google?.accounts?.id.renderButton(
        document.querySelector(".googleicon"),
        {
          theme: "outline",
          size: "large",
        }
      );
      if (!token) window.google?.accounts?.id.prompt();
    }, []);

    const handleFbResponse = async (res) => {
      const token = res.data.accessToken;

      var form = new URLSearchParams();
      form.append("token", token);

      let headers = new Headers();
      headers.append("Content-Type", "application/x-www-form-urlencoded");

      try {
        axios({
          url: ENDPOINT + "auth/facebook/login",
          method: "POST",
          headers,
          data: form,
        })
          .then((res) => {
            if (res.status === 200 || res.status === 201) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "success",
                text: "Login Successfull",
                showConfirmButton: false,
                timer: 1500,
              });
              localStorage.setItem("token", res.data.token);
              localStorage.setItem("user", JSON.stringify(res.data.user));
              dispatch(setShowLoginModal());
            }
          })
          .catch((err) => {
            if (err.response.status === 401) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Error while creating new User!!",
              });
            } else if (err.response.status === 500) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Server Error!",
              });
            }
          });
      } catch (err) {
        console.log("Error logging in: " + err);
      }
    };

    return (
      <>
        <Modal
          className="loginmodal fullwidthmodal"
          show={showLoginModal}
          onHide={() => dispatch(setShowLoginModal())}
        >
          <Modal.Header closeButton>
            <Link to="/home">
              <div className="logo">
                <img width="100" src={HeaderLogo} alt="companylogo" />
              </div>
            </Link>
          </Modal.Header>
          <Modal.Body className="p-0">
            <div className="row h-100">
              <div className="col-md-3 loginleft">
                <div className="contact-info">
                  <h1 className="text-light text-center">
                    Let’s Craft Brilliance
                  </h1>
                </div>
              </div>

              <div className="col-md-9 loginright">
                <Container>
                  <div className="row">
                    <div className="col-md-12">
                      <form onSubmit={handleCreate} method="post">
                        <div className="row d-flex flex-column justify-content-center align-items-center ">
                          <div className="col-6 my-4 signformstart text-center">
                            <h1 className="signtitle">Log In</h1>
                          </div>
                          <div className="col-md-6">
                            <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
                              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <TextAreaBox
                                  type="email"
                                  label="Email"
                                  name="email"
                                  value={values.email}
                                  onChange={handleInputChange}
                                  required
                                />
                              </div>
                              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <TextAreaBox
                                  type="password"
                                  label="Password"
                                  name="password"
                                  value={values.password}
                                  onChange={handleInputChange}
                                  required
                                />
                              </div>

                              <div className="col-xxl-4 mx-auto col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                <BlueBtn title="Login" />
                              </div>
                            </div>
                          </div>

                          <div className="text-center popuplink my-2">
                            <p>
                              Don't have an account ? &nbsp;
                              <span
                                onClick={() => {
                                  dispatch(setShowLoginModal());
                                  dispatch(setShowSignUpModal());
                                }}
                              >
                                Sign Up
                              </span>
                            </p>
                            <div className="googleicon d-flex justify-content-center my-2" />
                            <div className="fbicon d-flex justify-content-center my-2">
                              <LoginSocialFacebook
                                isOnlyGetToken
                                appId="3789647204595344"
                                onResolve={handleFbResponse}
                                onReject={(err) => {
                                  console.log(err);
                                }}
                              >
                                <FacebookLoginButton />
                              </LoginSocialFacebook>
                            </div>
                            <p>
                              <span>Forget Password</span>
                            </p>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </Container>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  };
  //////////////////////  Forgot Modal //////////////////////////////
  const ForgotModal = () => {
    return (
      <>
        <Modal
          animation={true}
          className="signupmodal fullwidthmodal"
          show={showForgotModal}
          onHide={() => dispatch(setShowForgotModal())}
        >
          <Modal.Header closeButton>
            <Link
              to="/home"
              onClick={() => {
                dispatch(setShowForgotModal());
              }}
            >
              <div className=" ">
                <img width="100" src={HeaderLogo} alt="companylogo" />
              </div>
            </Link>
          </Modal.Header>
          <Modal.Body className="p-0">
            <div className="row h-100">
              <div className="col-md-3 signleft">
                <div className="contact-info">
                  <h1 className="text-light">
                    Let’s Craft <br /> Brilliance
                  </h1>
                </div>
              </div>

              <div className="col-md-9 signright">
                <Container>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="row d-flex flex-column justify-content-center align-items-center ">
                        <div className="col-6 my-4 signformstart text-center">
                          <h1 className="signtitle">Forgot Password?</h1>
                          <p>No worries, we’ll send you reset instructions.</p>
                        </div>
                        <div className="col-md-6">
                          <form method="post">
                            <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
                              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <TextAreaBox
                                  type="email"
                                  label="Email"
                                  name="Email"
                                  // required
                                />
                              </div>
                              <div className="col-xxl-5 mx-auto col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12">
                                <BlueBtn
                                  onClick={() => {
                                    dispatch(setShowForgotModal());
                                    dispatch(setShowCheckYourEmailModal());
                                  }}
                                  type="submit"
                                  title="Reset Password"
                                />
                              </div>
                            </div>
                          </form>
                        </div>

                        <div className="text-center popuplink my-2">
                          <p>
                            &nbsp;
                            <span
                              onClick={() => {
                                dispatch(setShowForgotModal());
                                dispatch(setShowLoginModal());
                              }}
                            >
                              Back to login
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Container>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  };
  ////////////////////// Check Your Email Modal //////////////////////////////
  const CheckYourEmailModal = () => {
    return (
      <>
        <Modal
          animation={true}
          className="signupmodal fullwidthmodal"
          show={showCheckYourEmailModal}
          onHide={() => dispatch(setShowCheckYourEmailModal())}
        >
          <Modal.Header closeButton>
            <Link
              to="/home"
              onClick={() => {
                dispatch(setShowCheckYourEmailModal());
              }}
            >
              <div className=" ">
                <img width="100" src={HeaderLogo} alt="companylogo" />
              </div>
            </Link>
          </Modal.Header>
          <Modal.Body className="p-0">
            <div className="row h-100">
              <div className="col-md-3 signleft">
                <div className="contact-info">
                  <h1 className="text-light">
                    Let’s Craft <br /> Brilliance
                  </h1>
                </div>
              </div>

              <div className="col-md-9 signright">
                <Container>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="row d-flex flex-column justify-content-center align-items-center ">
                        <div className="col-6 my-4 signformstart text-center">
                          <h1 className="signtitle">Check your email</h1>
                          <p>
                            We sent a password reset link to
                            akhilesh@maxlence.com.au
                          </p>
                        </div>
                        <div className="col-md-6">
                          <form method="post">
                            <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
                              <div className="col-xxl-5 mx-auto col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12">
                                <BlueBtn
                                  onClick={() => {
                                    dispatch(setShowCheckYourEmailModal());
                                    dispatch(setNewPasswordModal());
                                  }}
                                  type="submit"
                                  title="Open Email"
                                />
                              </div>
                            </div>
                          </form>
                        </div>

                        <div className="text-center popuplink my-2">
                          <p>
                            Didn't receive the email?
                            <span
                              onClick={() => {
                                dispatch(setShowCheckYourEmailModal());
                                dispatch(setShowPasswordResetModal());
                              }}
                            >
                              Resend
                            </span>
                            <br />
                            <span
                              onClick={() => {
                                dispatch(setShowCheckYourEmailModal());
                                dispatch(setShowLoginModal());
                              }}
                            >
                              Back to login
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Container>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  };
  ////////////////////// Password Reset Modal //////////////////////////////
  const PasswordResetModal = () => {
    return (
      <>
        <Modal
          animation={true}
          className="signupmodal fullwidthmodal"
          show={showPasswordResetModal}
          onHide={() => dispatch(setShowPasswordResetModal())}
        >
          <Modal.Header closeButton>
            <Link
              to="/home"
              onClick={() => {
                dispatch(setShowPasswordResetModal());
              }}
            >
              <div className=" ">
                <img width="100" src={HeaderLogo} alt="companylogo" />
              </div>
            </Link>
          </Modal.Header>
          <Modal.Body className="p-0">
            <div className="row h-100">
              <div className="col-md-3 signleft">
                <div className="contact-info">
                  <h1 className="text-light">
                    Let’s Craft <br /> Brilliance
                  </h1>
                </div>
              </div>

              <div className="col-md-9 signright">
                <Container>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="row d-flex flex-column justify-content-center align-items-center ">
                        <div className="col-6 my-4 signformstart text-center">
                          <h1 className="signtitle">Password Reset</h1>
                          <p className="mb-0">
                            Your password has been successfully reset.
                          </p>
                          <p>Click below to login.</p>
                        </div>
                        <div className="col-md-6">
                          <form method="post">
                            <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
                              <div className="col-xxl-5 mx-auto col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12">
                                <BlueBtn type="submit" title="Open Email" />
                              </div>
                            </div>
                          </form>
                        </div>

                        <div className="text-center popuplink my-2">
                          <p>
                            <span
                              onClick={() => {
                                dispatch(setShowPasswordResetModal());
                                dispatch(setShowLoginModal());
                              }}
                            >
                              Back to login
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Container>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  };
  //////////////////////  Set New Password Modal //////////////////////////////
  const SetNewPasswordModal = () => {
    return (
      <>
        <Modal
          animation={true}
          className="signupmodal fullwidthmodal"
          show={showNewPasswordModal}
          onHide={() => dispatch(setNewPasswordModal())}
        >
          <Modal.Header closeButton>
            <Link
              to="/home"
              onClick={() => {
                dispatch(setNewPasswordModal());
              }}
            >
              <div className=" ">
                <img width="100" src={HeaderLogo} alt="companylogo" />
              </div>
            </Link>
          </Modal.Header>
          <Modal.Body className="p-0">
            <div className="row h-100">
              <div className="col-md-3 signleft">
                <div className="contact-info">
                  <h1 className="text-light">
                    Let’s Craft <br /> Brilliance
                  </h1>
                </div>
              </div>

              <div className="col-md-9 signright">
                <Container>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="row d-flex flex-column justify-content-center align-items-center ">
                        <div className="col-6 my-4 signformstart text-center">
                          <h1 className="signtitle">Set New Password</h1>
                          <p>
                            We sent a password reset link to
                            akhilesh@maxlence.com.au
                          </p>
                        </div>
                        <div className="col-md-6">
                          <form method="post">
                            <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
                              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <TextAreaBox
                                  type="password"
                                  label="Password"
                                  name="Email"
                                  // required
                                />
                              </div>
                              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <TextAreaBox
                                  type="password"
                                  label="Confirm Password"
                                  name="Email"
                                  // required
                                />
                              </div>
                              <div className="col-xxl-5 mx-auto col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12">
                                <BlueBtn type="submit" title="Reset Password" />
                              </div>
                            </div>
                          </form>
                        </div>

                        <div className="text-center popuplink my-2">
                          <p>
                            &nbsp;
                            <span
                              onClick={() => {
                                dispatch(setNewPasswordModal());
                                dispatch(setShowLoginModal());
                              }}
                            >
                              Back to login
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Container>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  };
  ////////////////////// Menu Modal //////////////////////////////
  const MenuModal = () => {
    const navigate = useNavigate();
    return (
      <>
        <HiOutlineMenuAlt2
          className="mx-2"
          style={{ width: "2rem" }}
          onClick={() => dispatch(setShowMenuModal())}
        />
        <Modal
          className="menumodal fullwidthmodal"
          show={showMenuModal}
          onHide={() => dispatch(setShowMenuModal())}
        >
          <Modal.Header closeButton className="border-0"></Modal.Header>
          <Modal.Body className="p-0">
            <div className="row h-100 align-items-center">
              <div className="col-md-6 menuleft">
                <div className="menulinks">
                  <Nav
                    className="ms-auto my-2 my-lg-0 align-items-center"
                    navbarScroll
                  >
                    <Nav.Link
                      onClick={() => {
                        dispatch(setShowMenuModal());
                        navigate("/creation");
                      }}
                    >
                      Creation
                    </Nav.Link>
                    <Nav.Link
                      onClick={() => {
                        dispatch(setShowMenuModal());
                        navigate("/growth");
                      }}
                    >
                      Growth
                    </Nav.Link>
                    <Nav.Link
                      onClick={() => {
                        dispatch(setShowMenuModal());
                        navigate("/design");
                      }}
                    >
                      Design
                    </Nav.Link>
                    <NavDropdown title="Business" id="navbarScrollingDropdown">
                      <NavDropdown.Item
                        onClick={() => {
                          dispatch(setShowMenuModal());
                          navigate("/business1");
                        }}
                      >
                        Business1
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        onClick={() => {
                          dispatch(setShowMenuModal());
                          navigate("/business2");
                        }}
                      >
                        Business 2
                      </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Resources" id="navbarScrollingDropdown">
                      <NavDropdown.Item
                        onClick={() => {
                          dispatch(setShowMenuModal());
                          navigate("/design_inspiration");
                        }}
                      >
                        Design Inspiration
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        onClick={() => {
                          dispatch(setShowMenuModal());
                          navigate("/brochure");
                        }}
                      >
                        Brochure
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        onClick={() => {
                          dispatch(setShowMenuModal());
                          navigate("/case_study");
                        }}
                      >
                        Case Study
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        onClick={() => {
                          dispatch(setShowMenuModal());
                          navigate("/blogs");
                        }}
                      >
                        Blogs
                      </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown
                      title="Enterprise"
                      id="navbarScrollingDropdown"
                    >
                      <NavDropdown.Item
                        onClick={() => {
                          dispatch(setShowMenuModal());
                          navigate("/Seo_service");
                        }}
                      >
                        SEO Service
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        onClick={() => {
                          dispatch(setShowMenuModal());
                          navigate("/google_ads_service");
                        }}
                      >
                        Google Ads Service
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        onClick={() => {
                          dispatch(setShowMenuModal());
                          navigate("/social_media_service");
                        }}
                      >
                        Social Media Service
                      </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link
                      onClick={() => {
                        dispatch(setShowMenuModal());
                        navigate("/shop");
                      }}
                    >
                      Shop
                    </Nav.Link>
                    <NavDropdown title="Solutions" id="navbarScrollingDropdown">
                      <NavDropdown.Item
                        onClick={() => {
                          dispatch(setShowMenuModal());
                          navigate("/api_integration");
                        }}
                      >
                        API Integration
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        onClick={() => {
                          dispatch(setShowMenuModal());
                          navigate("/form_tracker");
                        }}
                      >
                        Form Tracker
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        onClick={() => {
                          dispatch(setShowMenuModal());
                          navigate("/review_tracker");
                        }}
                      >
                        Review Tracker
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        onClick={() => {
                          dispatch(setShowMenuModal());
                          navigate("/agencies");
                        }}
                      >
                        Agencies
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </div>
              </div>

              <div className="col-md-6 menuright">
                <Container>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="row d-flex flex-column justify-content-center align-items-center ">
                        <div className="col-md-8 col-sm-12 col-12 my-4 signformstart text-center">
                          <h1 className="mobile_nav_div_text">
                            We’d love to be your partner
                          </h1>
                        </div>
                        <div className="col-12 mobile_nav_div">
                          <button
                            onClick={() => {
                              dispatch(setShowMenuModal());
                              navigate("/getintouch");
                            }}
                            className=" getstartbtn"
                          >
                            Get In Touch
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Container>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  };
  const navigate = useNavigate();
  return (
    <Container
      fluid
      bg="light"
      className="navbarmain  px-xl-5  px-lg-3 px-md-5 "
    >
      <Navbar expand="lg">
        <Navbar.Brand className=" col-md-2 col-5 col-sm-2 col-md-3 col-lg-2 col-xl-2 m-0 ">
          <NavLink to="/">
            <img width="100%" src={HeaderLogo} alt="companylogo" />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-3 w-100 justify-content-around my-2 my-lg-0 align-items-center"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link onClick={() => navigate("/creation")}>Creation</Nav.Link>
            <Nav.Link onClick={() => navigate("/growth")}>Growth</Nav.Link>
            <Nav.Link onClick={() => navigate("/design")}>Design</Nav.Link>
            <NavDropdown title="Business" id="navbarScrollingDropdown">
              <NavDropdown.Item onClick={() => navigate("/business1")}>
                Business1
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/business2")}>
                Business 2
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Resources" id="navbarScrollingDropdown">
              <NavDropdown.Item onClick={() => navigate("/design_inspiration")}>
                Design Inspiration
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/brochure")}>
                Brochure
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/case_study")}>
                Case Study
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/blogs")}>
                Blogs
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Enterprise" id="navbarScrollingDropdown">
              <NavDropdown.Item onClick={() => navigate("/Seo_service")}>
                SEO Service
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/google_ads_service")}>
                Google Ads Service
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => navigate("/social_media_service")}
              >
                Social Media Service
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link onClick={() => navigate("/shop")}>Shop</Nav.Link>
            <NavDropdown title="Solutions" id="navbarScrollingDropdown">
              <NavDropdown.Item onClick={() => navigate("/api_integration")}>
                API Integration
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/form_tracker")}>
                Form Tracker
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/review_tracker")}>
                Review Tracker
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/agencies")}>
                Agencies
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Nav className="d-flex flex-row align-items-center justify-content-around">
          <SignUpmodal />
          <span className=" d-block d-xxl-none d-xl-none d-lg-none">
            <MenuModal />
          </span>
          <LoginModal />
          <ForgotModal />
          <CheckYourEmailModal />
          <PasswordResetModal />
          <SetNewPasswordModal />
        </Nav>
      </Navbar>
    </Container>
  );
};
